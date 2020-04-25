<?php

use App\User;
use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
      DB::table('users')->insert(array(
        // array(
        //   'name' => 'Pete Montgomery',
        //   'email' => 'pete.montgomery@fcat.org.uk',
        //   'school' => 'FCAT',
        //   'email_verified_at' => now(),
        //   'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        //   'remember_token' => Str::random(10),
        //   'avatar' => 'https://www.placecage.com/295/165',
        //   'usergroup_id' => 1,
        //   'role_id' => 1,
        // ),
        array(
          'name' => 'Demo Admin',
          'email' => 'demoadmin@cpdtracker.co.uk',
          'school' => 'CPD',
          'email_verified_at' => now(),
          'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
          'remember_token' => Str::random(10),
          'avatar' => 'https://www.placecage.com/295/165',
          'usergroup_id' => 1,
          'role_id' => 1,
        ),
        array(
          'name' => 'Demo User',
          'email' => 'demouser@cpdtracker.co.uk',
          'school' => 'CPD',
          'email_verified_at' => now(),
          'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
          'remember_token' => Str::random(10),
          'avatar' => 'https://www.placecage.com/295/165',
          'usergroup_id' => 3,
          'role_id' => 3,
        ),
      ));
      $count = 47;
      factory(User::class, $count)->create();

    }
}
