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
    factory(CourseReview::class, $count)->create();
  }
}
