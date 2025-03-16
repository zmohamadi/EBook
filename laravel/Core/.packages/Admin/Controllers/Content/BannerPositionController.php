<?php

namespace Admin\Controllers\Content;

use Admin\Controllers\Public\BaseAbstract;
use Models\Content\Link;

class BannerPositionController extends BaseAbstract
{
    protected $model = "Models\Content\BannerPosition";
    protected $request = "Publics\Requests\Content\BannerPositionRequest";
    protected $with = ["activeStatus"];
    protected $except = ["lang"];
}
