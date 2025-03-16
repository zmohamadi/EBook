<?php

namespace Api\Controllers\Product;

use App\Http\Controllers\Controller;
use Models\Product\Product;
use Models\Product\Category;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    protected $limit = 4;

    public function index(Request $request)
    {
        $query = Product::with(["category", "categoryParent"])->active();

        if ($request->filled('search')) {
            $query->where(function ($q) use ($request) {
                $q->where("name", "LIKE", "%{$request->search}%")
                    ->orWhere("summary", "LIKE", "%{$request->search}%");
            });
        }
        
        if ($request->filled('line')) {
            $query->where("parent_category", $request->line);
        }
        
        if ($request->filled('category')) {
            $query->where("category_id", $request->category);
        }
        
        // $this->setSort($query, $request->sort);
        // $this->setLimit($request->display);
        
        $products = $query->orderByDesc("id")->paginate($this->limit);

        $items = ['products' => $products];
        
        if ($request->type === "first") {
            $items['categories'] = Category::with("childs")->active()->catParent()->get();
        }

        return response()->json($items);
    }

    protected function setLimit($display)
    {
        $limits = ["list" => 4, "column" => 8, "grid" => 9];
        $this->limit = $limits[$display] ?? 9;
    }

    protected function setSort($query, $sort)
    {
        $sortOptions = [
            "Newest" => "latest",
            "MostVisited" => "count_view",
            "Bestseller" => "count_sell",
            "Cheapest" => "price",
            "MostExpensive" => "price",
        ];
        
        if (isset($sortOptions[$sort])) {
            if ($sort === "Cheapest") {
                $query->orderBy($sortOptions[$sort], "ASC");
            } else {
                $query->orderByDesc($sortOptions[$sort]);
            }
        }
    }

    public function show($id)
    {
        $product = Product::with(["category", "categoryParent", "keywords"])->active()->findOrFail($id);
        
        $relatedProducts = Product::where("id", "!=", $id)
            ->where("category_id", $product->category_id)
            ->active()
            ->get();
        
        $this->incrementCount($product, "count_view");

        return response()->json(["product" => $product, "related_products" => $relatedProducts]);
    }

    protected function incrementCount(Product $product, $field)
    {
        $product->increment($field);
    }

    public function addToFavorites($id)
    {
        $product = Product::findOrFail($id);
        $this->incrementCount($product, "count_like");
        return response()->json(["message" => "Product added to favorites."]);
    }

    public function addToCart($id)
    {
        $product = Product::findOrFail($id);
        $this->incrementCount($product, "count_sell");
        return response()->json(["message" => "Product added to cart."]);
    }
}
