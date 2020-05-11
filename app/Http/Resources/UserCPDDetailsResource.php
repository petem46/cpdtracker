<?php

namespace App\Http\Resources;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Resources\Json\ResourceCollection;

use App\Course;
use App\CourseProgress;
use App\CourseRating;
use App\CourseReview;
use App\User;


class UserCPDDetailsResource extends ResourceCollection
{
  private $uid;

  public function __construct($collection, $uid)
  {
    parent::__construct($collection);
    $this->uid = $uid;
  }

  public function toArray($request)
  {
    // return parent::toArray($request);
    $uid = $this->uid;
    $foo = 'SELECT ' . $uid;
    return [
      'uid' => $this->uid,
      'user' => User::where('id', $uid)->first()->only(['name', 'school', 'email']),
      'completedcount' => CourseProgress::where('state_id', 2)->where('user_id', $uid)->count(),
      'startedcount' => CourseProgress::where('state_id', 1)->where('user_id', $uid)->count(),
      'shortlistedcount' => CourseProgress::where('state_id', 3)->where('user_id', $uid)->count(),
      'myratingcount' => CourseRating::where('user_id', $uid)->count(),
      'myratingaverage' => CourseRating::where('user_id', $uid)->average('rating'),
      'myreviewcount' => CourseReview::where('user_id', $uid)->count(),
      'completedcourses' => MyCPDCourseDetailsResource::collection(Course::select('*')->selectSub($foo, 'uid')->whereHas('courseprogress', function ($q) use ($uid) {
        $q->where('user_id', '=', $uid)->where('state_id', 2)->orderBy('completed_date');
      })->get()),
      'othercourses' => MyCPDCourseDetailsResource::collection(Course::select('*')->selectSub($foo, 'uid')->whereHas('courseprogress', function ($q) use ($uid) {
        $q->where('user_id', '=', $uid)->where('state_id', '!=', 2)->orderBy('completed_date');
      })->get()),
    ];
  }
}
