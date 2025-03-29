<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{

    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->string('firstname')->nullable()->comment("نام");
            $table->string('lastname')->nullable()->comment("نام خانوادگی");
            $table->string('mobile')->unique()->nullable()->comment("شماره همراه");
            $table->text('biography')->nullable()->comment('زندگی‌نامه');
            $table->string('birth_date', 10)->nullable()->comment('تاریخ تولد'); // تغییر به string
            $table->string('death_date', 10)->nullable()->comment('تاریخ درگذشت'); // تغییر به string
            $table->string('nationality')->nullable()->comment('ملیت');
            $table->string('password')->nullable()->comment("رمز عبور");
            $table->tinyInteger('role_id')->default(0)->comment("نقش کاربر");
            $table->boolean('narrator',1)->default(0)->comment("آیا راوی است ؟");
            $table->boolean('author',1)->default(0)->comment("آیا نویسنده است ؟");
            $table->boolean('translator',1)->default(0)->comment("آیا مترجم است ؟");
            $table->string('photo')->nullable()->comment("تصویر");
            $table->string('lang', 2)->default("fa")->comment("زبان");
            $table->integer('status_id')->default(1)->comment("شناسه وضعیت فعال/غیر فعال");
            $table->integer('publishedBooks')->default(0)->comment("تعداد کتابهایی که نوشته");
            $table->softDeletes();
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
