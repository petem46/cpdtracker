<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CourseProgress extends Model
{
  // use SoftDeletes;

  protected $table = 'course_progress';
  protected $fillable = ['course_id', 'user_id', 'state_id'];

  public function course() {
    return $this->belongsTo('App\Course');
  }

  public function user() {
    return $this->belongsTo('App\User');
  }

}
