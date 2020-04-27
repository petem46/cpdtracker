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
        $this->call(UserSeeder::class);
        $this->call(CourseSeeder::class);
        $this->call(CourseRatingSeeder::class);
        $this->call(CourseReviewSeeder::class);
        $this->call(CourseProgressSeeder::class);
        $this->call(CoursestatesSeeder::class);
        $this->call(StaffGroupSeeder::class);
        $this->call(RolesSeeder::class);
        $this->call(CategorySeeder::class);
        $this->call(CategoryCourseSeeder::class);
    }
}
