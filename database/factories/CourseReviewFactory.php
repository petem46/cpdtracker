<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\CourseReview;
use Faker\Generator as Faker;

$factory->define(CourseReview::class, function (Faker $faker) {
    return [
      'course_id' => $faker->numberBetween($min = 1, $max = 101),
      'user_id' => $faker->numberBetween($min = 1, $max = 50),
      'review' => $faker->realText($maxNbChars = 200, $indexSize = 2),
      ];
});
