<?php

namespace App\Http\Controllers;

use \DB;
use App\Course;
use App\Category;
use App\CourseProgress;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

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
      $data = [
        'category_courses' => Category::with('course')->get(),
      ];
      // dump($data);
      return $data;
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
      // $uid = 1;
      $data = [
        'mycompletedcourses' => Course::whereHas('courserating', function($q) use ($uid) {$q->where('user_id', $uid);})
                                  ->WhereHas('courseprogress', function($q) use ($uid) {$q->where('user_id', $uid)->where('state_id', '2');})
                                  ->with([
                                    'courserating'  => function($q) use ($uid){ $q->where('user_id',$uid);},
                                    'courseprogress'  => function($q) use ($uid){ $q->where('user_id',$uid);},
                                  ])
                                  ->get(),
        // 'mycompletedcourses1' => Course::WhereHas('courseprogress', function($q) use ($uid) {$q->where('user_id', $uid)->where('state_id', '2');})
        //                           ->with([
        //                             'courseprogress'  => function($q) use ($uid){ $q->where('user_id',$uid);},
        //                           ])
        //                           ->get(),
        'myinprogresscourses' => Course::WhereHas('courseprogress', function($q) use ($uid) {$q->where('user_id', $uid)->where('state_id', '1');})
                                  ->with([
                                    'courseprogress'  => function($q) use ($uid){ $q->where('user_id',$uid);},
                                  ])
                                  ->get(),
        'myshortlistedcourses' => Course::WhereHas('courseprogress', function($q) use ($uid) {$q->where('user_id', $uid)->where('state_id', '3');})
                                  ->with([
                                    'courserating',
                                    'courseprogress'  => function($q) use ($uid){ $q->where('user_id',$uid);},
                                  ])
                                  ->get(),
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
