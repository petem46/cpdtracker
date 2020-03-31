<?php

use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('category')->insert(array(
        array(
          'name' => 'Pastoral & Wellbeing'
        ),
        array(
          'name' => 'Special Educational Needs'
        ),
        array(
          'name' => 'Education Technology'
        ),
        array(
          'name' => 'The Arts'
        ),
        array(
          'name' => 'Literacy'
        ),
        array(
          'name' => 'MFL'
        ),
        array(
          'name' => 'STEM'
        ),
        array(
          'name' => 'RE'
        ),
        array(
          'name' => 'Research'
        ),
        array(
          'name' => 'Leadership'
        ),
        array(
          'name' => 'Teaching & Learning'
        ),
        array(
          'name' => 'Early Career Teachers'
        ),
        array(
          'name' => 'All Staff'
        ),
      ));
      }
}
