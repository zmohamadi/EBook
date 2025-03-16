<?php

namespace Admin\Controllers\Base;

use Admin\Controllers\Public\BaseAbstract;

class CountryController extends BaseAbstract
{
    protected $model = 'Models\Base\Country';
    protected $request = 'Publics\Requests\Base\CountryRequest';
    protected $with = ["activeStatus"];
    protected $searchFilter = ['name_fa','name_en','name_ar','nationality_fa','nationality_en','nationality_ar','phonecode'];
    
    public function init()
    {
        $this->indexQuery = function ($query)
        {
            // $query->where(function($q){
            //     $q->orderBy("id", "ASC")->orderBy("status_id", "ASC");
            // });
            $query->orderBy("status_id", "desc")->orderBy("id", "ASC");
            // orderByRaw("FIELD(clan_rank , 'Owner', 'Admin', 'Member') ASC");
        };
    }
}
