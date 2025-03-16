<?php

namespace Admin\Controllers\Book;

use Admin\Controllers\Public\BaseAbstract;
use Models\Book\Book;

class BookController extends BaseAbstract
{
    protected $model = "Models\Book\Book";
    protected $request = "Publics\Requests\Book\BookRequest";
    protected $with = ["publisher","activeStatus"];
    protected $showWith = ["publisher", "categories", "creators","activeStatus"];
    // protected $needles = ["Content\BannerPosition"];
    // protected $searchFilter = ["title", "lang"];
    // protected $files = ["image", "sample_file", "file"];

}