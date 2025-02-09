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
        Schema::create('server_team_member_promotions', function (Blueprint $table) {
            $table->id();
            $table->string("old_role")->nullable();
            $table->string("new_role");
            $table->foreignId("server_team_member_id")->constrained("server_team_members")->onDelete("cascade");
            $table->foreignId("promoted_by_id")->constrained("users")->onDelete("cascade");
            $table->datetimes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('server_team_member_promotions');
    }
};
