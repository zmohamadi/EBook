<?php
namespace Models\Person;

use Models\Person\User;

class Author extends User
{   
    protected $attributes = [ 'author' => 1];
 
    public function newQuery($excludeDeleted = true)
    {
        return parent::newQuery($excludeDeleted)->whereAuthor(1);
    }
    
}
