<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class CategoriesFilterResource extends ResourceCollection
{
  public function toArray($request)
  {
      return [
          'categories' => CategoryFilterResource::collection($this->collection),
      ];
  }
}
