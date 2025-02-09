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
        Schema::create('server_team_member_notes', function (Blueprint $table) {
            $table->id();
            $table->longText("note");
            $table->foreignId("server_team_member_id")->constrained("server_team_members")->onDelete("cascade");
            $table->foreignId("created_by_id")->constrained("users")->onDelete("cascade");
            $table->datetimes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('server_team_member_notes');
    }
};
