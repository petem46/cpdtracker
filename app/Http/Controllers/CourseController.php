<?php

namespace App\Http\Controllers;

use \DB;
use App\Course;
use App\Category;
use App\CourseProgress;
use App\CourseRating;

use App\Http\Resources\CategoriesResource;
use App\Http\Resources\MyCompletedCoursesResource;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Query\Builder;

class CourseController extends Controller
{
  public function index()
  {
    $data = [
      'category_courses' => Category::with('course')->get()->toArray(),
    ];
    return response()->json($data);
  }

  public function courselist()
  {
    return new CategoriesResource(Category::get());
  }

  public function addToMyCourses($course_id, $state_id)
  {
    $mycourse = CourseProgress::create([
      'course_id'   => $course_id,
      'user_id'     => Auth::id(),
      'state_id'    => $state_id,
    ]);
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

  public function getMyCourses()
  {
    $uid = Auth::id();
    $uid = 1;
    $data = [
      'completed' => new MyCompletedCoursesResource(Course::whereHas('courseprogress', function ($q) use ($uid) {
        $q->where('state_id', '=', 2)->where('user_id', '=', $uid);
      })->get()),
      'inprogress' => new MyCompletedCoursesResource(Course::whereHas('courseprogress', function ($q) use ($uid) {
        $q->where('state_id', '=', 1)->where('user_id', '=', $uid);
      })->get()),
      'shortlisted' => new MyCompletedCoursesResource(Course::whereHas('courseprogress', function ($q) use ($uid) {
        $q->where('state_id', '=', 3)->where('user_id', '=', $uid);
      })->get()),
    ];
    return $data;
  }

  public function dashboarddata($user_id)
  {
    $data = [
      'category_courses' => Category::with('course')->get(),
    ];
    // dump($data);
    return $data;
  }

  public function create()
  {
    //
  }

  public function store(Request $request)
  {
    //
  }

  public function show(Course $course)
  {
    //
  }

  public function edit(Course $course)
  {
    //
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
