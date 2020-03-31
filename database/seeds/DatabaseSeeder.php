<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call(CourseSeeder::class);
        $this->call(CourseRatingSeeder::class);
        $this->call(CourseReviewSeeder::class);
        $this->call(CourseStateSeeder::class);
        $this->call(CoursestatesSeeder::class);
        $this->call(StaffGroupSeeder::class);
        $this->call(RolesSeeder::class);
        $this->call(CategorySeeder::class);
    }
}
