<?php

namespace App\Http\Resources;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Resources\Json\ResourceCollection;

use App\Course;
use App\CourseProgress;
use App\CourseRating;
use App\CourseReview;


class MyCPDCoursesResource extends ResourceCollection
{
  public function toArray($request)
  {
    $uid = Auth::id();
    // return parent::toArray($request);
    return [
      'completedcount' => CourseProgress::where('state_id', 2)->where('user_id', $uid)->count(),
      'startedcount' => CourseProgress::where('state_id', 1)->where('user_id', $uid)->count(),
      'shortlistedcount' => CourseProgress::where('state_id', 3)->where('user_id', $uid)->count(),
      'myratingcount' => CourseRating::where('user_id', $uid)->count(),
      'myratingaverage' => CourseRating::where('user_id', $uid)->average('rating'),
      'myreviewcount' => CourseReview::where('user_id', $uid)->count(),
      // 'courses' => MyCPDCourseDetailsResource::collection($this->collection),
      'completedcourses' => MyCPDCourseDetailsResource::collection(Course::whereHas('courseprogress', function ($q) use ($uid) {
        $q->where('user_id', '=', $uid)->where('state_id', 2)->orderBy('completed_date');
      })->get()),
      'othercourses' => MyCPDCourseDetailsResource::collection(Course::whereHas('courseprogress', function ($q) use ($uid) {
        $q->where('user_id', '=', $uid)->where('state_id', '!=', 2)->orderBy('completed_date');
      })->get()),
    ];
  }
}
