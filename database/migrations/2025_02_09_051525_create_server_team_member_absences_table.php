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
        Schema::create('server_team_member_absences', function (Blueprint $table) {
            $table->id();
            $table->date("start_date");
            $table->date("end_date");
            $table->longText("reason");
            $table->foreignId("server_team_member_id")->constrained("server_team_members")->cascadeOnDelete();
            $table->datetimes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('server_team_member_absences');
    }
};
