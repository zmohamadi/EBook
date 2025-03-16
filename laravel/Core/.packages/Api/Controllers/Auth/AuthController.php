<?php

namespace Api\Controllers\Auth;

use Models\Person\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;


class AuthController extends Controller
{
    // ثبت‌نام با موبایل یا ایمیل
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'firstname' => 'required|string',
            'email' => 'nullable|email|unique:users',
            // 'mobile' => 'nullable|string|unique:users',
            // 'password' => 'required|min:6'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::create([
            'firstname' => $request->firstname,
            'email' => $request->email,
            'mobile' => $request->mobile,
            'password' => Hash::make($request->password),
        ]);

        // $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['user' => $user]);
    }

    // ورود
    public function login(Request $request)
    {
        // dd(4545);

        $user = User::where('email', $request->email)
                    // ->orWhere('mobile', $request->mobile)
                    ->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'نام کاربری یا رمزعبور اشتباه است'], 401);
        }

        // $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['user' => $user]);
    }

    // خروج
    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json(['message' => 'خروج موفقیت‌آمیز بود']);
    }
}
