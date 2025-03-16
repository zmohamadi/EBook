<?php

namespace Site\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Models\Content\ContactUs;
use Models\Content\SiteText;
use Models\Team\Service;
use Site\Controllers\Traits\SiteTrait;
use Models\Content\BlogFile;
use Models\Person\User;
use Models\Content\Blog;


class AboutController extends Controller
{
    use SiteTrait;

    public function index()
    {
        $collection = SiteText::whereIn('code',[10,11,12,13])->orderBy('id')->active()->get();
        

        
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
