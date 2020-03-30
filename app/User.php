<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'school', 'avatar', 'usergroup_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public static function getGoogleSchool($gmail) {
      $domain = explode("@", $gmail);
      $school = explode(".", $domain[1]);
      $school = $school[0];
      if($school === 'FCAT' || $school === 'fcat') {
          $school = strtoupper($school);
      } else {
          $school = ucfirst($school);
      }

      return $school;
  }

}
