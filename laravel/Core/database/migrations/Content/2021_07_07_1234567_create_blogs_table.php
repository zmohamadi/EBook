<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBlogsTable extends Migration
{

    public function up()
    {
        Schema::create('blogs', function (Blueprint $table) {
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->string('title', 200)->nullable()->comment('عنوان');
            $table->integer('subject_id')->nullable()->comment('شناسه موضوع مقاله');
            $table->integer('creator_id')->default(0)->comment('شناسه کاربر ثبت کننده');
            $table->integer('editor_id')->default(0)->comment('شناسه کاربر ویرایش کننده');
            $table->string('thumb')->nullable()->comment('بند انگشتی');
            $table->string('img')->nullable()->comment('چندین عکس');
            $table->string('video')->nullable()->comment('چندین ویدئو');
            $table->string('document')->nullable()->comment('چندین فایل داکیومنت');
            $table->text('summary')->nullable()->comment('متن خلاصه');
            $table->text('text')->nullable()->comment('متن توضیحات');
            $table->integer('count_comment')->default(0)->comment('تعداد پیام');
            $table->integer('count_comment_waiting')->default(0)->comment('تعداد پیام نیاز به بررسی');
            $table->integer('count_comment_confirmed')->default(0)->comment('تعداد پیام تأیید شده');
            $table->integer('count_comment_rejected')->default(0)->comment('تعداد پیام رد شده');
            $table->integer('count_view')->default(0)->comment('تعداد بازدید');
            $table->string('lang', 2)->default('fa')->comment('زبان');
            $table->integer('status_id')->default(1)->comment('شناسه وضعیت فعال/غیر فعال');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('blogs');
    }
}
