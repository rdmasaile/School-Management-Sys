<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Course;
use App\Models\User;

class Group extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {   
        //
        Schema::create('groups', function (Blueprint $table) {
            $table->id();
            $table->string('GroupName')->unique();
            $table->foreignIdFor(Course::class,'CourseCode')->unique();
            $table->timestamps();

            $table->index('CourseCode');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('group');
    }
}
