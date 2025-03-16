<?php
namespace Models\Person;

use Illuminate\Database\Eloquent\Model;
use Database\Factories\Person\UserFactory;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\CanResetPassword;
use Models\Traits\Base;

class User extends Authenticatable implements MustVerifyEmail
{
    use Base;
    use Notifiable;

    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at','password'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'users';
    
    public static function factory()
    {
        return UserFactory::new();
    }

    protected static function booted(): void
    {
        static::deleting(function(User $user) { // before delete() method call this        
            // $user->files->each(function($file) {
            //     $file->delete();
            // });
        });
    }
    public function books()
    {
        return $this->belongsToMany(\Models\Book\Book::class, 'book_creator')->withPivot('role_id');
    }

    function role()
    {
        return $this->belongsTo(\Models\Person\Role::class);
    }
    public function scopeWhereTranslator($query)
    {
        return $query->where('translator',1);
    }
    public function scopeWhereAuthor($query)
    {
        return $query->where('author',1);
    }
    public function scopeWhereNarrator($query)
    {
        return $query->where('narrator',1);
    }
    public function scopeWhereUserSite($query)
    {
        return $query->where('role_id',0);
    }
}
