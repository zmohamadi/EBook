<?php

namespace Api\Middlewares;

use Closure;

class ApiInit
{
    public function handle($request, Closure $next)
    {        
        \Lang::addNamespace('Api', base_path("api/Api/Lara/lang"));
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


        \Api::setLocale($lang);
        \Session::put("lang",$lang);

        $routes->forgetParameter('lang');

        if(!defined('_DIR_'))  define("_DIR_", $dir);
        if(!defined('_LANG_'))  define("_LANG_",$lang);
        if(!defined('_LOCAL_'))  define("_LOCAL_" ,$lang); 
        
        return $next($request);
    }

}
