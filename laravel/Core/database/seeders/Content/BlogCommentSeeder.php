<?php

namespace Database\Seeders\Content;

use Illuminate\Database\Seeder;
use Models\Content\BlogComment;

class BlogCommentSeeder extends Seeder
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
                "sender_name" => "کاربر سایان",
                "sender_email" => "user@gmail.com",
                "blog_id" => "1",
                "comment" => "مطالب بسیار مفید و دلچسب برای کاربر می باشد.",
                "confirm_id" => "0",
                "lang" => "fa",
                "status_id" => "1"
            ],
          
        ];
        foreach($items as $item)
        {
            BlogComment::create($item);
        }
    }
}
