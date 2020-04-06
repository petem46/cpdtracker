<?php

namespace App\Http\Resources;

use App\CourseProgress;
use App\CourseRating;
use App\CourseReview;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Resources\Json\Resource;

class MyCompletedCourseResource extends Resource
{
    public function toArray($request)
    {
      $uid = Auth::id();
      $uid = 1;
      return [
        'type'          =>  'course',
        'id'            =>  (string) $this->id,
        'name'          => $this->name,
        'progress'      => CourseProgress::where('course_id', $this->id)->where('user_id', $uid)->get(),
        'rating'        => CourseRating::where('course_id', $this->id)->where('user_id', $uid)->get(),
        'review'        => CourseReview::where('course_id', $this->id)->where('user_id', $uid)->get(),
        'links'         => [
            'self' => $uid,
        ],
    ];
    }
}
