<?php

namespace Api\Controllers\Home;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;
use Models\Content\Slider;
use Models\Product\Category;
use Models\Product\Brand;
use Models\Product\Product;
use Models\Content\BlogSubject;
use Models\Content\Blog;

class HomeController extends Controller
{
    public function index()
    {
        try {
            $items = [
                'sliders' => $this->slider(),
                'categories' => $this->category(),
                'brands' => $this->brand(),
                'lastProducts' => $this->lastProduct(),
                'bestSellerProducts' => $this->bestSellerProduct(),
                'mostVisitedProducts' => $this->mostVisitedProduct(),
            ];

            return response()->json($items, 200, ['Content-Type' => 'application/json']);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function slider()
    {
        return Cache::remember('sliders', 3600, function () {
            return Slider::active()->get();
        });
    }

    public function category()
    {
        return Cache::remember('categories', 3600, function () {
            return Category::with("childs")->active()->get();
        });
    }

    public function brand()
    {
        return Cache::remember('brands', 3600, function () {
            return Brand::active()->get();
        });
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
        return Cache::remember('blog_subjects', 3600, function () {
            return BlogSubject::active()->get();
        });
    }

    public function blog()
    {
        return Cache::remember('blogs', 3600, function () {
            return Blog::active()->limit(5)->get();
        });
    }

    /**
     * دریافت داده‌های عمومی (منو و بلاگ‌ها)
     */
    public function getDataPublic()
    {
        try {
            $items = [
                'categories' => $this->category(),
                'subjects' => $this->subject(),
                'blogs' => $this->blog(),
            ];

            return response()->json([
                'status' => 'success',
                'data' => $items
            ], 200, ['Content-Type' => 'application/json']);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
