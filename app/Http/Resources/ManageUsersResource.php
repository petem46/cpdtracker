<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ManageUsersResource extends ResourceCollection
{

    public function toArray($request)
    {
      return [
        'users' => ManageUserResource::collection($this->collection),
    ];
    // return parent::toArray($request);
    }
}
