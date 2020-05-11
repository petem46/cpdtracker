<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ManageReviewResource extends JsonResource
{
  public function toArray($request)
  {
    return [
      'type'          =>  'review',
      'public'  => $this->public,
      'id'            =>  (string) $this->id,
      'userid'            =>  (string) $this->user_id,
      'reviewer'            =>  (string) $this->user['name'],
      'course_id'            =>  (string) $this->course_id,
      'course'      => $this->course['name'],
      'review'            =>  (string) $this->review,
      'date'            =>  (string) $this->created_at,
      'updated'            =>  (string) $this->updated_at,
    ];
  }
}
