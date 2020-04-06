<?php

namespace App\Http\Resources;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Resources\Json\ResourceCollection;

class MyCompletedCoursesResource extends ResourceCollection
{
  public function toArray($request)
  {
    // return parent::toArray($request);
    return [
      'category_courses' => MyCompletedCourseResource::collection($this->collection),
    ];
  }
}
