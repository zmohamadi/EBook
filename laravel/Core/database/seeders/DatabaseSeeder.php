<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Book
            $this->call([
                \Database\Seeders\Book\PublisherSeeder::class,
                \Database\Seeders\Book\CategorySeeder::class,
                \Database\Seeders\Book\BookSeeder::class,
                // \Database\Seeders\Book\BookCategorySeeder::class,
                \Database\Seeders\Book\ReviewSeeder::class,
                \Database\Seeders\Book\ExcerptSeeder::class,
            ]);
        // Person
            // $this->call(\Database\Seeders\Person\RoleSeeder::class);
            $this->call(\Database\Seeders\Person\UserSeeder::class);
        // Base
            // $this->call(\Database\Seeders\Base\KeywordSeeder::class);
            // $this->call(\Database\Seeders\Base\LanguageSeeder::class);
            // $this->call(\Database\Seeders\Base\StatusSeeder::class);
         // Content
            $this->call(\Database\Seeders\Content\BlogSeeder::class);
            $this->call(\Database\Seeders\Content\BlogSubjectSeeder::class);
            $this->call(\Database\Seeders\Content\ContactUsSeeder::class);
            $this->call(\Database\Seeders\Content\SiteTextSeeder::class);
            $this->call(\Database\Seeders\Content\SliderSeeder::class);
            $this->call(\Database\Seeders\Content\FaqCategorySeeder::class);
            $this->call(\Database\Seeders\Content\FaqSeeder::class);
            $this->call(\Database\Seeders\Content\BannerPositionSeeder::class);
            $this->call(\Database\Seeders\Content\BannerSeeder::class);
    }
}
