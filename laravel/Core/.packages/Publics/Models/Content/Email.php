<?php
namespace Models\Content;

use Illuminate\Database\Eloquent\Model;

class Email extends Model
{
    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'emails';
    protected $casts = [
        'created_at' => 'datetime:d-m-Y H:i',
    ];

}
