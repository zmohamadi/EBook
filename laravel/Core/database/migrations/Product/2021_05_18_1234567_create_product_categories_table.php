<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductCategoriesTable extends Migration
{

    public function up()
    {
        Schema::create('product_categories', function (Blueprint $table) {
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->string('title_fa')->nullable()->comment("عنوان");
            $table->string('title_en')->nullable()->comment("عنوان");
            $table->integer('parent_id')->default(0)->comment("شناسه دسته بندی اصلی");
            $table->string('image')->nullable()->comment("تصویر");
            $table->integer('count_child')->default(0)->comment("تعداد دسته بندی سطح دو");
            $table->integer('count_product')->default(0)->comment("تعداد محصولات در دسته بندی");
            $table->integer('status_id')->default(1)->comment("شناسه وضعیت فعال/غیر فعال");
            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('product_categories');
    }
}
