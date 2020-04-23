<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSuggestApproveFieldsToCoursesTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::table('courses', function (Blueprint $table) {
      $table->date('approved_date')->after('enddate')->nullable();
      $table->string('approved_by')->after('enddate')->nullable();
      $table->boolean('approved')->after('enddate')->default(1);
      $table->date('suggested_date')->after('enddate')->nullable();
      $table->string('suggested_by')->after('enddate')->nullable();
      $table->boolean('suggested')->after('enddate')->default(0);
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::table('courses', function (Blueprint $table) {
      $table->dropColumn('suggested');
      $table->dropColumn('approved');
      $table->dropColumn('suggested_by');
      $table->dropColumn('approved_by');
      $table->dropColumn('suggested_date');
      $table->dropColumn('approved_date');
    });
  }
}
