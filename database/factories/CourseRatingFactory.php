<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\CourseRating;
use App\Course;
use App\User;
use Faker\Generator as Faker;

$factory->define(CourseRating::class, function (Faker $faker) {

  // static $combos;
  // $combos = $combos ?: [];

  // $user_id = 1;
  // // Pick an image to attach to
  // $course_id = Course::inRandomOrder()->first();
  // $course_id instanceof Course ? $courseId = $course_id->id : $courseId = null;

  // // Generate unique imageId-languageCode combination
  // while($user_id = $faker->numberBetween($min = 1, $max = 350) && in_array([$courseId, $user_id], $combos)) {}
  // $combos[] = [$courseId, $user_id];

  return [
    'course_id' => $faker->numberBetween($min = 1, $max = 101),
    'user_id' => $faker->numberBetween($min = 1, $max = 50),
    'rating' => $faker->numberBetween($min = 1, $max = 5),
  ];
});
