<?php

$lang = [
    'yes' => 'بله',
    'no' => 'خیر',
    'open' => 'باز',
    'close' => 'بسته',
    'created_at' => 'تاریخ ثبت',
    'confirm_status' => 'وضعیت تایید',
    'last_login' => 'آخرین بازدید',
    'status_reply' => 'وضعیت پاسخ',
    'status_ticket' => 'وضعیت درخواست',
    'specifications' => 'مشخصات',
    'documents' => 'فایل ها',
    'videos' => 'ویدئوها',
    'not_check_comments' => 'پیام های نیاز به بررسی',
    'view_info' => 'مشاهده جزییات',
    'creator_record' => 'ثبت کننده',
    'editor_record' => 'ویرایش کننده',
    'to_answer' => 'پاسخ دادن',
    'text_comments_yes' => 'پیام های شما',
    'text_comments_no' => 'در حال حاضر پیامی ثبت نشده است',
    'edit_comment' => 'ویرایش پیام',
    'confirm' => 'تأیید',
    'rejected' => 'رد',
    'cancel' => 'انصراف',
    'reply_status' => 'وضعیت پاسخ',
    'comment_status' => 'وضعیت پیام',
    'media' => 'آپلود رسانه',
    'ticket_text' => 'متن درخواست',
    'ticket_reply' => 'جواب درخواست',
    'check_priority' => 'اولویت بررسی',
    'accept_format' => 'فرمت های آپلود',
    'evaluate' => 'امتیاز',
    'your_evaluate' => 'امتیاز شما',
    'comment' => 'پیام',
    'filter_ticket_user' => 'لطفا بعد از وارد کردن کاربر مورد نظر، Enter بزنید.',
    'notif' => 'پیام',

    // اضافه کردن ترجمه‌های جدید
    'publication_year' => 'سال انتشار',
    'introduction' => 'معرفی',
    'recommended_audience' => 'مخاطبان پیشنهادی',
    'excerpt' => 'گزیده',
    'publisher' => 'ناشر',
    'original_price' => 'قیمت اصلی',
    'discounted_price' => 'قیمت تخفیف‌خورده',
    'type' => 'نوع',
    'file_type' => 'نوع فایل',
    'page_count' => 'تعداد صفحات',
    'duration' => 'مدت زمان',
    'file_size' => 'حجم فایل',
    'publication_status' => 'وضعیت انتشار',
    'status_id' => 'شناسه وضعیت',
    'rating'=>'امتیاز',
    'view_count'=>'بازدید',
    'sample_file'=>'فایل نمونه',
    'book_details'=>'جزییات کتاب',
    'reviews'=>'نظرات',
    'rating_count'=>'امتیاز دهندگان',
    'currency'=>'تومان',
    'files'=>'فایلها',
    'name_fa'=>'نام',
    'nationality_fa '=>'ملیت',
    'biography'=>'زندگی‌نامه',
    'birth_date'=>'تاریخ تولد',
    'death_date'=>'تاریخ درگذشت',
    'role'=>'نقش',
    'is_it_narrator' => 'آیا راوی است ؟',
    'is_it_author' => 'آیا نویسنده است ؟',
    'is_it_translator' => 'آیا مترجم است ؟',
    'is_it_active_user' => 'آیا کاربر در سامانه فعال است ؟',
];

$menus = include(__DIR__.'/./menus.php');
$lang = array_merge($lang, $menus);

$login = include(__DIR__.'/./login.php');
$lang = array_merge($lang, $login);

$menus = include(__DIR__.'/./menus.php');
$lang = array_merge($lang, $menus);

$breadcrumbs = include(__DIR__.'/./breadcrumbs.php');
$lang = array_merge($lang, $breadcrumbs);

$adminPublic = include(__DIR__.'/./admin-public.php');
$lang = array_merge($lang, $adminPublic);

if (\App::getLocale() == 'en') {
    $lang2 = include(__DIR__.'/./fa-words.php');
    $lang = array_merge($lang, $lang2);
}

return $lang;
?>
