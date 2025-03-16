<?php

namespace Publics\Requests\Book;

use Illuminate\Foundation\Http\FormRequest;


class PublisherRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name'=>'required',
        ];
    }
}
