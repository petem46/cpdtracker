<?php

use App\CourseReview;

use Illuminate\Database\Seeder;

class CourseReviewSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    $count = 500;
    $reviews = factory(CourseReview::class, $count)->make();
    foreach ($reviews as $rating) {
      repeat: try {
        $rating->save();
      } catch (\Illuminate\Database\QueryException $e) {
        $rating = factory(CourseReview::class)->make();
        goto repeat;
      }
    }

  }
}
