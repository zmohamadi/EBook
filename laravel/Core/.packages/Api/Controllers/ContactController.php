<?php

namespace Api\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Models\Content\ContactUs;

class ContactController extends Controller
{

    public function store(Request $request)
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
