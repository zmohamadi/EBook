<?php

namespace Admin\Controllers\Content;

use Admin\Controllers\Public\BaseAbstract;

class FaqSubjectController extends BaseAbstract
{
    protected $model = "Models\Content\FaqCategory";
    protected $request = "Publics\Requests\Content\FaqSubjectRequest";
    protected $with = ["activeStatus"];
    protected $showWith = ["activeStatus"];
    protected $searchFilter = ["title_fa","title_en","title_ar"];
}
