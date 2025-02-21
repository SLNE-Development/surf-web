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
        Schema::create('blog_meta_data', function (Blueprint $table) {
            $table->id();
            $table->foreignId("blog_post_id")->constrained()->onDelete("cascade");

            $table->string("title", 100);
            $table->string("description", 150);
            $table->longText("image");

            $table->datetimes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blog_meta_data');
    }
};
