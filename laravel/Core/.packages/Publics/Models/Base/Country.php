<?php
namespace Models\Base;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;

class Country extends Model
{
    use Base;

    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'base_countries';

    function users()
    {
        return $this->hasMany(\Models\Person\User::class, 'country_id');
    }
    function advs()
    {
        return $this->hasMany(\Models\Advs\Adv::class, 'country_id');
    }
}
