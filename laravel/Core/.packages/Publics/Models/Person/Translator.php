<?php
namespace Models\Person;

use Models\Person\User;

class Translator extends User
{    
    public function newQuery($excludeDeleted = true)
    {
        return parent::newQuery($excludeDeleted)->whereTranslator(1);
    }
}