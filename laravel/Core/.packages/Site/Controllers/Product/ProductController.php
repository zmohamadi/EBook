<?php

namespace Site\Controllers\Product;

use App\Http\Controllers\Controller;
use \Models\Content\Slider;
use \Models\Product\Category;
use \Models\Product\Brand;
use \Models\Product\Line;
use \Models\Product\Product;

class ProductController extends Controller
{
    public $list_products;
    public $search;
    public $line_id;
    public $cat_id;
    public $min;
    public $max;
    public $sort;
    public $display;
    public $limit;
    public $page;

    public function index()
    {
        $this->search = request()->search;
        $this->line_id = request()->line;
        $this->cat_id = request()->category;
        $this->min = request()->min;
        $this->max = request()->max;
        $this->sort = request()->sort;
        $this->display = request()->display;
        $this->limit = 9;
        $this->page = request()->page;
        $items = [];
        
        $this->setLimit();
        $this->list_products = Product::with("category","categoryParent")->active();
        
        if(request()->type == "first") $items['categories']=$this->category();

        if(request()->filled('search') || request()->filled('line') || request()->filled('category') || request()->filled('sort') || request()->filled('display'))
            $items ['products'] = $this->filterProducts();
        else $items ['products'] = $this->products();

        return response()->json($items);
    }
    /**
     * get All Products
     */
    public function products()
    {
        return $this->list_products->orderByDesc("id")->paginate($this->limit);
    }
    /**
     * get All Categories
     */
    public function category()
    {
        return Category::with("childs")->active()->catParent()->get();
    }
    /**
     * get filter In Products By $search || $line_id || $cat_id
     */
    public function filterProducts()
    {
        $products = $this->list_products;
        // $this->setLimit($products);
        $this->setSort($products);
        if($this->search)
        {
            $search_like = $this->search;
            $products = $products->where(function ($q) use($search_like) { $q->where("name", "LIKE", "%".$search_like."%")->orWhere("summary", "LIKE", "%".$search_like."%"); });
        }
        if($this->line_id)
        {
            $products = $products->where("parent_category", $this->line_id);
        }
        if($this->cat_id)
        {
            $filter_products = $products->where("category_id", $this->cat_id);
        }
        $filter_products = $products->orderByDesc("id")->paginate($this->limit);
        return $filter_products;
    }
    /**
     * set Limit For display Produts
     */
    public function setLimit()
    {
        switch($this->display)
        {
            case "list":
                $this->limit=4;
                break;
            case "column":
                $this->limit=8;
                break;
            case "grid":
                $this->limit=9;
                break;
            default:
                $this->limit=9;
        }
    }
    /**
     * set Sort For display Produts
     */
    public function setSort($products)
    {
        switch($this->sort)
        {
            case "Newest":
                $products->latest();
                break;
            case "MostVisited":
                $products->orderByDesc("count_view")->latest();
                break;
            case "Bestseller":
                $products->orderByDesc("count_sell")->latest();
                break;
            case "Cheapest":
                $products->orderByDesc("price")->latest();
                break;
            case "MostExpensive":
                $products->orderBy("price","ASC")->latest();
                break;
            default:
                $products;
        }
        return $products;
    }
    /**
     * get Info a Product By $id
     */
    public function show($id)
    {
        $product = Product::with("category","categoryParent","keywords")->active()->find($id);
        $products = Product::where("id", "!=", $id)->where("category_id", $product->category_id)->active()->get();
        
        $this->incrementCount(["product"=>$product,"field"=>"count_view"]);

        $data = [
            'product'=>$product,
            'products'=>$products,
        ];
        return $data;
    }
    /**
     * Plus Count For Field (view,like,sell,...)
     */
    public function incrementCount($info)
    {
        if(isset($info["id"]) && $info["id"] > 0) $info["product"] = Product::find($info["id"]);
        $info["product"]->increment($info["field"]);
    }
    /**
     * post Info For Like a Product $id
     */
    public function addToFavorites($id)
    {
        $this->incrementCount(["id"=>$id,"field"=>"count_like"]);
    }
    /**
     * post Info For Cart a Product $id
     */
    public function addToCart($id)
    {
        $this->incrementCount(["id"=>$id,"field"=>"count_sell"]);
    }
}
