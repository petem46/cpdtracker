<?php

namespace App\Http\Controllers;
use Auth;
use App\User;
use Illuminate\Http\Request;

class SpaController extends Controller
{
    public function index()
    {
      // $data = [
      //   'whodisschool' => User::first()->getSchool(),
      //   'whodisname' => User::first()->getName(),
      // ];
      // dd($whodisschool);
        // return view('/', $data);
        return view('/home');
    }
}
