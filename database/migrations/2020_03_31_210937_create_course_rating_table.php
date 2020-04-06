<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCourseRatingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('course_ratings', function (Blueprint $table) {
          $table->id();
          $table->foreignId('course_id')->constrained();
          // $table->foreignId('user_id')->constrained();
          // $table->integer('course_id');
          $table->integer('user_id');
          $table->float('rating');
          $table->timestamps();

          $table->unique(['course_id','user_id']);

        });


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('course_ratings');
    }
}
