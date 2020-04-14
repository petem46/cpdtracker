<?php

namespace App\Http\Resources;

use App\CourseProgress;
use App\CourseRating;
use App\CourseReview;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Resources\Json\JsonResource;

class ManageCourseDetails2Resource extends JsonResource
{
  public function toArray($request)
  {
    $mystate = CourseProgress::select('state_id')->where('course_id', $this->id)->first();
    return [
      'type'          =>  'course',
      'id'            =>  (string) $this->id,
      'name'          => $this->name,
      'category'      => $this->category['name'],
      'access_details'      => $this->access_details,
      'cost'          => $this->cost,
      'mystate' =>  $mystate->state_id,
      'completedcount'     => CourseProgress::where('course_id', $this->id)->where('state_id', 2)->count(),
      'inprogresscount'    => CourseProgress::where('course_id', $this->id)->where('state_id', 1)->count(),
      'shortlistedcount'   => CourseProgress::where('course_id', $this->id)->where('state_id', 3)->count(),
      'completed'     => CourseProgress::where('course_id', $this->id)->where('state_id', 2)->get(),
      'inprogress'    => CourseProgress::where('course_id', $this->id)->where('state_id', 1)->get(),
      'shortlisted'   => CourseProgress::where('course_id', $this->id)->where('state_id', 3)->get(),
      'avgrating'     => CourseRating::where('course_id', $this->id)->avg('rating'),
      'ratings'       => CourseRating::where('course_id', $this->id)->get(),
      'ratingscount'       => CourseRating::where('course_id', $this->id)->count(),
      'oneratingscount'       => CourseRating::where('course_id', $this->id)->where('rating', 1)->count(),
      'tworatingscount'       => CourseRating::where('course_id', $this->id)->where('rating', 2)->count(),
      'threeratingscount'       => CourseRating::where('course_id', $this->id)->where('rating', 3)->count(),
      'fourratingscount'       => CourseRating::where('course_id', $this->id)->where('rating', 4)->count(),
      'fiveratingscount'       => CourseRating::where('course_id', $this->id)->where('rating', 5)->count(),
      'reviews'       => CourseReview::with('user')->where('course_id', $this->id)->get(),
      'reviewcount'       => CourseReview::where('course_id', $this->id)->count(),
      // 'links'         => [
      // 'self' => route('cc.show', ['cc' => $this->id]),
      // ],
    ];
  }
}
