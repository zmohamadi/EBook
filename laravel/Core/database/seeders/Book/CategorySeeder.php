<?php

namespace Database\Seeders\Book;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    public function run()
    {
        // داده‌های نمونه برای جدول book_categories
        $categories = [
            [
                'name' => 'رمان',
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'تاریخی',
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'علمی-تخیلی',
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'فلسفه',
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'روانشناسی',
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'توسعه فردی',
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'ادبیات کلاسیک',
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'داستان کوتاه',
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'هنر و سینما',
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'کودک و نوجوان',
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        // درج داده‌های نمونه در جدول book_categories
        DB::table('book_categories')->insert($categories);
    }
}