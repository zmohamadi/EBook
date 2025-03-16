<?php

namespace Database\Factories;

use Models\Book\Excerpt;
use Illuminate\Database\Eloquent\Factories\Factory;

class ExcerptFactory extends Factory
{
    protected $model = Excerpt::class;

    public function definition()
    {
        return [
            'book_id' => $this->faker->numberBetween(1, 50),
            'excerpt' => $this->faker->paragraph,
            'lang' => 'fa',
            'status_id' => 1,
        ];
    }
}