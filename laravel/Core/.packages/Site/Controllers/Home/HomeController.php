<?php

namespace Site\Controllers\Home;

use App\Http\Controllers\Controller;
use \Models\Content\Slider;
use \Models\Content\Blog;
use \Models\Content\ContactUs;
use \Models\Book\Book;
use \Models\Book\Category;
use \Models\Person\Author;

class HomeController extends Controller
{
    /**
     * نمایش صفحه اصلی
     */
    public function index()
    {
        $items = [
            'sliders' => $this->slider(),
            'categories' => $this->category(),
            'books' => $this->books(),
            'blog' => $this->blog(),
            'authors' => $this->authors(),
        ];
        
        return response()->json($items);
    }

    /**
     * دریافت اسلایدرهای فعال
     */
    public function slider()
    {
        return Slider::active()->orderBy('order')->get();
    }

    /**
     * دریافت دسته‌بندی‌های فعال با زیردسته‌ها
     */
    public function category()
    {
        return Category::active()->get();
    }

    /**
     * دریافت کتاب‌های ویژه
     */
    public function books()
    {
        return Book::active()->with('authors','categories')->latest()->limit(10)->get();
    }

    /**
     * دریافت آخرین مطالب بلاگ
     */
    public function blog()
    {
        return Blog::with('subject:id,title_fa')->active()->latest()->limit(4)->get();
    }

    /**
     * دریافت نویسندگان پرکار
     */
    public function authors()
    {
        return Author::withCount('books')
            ->orderByDesc('books_count')
            ->limit(10)
            ->get();
    }

    /**
     * get data menu
     */
    public function getDataPublic()
    {
        $items = [
            'categories' => $this->category(),
            'subjects' => $this->subject(),
            'blogs' => $this->blog(),
        ];
        return response()->json($items);
    }
    /**
     * post Message For Insert
     */
    public function contactSave()
    {
        $record = new ContactUs();
        $record->sender_name = request()->sender_name;
        $record->sender_email = request()->sender_email;
        // $record->subject = request()->subject;
        $record->comment = request()->comment;
        $record->lang = fa;
        $record->save();

        $result = ['message' => "Your message was successful", 'status' => 'successful'];
        return response()->json($result);
    }
}
