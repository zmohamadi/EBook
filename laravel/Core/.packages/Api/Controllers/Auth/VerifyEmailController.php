<?php

namespace Api\Controllers\Auth;

use App\Http\Controllers\Controller;
use Api\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

class VerifyEmailController extends Controller
{
    /**
     * Mark the authenticated user's email address as verified.
     *
     * @param  \Illuminate\Foundation\Auth\EmailVerificationRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */

    public function __invoke(EmailVerificationRequest $request)
    {
        // dd($request->user()->markEmailAsVerified());
        if ($request->user()->hasVerifiedEmail()) {
            $request->session()->regenerate();
            return redirect()->intended(config('app.frontend_url'). '/' .\Api::getLocale().'/notif/verified');
        }

        if ($request->user()->markEmailAsVerified()) {
            event(new Verified($request->user()));
            $request->session()->regenerate();
        }

        return redirect()->intended(config('app.frontend_url'). '/' .\Api::getLocale().'/notif/verified');
    }
}