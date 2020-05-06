<?php

namespace App\Http\Resources;

use App\CourseProgress;
use App\CourseRating;
use App\CourseReview;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Resources\Json\JsonResource;

class MyCPDCourseDetailsResource1 extends JsonResource
{
  private $uid;

  public function __construct($collection, $uid)
  {
    parent::__construct($collection);
    $this->uid = $uid;
  }

  public function toArray($request)
  {
    $uid = 1;
    return [
      'type'          =>  'fuck off',
      'id'            =>  (string) $this->id,
      'uid'            =>  (string) $this->uid,
      'name'          => $this->name,
      'type'          => $this->type,
      'avgrating'     => CourseRating::where('course_id', $this->id)->avg('rating'),
      'ratingscount'       => CourseRating::where('course_id', $this->id)->count(),
      'myrating'       => CourseRating::where('course_id', $this->id)->where('user_id', $uid)->max('rating'),
      'myprogress'      => CourseProgress::where('user_id', $uid)->where('course_id', $this->id)->max('state_id'),
      'start_date'      => CourseProgress::where('user_id', $uid)->where('course_id', $this->id)->max('start_date'),
      'completed_date'      => CourseProgress::where('user_id', $uid)->where('course_id', $this->id)->max('completed_date'),
      'myreview'        => CourseReview::where('user_id', $uid)->where('course_id', $this->id)->max('review'),
      'myreviewpublic'        => CourseReview::where('user_id', $uid)->where('course_id', $this->id)->max('public'),
    ];
  }
}
