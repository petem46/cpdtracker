<?php

namespace App\Http\Controllers;

use \DB;
use App\Course;
use App\Category;
use App\CourseProgress;
use App\CourseRating;

use App\Http\Resources\CategoriesResource;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Query\Builder;

class CourseController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
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

  public function getMyCourses()
  {
    $uid = Auth::id();
    $data = [
      // 'simpleinprogress' => Course::whereHas('courseprogress', function($q) use ($uid) {$q->where('user_id', $uid)->where('state_id', '2');})->get(),
      'simpleinprogress2' => Course::
        // leftjoin('course_progress as cp', 'cp.course_id', '=', 'courses.id')
        // ->leftjoin('course_ratings as cr', 'cr.course_id', '=', 'courses.id')
        with([
          'courseprogress'  => function ($q) use ($uid) {
            $q->where('user_id', $uid);
          },
        ])
        ->with([
          'courserating'  => function ($q) use ($uid) {
            $q->where('user_id', $uid);
          },
        ])
        // ->where('cp.state_id', '=', '2')
        // ->where('cp.user_id', '=', $uid)
        // ->where('cr.user_id', '=', $uid)
        ->get(),
      // 'mycompletedcourses' => Course::whereHas('courserating', function($q) use ($uid) {$q->where('user_id', $uid);})
      //                           ->WhereHas('courseprogress', function($q) use ($uid) {$q->where('user_id', $uid)->where('state_id', '2');})
      //                           ->with([
      //                             'courserating'  => function($q) use ($uid){ $q->where('user_id',$uid);},
      //                             'courseprogress'  => function($q) use ($uid){ $q->where('user_id',$uid);},
      //                           ])
      //                           ->get(),
      // 'mycompletedcourses1' => Course::WhereHas('courseprogress', function($q) use ($uid) {$q->where('user_id', $uid)->where('state_id', '2');})
      //                           ->with([
      //                             'courseprogress'  => function($q) use ($uid){ $q->where('user_id',$uid);},
      //                           ])
      //                           ->get(),
      'myinprogresscourses' => Course::select('courses.id', 'courses.name', 'courses.access_details', DB::raw('avg(course_ratings.rating) as avgrating'), DB::raw('count(course_ratings.rating) as count'))
                                ->WhereHas('courseprogress', function($q) use ($uid) {$q->where('user_id', $uid)->where('state_id', '1');})
                                ->leftjoin('course_ratings', 'course_ratings.course_id', '=', 'courses.id')
                              // ->join('course_progress', function($join) use ($uid) {
                              //   $join->on('course_progress.course_id', 'courses.id')
                              //   ->where('course_progress.user_id', $uid);
                              // })
                              ->groupBy('courses.id', 'courses.name', 'courses.access_details')
                              ->orderBy('courses.id')
                              ->get(),
      // 'myinprogresscourses' => Course::WhereHas('courseprogress', function($q) use ($uid) {$q->where('user_id', $uid)->where('state_id', '1');})
      //                           ->with([
      //                             'courseprogress'  => function($q) use ($uid){ $q->where('user_id',$uid);},
      //                           ])
      //                           ->get(),
      // 'myshortlistedcourses' => Course::WhereHas('courseprogress', function($q) use ($uid) {$q->where('user_id', $uid)->where('state_id', '3');})
      //                           ->with([
      //                             'courserating',
      //                             'courseprogress'  => function($q) use ($uid){ $q->where('user_id',$uid);},
      //                           ])
      //                           ->get(),
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



  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Course  $course
   * @return \Illuminate\Http\Response
   */
  public function show(Course $course)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Course  $course
   * @return \Illuminate\Http\Response
   */
  public function edit(Course $course)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Course  $course
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Course $course)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Course  $course
   * @return \Illuminate\Http\Response
   */
  public function destroy(Course $course)
  {
    //
  }
}
