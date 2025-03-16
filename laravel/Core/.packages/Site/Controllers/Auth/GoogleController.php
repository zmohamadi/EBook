<?php

namespace Site\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use Models\Person\User;

class GoogleController extends Controller
{
    public function redirectToGoogle(Request $request)
    {
        session()->pull('level_id');
        session()->pull('timezone_id');
        session()->pull('redirectTo');
        session()->regenerate();

        if ($request->has('level_id')) {
            // session()->put('is_mentee', $request->is_mentee);
            session()->put('level_id', $request->level_id);
            session()->put('timezone_id', @$request->timezone_id);
            session()->put('gender_id', $request->gender_id);
        }

        session()->put('redirectTo', url()->previous());

        if ($request->has('do_complete')) {
            $validator = \Validator::make($request->all(), [
                'level_id' => 'required | integer',
                // 'timezone_id' => 'required | integer',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'message' => 'Validation Failed',
                    'errors' => $validator->errors(),
                ], 422);
            }

            if (session()->has('email')) {
                $existingUser = User::where('email', session()->get('email'))->first();

                // $existingUser->is_mentee = session()->get('is_mentee') || 0;
                $existingUser->level_id = session()->get('level_id');
                $existingUser->timezone_id = session()->get('timezone_id');
                $existingUser->gender_id = session()->get('gender_id');

                $existingUser->save();

                auth()->guard('web')->login($existingUser, true);
                
                session()->pull('email');
                session()->regenerate();
                
                return redirect()->to(env('FRONTEND_URL') . '/' . \App::getLocale());
            }
        }

        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback(): RedirectResponse
    {
        // $user = Socialite::driver('google')->user();
        $user = Socialite::driver('google')->stateless()->user();
        session()->put('email', $user->email);

        $existingUser = User::where('email', $user->email)->first();
        // dd($existingUser);
        if ($existingUser) {
            // Log in the existing user.
            if (is_null($existingUser->level_id)) {
                // The account is not linked to a level and a timezone yet, so we need to link it now.
                if (session()->has('level_id')) {

                    // $existingUser->is_mentee = session()->get('is_mentee') ? session()->get('is_mentee') : 0;
                    $existingUser->level_id = session()->get('level_id');
                    $existingUser->timezone_id = session()->get('timezone_id');
                    $existingUser->gender_id = session()->get('gender_id');

                    $existingUser->save();
                } else {
                    return redirect()->to(env('FRONTEND_URL') . '/' . \App::getLocale() . '/login/complete-info');
                }
            }

            auth()->guard('web')->login($existingUser, true);

        } else {
            // Create a new user.
            $newUser = new User();
            $newUser->name = $user['given_name'];
            $newUser->lname = $user['family_name'];
            $newUser->email = $user->email;
            $newUser->pic = $user->avatar;
            $newUser->google_id = $user->id;
            $newUser->email_verified_at = \Carbon\Carbon::now();

            if (session()->has('level_id')) {
                $newUser->level_id = session()->get('level_id');
                $newUser->timezone_id = session()->get('timezone_id');
                $newUser->gender_id = session()->get('gender_id');
            }

            $newUser->save();

            if (!session()->has('level_id')) {
                return redirect()->to(env('FRONTEND_URL') . '/' . \App::getLocale() . '/login/complete-info');
            }

            // Log in the new user.
            auth()->guard('web')->login($newUser, true);
        }

        return redirect()->to(env('FRONTEND_URL') . '/' . \App::getLocale());

    }
}
