<?php

use App\CourseRating;
use Faker\Generator as Faker;

$factory->define(CourseRating::class, function (Faker $faker) {

  return [
    'course_id' => $faker->numberBetween($min = 1, $max = 101),
    'user_id' => $faker->numberBetween($min = 1, $max = 50),
    'rating' => $faker->numberBetween($min = 1, $max = 5),
  ];
});
