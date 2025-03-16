<?php

namespace Api\Controllers\Auth;

use App\Http\Controllers\Controller;
use Api\Providers\RouteServiceProvider;
use Illuminate\Http\Request;

class EmailVerificationPromptController extends Controller
{
    /**
     * Display the email verification prompt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return mixed
     */
    public function __invoke(Request $request)
    {
        return $request->user()->hasVerifiedEmail()
                    ? redirect()->intended(config('app.frontend_url').'/'.\Api::getLocale())
                    : redirect(config('app.frontend_url'). '/' .\Api::getLocale().'/email/verify');
    }
}