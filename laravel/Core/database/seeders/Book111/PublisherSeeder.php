<?php

namespace Database\Seeders\Book;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PublisherSeeder extends Seeder
{
    public function run()
    {
        // داده‌های نمونه برای جدول book_publishers
        $publishers = [
            [
                'name' => 'انتشارات امیرکبیر',
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'انتشارات چشمه',
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'انتشارات نیلوفر',
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'انتشارات ققنوس',
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'انتشارات کارنامه',
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'انتشارات هرمس',
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'انتشارات مرکز',
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'انتشارات علمی و فرهنگی',
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'انتشارات نگاه',
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'انتشارات کتاب پارسه',
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        // درج داده‌های نمونه در جدول book_publishers
        DB::table('book_publishers')->insert($publishers);
    }
}