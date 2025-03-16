<?php

namespace Admin\Controllers\Base;

use Admin\Controllers\Public\BaseAbstract;

class CityController extends BaseAbstract
{
    protected $model = 'Models\Base\City';
    protected $request = 'Publics\Requests\Base\CityRequest';
    protected $with = ['province',"activeStatus"];
    protected $showWith = ['province'];
    protected $needles = ['Base\Province'];
    protected $searchFilter = ['name_fa','name_en','name_ar'];
}
