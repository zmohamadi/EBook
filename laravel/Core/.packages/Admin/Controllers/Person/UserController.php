<?php

namespace Admin\Controllers\Person;

use Admin\Controllers\Public\BaseAbstract;

class UserController extends BaseAbstract
{
    protected $model = "Models\Person\User";
    protected $request = "Publics\Requests\Person\UserRequest";
    protected $with = ["activeStatus"];
    protected $showWith = ["activeStatus"];
    protected $searchFilter = ["firstname", "lastname", "mobile"];
    protected $files = ["photo"];

    public function init()
    {
        $this->storeQuery = function ($query) {
            // $query = $this->setOperator($query);
            if (request()->_method != "PUT" && request()->password==null) {
                $query->password = bcrypt(request()->mobile);
            }
            $query->save();
        };
        $this->needles = [
            // \Person\Role::class => fn($query) => $query->active(),
        ];
    }

    public function showInfo($id)
    {
        $data = [
            "item" => $this->model::with("role", "activeStatus", "books")->find($id),
            "books" => \Models\Book\BookCreator::where("user_id", $id)->get(),
            // "books" => \Models\Book\Book::with("publisher", "categories")
            //     ->whereHas("creators",function ($q) use($id) { $q->where("user_id", $id); })->get(),
        ];
        return response()->json($data);
    }

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
