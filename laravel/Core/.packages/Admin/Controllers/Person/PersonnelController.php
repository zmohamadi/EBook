<?php

namespace Admin\Controllers\Person;

use Admin\Controllers\Person\UserController;
use Models\Person\Role;

class PersonnelController extends UserController
{
    protected $model = 'Models\Person\Personnel';
    protected $request = "Publics\Requests\PersonnelRequest";
    // protected $with = ["role","gender", "activeStatus","cityUser",'level',"education"];
    // protected $showWith = ["role", "gender", "activeStatus","cityUser",'level',"education"];
    protected $needles = ['Base\Status'];
    protected $searchFilter = ["firstname", "lastname", "mobile"];
    protected $files = ["photo"];
}

