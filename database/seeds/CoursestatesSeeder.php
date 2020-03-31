<?php

use App\Coursestates;
use Illuminate\Database\Seeder;

class CoursestatesSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    DB::table('coursestates')->insert(array(
      array(
        'state' => 'Started'
      ),
      array(
        'state' => 'Completed'
      ),
      array(
        'state' => 'Shortlisted'
      ),
    ));
  }
}
