<?php

namespace Database\Seeders\Content;

use Illuminate\Database\Seeder;
use Models\Content\ContactUs;

class ContactUsSeeder extends Seeder
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
                "sender_name" => "علی رضایی",
                "sender_email" => "ali.rezaei@gmail.com",
                "subject" => "مشکل در خرید کتاب",
                "responder_id" => "1",
                "comment" => "در هنگام خرید کتاب صوتی با خطای پرداخت مواجه شدم. لطفا راهنمایی کنید.",
                "reply" => "با سلام، لطفا از اتصال اینترنت خود اطمینان حاصل کنید و مجددا تلاش نمایید. در صورت بروز مشکل مجدد، با پشتیبانی تماس بگیرید.",
                "lang" => "fa",
                "status_id" => "1"
            ],
            [
                "sender_name" => "فاطمه محمدی",
                "sender_email" => "fatemeh.mohammadi@gmail.com",
                "subject" => "پیشنهاد کتاب",
                "responder_id" => "1",
                "comment" => "آیا امکان اضافه کردن کتاب‌های جدید به سایت وجود دارد؟",
                "reply" => "با سلام، بله. ما به طور مداوم کتاب‌های جدید را به مجموعه اضافه می‌کنیم. پیشنهادات شما نیز می‌تواند در این فرآیند موثر باشد.",
                "lang" => "fa",
                "status_id" => "1"
            ],
            [
                "sender_name" => "محمد حسینی",
                "sender_email" => "mohammad.hosseini@gmail.com",
                "subject" => "مشکل در دانلود کتاب",
                "responder_id" => "1",
                "comment" => "پس از خرید کتاب متنی، امکان دانلود آن وجود ندارد. لطفا بررسی کنید.",
                "reply" => "با سلام، لطفا از بخش کتابخانه خود اقدام به دانلود نمایید. در صورت بروز مشکل، با پشتیبانی تماس بگیرید.",
                "lang" => "fa",
                "status_id" => "1"
            ],
            [
                "sender_name" => "زهرا کریمی",
                "sender_email" => "zahra.karimi@gmail.com",
                "subject" => "نظرسنجی",
                "responder_id" => "1",
                "comment" => "آیا امکان اضافه کردن بخش نظرسنجی برای کتاب‌ها وجود دارد؟",
                "reply" => "با سلام، پیشنهاد شما ثبت شد و در آینده نزدیک این قابلیت به سایت اضافه خواهد شد.",
                "lang" => "fa",
                "status_id" => "1"
            ],
            [
                "sender_name" => "رضا احمدی",
                "sender_email" => "reza.ahmadi@gmail.com",
                "subject" => "اشتراک ماهانه",
                "responder_id" => "1",
                "comment" => "آیا امکان تمدید خودکار اشتراک ماهانه وجود دارد؟",
                "reply" => "با سلام، بله. شما می‌توانید در بخش تنظیمات حساب کاربری خود، تمدید خودکار اشتراک را فعال کنید.",
                "lang" => "fa",
                "status_id" => "1"
            ],
        ];

        foreach ($items as $item) {
            ContactUs::create($item);
        }
    }
}