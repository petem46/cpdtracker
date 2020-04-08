<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class CategoriesResource extends ResourceCollection
{
  public function toArray($request)
  {
      // return parent::toArray($request);
      return [
          'category_courses' => CategoryResource::collection($this->collection),
      ];
  }

  public function with($request)
  {
      return [
          'links'    => [
              // 'self' => route('c.index'),
          ],
      ];
  }
}
