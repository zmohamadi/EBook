<?php

namespace Models\Book;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;

class BookCategory extends Model
{
    protected $table = 'book_category';
    protected $primaryKey = ['book_id', 'category_id'];
    public $incrementing = false;

    protected $fillable = [
        'book_id',
        'category_id',
    ];

    public function book()
    {
        return $this->belongsTo(Book::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}