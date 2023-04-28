<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateManufacturersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('manufacturers', function (Blueprint $table) {
            $table->id();
            $table->string('company')->nullable();
            $table->string('tag')->nullable();
            $table->string('contact')->nullable();
            $table->string('phone')->nullable();
            $table->string('phone_ext')->nullable();
            $table->string('phone_other_1')->nullable();
            $table->string('phone_other_2')->nullable();
            $table->string('phone_other_3')->nullable();
            $table->string('fax')->nullable();
            $table->string('toll_free')->nullable();
            $table->string('toll_free_ext')->nullable();
            $table->string('cell')->nullable();
            $table->string('home_phone')->nullable();
            $table->string('department')->nullable();
            $table->string('address')->nullable();
            $table->string('address_line_2')->nullable();
            $table->string('address_line_3')->nullable();
            $table->string('city')->nullable();
            $table->string('province')->nullable();
            $table->string('country')->nullable();
            $table->string('postal_code')->nullable();
            $table->string('email')->nullable();
            $table->string('email_other_1')->nullable();
            $table->string('email_other_2')->nullable();
            $table->string('email_other_3')->nullable();
            $table->string('email_other_4')->nullable();
            $table->string('email_other_5')->nullable();
            $table->string('website')->nullable();
            $table->string('shipping_acc')->nullable();
            $table->string('notes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('manufacturers');
    }
}
