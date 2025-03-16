<?php 

namespace Publics\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name'=>'required',
            'price'=>'required',
            'usage'=>'required',
            'description'=>'required',
            'review'=>'required',
            'image'=>'required',
        ];
    }
}
    