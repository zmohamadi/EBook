<?php 

namespace Publics\Requests\Content;

use Illuminate\Foundation\Http\FormRequest;


class FaqRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'question'=>'required',
            'answer'=>'required',
            'order'=>'required',
            'category_id'=>'required',
        ];
    }
}
    