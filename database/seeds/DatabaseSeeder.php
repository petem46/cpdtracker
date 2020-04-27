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

    // insert into category_course
    // select null, category_id, id as course_id, null, null, null from courses;

    // update courses set approved_date = '2020-04-01' where approved_date is null
    // ALTER TABLE `courses` CHANGE `category_id` `category_id` INT(11) NULL;
    // update courses set category_id = null;


  }



