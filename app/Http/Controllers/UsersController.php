<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Resources\ManageUsersResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    public function overview()
    {
      return new ManageUsersResource(User::get());
    }

    public function hash() {
      $users = User::where('school', 'Fleetwood')->get();
      foreach ($users as $u) {
        //  $u->name = Hash::make($u->name);
        // $u->password = Hash::make('$u->password');
        $u->touch();
        $u->save();
      }
      return $users;
    }
}
