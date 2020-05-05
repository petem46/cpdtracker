<?php

namespace App\Http\Resources;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Resources\Json\ResourceCollection;

use App\CourseProgress;
use App\CourseRating;
use App\CourseReview;


class MyCPDCoursesResource extends ResourceCollection
{
  public function toArray($request)
  {
    $uid = Auth::id();
    $uid = 1;
    // return parent::toArray($request);
    return [
      'completedcount' => CourseProgress::where('state_id', 2)->where('user_id', $uid)->count(),
      'startedcount' => CourseProgress::where('state_id', 1)->where('user_id', $uid)->count(),
      'shortlistedcount' => CourseProgress::where('state_id', 3)->where('user_id', $uid)->count(),
      'myratingcount' => CourseRating::where('user_id', $uid)->count(),
      'myratingaverage' => CourseRating::where('user_id', $uid)->average('rating'),
      'myreviewcount' => CourseReview::where('user_id', $uid)->count(),
      'courses' => MyCPDCourseDetailsResource::collection($this->collection),
    ];
  }
}
