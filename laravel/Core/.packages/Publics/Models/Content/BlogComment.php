<?php
namespace Models\Content;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;

class BlogComment extends Model
{
    use Base;

    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'content_blog_comments';

    public function newQuery($excludeDeleted = true)
    {
        $result =  parent::newQuery($excludeDeleted);

        $url = \URL::current();
        if(!strpos($url, 'mastership'))
            $result = $result->where($this->table.'.lang', \App::getLocale());
            
        return $result;
    }

    public function blog()
    {
        return $this->belongsTo(Blog::class, "blog_id");
    }
    public function responder()
    {
        return $this->belongsTo(\Models\Person\User::class, "responder_id");
    }
    public function confirmer()
    {
        return $this->belongsTo(\Models\Person\User::class, "confirmer_id");
    }
    /**
     * Scopes
     */
    public function scopeAll($query)
    {
        return $query;
    }
    public function scopeAwaitingConfirm($query)
    {
        return $query->where('confirm_id', '==', 0)->where('confirm_user_id', null);
    }
    public function scopeAwaitingReply($query)
    {
        return $query->where('reply', null)->where('responder_user_id', null);
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
