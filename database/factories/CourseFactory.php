<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Course;
use Faker\Generator as Faker;

$factory->define(Course::class, function (Faker $faker) {
    return [
      'name' => $faker->catchPhrase,
      'slug' => $faker->slug,
      'category_id' => $faker->numberBetween($min = 1, $max = 8),
      'description' => $faker->realText($maxNbChars = 200),
      'length' => $faker->numberBetween($min = 1, $max = 8) . " hours",
      'cost' => "£" . $faker->numberBetween($min = 0, $max = 300),
      'access_details' =>$faker->url,
    ];
});
