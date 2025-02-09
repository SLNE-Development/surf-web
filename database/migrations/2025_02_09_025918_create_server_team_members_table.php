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
        Schema::create('server_team_members', function (Blueprint $table) {
            $table->id();
            $table->string("nickname");
            $table->string("discord_id", 20)->unique();
            $table->char("minecraft_uuid", 36)->unique();
            $table->date("date_of_birth");
            $table->string("first_name");
            $table->enum("gender", ["MALE", "FEMALE", "OTHER"]);
            $table->string("personal_email")->unique();
            $table->string("phone_number")->unique();
            $table->date("recruitment_date");
            $table->string("team_email")->unique();
            $table->date("termination_date")->nullable();

            $table->foreignId("user_id")->unique()->constrained("users")->onDelete("cascade");
            $table->datetimes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('server_team_members');
    }
};
