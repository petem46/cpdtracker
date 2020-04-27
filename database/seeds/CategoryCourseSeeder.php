<?php

use App\CategoryCourse;
use Illuminate\Database\Seeder;

class CategoryCourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $count = 250;
      $rows = factory(CategoryCourse::class, $count)->make();
      foreach ($rows as $row) {
        repeat: try {
          $row->save();
        } catch (\Illuminate\Database\QueryException $e) {
          $row = factory(CategoryCourse::class)->make();
          goto repeat;
        }
      }
    }
}
