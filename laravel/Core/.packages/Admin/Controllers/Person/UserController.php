<?php

namespace Admin\Controllers\Person;

use Admin\Controllers\Public\BaseAbstract;
use Verta;

class UserController extends BaseAbstract
{
    protected $model = "Models\Person\User";
    protected $with = ["activeStatus"];
    protected $showWith = ["activeStatus"];
    protected $searchFilter = ["firstname", "lastname", "mobile"];
    protected $files = ["photo"];
    // protected $userPathInEvent = "/panel/myCourses/";

    public function init()
    {
        $this->storeQuery = function ($query) {
            $query = $this->setOperator($query);
            if (request()->_method != "PUT") {
                $query->password = bcrypt(request()->mobile);
            }
            $query->save();
        };
    }

    // public function showInfo($id)
    // {
    //     $data = [
    //         "item" => $this->model::with("role", "gender", "activeStatus", "creator", "editor")->find($id),
    //         "registers" => Register::with("course", "role")->where("user_id", $id)->orderBy("group", "desc")->get(),
    //     ];
    //     return response()->json($data);
    // }

    public function editEmail()
    {
        $user = $this->model::find($this->user->id);
        $user->email = request()->email;
        $user->save();

        return response()->json(['status' => 200]);
    }

    public function changePassword()
    {
        $userId = request()->id > 0 ? request()->id : $this->user->id;

        request()->validate([
            'new_password' => 'required|confirmed',
        ]);

        $user = $this->model::find($userId);
        $user->password = bcrypt(request()->new_password);
        $user->editor_id = $this->user_id;
        $user->save();

        return response()->json(['status' => 200]);
    }
}
