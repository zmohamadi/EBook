<?php

namespace Database\Factories;

use Models\Book\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
    protected $model = Category::class;

    public function definition()
    {
        return [
            'name' => $this->faker->word,
            'lang' => 'fa',
            'status_id' => 1,
        ];
    }
}