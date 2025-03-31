<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('punish_bans', function (Blueprint $table) {
            $table->id();
            $table->char("punishment_id", 8);
            $table->char("punished_uuid", 36);
            $table->string("server")->nullable();
            $table->boolean("security_ban")->default(false);
            $table->boolean("permanent")->default(false);
            $table->boolean("raw_ban")->default(false);
            $table->longText("reason");
            $table->dateTime("expiration_date")->nullable();
            $table->char("issuer_uuid", 36)->nullable();
            $table->dateTime("punishment_date")->nullable();
            $table->boolean("unpunished")->default(false);
            $table->dateTime("unpunished_date")->nullable();
            $table->char("unpunished_issuer_id", 36)->nullable();
            $table->datetimes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('punish_bans');
    }
};
