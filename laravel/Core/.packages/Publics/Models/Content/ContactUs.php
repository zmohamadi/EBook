<?php
namespace Models\Content;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;

class ContactUs extends Model
{
    use Base;

    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'content_contactus';

    public function newQuery($excludeDeleted = true)
    {
        $result =  parent::newQuery($excludeDeleted);

        $url = \URL::current();
        if(!strpos($url, 'mastership'))
            $result = $result->where($this->table.'.lang', \App::getLocale());
            
        return $result;
    }

    public function responder()
    {
        return $this->belongsTo(\Models\Person\User::class, "responder_id");
    }
    /**
     * Dates
     */
    public function getCreatedAtAttribute($date)
    {
        if ($date)
            return \Carbon\Carbon::parse($date)->format('Y/m/d');
        else
            return null;
    }
    public function getUpdatedAtAttribute($date)
    {
        if ($date)
            return \Carbon\Carbon::parse($date)->format('Y/m/d');
        else
            return null;
    }
}