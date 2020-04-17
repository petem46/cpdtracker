<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CourseReview extends Model
{
  use SoftDeletes;

  protected $table = 'course_reviews';
  protected $fillable = ['course_id', 'user_id', 'review'];

  public function course() {
    return $this->belongsTo('App\Course');
  }

  public function user() {
    return $this->belongsTo('App\User');
  }

}
