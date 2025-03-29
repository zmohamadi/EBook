<?php

namespace Database\Seeders\Book;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BookCategorySeeder extends Seeder
{
    public function run()
    {
        // داده‌های نمونه برای جدول book_categories
        $categories = [
            [
                'book_id' => '1',
                'category_id' => '1',
            ],
            [
                'book_id' => '2',
                'category_id' => '1',
            ],
            [
                'book_id' => '3',
                'category_id' => '1',
            ],
            [
                'book_id' => '4',
                'category_id' => '1',
            ],
            [
                'book_id' => '5',
                'category_id' => '2',
            ],
            [
                'book_id' => '6',
                'category_id' => '2',
            ],
            [
                'book_id' => '7',
                'category_id' => '2',
            ],
            [
                'book_id' => '8',
                'category_id' => '2',
            ],
            [
                'book_id' => '9',
                'category_id' => '3',
            ],
            [
                'book_id' => '10',
                'category_id' => '3',
            ],
            [
                'book_id' => '11',
                'category_id' => '3',
            ],
            [
                'book_id' => '12',
                'category_id' => '3',
            ],
        ];

        // درج داده‌های نمونه در جدول book_categories
        DB::table('book_category')->insert($categories);
    }
}