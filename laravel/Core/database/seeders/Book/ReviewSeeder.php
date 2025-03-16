<?php

namespace Database\Seeders\Book;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ReviewSeeder extends Seeder
{
    public function run()
    {
        // داده‌های نمونه برای جدول book_reviews
        $reviews = [
            [
                'book_id' => 1, // شناسه کتاب مربوطه
                'comment' => 'این کتاب بسیار تأثیرگذار بود و من را به فکر فرو برد.',
                'rating' => 5,
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'book_id' => 2, // شناسه کتاب مربوطه
                'comment' => 'رمانی فوق‌العاده با داستانی پیچیده و جذاب.',
                'rating' => 4,
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'book_id' => 3, // شناسه کتاب مربوطه
                'comment' => 'کتابی عالی برای درک بهتر خطاهای شناختی.',
                'rating' => 5,
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'book_id' => 4, // شناسه کتاب مربوطه
                'comment' => 'کتابی ترسناک و در عین حال واقع‌گرایانه درباره آینده.',
                'rating' => 4,
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'book_id' => 5, // شناسه کتاب مربوطه
                'comment' => 'این کتاب دیدگاه من را نسبت به زندگی کاملاً تغییر داد.',
                'rating' => 5,
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        // درج داده‌های نمونه در جدول book_reviews
        DB::table('book_reviews')->insert($reviews);
    }
}