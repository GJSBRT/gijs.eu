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
        Schema::create('recipes', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();

            $table->string('title');
            $table->longText('description');
            $table->longText('article');
            $table->longText('image');

            $table->enum('difficulty', ['easy', 'medium', 'hard']);
            $table->integer('duration');
            $table->float('price');
            $table->float('rating');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recipes');
    }
};
