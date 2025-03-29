<?php

namespace Database\Seeders\Book;

use Models\Book\BookCategory;
use Illuminate\Database\Seeder;

class BookCategorySeeder extends Seeder
{
    public function run()
    {
        BookCategory::factory()->count(150)->create(); // ایجاد ۱۵۰ رابطه کتاب و دسته‌بندی
    }
}