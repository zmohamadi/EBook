<?php

namespace Database\Factories;

use Models\Book\Book;
use Illuminate\Database\Eloquent\Factories\Factory;

class BookFactory extends Factory
{
    protected $model = Book::class;

    public function definition()
    {
        return [
            'title' => $this->faker->sentence,
            'publisher_id' => $this->faker->numberBetween(1, 10),
            'publication_year' => $this->faker->year,
            'original_price' => $this->faker->randomFloat(2, 10, 100),
            'discounted_price' => $this->faker->randomFloat(2, 5, 90),
            'introduction' => $this->faker->paragraph,
            'recommended_audience' => $this->faker->sentence,
            'excerpt' => $this->faker->paragraph,
            'sample_file' => $this->faker->url,
            'file' => $this->faker->url,
            'type' => $this->faker->randomElement(['text', 'audio']),
            'file_type' => $this->faker->randomElement(['EPUB', 'PDF', 'MP3', 'WAV']),
            'page_count' => $this->faker->numberBetween(50, 500),
            'duration' => $this->faker->numberBetween(300, 7200),
            'file_size' => $this->faker->numberBetween(1000000, 10000000),
            'publication_status' => $this->faker->randomElement(['published', 'draft']),
            'image' => $this->faker->imageUrl(),
            'rating' => $this->faker->randomFloat(2, 1, 5),
            'rating_count' => $this->faker->numberBetween(0, 1000),
            'view_count' => $this->faker->numberBetween(0, 10000),
            'lang' => 'fa',
            'status_id' => 1,
        ];
    }
}