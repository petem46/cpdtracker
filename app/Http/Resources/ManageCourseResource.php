<?php

namespace App\Http\Resources;

use App\CourseProgress;
use App\CourseRating;
use App\CourseReview;
use Illuminate\Http\Resources\Json\JsonResource;

class ManageCourseResource extends JsonResource
{
    public function toArray($request)
    {
      return [
        'type'          =>  'course',
        'id'            =>  (string) $this->id,
        'name'          => $this->name,
        'category'      => $this->category['name'],
        'completed'     => CourseProgress::where('course_id', $this->id)->where('state_id', 2)->count(),
        'inprogress'    => CourseProgress::where('course_id', $this->id)->where('state_id', 1)->count(),
        'shortlisted'   => CourseProgress::where('course_id', $this->id)->where('state_id', 3)->count(),
        'ratings'       => CourseRating::where('course_id', $this->id)->count(),
        'avgrating'     => CourseRating::where('course_id', $this->id)->avg('rating'),
        'reviews'       => CourseReview::where('course_id', $this->id)->count(),
        'links'         => [
            // 'self' => route('cc.show', ['cc' => $this->id]),
        ],
    ];
    }
}
