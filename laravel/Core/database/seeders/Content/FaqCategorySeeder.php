<?php

namespace Database\Seeders\Content;

use Illuminate\Database\Seeder;
use Models\Content\FaqCategory;

class FaqCategorySeeder extends Seeder
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
                "title_fa" => "درباره Book",
                "title_en" => "About Book",
                "title_ar" => "عن Book",
                "order" => "1",
                "status_id" => "1"
            ],
            [
                "title_fa" => "خرید و فروش",
                "title_en" => "Purchase and Sales",
                "title_ar" => "الشراء والبيع",
                "order" => "2",
                "status_id" => "1"
            ],
            [
                "title_fa" => "پشتیبانی",
                "title_en" => "Support",
                "title_ar" => "الدعم",
                "order" => "3",
                "status_id" => "1"
            ],
            [
                "title_fa" => "اشتراک‌گذاری",
                "title_en" => "Sharing",
                "title_ar" => "المشاركة",
                "order" => "4",
                "status_id" => "1"
            ],
        ];

        foreach ($items as $item) {
            FaqCategory::create($item);
        }
    }
}