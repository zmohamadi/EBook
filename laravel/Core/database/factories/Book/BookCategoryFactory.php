<?php

namespace Database\Factories;

use Models\Book\BookCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

class BookCategoryFactory extends Factory
{
    protected $model = BookCategory::class;

    public function definition()
    {
        return [
            'book_id' => $this->faker->numberBetween(1, 50), // شناسه کتاب (بین ۱ تا ۵۰)
            'category_id' => $this->faker->numberBetween(1, 15), // شناسه دسته‌بندی (بین ۱ تا ۱۵)
        ];
    }
}