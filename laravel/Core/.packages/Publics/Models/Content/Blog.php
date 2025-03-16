<?php
namespace Models\Content;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;

class Blog extends Model
{
    use Base;

    protected $guarded = ['updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'content_blogs';

    public function newQuery($excludeDeleted = true)
    {
        $result =  parent::newQuery($excludeDeleted);

        $url = \URL::current();
        if(!strpos($url, 'mastership'))
            $result = $result->where($this->table.'.lang', \App::getLocale());
            
        return $result;
    }
    
    protected static function booted(): void
    {
        static::deleting(function(Blog $blog) { // before delete() method call this
            $blog->keywords()->detach();            
            $blog->files->each(function($file) {
                $file->delete();
            });
            $blog->comments->each(function($comment) {
                $comment->delete();
            });
            // $blog->files->each(function($file) {
            //     $image = Str::after($file->name, base_path().'/');
            //     BlogFile::delete(base_path().'/'.$image);
            //     $file->delete();
            // });
        });
    }
    
    public function creatorAdmin()
    {
        return $this->belongsTo(\Models\Person\User::class, "creator_id");
    }
    public function editorAdmin()
    {
        return $this->belongsTo(\Models\Person\User::class, "editor_id");
    }
    public function subject()
    {
        return $this->belongsTo(BlogSubject::class, "subject_id");
    }
    public function comments()
    {
        return $this->hasMany(BlogComment::class, "blog_id");
    }
    public function files()
    {
        return $this->hasMany(BlogFile::class, "blog_id");
    }
    public function imageFiles()
    {
        return $this->hasMany(BlogFile::class, "blog_id")->where("file_type_id", 1);
    }
    public function videoFiles()
    {
        return $this->hasMany(BlogFile::class, "blog_id")->where("file_type_id", 3);
    }
    public function keywords()
    {
        return $this->belongsToMany(\Models\Base\Keyword::class, "content_blog_keyword", "blog_id", "keyword_id");
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
