<?php

namespace Admin\Controllers\Book;

use Admin\Controllers\Public\BaseAbstract;
use Models\Book\Book;

class CategoryController extends BaseAbstract
{
    protected $model = "Models\Book\Category";
    protected $request = "Publics\Requests\Book\CategoryRequest";
    protected $with = ["activeStatus"];
    protected $showWith = ["activeStatus"];
    // protected $needles = ["Content\BannerPosition"];
    // protected $searchFilter = ["title", "lang"];
    // protected $files = ["image", "sample_file", "file"];

}