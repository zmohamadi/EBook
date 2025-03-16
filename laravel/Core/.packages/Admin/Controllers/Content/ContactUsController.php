<?php

namespace Admin\Controllers\Content;

use Admin\Controllers\Public\BaseAbstract;

class ContactUsController extends BaseAbstract
{
    protected $model = "Models\Content\ContactUs";
    protected $with = ["activeStatus","responder"];
    protected $showWith = ["activeStatus"];
    protected $searchFilter = ["sender_name","sender_email","subject"];
    
    public function init()
    {
        $this->storeQuery = function ($query)
        {
            $query->responder_id = $this->user_id;
            $query->save();               
        };
    }
}
