<?php

namespace Database\Factories;

use Models\Book\Review;
use Illuminate\Database\Eloquent\Factories\Factory;

class ReviewFactory extends Factory
{
    protected $model = Review::class;

    public function definition()
    {
        return [
            'book_id' => $this->faker->numberBetween(1, 50),
            'comment' => $this->faker->paragraph,
            'rating' => $this->faker->numberBetween(1, 5),
            'lang' => 'fa',
            'status_id' => 1,
        ];
    }
}