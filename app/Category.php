<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
  use SoftDeletes;

  protected $table = 'category';

  protected $fillable = [
    'name'
  ];

  public function course() {
    // return $this->hasMany('App\Course');
    return $this->belongsToMany('App\Course');
  }

}
