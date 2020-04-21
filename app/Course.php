<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Course extends Model
{
  use SoftDeletes;

  protected $fillable = [
    'name', 'slug', 'category_id', 'description', 'length', 'cost', 'access_details', 'viewcounter'
  ];

  public function category()
  {
    return $this->belongsTo('App\Category');
  }

  public function courserating()
  {
    return $this->hasMany('App\CourseRating');
  }

  public function courseprogress()
  {
    return $this->hasMany('App\CourseProgress');
  }

  public function coursereview()
  {
    return $this->hasMany('App\CourseReview');
  }
}
