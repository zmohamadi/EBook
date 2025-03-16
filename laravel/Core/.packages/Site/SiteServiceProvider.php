<?php

namespace Site;

use Illuminate\Support\ServiceProvider;

class SiteServiceProvider extends ServiceProvider
{
    public function boot()
    {                    
        $path = __DIR__."/../Publics/lang";
        str_replace('/', DIRECTORY_SEPARATOR, $path);
        $this->loadTranslationsFrom($path , "Lang");
        $this->app['router']->aliasMiddleware("SiteInit", Middlewares\SiteInit::class);
    }

    public function register(){}
}
