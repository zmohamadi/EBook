<?php
namespace Models\Content;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;

class Slider extends Model
{
    use Base;

    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'content_sliders';

    public function newQuery($excludeDeleted = true)
    {
        $result =  parent::newQuery($excludeDeleted);

        $url = \URL::current();
        if(!strpos($url, 'mastership'))
            $result = $result->where($this->table.'.lang', \App::getLocale());
            
        return $result;
    }

    public function scopeMobile($query)
    {
        return $query->where('mobile', 1);
    }
}
