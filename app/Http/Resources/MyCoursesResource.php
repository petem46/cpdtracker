<?php

namespace App\Http\Resources;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Resources\Json\ResourceCollection;

class MyCoursesResource extends ResourceCollection
{
  public function toArray($request)
  {
    // return parent::toArray($request);
    return [
      'courses' => MyCourseResource::collection($this->collection),
    ];
  }
}
