<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Resources\ManageUsersResource;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function overview()
    {
      return new ManageUsersResource(User::get());
    }
}
