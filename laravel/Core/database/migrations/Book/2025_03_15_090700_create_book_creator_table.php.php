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
        Schema::create('book_user', function (Blueprint $table) {
            $table->engine = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->foreignId('book_id')->constrained('books')->onDelete('cascade')->comment('شناسه کتاب');
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade')->comment('شناسه پدیدآورنده');
            $table->foreignId('type')->constrained('roles')->onDelete('cascade')->comment('شناسه نقش');
            $table->primary(['book_id', 'user_id', 'type']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('book_user');

    }
};
