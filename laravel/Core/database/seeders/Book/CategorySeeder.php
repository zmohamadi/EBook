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
                'name' => 'پژوهشی',
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'آموزشی',
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'فرهنگی - ترویجی',
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'مجموعه کتاب',
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