<?php

namespace Database\Factories;

use Models\Book\BookCreator;
use Illuminate\Database\Eloquent\Factories\Factory;

class BookCreatorFactory extends Factory
{
    protected $model = BookCreator::class;

    public function definition()
    {
        return [
            'book_id' => $this->faker->numberBetween(1, 50), // شناسه کتاب (بین ۱ تا ۵۰)
            'creator_id' => $this->faker->numberBetween(1, 20), // شناسه پدیدآورنده (بین ۱ تا ۲۰)
            'role_id' => $this->faker->numberBetween(1, 5), // شناسه نقش (بین ۱ تا ۵)
        ];
    }
}