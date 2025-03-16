<?php

namespace Site\Controllers\Home;

use App\Http\Controllers\Controller;
use \Models\Content\Slider;
use \Models\Product\Category;
use \Models\Product\Brand;
use \Models\Product\Product;
use \Models\Content\BlogSubject;
use \Models\Content\Blog;
use \Models\Content\ContactUs;

class HomeController extends Controller
{
    public function index()
    {
        $items = [
            'sliders' => $this->slider(),
            'categories' => $this->category(),
            'brands' => $this->brand(),
            'lastProducts' => $this->lastProduct(),
            'bestSellerProducts' => $this->bestSellerProduct(),
            'mostVisitedProducts' => $this->mostVisitedProduct(),
        ];
        return response()->json($items);
    }

    public function slider()
    {
        return Slider::active()->get();
    }
    public function category()
    {
        return Category::with("childs")->active()->get();
    }
    public function brand()
    {
        return Brand::active()->get();
    }
    public function lastProduct()
    {
        return Product::with("category")->active()->orderByDesc("id")->limit(8)->get();
    }

    public function bestSellerProduct()
    {
        return Product::active()->orderByDesc("count_sell")->limit(4)->get();
    }
    public function mostVisitedProduct()
    {
        return Product::with("category")->active()->orderByDesc("count_view")->limit(10)->get();
    }
    public function subject()
    {
        return BlogSubject::active()->get();
    }
    public function blog()
    {
        return Blog::active()->orderByDesc("id")->limit(5)->get();
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
