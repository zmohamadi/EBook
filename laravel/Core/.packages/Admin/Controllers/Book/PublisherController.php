<?php

namespace Admin\Controllers\Book;

use Admin\Controllers\Public\BaseAbstract;
use Models\Book\Book;

class PublisherController extends BaseAbstract
{
    protected $model = "Models\Book\Publisher";
    protected $request = "Publics\Requests\Book\PublisherRequest";
    protected $with = ["activeStatus"];
    protected $showWith = ["activeStatus"];
    // protected $needles = ["Content\BannerPosition"];
    // protected $searchFilter = ["title", "lang"];
    // protected $files = ["image", "sample_file", "file"];

}