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
    $ratings = factory(CourseRating::class, $count)->make();
    foreach ($ratings as $rating) {
      repeat: try {
        $rating->save();
      } catch (\Illuminate\Database\QueryException $e) {
        $rating = factory(CourseRating::class)->make();
        goto repeat;
      }
    }
  }
}
