<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('core_users', function (Blueprint $table) {
            $table->id();
            $table->char("uuid", 36)->unique();
            $table->dateTime("last_seen")->nullable();
            $table->string("last_server")->nullable();
            $table->string("last_name")->nullable();
            $table->datetimes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('core_users');
    }
};
