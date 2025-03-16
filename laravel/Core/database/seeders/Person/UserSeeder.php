<?php

namespace Database\Seeders\Person;

use Illuminate\Database\Seeder;
use Models\Person\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            // مدیر ارشد
            [
                "firstname" => "سایان",
                "lastname" => "مدیر ارشد",
                "role_id" => 1,
                "mobile" => "09191964745",
                "password" => bcrypt("09191964745"),
                "status_id" => 1,
                "lang" => "fa",
                "photo" => "admin.jpg",
            ],

            // کاربران عادی
            [
                "firstname" => "علی",
                "lastname" => "محمدی",
                "role_id" => 0,
                "mobile" => "09111111111",
                "password" => bcrypt("09111111111"),
                "status_id" => 1,
                "lang" => "fa",
                "photo" => "user1.jpg",
            ],
            [
                "firstname" => "فاطمه",
                "lastname" => "رضایی",
                "role_id" => 0,
                "mobile" => "09111111112",
                "password" => bcrypt("09111111112"),
                "status_id" => 1,
                "lang" => "fa",
                "photo" => "user2.jpg",
            ],

            // مترجمان
            [
                "firstname" => "محمد",
                "lastname" => "فروغی",
                "role_id" => 1,
                "mobile" => "09122222222",
                "password" => bcrypt("09122222222"),
                "status_id" => 1,
                "lang" => "fa",
                "photo" => "translator1.jpg",
                "translator" => 1, // مترجم
            ],
            [
                "firstname" => "زهرا",
                "lastname" => "اکبری",
                "role_id" => 1,
                "mobile" => "09122222223",
                "password" => bcrypt("09122222223"),
                "status_id" => 1,
                "lang" => "fa",
                "photo" => "translator2.jpg",
                "translator" => 1, // مترجم
            ],

            // راویان
            [
                "firstname" => "حسین",
                "lastname" => "مهدوی",
                "role_id" => 1,
                "mobile" => "09133333333",
                "password" => bcrypt("09133333333"),
                "status_id" => 1,
                "lang" => "fa",
                "photo" => "narrator1.jpg",
                "narrator" => 1, // راوی
            ],
            [
                "firstname" => "نرگس",
                "lastname" => "کریمی",
                "role_id" => 1,
                "mobile" => "09133333334",
                "password" => bcrypt("09133333334"),
                "status_id" => 1,
                "lang" => "fa",
                "photo" => "narrator2.jpg",
                "narrator" => 1, // راوی
            ],

            // نویسندگان
            [
                "firstname" => "صادق",
                "lastname" => "هدایت",
                "role_id" => 1,
                "mobile" => "09144444444",
                "password" => bcrypt("09144444444"),
                "status_id" => 1,
                "lang" => "fa",
                "photo" => "author1.jpg",
                "author" => 1, // نویسنده
            ],
            [
                "firstname" => "سیمین",
                "lastname" => "بهبهانی",
                "role_id" => 1,
                "mobile" => "09144444445",
                "password" => bcrypt("09144444445"),
                "status_id" => 1,
                "lang" => "fa",
                "photo" => "author2.jpg",
                "author" => 1, // نویسنده
            ],
        ];

        foreach ($items as $item) {
            User::create($item);
        }
    }
}