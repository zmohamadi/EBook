<?php
namespace Models\Person;

use Models\Person\User;

class UserSite extends User
{    
    public function newQuery($excludeDeleted = true)
    {
        return parent::newQuery($excludeDeleted)->whereRoleId(0);
    }
    
}
