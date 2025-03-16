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
        Schema::create('books', function (Blueprint $table) {
            $table->engine = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->string('title')->comment('عنوان کتاب');
            $table->foreignId('publisher_id')->constrained('publishers')->onDelete('cascade')->comment('شناسه ناشر');
            $table->string('publication_year', 10)->comment('سال انتشار'); // تغییر به string
            $table->decimal('original_price', 10, 2)->comment('قیمت اصلی');
            $table->decimal('discounted_price', 10, 2)->nullable()->comment('قیمت با تخفیف');
            $table->text('introduction')->comment('معرفی کتاب');
            $table->text('recommended_audience')->comment('پیشنهاد به چه کسانی');
            $table->text('excerpt')->comment('بخشی از متن کتاب');
            $table->string('sample_file')->nullable()->comment('فایل نمونه');
            $table->string('file')->nullable()->comment('فایل اصلی');
            $table->enum('type', ['text', 'audio'])->comment('نوع کتاب: متنی یا صوتی');
            $table->enum('file_type', ['EPUB', 'PDF', 'MP3', 'WAV'])->nullable()->comment('نوع فایل');
            $table->integer('page_count')->nullable()->comment('تعداد صفحات (برای کتاب‌های متنی)');
            $table->integer('duration')->nullable()->comment('زمان به ثانیه (برای کتاب‌های صوتی)');
            $table->integer('file_size')->nullable()->comment('حجم فایل به بایت');
            $table->string('publication_status')->comment('وضعیت انتشار');
            $table->string('image')->nullable()->comment('تصویر کتاب');
            $table->decimal('rating', 3, 2)->default(0)->comment('میانگین امتیاز');
            $table->integer('rating_count')->default(0)->comment('تعداد امتیاز دهندگان');
            $table->integer('view_count')->default(0)->comment('تعداد بازدیدکنندگان');
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
        Schema::dropIfExists('books');

    }
};
