<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ManageCoursesResource extends ResourceCollection
{

    public function toArray($request)
    {
      return [
        'courses' => ManageCourseResource::collection($this->collection),
    ];
    // return parent::toArray($request);
    }
}
