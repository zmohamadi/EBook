<?php

namespace Models\Book;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Models\Traits\Base;

class Excerpt extends Model
{
    use SoftDeletes;

    protected $table = 'book_excerpts';
    protected $primaryKey = 'id';
    protected $fillable = [
        'book_id',
        'excerpt',
        'lang',
        'status_id',
    ];

    public function book()
    {
        return $this->belongsTo(Book::class);
    }
}