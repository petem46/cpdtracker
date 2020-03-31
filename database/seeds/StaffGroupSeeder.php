<?php

use Illuminate\Database\Seeder;

class StaffGroupSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    DB::table('staff_groups')->insert(array(
      array(
        'name' => 'Central Team'
      ),
      array(
        'name' => 'FCAT Exec'
      ),
      array(
        'name' => 'SLT'
      ),
      array(
        'name' => 'Teachers'
      ),
      array(
        'name' => 'Support Staff'
      ),
    ));
  }
}
