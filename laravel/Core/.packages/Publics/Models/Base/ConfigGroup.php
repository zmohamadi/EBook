<?php
namespace Models\Base;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;

class ConfigGroup extends Model
{
    use Base;

    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'base_config_groups';

    function configs()
    {
        return $this->hasMany(Config::class, 'config_group_id');
    }
}
