<?php

namespace Publics\Requests\Base;

use Illuminate\Foundation\Http\FormRequest;

class CityRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $langs = \Models\Base\Langueage::active()->Pluck("symbol","id");
        $array=[];
        foreach($langs as $key=>$value)
        {
            $array["name_".$value]='required';
        }
        $array['province_id']='required';
        return $array;
    }
}
