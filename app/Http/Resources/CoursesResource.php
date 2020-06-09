<?php

namespace App\Http\Resources;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Resources\Json\ResourceCollection;

class CoursesResource extends ResourceCollection
{
  public function toArray($request)
  {
    // return parent::toArray($request);
    return [
      'cpdCompletionData' => CourseResource::collection($this->collection),
    ];
  }
}
