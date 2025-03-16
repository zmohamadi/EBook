<?php

namespace Database\Seeders\Content;

use Illuminate\Database\Seeder;
use Models\Content\BlogSubject;

class BlogSubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            
            [
                "title_fa" => "کتاب‌های صوتی",
                "title_en" => "Audio Books",
                "title_ar" => "الكتب الصوتية",
                "order" => "2",
                "status_id" => "1"
            ],
            [
                "title_fa" => "کتاب‌های الکترونیکی",
                "title_en" => "E-Books",
                "title_ar" => "الكتب الإلكترونية",
                "order" => "3",
                "status_id" => "1"
            ],
            [
                "title_fa" => "کتابخوانی",
                "title_en" => "Reading",
                "title_ar" => "القراءة",
                "order" => "4",
                "status_id" => "1"
            ],
        ];

        foreach ($items as $item) {
            BlogSubject::create($item);
        }
    }
}