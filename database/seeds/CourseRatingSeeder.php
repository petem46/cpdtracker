<?php

use App\CourseRating;
use Illuminate\Database\Seeder;

class CourseRatingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    $count = 500;
    factory(CourseRating::class, $count)->create();
  }
}
