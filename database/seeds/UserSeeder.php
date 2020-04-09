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
        array(
          'name' => $faker->name,
          'email' => 'pete.montgomery@fcat.org.uk',
          'school' => $faker->city,
          'email_verified_at' => now(),
          'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
          'remember_token' => Str::random(10),
          'avatar' => 'https://www.placecage.com/295/165',
          'usergroup_id' => $faker->randomDigit($min = 1, $max = 5),
          'role_id' => $faker->randomDigit($min = 1, $max = 5),

        ),
      ));
      $count = 49;
      factory(User::class, $count)->create();

    }
}
