<?php

namespace Database\Seeders\Content;

use Illuminate\Database\Seeder;
use Models\Content\Slider;

class SliderSeeder extends Seeder
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
                "title" => "اصلی",
                "title2" => "اصلی",
                "mobile" => "1",
                "link" => "home.ir",
                "image" => "addvertise.png",
                "text" => "اصلی",
                "order" => "1",
                "lang" => "fa",
                "status_id" => "1"
            ],
        ];
        foreach($items as $item)
        {
            Slider::create($item);
        }
    }
}
