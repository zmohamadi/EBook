<?php

namespace Database\Seeders\Content;

use Illuminate\Database\Seeder;
use Models\Content\Banner;

class BannerSeeder extends Seeder
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
                "title"=>"معرفی قسمت ها",
                "position_id"  => "1",
                "image"  => "1.jpg",
                "link"  => "main.com",
                "lang"  => "fa",
                "status_id" => "1"
            ],
        ];
        foreach($items as $item)
        {
            Banner::create($item);
        }
    }
}
