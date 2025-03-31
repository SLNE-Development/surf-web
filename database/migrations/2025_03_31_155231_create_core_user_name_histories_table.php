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
        Schema::create('core_user_name_histories', function (Blueprint $table) {
            $table->id();
            $table->char('name', 16);
            $table->foreignId('core_user_id')->constrained('core_users')->cascadeOnDelete()->cascadeOnUpdate();
            $table->datetimes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('core_user_name_histories');
    }
};
