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
        Schema::create('book_audiobook_files', function (Blueprint $table) {
            $table->engine = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->foreignId('book_id')->constrained('books')->onDelete('cascade')->comment('شناسه کتاب');
            $table->string('file')->comment('فایل صوتی');
            $table->integer('duration')->comment('زمان به ثانیه');
            $table->integer('file_size')->comment('حجم فایل به بایت');
            $table->string('lang', 2)->default('fa')->comment('زبان');
            $table->integer('status_id')->default(1)->comment('وضعیت فعال/غیرفعال');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('book_audiobook_files');

    }
};
