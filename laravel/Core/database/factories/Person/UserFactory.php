<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

class UserFactory extends Factory
{
    protected $model = User::class;

    public function definition()
    {
        return [
            'firstname' => $this->faker->firstName,
            'lastname' => $this->faker->lastName,
            'mobile' => $this->faker->unique()->phoneNumber,
            'biography' => $this->faker->paragraph,
            'birth_date' => $this->faker->date('Y-m-d'), // تاریخ تولد به صورت رشته
            'death_date' => $this->faker->date('Y-m-d'), // تاریخ درگذشت به صورت رشته
            'nationality' => $this->faker->country,
            'password' => Hash::make('password'), // رمز عبور پیش‌فرض
            'role_id' => $this->faker->numberBetween(0, 5), // نقش کاربر
            'narrator' => $this->faker->boolean, // آیا راوی است؟
            'author' => $this->faker->boolean, // آیا نویسنده است؟
            'translator' => $this->faker->boolean, // آیا مترجم است؟
            'photo' => $this->faker->imageUrl(), // تصویر
            'lang' => 'fa', // زبان پیش‌فرض
            'status_id' => 1, // وضعیت فعال/غیرفعال
        ];
    }
}