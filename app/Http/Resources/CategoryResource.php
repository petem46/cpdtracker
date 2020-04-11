<?php

namespace App\Http\Resources;

use App\Course;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
  public function toArray($request)
  {
    return [
      'type'          =>  'category',
      'id'            =>  (string) $this->id,
      'name'          => $this->name,
      'courses'       => Course::with('courserating')
        ->with('courseprogress')
        ->with('coursereview')
        ->where('category_id', $this->id)
        ->get(),
      'links'         => [
        // 'self' => route('cc.show', ['cc' => $this->id]),
      ],
    ];
  }
}
