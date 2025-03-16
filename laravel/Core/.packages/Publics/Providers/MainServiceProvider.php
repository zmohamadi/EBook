<?php

namespace Publics\Providers;

use Illuminate\Support\ServiceProvider;

class MainServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {        
        $this->app->register('Admin\AdminServiceProvider');
        $this->app->register('Site\SiteServiceProvider');
        $this->app->register('Api\ApiServiceProvider');
        $this->app->register('Publics\Providers\EventServiceProvider');

        $router = $this->app['router'];
        $router->aliasMiddleware('Lang', \Publics\Middlewares\Lang::class);
    }
}
