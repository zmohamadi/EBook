<?php
namespace Models\Content;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;

class FaqCategory extends Model
{
    use Base;

    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['created_at', 'updated_at', 'deleted_at'];
    protected $dates   = ['deleted_at'];
    protected $table   = 'content_faq_categories';

    public function faqs()
    {
        return $this->hasMany(Faq::class, "category_id");
    }
}
