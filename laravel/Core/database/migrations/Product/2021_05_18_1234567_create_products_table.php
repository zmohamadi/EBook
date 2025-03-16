<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{

    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->engine  = 'MyISAM';
            $table->charset = 'utf8';
            $table->collation = 'utf8_persian_ci';
            $table->id();
            $table->string('name')->nullable()->comment("نام");
            $table->integer('category_id')->nullable()->comment("شناسه دسته بندی محصول");
            $table->integer('parent_category')->nullable()->comment("شناسه دسته بندی اصلی محصول");
            $table->integer('brand_id')->nullable()->comment("شناسه برند محصول");
            $table->integer('price')->nullable()->comment("قیمت ");
            $table->integer('discount')->nullable()->comment("درصد تخفیف");
            $table->integer('discount_price')->nullable()->comment("قیمت تخفیف خورده");
            $table->string('image')->nullable()->comment("تصویر");
            $table->string('img')->nullable()->comment('چندین عکس');
            $table->string('video')->nullable()->comment('چندین ویدئو');
            $table->string('document')->nullable()->comment('چندین فایل داکیومنت');
            $table->text('summary')->nullable()->comment("خلاصه");
            $table->text('review')->nullable()->comment("نقد وبررسی");
            $table->text('usage')->nullable()->comment("نحوه استفاده و مصرف");
            $table->text('description')->nullable()->comment("توضیحات");
            $table->integer('count_view')->default(0)->comment("تعداد بازدید");
            $table->integer('count_sell')->default(0)->comment("تعداد فروش");
            $table->integer('count_like')->default(0)->comment("تعداد علاقه مندی");
            $table->string('lang')->default("fa")->comment("زبان");
            $table->integer('status_id')->default(1)->comment("شناسه وضعیت فعال/غیر فعال");
            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('products');
    }
}
