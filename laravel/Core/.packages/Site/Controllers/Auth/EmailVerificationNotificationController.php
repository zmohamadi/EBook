<?php

namespace Site\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Registered;

class EmailVerificationNotificationController extends Controller
{
    /**
     * Send a new email verification notification.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->user()->hasVerifiedEmail()) {
            return;
        }

        // dd($request->user()->sendEmailVerificationNotification());
        // $request->user()->sendEmailVerificationNotification();
        event(new Registered($request->user()));

        return $request->wantsJson() ?
            response()->json(['status' => 'verification-link-sent']) :
            back()->with('status', 'verification-link-sent');
    }
}