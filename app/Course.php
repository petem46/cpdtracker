<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'name', 'slug', 'category_id', 'description', 'length', 'cost', 'access_details'
  ];

  public function category() {
    return $this->belongsTo('App\Category');
  }

  public function courserating() {
    return $this->hasMany('App\CourseRating');
  }

  public function courseprogress() {
    return $this->hasMany('App\CourseProgress');
  }

  public function coursereview() {
    return $this->hasMany('App\CourseReview');
  }


}
