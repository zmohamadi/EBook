<?php
namespace Models\Product;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;

class Product extends Model
{
    use Base;

    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'products';

    public function newQuery($excludeDeleted = true)
    {
        return parent::newQuery($excludeDeleted)->where($this->table.'.lang', \App::getLocale());
    }
    protected static function booted(): void
    {
        static::deleting(function(Product $product) { // before delete() method call this 
            //
        });
    }
    function brand()
    {
        return $this->belongsTo(Brand::class);
    }
    function category()
    {
        return $this->belongsTo(Category::class);
    }  
    function categoryParent()
    {
        return $this->belongsTo(Category::class, 'parent_category');
    }
    public function keywords()
    {
        return $this->belongsToMany(\Models\Base\Keyword::class, 'product_keyword', 'product_id', 'keyword_id');
    }
}
