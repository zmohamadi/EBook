<?php

namespace Admin\Controllers\Product;

use Admin\Controllers\Public\BaseAbstract;

class ProductBrandController extends BaseAbstract
{
    protected $model = "Models\Product\Brand";
    protected $request = "Publics\Requests\Product\BrandRequest";
    protected $with = ["activeStatus"];
    // protected $showWith = ["activeStatus"];
    protected $searchFilter = ["name_fa","count_product"];
    protected $files = ["logo"];
}