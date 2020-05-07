<?php

namespace App\Http\Controllers;

use App\Course;
use App\Category;
use App\CourseProgress;
use App\CourseRating;
use App\CourseReview;
use App\Http\Resources\ManageCoursesResource;
use App\Http\Resources\ManageCourseDetails1Resource;
use App\Http\Resources\CategoriesResource;
use App\Http\Resources\MyCoursesResource;
use App\Http\Resources\MyCPDCoursesResource;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

use Carbon\Carbon;

class CourseController extends Controller
{
  public function index()
  {
    $data = [
      'category_courses' => Category::with('course')->get()->toArray(),
    ];
    return response()->json($data);
  }

  public function overview()
  {
    return new ManageCoursesResource(Course::with('category')->orderBy('name')->get());
  }

  public function getname($id)
  {
    return ['course' => Course::select('name')->where('id', $id)->get()];
  }

  public function courselist()
  {
    return new CategoriesResource(Category::get());
  }

  public function getMyCourses()
  {
    $uid = Auth::id();
    $data = [
      'completed' => new MyCoursesResource(Course::whereHas('courseprogress', function ($q) use ($uid) {
        $q->where('state_id', '=', 2)->where('user_id', '=', $uid);
      })->get()),
      'inprogress' => new MyCoursesResource(Course::whereHas('courseprogress', function ($q) use ($uid) {
        $q->where('state_id', '=', 1)->where('user_id', '=', $uid);
      })->get()),
      'shortlisted' => new MyCoursesResource(Course::whereHas('courseprogress', function ($q) use ($uid) {
        $q->where('state_id', '=', 3)->where('user_id', '=', $uid);
      })->get()),
    ];
    return $data;
  }

  public function getMyCPD()
  {
    $uid = Auth::id();
    $data = [
      'mycpd' => new MyCPDCoursesResource(Course::whereHas('courseprogress', function ($q) use ($uid) {
        $q->where('user_id', '=', $uid)->orderBy('completed_date');
      })->get()),
    ];
    return $data;
  }

  public function updateMyCPD(Request $request)
  {
    $uid = Auth::id();
    $course = Course::find($request->get('id'));
    $progress = CourseProgress::where('user_id', $uid)->where('course_id', $request->get('id'))->first();
    $rating = CourseRating::withTrashed()->where('user_id', $uid)->where('course_id', $request->get('id'))->first();
    $review = CourseReview::withTrashed()->where('user_id', $uid)->where('course_id', $request->get('id'))->first();
    if ($course) {
      if ($progress) {
        $progress->state_id = $request->get('myprogress');
        $progress->start_date = $request->get('start_date');
        $progress->completed_date = $request->get('completed_date');
        $progress->touch();
        $progress->save();
      } else {
      }
      if ($rating) {
        $rating->rating = $request->get('myrating');
        $rating->touch();
        $rating->save();
      } else {
        if ($request->get('myrating')) {
          $myrating = CourseRating::create([
            'course_id'      => $course->id,
            'user_id'        => Auth::id(),
            'rating' => $request->get('myrating'),
          ]);
        }
      }
      if ($review) {
        if (!$request->get('myreview')) {
          $review->delete();
        } else {
          $review->review = $request->get('myreview');
          $review->public = $request->get('myreviewpublic') || false;
          $review->deleted_at = null;
          $review->touch();
          $review->save();
        }
      } else {
        if ($request->get('myreview')) {
          $myreview = CourseReview::create([
            'course_id'      => $course->id,
            'user_id'        => Auth::id(),
            'review' => $request->get('myreview'),
            'public' => $request->get('myreviewpublic'),
            'deleted_at' => null,
          ]);
        }
      }
      return response('CPD Record Updated', Response::HTTP_OK);
    } else {
      $course = Course::create([
        'name' => $request->get('name'),
        'slug' => $request->get('name'),
        'description' => 'MyCPD Entry',
        'access_details' => 'MyCPD Entry',
        'viewcounter' => 0,
        'cost' => 'MyCPD Entry',
        'length' => 'MyCPD Entry',
        'startdate' => now(),
        'enddate' => now(),
        'active' => 0,
        'type' => 'MyCPD',
      ]);
      if ($request->get('completed_date')) {
        $state_id = 2;
        $start_date = $request->get('start_date');
        $completed_date = $request->get('completed_date');
      } elseif ($request->get('start_date')) {
        $state_id = 1;
        $start_date = $request->get('start_date');
      } else {
        $state_id = 3;
      }
      $myprogress = CourseProgress::create([
        'course_id'      => $course->id,
        'user_id'        => Auth::id(),
        'state_id'       => $state_id,
        'start_date'     => $request->get('start_date'),
        'completed_date' => $request->get('completed_date'),
      ]);
      if ($request->get('myrating')) {
        $myrating = CourseRating::create([
          'course_id'      => $course->id,
          'user_id'        => Auth::id(),
          'rating' => $request->get('myrating'),
        ]);
      }
      if ($request->get('myreview')) {
        $myreview = CourseReview::create([
          'course_id'      => $course->id,
          'user_id'        => Auth::id(),
          'review' => $request->get('myreview'),
          'public' => $request->get('myreviewpublic'),
        ]);
      }
      return response('CPD Record Create', Response::HTTP_OK);
    }
  }

  public function addToMyCourses($course_id, $state_id)
  {
    $mycourse = CourseProgress::where('course_id', $course_id)->where('user_id', Auth::id())->first();
    if ($mycourse) {
      if ($state_id == 1) {
        $mycourse->start_date = now();
        $mycourse->completed_date = null;
      }
      if ($state_id == 2) {
        $mycourse->completed_date = now();
      }
      if ($state_id == 3) {
        $mycourse->start_date = null;
        $mycourse->completed_date = null;
      }
      $mycourse->state_id = $state_id;
      $mycourse->touch();
      $mycourse->save();
    } else {
      if ($state_id == 1) {
        $mycourse = CourseProgress::create([
          'course_id'      => $course_id,
          'user_id'        => Auth::id(),
          'state_id'       => $state_id,
          'start_date'     => now(),
          'completed_date' => null,
        ]);
      }
      if ($state_id == 2) {
        $mycourse = CourseProgress::create([
          'course_id'      => $course_id,
          'user_id'        => Auth::id(),
          'state_id'       => $state_id,
          'start_date'     => now(),
          'completed_date' => now(),
        ]);
      }
      if ($state_id == 3) {
        $mycourse = CourseProgress::create([
          'course_id'      => $course_id,
          'user_id'        => Auth::id(),
          'state_id'       => $state_id,
          'start_date'     => null,
          'completed_date' => null,
        ]);
      }
    }
    return response(null, Response::HTTP_OK);
  }

  public function deleteFromMyCourses($course_id)
  {
    $myprogress = CourseProgress::where('course_id', $course_id)->where('user_id', Auth::id())->first();
    if ($myprogress) {
      $myprogress->delete();
    }
    $myrating = CourseRating::where('course_id', $course_id)->where('user_id', Auth::id())->first();
    if ($myrating) {
      $myrating->delete();
    }
    return response(null, Response::HTTP_OK);
  }

  public function updateViewCounter($id)
  {
    $course = Course::where('id', $id)->first();
    $viewCounter = $course->viewcounter + 1;
    $course->viewcounter = $viewCounter;
    $course->touch();
    $course->save();
  }

  public function addRating($course_id, $rating)
  {
    $oldrating = CourseRating::withTrashed()->where('course_id', $course_id)->where('user_id', Auth::id())->first();

    if ($oldrating) {
      if ($oldrating->rating == $rating) {
        $oldrating->delete();
        return response("Rating Removed", Response::HTTP_OK);
      } else {
        $oldrating->rating = $rating;
        $oldrating->deleted_at = null;
        $oldrating->touch();
        $oldrating->save();
        return response("Your Rating has been updated", Response::HTTP_OK);
      }
    } else {
      $newrating = CourseRating::create([
        'course_id'   => $course_id,
        'user_id'     => Auth::id(),
        'rating'    => $rating,
      ]);
      return response("Your Rating has been recorded", Response::HTTP_OK);
    }
  }

  public function details($course)
  {
    return new ManageCourseDetails1Resource(Course::where('id', $course)->get());
  }

  public function savecourse(Request $request)
  {
    $message = 'Course Added Successfully';

    // CHECK IF THE COURSE EXISTS AND UPDATE FIELDS
    $course = Course::where('id', $request->get('id'))->first();

    if ($course) {
      // UPDATE FIELDS BASED ON $request type
      // SUGGSETED COURSES HAVE SUGGESTED FIELDS ETC
      if ($request->get('type') === 'active' && $course->type === 'suggested') {
        $course->type = $request->get('type');
        $course->approved_by = Auth::user()->name;
        $course->approved_date = now();
        $message = 'Suggested Course Approved by ' . Auth::user()->name;
      }
      if ($request->get('type') === 'suggested' && $course->type === 'suggested') {
        $message = 'Suggested Course Details Updated by ' . Auth::user()->name;
      }
      if ($request->get('type') === 'inactive' && $course->type === 'active') {
        $message = 'Course set to INACTIVE by ' . Auth::user()->name;
      }
      if ($request->get('type') === 'active' && $course->type === 'inactive') {
        $message = 'Course set to ACTIVE by ' . Auth::user()->name;
      }

      // UPDATE COMMON COURSE FIELDS
      $course->name = $request->get('name');
      $course->description = $request->get('description');
      $course->access_details = $request->get('access_details');
      $course->cost = $request->get('cost');
      $course->active = $request->get('active');
      $course->viewcounter = $request->get('viewcounter');
      $course->startdate = $request->get('startdate');
      $course->enddate = $request->get('enddate');
      $course->type = $request->get('type');
      $course->touch();
      $course->save();

      $course->category()->detach();
      if ($request->get('category')) {
        foreach ($request->get('category') as $category_id) {
          $course->category()->attach($category_id);
        }
      }

      return response($message, Response::HTTP_OK);
    } else {
      // CREATE NEW COURSE
      // IF SUGGESTED SET SUGGESTED FIELDS AND LEAVE APPROVED FIELDS null
      if ($request->get('type') === 'suggested') {
        $course = Course::create([
          'name' => $request->get('name'),
          'slug' => $request->get('name'),
          'description' => $request->get('description'),
          'access_details' => $request->get('access_details'),
          'viewcounter' => 0,
          'cost' => $request->get('cost'),
          'length' => $request->get('length'),
          'startdate' => $request->get('startdate'),
          'enddate' => $request->get('enddate'),
          'active' => $request->get('active'),
          'type' => $request->get('type'),
          'suggested_by' => Auth::user()->name,
          'suggested_date' => now(),
        ]);

        $course->category()->detach();
        if (!empty($request->get('category'))) {
          foreach ($request->get('category') as $category_id) {
            $course->category()->attach($category_id);
          }
        }

        return response('Suggested Course Submitted Successfully', Response::HTTP_OK);
      } else {
        $approved_by = null;
        $approved_date = null;
        // IF NOT SUGGESTED CREATE A NEW ACTIVE || INACTIVE COURSE
        if ($request->get('type') === 'active') {
          $approved_by = Auth::user()->name;
          $approved_date = now();
        }
        $course = Course::create([
          'name' => $request->get('name'),
          'slug' => $request->get('name'),
          'description' => $request->get('description'),
          'access_details' => $request->get('access_details'),
          'viewcounter' => 0,
          'cost' => $request->get('cost'),
          'length' => $request->get('length'),
          'startdate' => $request->get('startdate'),
          'enddate' => $request->get('enddate'),
          'active' => $request->get('active'),
          'type' => $request->get('type'),
          'approved_by' => $approved_by,
          'approved_date' => $approved_date,
        ]);

        $course->category()->detach();
        if (!empty($request->get('category'))) {
          foreach ($request->get('category') as $category_id) {
            $course->category()->attach($category_id);
          }
        }

        return response('Suggested Course Added Successfully', Response::HTTP_OK);
      }
    }
    return response('This should not be here', Response::HTTP_OK);
  }

  public function deleteCourse($id)
  {
    $course = Course::find($id);
    if ($course) {
      $course->delete();
    }

    return response('Course Deleted Successfully', Response::HTTP_OK);
  }
}
