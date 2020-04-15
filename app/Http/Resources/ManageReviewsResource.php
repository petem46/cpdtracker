<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ManageReviewsResource extends ResourceCollection
{

    public function toArray($request)
    {
      return [
        'reviews' => ManageReviewResource::collection($this->collection),
    ];
    // return parent::toArray($request);
    }
}
