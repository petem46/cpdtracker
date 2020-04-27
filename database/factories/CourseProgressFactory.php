<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\CourseProgress;
use Faker\Generator as Faker;

$factory->define(CourseProgress::class, function (Faker $faker) {
  $wakkawakka = $faker->numberBetween($min = 1, $max = 3);
  $completed_date = null;
  if($wakkawakka === 2) {
    $completed_date = $faker->dateTimeBetween($startDate = '-2 years', $endDate = 'now', $timezone = 'Europe/London');
  }
  return [
      'course_id' => $faker->numberBetween($min = 1, $max = 101),
      'user_id' => $faker->numberBetween($min = 1, $max = 50),
      'state_id' => $wakkawakka,
      'completed_date' => $completed_date,
    ];
});
