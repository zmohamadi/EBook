<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Response;

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

Route::get('/user',"Auth\UserInfo@getInfo");
Route::post('/login',"Auth\AuthenticatedController@store");
Route::post('/logout',"Auth\AuthenticatedController@destroy");

Route::get('/langs',function(){
    \App::setLocale("fa");
    $objects = [
        "public"=>\Lang::get("AdminLang::public"),
        'local'=>\Config::get("app.locale"),
        'langs'=> \Models\Base\Language::where('status_id', 1)->get()];
    return response()->json($objects);
});

// ================ Start Routes Uploads =======================================
Route::post('tinyUpload/{dir}', 'Public\Upload@tinyUpload');
Route::post('upload/{dir}', 'Public\Upload@uploadFile');
Route::post('ckupload/{dir}', 'Public\Upload@ckUpload');
Route::get('deleteFile/{dir}/{file}', 'Public\Upload@deleteFile');
// ================ End Routes Uploads ==========================================

// ================ Start Routes Base ===========================================
Route::get('/home', 'Base\HomeController@home');
Route::resource("countries", "Base\CountryController");
Route::get("provinces/get-needles", "Base\ProvinceController@getNeedles");
Route::resource("provinces", "Base\ProvinceController");
Route::get("cities/get-needles", "Base\CityController@getNeedles");
Route::resource("cities", "Base\CityController");
Route::resource("keywords","Base\KeywordController");
// ================ End Routes Base =============================================

// ================ Start Routes Users ==========================================
Route::get("users/change-status/get-needles", "Person\UserController@changeRoleGetNeedles");
Route::post("users/change-status/{id}", "Person\UserController@changeRole");
Route::put("users/change-password", "Person\UserController@changePassword");

Route::get("users/show-info/{id}", "Person\UserController@showInfo");
Route::get("users/get-needles", "Person\UserController@getNeedles");
Route::resource("users", "Person\UserController");

Route::get("personnels/get-needles", "Person\PersonnelController@getNeedles");
Route::resource("personnels", "Person\PersonnelController");
Route::resource("authors", "Person\AuthorController");
Route::resource("narrators", "Person\NarratorController");
Route::resource("translators", "Person\TranslatorController");

Route::resource("roles", "Person\RoleController");
// ================ End Routes Users =============================================

// ======================================== Start Routes Content ======================================================
Route::get("blogs/get-needles", "Content\BlogController@getNeedles");
Route::resource("/blogs", "Content\BlogController");       
Route::get("blog-subjects/get-needles", "Content\BlogSubjectController@getNeedles");
Route::resource("/blog-subjects", "Content\BlogSubjectController");
Route::put("blog-comments/edit-status-confirm/{id}", "Content\BlogCommentController@editConfirm");
Route::get("blog-comments/get-status-confirm/show/{id}", "Content\BlogCommentController@getConfirmShowConfirm");
Route::resource("/blog-comments", "Content\BlogCommentController");
Route::resource("/contact-us", "Content\ContactUsController"); 
Route::resource("/site-texts", "Content\SiteTextController");
Route::resource("/sliders", "Content\SliderController");  
Route::get("/faqs/get-needles", "Content\FaqController@getNeedles");     
Route::resource("/faqs", "Content\FaqController");
Route::resource("/faq-subjects", "Content\FaqSubjectController");

Route::get("/banners/get-needles", "Content\BannerController@getNeedles");     
Route::resource("/banners", "Content\BannerController");
Route::resource("/banner-positions", "Content\BannerPositionController");

// ======================================== End Routes Content ======================================================

// ================ Start Routes Product =========================================
Route::get("books/get-needles", "Book\BookController@getNeedles");
Route::resource("books","Book\BookController");

Route::get("book-categories/get-needles", "Book\CategoryController@getNeedles");
Route::resource("book-categories","Book\CategoryController");

Route::get("publishers/get-needles", "Book\PublisherController@getNeedles");
Route::resource("publishers","Book\PublisherController");
// ================ End Routes Product ===========================================

Route::post('/breadcrumb', 'Public\Breadcrumb@getItems');


use Faker\Generator;

Route::get('/faker-locale', function (Generator $faker) {
    return $faker->locale;
});
