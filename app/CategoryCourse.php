<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CategoryCourse extends Model
{
  use SoftDeletes;

  protected $table = 'category_course';

  protected $fillable = [
    'category_id', 'course_id'
  ];
}
