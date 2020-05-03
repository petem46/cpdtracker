<?php

namespace App\Http\Resources;

use App\CourseProgress;
use App\CourseRating;
use App\CourseReview;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Resources\Json\JsonResource;

class MyCPDCourseDetailsResource extends JsonResource
{
    public function toArray($request)
    {
      $uid = Auth::id();
      // $uid = 1;
      return [
        'type'          =>  'mycpdcourse',
        'id'            =>  (string) $this->id,
        'name'          => $this->name,
        'avgrating'     => CourseRating::where('course_id', $this->id)->avg('rating'),
        'myrating'       => CourseRating::where('course_id', $this->id)->where('user_id', $uid)->max('rating'),
        'ratingscount'       => CourseRating::where('course_id', $this->id)->count(),
        'myprogress'      => CourseProgress::where('user_id', $uid)->where('course_id', $this->id)->max('state_id'),
        'start_date'      => CourseProgress::where('user_id', $uid)->where('course_id', $this->id)->max('start_date'),
        'completed_date'      => CourseProgress::where('user_id', $uid)->where('course_id', $this->id)->max('completed_date'),
        'myreview'        => CourseReview::where('user_id', $uid)->where('course_id', $this->id)->max('review'),
        'myreviewpublic'        => CourseReview::where('user_id', $uid)->where('course_id', $this->id)->max('public'),
    ];
    }
}
