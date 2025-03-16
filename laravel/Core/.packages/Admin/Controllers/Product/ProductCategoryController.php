<?php

namespace Admin\Controllers\Product;

use Admin\Controllers\Public\BaseAbstract;

class ProductCategoryController extends BaseAbstract
{
    protected $model = "Models\Product\Category";
    protected $request = "Publics\Requests\Product\CategoryRequest";
    protected $with = ["activeStatus","parent"];
    protected $showWith = ["activeStatus","parent"];
    protected $searchFilter = ["title_fa"];
    protected $files = ["image"];

    public function init()
    {
        $this->indexQuery = function ($query) {
            $query->CatChild();
        };
        $this->needles = [
            \Product\Category::class => function($query){ $query->catParent()->active(); },
        ];
    }
}