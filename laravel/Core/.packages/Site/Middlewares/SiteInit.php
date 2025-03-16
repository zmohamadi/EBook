<?php

namespace Site\Middlewares;

use Closure;

class SiteInit
{
    public function handle($request, Closure $next)
    {        
        \Lang::addNamespace('Site', base_path("api/Site/Lara/lang"));
        $lang = $request->route('lang');
        $routes = $request->route();

        if($lang=="")
            $lang="fa";
            
        if(in_array($lang,['fa','ar']))
            $dir = "rtl";
        elseif(in_array($lang,['en','tu']))
            $dir = "ltr";
        else
            return abort('404');


        \App::setLocale($lang);
        \Session::put("lang",$lang);

        $routes->forgetParameter('lang');

        if(!defined('_DIR_'))  define("_DIR_", $dir);
        if(!defined('_LANG_'))  define("_LANG_",$lang);
        if(!defined('_LOCAL_'))  define("_LOCAL_" ,$lang); 
        
        return $next($request);
    }

}
