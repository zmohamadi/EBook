<?php
namespace Models\Base;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;
use Publics\Factories\ProvinceFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Province extends Model
{
    use Base, HasFactory;

    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'base_provinces';

    function country()
    {
        return $this->belongsTo(\Models\Base\Country::class, 'country_id');
    }
    function cities()
    {
        return $this->hasMany(\Models\Base\City::class, 'province_id');
    }
    function users()
    {
        return $this->hasMany(\Models\Person\User::class, 'province_id');
    }
    function advs()
    {
        return $this->hasMany(\Models\Advs\Adv::class, 'province_id');
    }
}
