<?php

namespace App\Http\Resources;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Resources\Json\ResourceCollection;

class MyCPDCoursesResource extends ResourceCollection
{
  public function toArray($request)
  {
    // return parent::toArray($request);
    return [
      'courses' => MyCPDCourseDetailsResource::collection($this->collection),
    ];
  }
}
