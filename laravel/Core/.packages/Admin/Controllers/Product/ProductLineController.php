<?php

namespace Admin\Controllers\Product;

use Admin\Controllers\Public\BaseAbstract;

class ProductLineController extends BaseAbstract
{
    protected $model = "Models\Product\Category";
    protected $request = "Publics\Requests\Product\CategoryRequest";
    protected $with = ["activeStatus"];
    protected $showWith = ["activeStatus"];
    protected $searchFilter = ["title_fa"];
    protected $files = ["image"];
    
    public function init()
    {
        $this->indexQuery = function ($query) {
            $query->CatParent();
        };
    }
}