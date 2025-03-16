<?php

namespace Admin\Controllers\Content;

use Admin\Controllers\Public\BaseAbstract;
use Models\Content\SiteText;

class SiteTextController extends BaseAbstract
{
    protected $model = "Models\Content\SiteText";
    // protected $request = "Publics\Requests\Content\SiteTextRequest";
    protected $with = ["activeStatus"];
    protected $searchFilter = ["title_fa","title_en","title_ar","btn_text_fa","btn_text_en","btn_text_ar"];
    protected $files = ["image"];
}
