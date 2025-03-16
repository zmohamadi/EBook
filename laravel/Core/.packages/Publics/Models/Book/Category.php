<?php

namespace Models\Book;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Models\Traits\Base;

class Category extends Model
{
    use SoftDeletes,Base;

    protected $table = 'book_categories';
    protected $primaryKey = 'id';
    protected $fillable = [
        'name',
        'lang',
        'status_id',
    ];

    public function books()
    {
        return $this->belongsToMany(Book::class, 'book_category');
    }
}