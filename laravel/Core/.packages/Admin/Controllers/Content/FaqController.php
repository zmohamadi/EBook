<?php

namespace Admin\Controllers\Content;

use Admin\Controllers\Public\BaseAbstract;
use Models\Content\Link;

class FaqController extends BaseAbstract
{
    protected $model = "Models\Content\Faq";
    protected $request = "Publics\Requests\Content\FaqRequest";
    protected $with = ["category","activeStatus"];
    protected $showWith = ["category","activeStatus"];
    protected $needles = ["Content\FaqCategory"];
    protected $searchFilter = ["question","lang"];
}
