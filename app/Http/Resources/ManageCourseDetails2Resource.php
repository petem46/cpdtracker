<?php

namespace App\Http\Resources;

use App\CourseProgress;
use App\CourseRating;
use App\CourseReview;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Resources\Json\JsonResource;

class ManageCourseDetails2Resource extends JsonResource
{
  public function toArray($request)
  {
    $uid = Auth::id();
    $uname = Auth::user()->name;
    $mystateid = 0;
    try {
      $mystate = CourseProgress::select('state_id')->where('course_id', $this->id)->where('user_id', Auth::id())->firstOrFail();
      $mystateid = $mystate->state_id;
    } catch (ModelNotFoundException $exception) {
    }

    return [
      'type'          =>  $this->type,
      'id'            =>  (string) $this->id,
      'name'          => $this->name,
      'categories'      => $this->category,
      'description'      => $this->description,
      'access_details'      => $this->access_details,
      'viewcounter'      => $this->viewcounter,
      'startdate'      => $this->startdate,
      'enddate'      => $this->enddate,
      'cost'          => $this->cost,
      'approved_by'          => $this->approved_by,
      'suggested_by'          => $this->suggested_by,
      'username'        => $uname,
      'mystate' =>  $mystateid,
      'completedcount'     => CourseProgress::where('course_id', $this->id)->where('state_id', 2)->count(),
      'inprogresscount'    => CourseProgress::where('course_id', $this->id)->where('state_id', 1)->count(),
      'shortlistedcount'   => CourseProgress::where('course_id', $this->id)->where('state_id', 3)->count(),
      'completed'     => CourseProgress::where('course_id', $this->id)->where('state_id', 2)->get(),
      'inprogress'    => CourseProgress::where('course_id', $this->id)->where('state_id', 1)->get(),
      'shortlisted'   => CourseProgress::where('course_id', $this->id)->where('state_id', 3)->get(),
      'avgrating'     => CourseRating::where('course_id', $this->id)->avg('rating'),
      'myrating'     => CourseRating::where('course_id', $this->id)->where('user_id', $uid)->max('rating'),
      'ratings'       => CourseRating::where('course_id', $this->id)->get(),
      'ratingscount'       => CourseRating::where('course_id', $this->id)->count(),
      'oneratingscount'       => CourseRating::where('course_id', $this->id)->where('rating', 1)->count(),
      'tworatingscount'       => CourseRating::where('course_id', $this->id)->where('rating', 2)->count(),
      'threeratingscount'       => CourseRating::where('course_id', $this->id)->where('rating', 3)->count(),
      'fourratingscount'       => CourseRating::where('course_id', $this->id)->where('rating', 4)->count(),
      'fiveratingscount'       => CourseRating::where('course_id', $this->id)->where('rating', 5)->count(),
      'publicreviews'       => CourseReview::with('user')->where('course_id', $this->id)->where('public', 1)->get(),
      'privatereviews'       => CourseReview::with('user')->where('course_id', $this->id)->where('public', 0)->get(),
      'reviewcount'       => CourseReview::where('course_id', $this->id)->count(),
    ];
  }
}
