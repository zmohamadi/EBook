<?php

namespace Api\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Models\Person\User;
use Illuminate\Validation\Rules\Password;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required | string | max:255 ',
            'lname' => 'required | string | max:255',
            'level_id' => 'required | integer',
            // 'timezone_id' => 'required | integer',
            'email' => 'required|string|email|max:255|unique:person_users',
            'password' => ['required', 'confirmed', Password::min(8)
                    ->mixedCase()
                    ->letters()
                    ->numbers()
                    ->symbols()
                    ->uncompromised(),
            ],
            'gender_id'=> 'required|in:0,1' 
            // 'password' => 'required|string|min:6|confirmed|regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[special characters]).{8,16}$/',
        ]);

        Auth::login($user = User::create([
            'name' => $request->name,
            'lname' => $request->lname,
            'email' => $request->email,
            'password' => \Hash::make($request->password),
            // 'is_mentee' => $request->is_mentee || 0,
            'level_id' => $request->level_id,
            'timezone_id' => $request->timezone_id,
            // 'lang' => \Api::getLocale(),
        ]));

        event(new Registered($user));

        return response()->noContent();
    }
}
