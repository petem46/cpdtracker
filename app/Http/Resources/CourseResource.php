<?php

namespace App\Http\Resources;

use App\CourseProgress;
use App\CourseRating;
use App\CourseReview;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Resources\Json\JsonResource;

class CourseResource extends JsonResource
{
  public function toArray($request)
  {
    $uid = Auth::id();
    // $uid = 1;
    return [
      'type'          =>  'course',
      'id'            =>  (string) $this->id,
      'name'          => $this->name,
      'courseprogress'      => CourseProgress::select('state_id', 'start_date', 'completed_date', 'user_id')->with(array('user' => function ($query) {
          $query->select('id', 'name');
        }))->where('course_id', $this->id)->get(),
    ];
  }
}
