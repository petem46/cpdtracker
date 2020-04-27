<?php

use App\CategoryCourse;
use Faker\Generator as Faker;

$factory->define(CategoryCourse::class, function (Faker $faker) {

  return [
    'category_id' => $faker->numberBetween($min = 1, $max = 13),
    'course_id' => $faker->numberBetween($min = 1, $max = 101),
  ];
});
