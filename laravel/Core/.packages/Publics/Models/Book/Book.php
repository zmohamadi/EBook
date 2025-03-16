<?php

namespace Models\Book;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Models\Traits\Base;

class Book extends Model
{
    use SoftDeletes,Base;

    // ثابت‌های نوع پدیدآورنده
    const TYPE_AUTHOR = 1; // نویسنده
    const TYPE_NARRATOR = 2; // راوی
    const TYPE_TRANSLATOR = 3; // مترجم

    protected $table = 'books';
    protected $primaryKey = 'id';
    protected $fillable = [
        'title',
        'publisher_id',
        'publication_year',
        'original_price',
        'discounted_price',
        'introduction',
        'recommended_audience',
        'excerpt',
        'sample_file',
        'file',
        'type',
        'file_type',
        'page_count',
        'duration',
        'file_size',
        'publication_status',
        'image',
        'rating',
        'rating_count',
        'view_count',
        'lang',
        'status_id',
    ];

    protected $casts = [
        'original_price' => 'decimal:2',
        'discounted_price' => 'decimal:2',
        'rating' => 'decimal:2',
    ];

    // رابطه با ناشر
    public function publisher()
    {
        return $this->belongsTo(Publisher::class);
    }

    // رابطه با دسته‌بندی‌ها
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'book_category');
    }

    // رابطه با نظرات
    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    // رابطه با گزیده‌ها
    public function excerpts()
    {
        return $this->hasMany(Excerpt::class);
    }

    // رابطه با خالقان (نویسنده، مترجم، راوی)
    public function creators()
    {
        return $this->belongsToMany(\Models\Person\User::class, 'book_creator')->withPivot('type');
    }

    // رابطه با نویسندگان
    public function authors()
    {
        return $this->creators()->wherePivot('type', self::TYPE_AUTHOR);
    }

    // رابطه با راویان
    public function narrators()
    {
        return $this->creators()->wherePivot('type', self::TYPE_NARRATOR);
    }

    // رابطه با مترجمان
    public function translators()
    {
        return $this->creators()->wherePivot('type', self::TYPE_TRANSLATOR);
    }

    // Scope برای فیلتر کردن کتاب‌های دارای نویسنده
    public function scopeWhereAuthor($query)
    {
        return $query->whereHas('creators', function ($q) {
            $q->where('type', self::TYPE_AUTHOR);
        });
    }

    // Scope برای فیلتر کردن کتاب‌های دارای راوی
    public function scopeWhereNarrator($query)
    {
        return $query->whereHas('creators', function ($q) {
            $q->where('type', self::TYPE_NARRATOR);
        });
    }

    // Scope برای فیلتر کردن کتاب‌های دارای مترجم
    public function scopeWhereTranslator($query)
    {
        return $query->whereHas('creators', function ($q) {
            $q->where('type', self::TYPE_TRANSLATOR);
        });
    }

    // Scope برای فیلتر کردن کتاب‌های دارای هر نوع پدیدآورنده
    public function scopeWhereHasCreator($query, $type = null)
    {
        if ($type) {
            return $query->whereHas('creators', function ($q) use ($type) {
                $q->where('type', $type);
            });
        }
        return $query->whereHas('creators');
    }
}