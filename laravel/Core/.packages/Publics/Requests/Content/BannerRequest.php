<?php

namespace Publics\Requests\Content;

use Illuminate\Foundation\Http\FormRequest;


class BannerRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'image'=>'required',
            'position_id'=>'required_without:subject_title',
        ];
    }
}
