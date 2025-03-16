<?php
namespace Models\Base;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;

class Config extends Model
{
    use Base;

    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'base_configs';

    function configGroup()
    {
        return $this->belongsTo(ConfigGroup::class, 'config_group_id');
    }
    // function scopeJob($query)
    // {
    //     return $query->where('config_group_id', 1);
    // }
}
