<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ManageMyReviewsResource extends ResourceCollection
{

    public function toArray($request)
    {
      return [
        'reviews' => ManageMyReviewResource::collection($this->collection),
    ];
    // return parent::toArray($request);
    }
}
