<?php

namespace App\Http\Resources;

use App\CourseProgress;
use App\CourseRating;
use App\CourseReview;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Resources\Json\Resource;

class MyCourseResource extends Resource
{
    public function toArray($request)
    {
      $uid = Auth::id();
      $uid = 1;
      return [
        'type'          =>  'course',
        'id'            =>  (string) $this->id,
        'name'          => $this->name,
        'courseprogress'      => CourseProgress::where('course_id', $this->id)->get(),
        'courserating'        => CourseRating::where('course_id', $this->id)->get(),
        'coursereview'        => CourseReview::where('course_id', $this->id)->get(),
        'links'         => [
            // 'self' => $uid,
        ],
    ];
    }
}
