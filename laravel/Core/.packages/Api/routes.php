<?php
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Response;


Route::get('/test', function(){
    dd("test api");
});
Route::post('api-register', [\Api\Controllers\Auth\AuthController::class, 'register']);
Route::post('api-login', [\Api\Controllers\Auth\AuthController::class, 'login']);
Route::post('logout', [\Api\Controllers\Auth\AuthController::class, 'logout'])->middleware('auth:sanctum');


// Route::get('/products', [\Api\Controllers\Product\ProductController::class, 'index']);
Route::get('/home', 'Home\HomeController@index');
Route::get('/get-data-public', 'Home\HomeController@getDataPublic');
Route::get('/product-list', 'Product\ProductController@index');
Route::get('/product-view/{id}', 'Product\ProductController@show');
Route::get('/blog-list', 'Blog\BlogController@index');

Route::get('/lang/{locale}', function ($locale) {
    $filePath = base_path(".packages/Api/lang/$locale/public.php");
    // dd($filePath);

    if (!file_exists($filePath)) {
        return response()->json(['error' => 'Translation file not found'], 404);
    }

    $lang = require $filePath;
    return response()->json($lang);
});



// Route::middleware(['auth:web'])->get('/user', function () {
//     return request()->user();
// });

// Route::group(['middleware' => ['ApiInit'], 'prefix' => '{lang}'], function ($lang) {
//     // dd($lang);
//     // Authentication routes...
//     Route::get('/login/google', 'Auth\GoogleController@redirectToGoogle')->name('auth.google');

//     // routes for user authentication and registration
//     Route::middleware('auth:sanctum')->group(function () {
//         Route::post('/logout', 'Auth\AuthController@logout');
//     });

//     // public  routes that do not require authintication
    
//     // Route::get('/about', 'Home\HomeController@about');
//     // Route::get('/contact', 'Home\HomeController@contact');

//     Route::get('/products/{id}', 'Product\ProductController@show');
//     Route::get('/products', 'Product\ProductController@index');

//     Route::get('/blog/{id}', 'Blog\BlogController@show');
//     Route::get('/blog', 'Blog\BlogController@index');
//     // Route::resource('contact-us', 'ContactController');
//     // Route::resource('about-us', 'AboutController');
//     // Route::post('send-message', 'ContactController@comment');

//     //footer
//     Route::get('/footer', 'PublicController@footer');
// });

Route::get('/clear-cache', function() {
    $commands = [
        'cache:clear',
        'config:clear',
        'route:clear',
        'view:clear',
        'optimize:clear',
    ];

    $results = [];

    foreach ($commands as $command) {
        $results[$command] = Artisan::call($command) === 0 ? 'Success' : 'Failed';
    }

    return Response::json([
        'message' => 'Cache cleared successfully!',
        'results' => $results
    ]);
});


// require __DIR__ . '/auth.php';