<?php
namespace Models\Base;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;

class Keyword extends Model
{
    use Base;

    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'base_keywords';

    public function newQuery($excludeDeleted = true)
    {
        $result =  parent::newQuery($excludeDeleted);

        $url = \URL::current();
        if(!strpos($url, 'mastership'))
            $result = $result->where($this->table.'.lang', \App::getLocale());
            
        return $result;
    }
    
    public function blogs()
    {
        return $this->belongsToMany(\Models\Content\Blog::class, "content_blog_keyword", "keyword_id", "blog_id");
    }
}
