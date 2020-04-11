<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ManageCourseDetails1Resource extends ResourceCollection
{

  public function toArray($request)
  {
    return [
      'course' => ManageCourseDetails2Resource::collection($this->collection),
    ];
  }
}
