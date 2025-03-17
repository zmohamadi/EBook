<?php

namespace Models\Book;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Review extends Model
{
    use SoftDeletes;

    protected $table = 'book_reviews';
    protected $primaryKey = 'id';
    protected $fillable = [
        'book_id',
        'comment',
        'rating',
        'lang',
        'status_id',
    ];

    public function book()
    {
        return $this->belongsTo(Book::class);
    }
    public function user()
    {
        return $this->belongsTo(\Models\Person\User::class);
    }
}