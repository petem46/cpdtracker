<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Course;
use App\Category;
use App\CourseProgress;
use App\CourseRating;
use App\CourseReview;
use App\CPDCertificate;
use App\User;
use App\Http\Resources\ManageCoursesResource;
use App\Http\Resources\ManageCourseDetails1Resource;
use App\Http\Resources\CategoriesResource;
use App\Http\Resources\CoursesResource;
use App\Http\Resources\MyCoursesResource;
use App\Http\Resources\UserCPDDetailsResource;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;


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

  public function getAllCPDCompletionData($school)
  {
    $school = Auth::user()->school;
    // if($school == 'FCAT') {$school = '';}
    $cpdCompletionData = [
      'cpdCompletionData' => DB::table('courses as c')
                  ->select('c.name as coursename', 'u.name as staffname', 'u.school as school', 'state', 'start_date', 'completed_date')
                  ->leftJoin('course_progress as cp', 'c.id', '=', 'cp.course_id')
                  ->leftJoin('coursestates as cs', 'cp.state_id', '=', 'cs.id')
                  ->leftJoin('users as u', 'u.id', '=', 'cp.user_id')
                  ->where('u.school', 'LIKE', $school)
                  ->whereNull('c.deleted_at')
                  ->orderBy('c.name')
                  ->get(),
    ];
    return $cpdCompletionData;
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

  public function getUserCPD($uid)
  {
    if (Auth::user()->role_id != 1) {
      $uid = Auth::id();
    }
    $data = [
      'mycpd' => new UserCPDDetailsResource(User::where('id', $uid)->get(), $uid),
    ];
    return $data;
  }

  public function getMyCPD()
  {
    $uid = Auth::id();
    $data = [
      'mycpd' => new UserCPDDetailsResource(User::where('id', $uid)->get(), $uid),
    ];
    return $data;
  }

  public function updateMyCPD(Request $request)
  {
    $uid = $request->get('uid');
    if (!$uid) {
      $uid = Auth::id();
    }
    $course = Course::find($request->get('id'));
    $progress = CourseProgress::where('user_id', $uid)->where('course_id', $request->get('id'))->first();
    $rating = CourseRating::withTrashed()->where('user_id', $uid)->where('course_id', $request->get('id'))->first();
    $review = CourseReview::withTrashed()->where('user_id', $uid)->where('course_id', $request->get('id'))->first();
    if ($course) {
      $course->name = $request->get('name');
      $course->description = $request->get('description');
      $course->touch();
      $course->save();
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
            'user_id'        => $uid,
            'rating' => $request->get('myrating'),
          ]);
        }
      }
      if ($review) {
        if (!$request->get('myreview')) {
          $review->delete();
        } else {
          $review->review = $request->get('myreview');
          $review->public = $request->get('myreviewpublic');
          $review->deleted_at = null;
          $review->touch();
          $review->save();
        }
      } else {
        if ($request->get('myreview')) {
          $myreview = CourseReview::create([
            'course_id'      => $course->id,
            'user_id'        => $uid,
            'review' => $request->get('myreview'),
            'public' => $request->get('myreviewpublic'),
            'deleted_at' => null,
          ]);
        }
      }
      return $data = ['response' => response('CPD Record Updated', Response::HTTP_OK), 'course_id' => $course->id];
    } else {
      $newcourse = Course::create([
        'name' => $request->get('name'),
        'slug' => $request->get('name'),
        'description' => $request->get('description'),
        'access_details' => 'MyCPD Entry',
        'viewcounter' => 0,
        'cost' => -1,
        'length' => -1,
        'startdate' => Carbon::now()->toDateTimeString(),
        'enddate' => Carbon::now()->toDateTimeString(),
        'active' => 0,
        'type' => 'MyCPD',
        'suggested_by' => $request->get('username'),
        'suggested_date' => Carbon::now()->toDateTimeString(),
        'approved_by' => $request->get('username'),
        'approved_date' => Carbon::now()->toDateTimeString(),
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
        'course_id'      => $newcourse->id,
        'user_id'        => $uid,
        'state_id'       => $state_id,
        'start_date'     => $request->get('start_date'),
        'completed_date' => $request->get('completed_date'),
      ]);
      if ($request->get('myrating')) {
        $myrating = CourseRating::create([
          'course_id'      => $newcourse->id,
          'user_id'        => $uid,
          'rating' => $request->get('myrating'),
        ]);
      }
      if ($request->get('myreview')) {
        $myreview = CourseReview::create([
          'course_id'      => $newcourse->id,
          'user_id'        => $uid,
          'review' => $request->get('myreview'),
          'public' => $request->get('myreviewpublic'),
        ]);
      }
      return response('CPD Record Create', Response::HTTP_OK);
    }
  }

  public function uploadCertificate(Request $request)
  {
    if ($request->hasFile('file')) {
      $file = $request->file('file');
      $filename = hash('sha256', Carbon::now()->toDateTimeString()) . "-" . $request->file->getClientOriginalName();
      $name = $request->file->getClientOriginalName();
      $ext = $file->getClientOriginalExtension();
      $folder = 'cpdcertificates/' . $request->get('user_id') . '/' . hash('sha256', $request->get('course_id'));
      $store = $file->storeAs('/public/' . $folder, $filename);
      $path = 'storage/' . $folder . '/' . $filename;

      $certificate = CPDCertificate::create([
        'course_id' => $request->get('course_id'),
        'name' => $name,
        'filename' => $filename,
        'path' => $path,
        'extension' => $ext,
        'user_id' => $request->get('user_id'),
      ]);
    }
    // return $f;
  }

  public function deleteCertificate($id)
  {
    $path = CPDCertificate::findorFail($id);
    $file = CPDCertificate::findorFail($id);
    $file->forceDelete();
    $deleted = File::delete($path->path);
    if ($deleted) {
      return response('File Deleted', Response::HTTP_OK);
    } else {
      return response($path->path, Response::HTTP_OK);
    }
  }

  public function addToMyCPD($course_id, $state_id)
  {
    $start_date = Carbon::now()->toDateTimeString();
    $completed_date = Carbon::now()->toDateTimeString();
    $mycourse = CourseProgress::where('course_id', $course_id)->where('user_id', Auth::id())->first();
    if ($mycourse) {
      if ($mycourse->start_date) {
        $start_date = $mycourse->start_date;
      } else {
        $start_date = Carbon::now()->toDateTimeString();
      }
      if ($mycourse->completed_date) {
        $completed_date = $mycourse->completed_date;
      } else {
        $completed_date = Carbon::now()->toDateTimeString();
      }
    }
    if ($mycourse) {
      if ($state_id == 1) {
        $mycourse->start_date = $start_date;
        $mycourse->completed_date = null;
      }
      if ($state_id == 2) {
        $mycourse->start_date = $start_date;
        $mycourse->completed_date = $completed_date;
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
          'start_date'     => $start_date,
          'completed_date' => null,
        ]);
      }
      if ($state_id == 2) {
        $mycourse = CourseProgress::create([
          'course_id'      => $course_id,
          'user_id'        => Auth::id(),
          'state_id'       => $state_id,
          'start_date'     => $start_date,
          'completed_date' => $completed_date,
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
        $course->approved_date = Carbon::now()->toDateTimeString();
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
          'suggested_date' => Carbon::now()->toDateTimeString(),
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
          $approved_date = Carbon::now()->toDateTimeString();
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

  public function deleteMyProgress($id)
  {
    $progress = CourseProgress::find($id);
    $progress->delete();
  }

  public function deleteMyRating($id)
  {
    $rating = CourseRating::find($id);
    $rating->delete();
  }

  public function deleteMyReview($id)
  {
    $review = CourseReview::find($id);
    $review->delete();
  }
}
