<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CourseRating extends Model
{
  protected $table = 'course_ratings';
  protected $fillable = ['course_id', 'user_id', 'rating'];


  public function course() {
    return $this->belongsTo('App\Course');
  }

  public function user() {
    return $this->belongsTo('App\User');
  }

}
