<?php

namespace Database\Seeders\Book;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ExcerptSeeder extends Seeder
{
    public function run()
    {
        // داده‌های نمونه برای جدول book_excerpts
        $excerpts = [
            [
                'book_id' => 1, // شناسه کتاب مربوطه
                'excerpt' => 'همه بزرگ‌سالان ابتدا کودک بوده‌اند، اما تعداد کمی از آن‌ها این را به یاد می‌آورند.',
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'book_id' => 2, // شناسه کتاب مربوطه
                'excerpt' => 'سال‌ها بعد، مقابل جوخه‌ی اعدام، سرهنگ آئورلیانو بوئندیا بعدازظهر دوردستی را به یاد می‌آورد که پدرش او را برای کشف یخ برد.',
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'book_id' => 3, // شناسه کتاب مربوطه
                'excerpt' => 'ما اغلب فکر می‌کنیم که تصمیم‌هایمان منطقی هستند، اما در واقع تحت تأثیر خطاهای شناختی قرار داریم.',
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'book_id' => 4, // شناسه کتاب مربوطه
                'excerpt' => 'جنگ صلح است، آزادی بردگی است، نادانی قدرت است.',
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'book_id' => 5, // شناسه کتاب مربوطه
                'excerpt' => 'هر چیزی را می‌توان از انسان گرفت، به جز یک چیز: آزادی انتخاب نحوه برخورد با شرایط.',
                'lang' => 'fa',
                'status_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        // درج داده‌های نمونه در جدول book_excerpts
        DB::table('book_excerpts')->insert($excerpts);
    }
}