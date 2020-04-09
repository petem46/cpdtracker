<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function overview()
    {
        $data = [
          'users' => User::with('courseprogress')->with('courserating')->with('coursereview')->orderBy('updated_at')->get(),
        ];
        return $data;
    }
}
