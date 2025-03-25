<?php 

namespace Publics\Requests\Person;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $item =  [
            'firstname'=>'required',
            'lastname'=>'required',
            'photo'=>'required',
        ];
        if(request()->_method == "PUT")
        {
            $url = explode("/", request()->path());
            $id = $url[2];
            $item["mobile"] = "required|unique:users,mobile,".$id.",id,deleted_at,NULL";
        }
        else
        {
            $item["mobile"] = "required|unique:users,mobile,NULL,id,deleted_at,NULL";
        }
       
        return $item;
    }
}
    