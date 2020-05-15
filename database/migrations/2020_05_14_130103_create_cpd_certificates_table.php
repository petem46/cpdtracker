<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCPDCertificatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cpdcertificates', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('course_id');
            $table->integer('user_id');
            $table->string('name');
            $table->string('filename');
            $table->string('path');
            $table->string('extension');
            $table->timestamps();
            $table->softDeletes();
            // $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cpdcertificates');
    }
}
