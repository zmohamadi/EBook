<?php

namespace Admin\Controllers\Content;

use Admin\Controllers\Public\BaseAbstract;
use Models\Content\Link;

class BannerController extends BaseAbstract
{
    protected $model = "Models\Content\Banner";
    protected $request = "Publics\Requests\Content\BannerRequest";
    protected $with = ["activeStatus","position"];
    protected $showWith = ["activeStatus","position"];
    protected $needles = ["Content\BannerPosition"];
    protected $searchFilter = ["title","lang"];
    protected $files = ["image"];
}
