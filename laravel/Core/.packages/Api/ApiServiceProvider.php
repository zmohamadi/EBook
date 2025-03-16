<?php

namespace Api;

use Illuminate\Support\ServiceProvider;

class ApiServiceProvider extends ServiceProvider
{
    public function boot()
    {                    
        $path = __DIR__."/../Publics/lang";
        str_replace('/', DIRECTORY_SEPARATOR, $path);
        $this->loadTranslationsFrom($path , "Lang");
        $this->app['router']->aliasMiddleware("ApiInit", Middlewares\ApiInit::class);
    }

    public function register(){}
}
