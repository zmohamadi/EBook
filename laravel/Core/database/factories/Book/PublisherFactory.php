<?php

namespace Database\Factories;

use Models\Book\Publisher;
use Illuminate\Database\Eloquent\Factories\Factory;

class PublisherFactory extends Factory
{
    protected $model = Publisher::class;

    public function definition()
    {
        return [
            'name' => $this->faker->company,
            'lang' => 'fa',
            'status_id' => 1,
        ];
    }
}