<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
      'name', 'email', 'password', 'school', 'avatar', 'keyrole', 'twitterHandle', 'ext', 'mobile', 'usergroup_id', 'role_id', 'last_login_at', 'last_login_ip',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public static function checkAccess($email) {
      $domain = explode("@", $email);
      // dd($domain);
      // dd(ctype_digit($domain[0]));

      // check if email address begins with a number
      // this would indicate student account and
      // should be blocked by return 'fail'
      if(ctype_digit($domain[0])) {
        return('fail');
      }
    }

    public static function checkGarstang($email) {
      $domain = explode("@", $email);
      // if($domain[1] != 'garstangcommunityacademy.com') {
      //   return('fail');
      // }
    }

    public static function getGarstangSchool($gmail) {
      $domain = explode("@", $gmail);
      $school = explode(".", $domain[1]);
      $school = $school[0];
      $school = ucfirst($school);
      return $school;
  }

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
