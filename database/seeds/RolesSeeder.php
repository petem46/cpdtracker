<?php

use Illuminate\Database\Seeder;

class RolesSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    DB::table('roles')->insert(array(
      array(
        'name' => 'Administrators'
      ),
      array(
        'name' => 'Power Users'
      ),
      array(
        'name' => 'User'
      ),
    ));
  }
}
