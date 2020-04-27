<?php

namespace App\Http\Resources;

use App\Category;
use App\CourseProgress;
use App\CourseRating;
use App\CourseReview;
use Illuminate\Http\Resources\Json\JsonResource;

class ManageCourseResource extends JsonResource
{
  public function toArray($request)
  {
    $id = $this->id;
    return [
      'type'          =>  'course',
      'id'            =>  (string) $this->id,
      'name'          => $this->name,
      // 'categories'      => $this->category,
      'category'      => Category::select('id')->whereHas('course', function ($q) use ($id) {
        $q->where('course_id', '=', $id);
      })->get(),
      'categorylabel'      => Category::select('name')->whereHas('course', function ($q) use ($id) {
        $q->where('course_id', '=', $id);
      })->get(),
      'categorylabel1'      => (string) Category::select('name')->whereHas('course', function ($q) use ($id) {
        $q->where('course_id', '=', $id);
      })->get(),
      'cost'      => $this->cost,
      'description'      => $this->description,
      'access_details'      => $this->access_details,
      'viewcounter'      => $this->viewcounter,
      'startdate'      => $this->startdate,
      'enddate'      => $this->enddate,
      'active'      => $this->active,
      'type'      => $this->type,
      'suggested_by'      => $this->suggested_by,
      'suggested_date'      => $this->suggested_date,
      'approved_by'      => $this->approved_by,
      'approved_date'      => $this->approved_date,
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
