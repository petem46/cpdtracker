<?php

namespace App\Http\Resources;

use App\CourseProgress;
use App\CourseRating;
use App\CourseReview;
use Illuminate\Http\Resources\Json\JsonResource;

class ManageUserResource extends JsonResource
{
    public function toArray($request)
    {
      return [
        'type'          =>  'user',
        'id'            =>  (string) $this->id,
        'name'          => $this->name,
        'school'        => $this->school,
        'totalcourses'  => CourseProgress::where('user_id', $this->id)->count(),
        'completed'     => CourseProgress::where('user_id', $this->id)->where('state_id', 2)->count(),
        'inprogress'    => CourseProgress::where('user_id', $this->id)->where('state_id', 1)->count(),
        'shortlisted'   => CourseProgress::where('user_id', $this->id)->where('state_id', 3)->count(),
        'ratings'       => CourseRating::where('user_id', $this->id)->count(),
        'avgrating'     => CourseRating::where('user_id', $this->id)->avg('rating'),
        'reviews'       => CourseReview::where('user_id', $this->id)->count(),
        'links'         => [
            // 'self' => route('cc.show', ['cc' => $this->id]),
        ],
    ];
    }
}
