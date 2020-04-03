<?php

use App\CourseProgress;
use Illuminate\Database\Seeder;

class CourseProgressSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    $count = 500;
    $courses = factory(CourseProgress::class, $count)->make();
    foreach ($courses as $course) {
      repeat: try {
        $course->save();
      } catch (\Illuminate\Database\QueryException $e) {
        $course = factory(CourseProgress::class)->make();
        goto repeat;
      }
    }
  }
}
