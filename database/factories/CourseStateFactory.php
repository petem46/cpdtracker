<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\CourseState;
use Faker\Generator as Faker;

$factory->define(CourseState::class, function (Faker $faker) {
    return [
      'course_id' => $faker->numberBetween($min = 1, $max = 101),
      'user_id' => $faker->numberBetween($min = 1, $max = 5),
      'state_id' => $faker->numberBetween($min = 1, $max = 3),
    ];
});
