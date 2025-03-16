<?php

namespace Api\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Models\Content\ContactUs;
use Models\Content\ApiText;
use Models\Team\Service;
use Api\Controllers\Traits\ApiTrait;
use Models\Content\BlogFile;
use Models\Person\User;
use Models\Content\Blog;


class AboutController extends Controller
{
    use ApiTrait;

    public function index()
    {
        $collection = ApiText::whereIn('code',[10,11,12,13])->orderBy('id')->active()->get();
        

        
        return $this->view('views::about.index')
            ->with(compact('collection'))
        ;
    }

    public function comment(Request $request)
    {
        $request->validate([
            'sender_name' => ['required'],
            'sender_email' => ['required', 'email'],
            'comment' => ['required'],
        ]);

        $result = ContactUs::create($request->all());
        
        if ($result) {
            $message = trans('Lang::public.comment_success');

            return response()->json(['message' => $message, 'status' => 200]);
        }

    }

}
