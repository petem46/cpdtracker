<?php

namespace App\Http\Resources;

use App\CourseProgress;
use App\CourseRating;
use App\CourseReview;
use App\CPDCertificate;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Resources\Json\JsonResource;

class MyCPDCourseDetailsResource extends JsonResource
{
  public function toArray($request)
  {
    // return parent::toArray($request);
    return [
      'uid'           => $this->uid,
      'id'            =>  (string) $this->id,
      'name'          => $this->name,
      'type'          => $this->type,
      'avgrating'     => CourseRating::where('course_id', $this->id)->avg('rating'),
      'ratingscount'       => CourseRating::where('course_id', $this->id)->count(),
      'myrating'       => CourseRating::where('course_id', $this->id)->where('user_id', $this->uid)->max('rating'),
      'myprogress'      => CourseProgress::where('user_id', $this->uid)->where('course_id', $this->id)->max('state_id'),
      'start_date'      => CourseProgress::where('user_id', $this->uid)->where('course_id', $this->id)->max('start_date'),
      'completed_date'      => CourseProgress::where('user_id', $this->uid)->where('course_id', $this->id)->max('completed_date'),
      'myreview'        => CourseReview::where('user_id', $this->uid)->where('course_id', $this->id)->max('review'),
      'myreviewpublic'        => CourseReview::where('user_id', $this->uid)->where('course_id', $this->id)->max('public'),
      'mycertificates'  => CPDCertificate::where('user_id', $this->uid)->where('course_id', $this->id)->get(),
    ];
  }
}
