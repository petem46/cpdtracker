<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CourseReview extends Model
{
  use SoftDeletes;

  public function course() {
    return $this->belongsTo('App\Course');
  }

  public function user() {
    return $this->belongsTo('App\User');
  }

}
