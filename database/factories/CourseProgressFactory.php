<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\CourseProgress;
use Faker\Generator as Faker;

$factory->define(CourseProgress::class, function (Faker $faker) {
    return [
      'course_id' => $faker->numberBetween($min = 1, $max = 101),
      'user_id' => $faker->numberBetween($min = 1, $max = 50),
      'state_id' => $faker->numberBetween($min = 1, $max = 3),
    ];
});
