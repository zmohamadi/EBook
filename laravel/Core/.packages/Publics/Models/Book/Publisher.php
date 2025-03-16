<?php

namespace Models\Book;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Models\Traits\Base;

class Publisher extends Model
{
    use SoftDeletes,Base;

    protected $table = 'book_publishers';
    protected $primaryKey = 'id';
    protected $fillable = [
        'name',
        'lang',
        'status_id',
    ];

    public function books()
    {
        return $this->hasMany(Book::class);
    }
}