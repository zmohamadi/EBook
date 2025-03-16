<?php

namespace Models\Book;

use Illuminate\Database\Eloquent\Model;

class BookCreator extends Model
{
    protected $table = 'book_creator';
    protected $primaryKey = ['book_id', 'creator_id', 'role_id'];
    public $incrementing = false;

    protected $fillable = [
        'book_id',
        'creator_id',
        'role_id',
    ];

    public function book()
    {
        return $this->belongsTo(Book::class);
    }

    public function creator()
    {
        return $this->belongsTo(Creator::class);
    }

    public function role()
    {
        return $this->belongsTo(Role::class);
    }
}