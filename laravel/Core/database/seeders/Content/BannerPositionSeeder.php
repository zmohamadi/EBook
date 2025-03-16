<?php

namespace Database\Seeders\Content;

use Illuminate\Database\Seeder;
use Models\Content\BannerPosition;

class BannerPositionSeeder extends Seeder
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
                "title_fa"=>"اسلایدر اصلی",
                "title_en"=>"slider main",
                "title_ar"=>"اسلایدر اصلی",
                "code"  => "1",
                "dimensions"  => "10*20",
                "status_id" => "1"
            ]
        ];
        foreach($items as $item)
        {
            BannerPosition::create($item);
        }
    }
}
