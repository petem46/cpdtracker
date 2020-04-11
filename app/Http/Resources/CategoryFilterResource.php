<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryFilterResource extends JsonResource
{
  public function toArray($request)
  {
      return [
          'name'          => $this->name,
      ];
  }
}
