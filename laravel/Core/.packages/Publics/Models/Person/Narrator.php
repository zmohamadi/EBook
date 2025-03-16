<?php
namespace Models\Person;

use Models\Person\User;

class Narrator extends User
{    
    public function newQuery($excludeDeleted = true)
    {
        return parent::newQuery($excludeDeleted)->whereNarrator(1);
    }
    
}
