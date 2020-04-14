<?php

namespace App\Http\Controllers;

use App\Course;
use App\Category;
use App\CourseProgress;
use App\CourseRating;
use App\Http\Resources\ManageCoursesResource;
use App\Http\Resources\ManageCourseDetails1Resource;
use App\Http\Resources\CategoriesResource;
use App\Http\Resources\MyCoursesResource;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

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

  public function addToMyCourses($course_id, $state_id)
  {
    $mycourse = CourseProgress::where('course_id', $course_id)->where('user_id', Auth::id())->first();
    if ($mycourse) {
      $mycourse->state_id = $state_id;
      $mycourse->touch();
      $mycourse->save();
    } else {
      $mycourse = CourseProgress::create([
        'course_id'   => $course_id,
        'user_id'     => Auth::id(),
        'state_id'    => $state_id,
      ]);
    }
    return response(null, Response::HTTP_OK);
  }

  public function deleteFromMyCourses($course_id)
  {
    $myprogress = CourseProgress::where('course_id', $course_id)->where('user_id', Auth::id())->first();
    if ($myprogress) {
      $myprogress->delete();
    }
    // $myrating = CourseRating::where('course_id', $course_id)->where('user_id', Auth::id())->first();
    // if ($myrating) {
    //   $myrating->delete();
    // }
    return response(null, Response::HTTP_OK);
  }

  public function addRating($course_id, $rating)
  {
    $oldrating = CourseRating::where('course_id', $course_id)->where('user_id', Auth::id())->first();

    if ($oldrating) {
      $oldrating->rating = $rating;
      $oldrating->touch();
      $oldrating->save();
    } else {
      $newrating = CourseRating::create([
        'course_id'   => $course_id,
        'user_id'     => Auth::id(),
        'rating'    => $rating,
      ]);
    }
    return response(null, Response::HTTP_OK);
  }

  public function details($course)
  {
    return new ManageCourseDetails1Resource(Course::where('name', $course)->get());
  }

  public function savecourse(Request $request) {

    // return $data;
    $course_id = $request->get('id');
    $category_id = Category::select('id')->where('name', $request->get('category'))->first();
    $course = Course::where('id', $course_id)->first();
    if($course) {
      $course->name = $request->get('name');
      $course->category_id = $category_id->id;
      $course->access_details = $request->get('access_details');
      $course->cost = $request->get('cost');
      $course->active = $request->get('active');
      $course->touch();
      $course->save();
      return response('Course Updated Successfully', Response::HTTP_OK);
    } else {
      return response('Course Added Successfully', Response::HTTP_OK);
    }
    return response(null, Response::HTTP_OK);
  }

  public function update(Request $request, Course $course)
  {
    //
  }

  public function destroy(Course $course)
  {
    //
  }
}
