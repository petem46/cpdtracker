<?php

use App\CourseState;
use Illuminate\Database\Seeder;

class CourseStateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $count = 500;
      factory(CourseState::class, $count)->create();

    }
}
