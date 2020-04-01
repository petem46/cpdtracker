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
      factory(CourseProgress::class, $count)->create();

    }
}
