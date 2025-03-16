<?php

namespace Admin\Controllers\Content;

use Admin\Controllers\Public\BaseAbstract;

class BlogSubjectController extends BaseAbstract
{
    protected $model = "Models\Content\BlogSubject";
    protected $request = "Publics\Requests\Content\BlogSubjectRequest";
    protected $with = ["activeStatus"];
    protected $searchFilter = ["title_fa","title_en","title_ar"];
}
