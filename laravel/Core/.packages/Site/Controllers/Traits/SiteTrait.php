<?php

namespace Site\Controllers\Traits;

// use Models\Site\SiteText;
use Models\Person\User;

trait SiteTrait
{
    private $modules;

    public function view($path, $header = 'header', $footer = 'footer')
    {
        //dd("545");

        $view = view($path);

        if ($this->modules) {
            foreach ($this->modules as $mod) {

                $func = $mod['func'];

                $params = $mod['params'];

                $modName = 'function' . rand(10000, 50000);

                //echo $modName;

                if ($mod['ctrl'] == "") {
                    if ($params != "") {

                        $p = "'" . implode("','", $params) . "'";
                        $order = '$$modName = $this->$func(' . $p . ');';
                        eval($order);
                    } else {

                        $$modName = $this->$func();
                    }

                } else {
                    //$$modName = call_user_method_array($func, $this->makeObj($mod['ctrl']), $params);

                    if ($params != "") {
                        $p = "'" . implode("','", $params) . "'";
                        $order = '$$modName = $this->makeObj($mod["ctrl"])->$func(' . $p . ');';
                        eval($order);
                    } else {
                        $$modName = $this->makeObj($mod['ctrl'])->$func();
                    }
                }
                $view->with(compact($modName));
            }
        }

        // $contactUs = $this->makeObj("Index")->contactUs();
        // $view->with(compact('contactUs'));
        $header = $this->$header();
        $view->with(compact('header'));

        $footer = $this->$footer();

        $view->with(compact('footer'));

        return $view;

    }
    public function header()
    {
        $text = \Models\Content\SiteText::active()->whereIn('code', [3, 4])->get();
        $slider = [];
        $support = null;
        
        foreach ($text as $value) {
            if ($value->code == 3) {
                $slider[] = $value;
            }
            if ($value->code == 4) {
                $support = $value->text_fa;
            }

        }
        $brands = \Models\Kala\Brand::where('display_status_id', 1)->get();
        $collection = [
            'shops' => \Models\Kala\Shop::shop()->active()->get(),
            'category' => \Models\Kala\Category::where('parent_category_id', 0)->active()->with('childs')->get(),
            'menus' => \Config::get('setting.menus'),
            'support' => $support,
            'slider' => $slider,
            'brands' => $brands,
        ];
        // return view('views::' . _THEME_ . '.components.header')->with(compact('collection'));
    }
   
    
    public function setUserSession($user)
    {
        if (session()->has('user')) {
            //regenerate session
            $items = session()->get('user');
            $items['confirm'] = $user->confirm;
            session()->put('user', $items);
            session()->put('codeTime', time());
            session()->save();
            session()->regenerate();
        } else {
            //session generate
            \Session::put([
                'user' => ['id' => $user->id, 'mobile' => $user->mobile, 'confirm' => 0]
            ]);
            \Session::put('codeTime', time());
        }
    }

    public function checkUserSession()
    {
        // check session for user key, if exist return id's user and otherwise return 419 error
        if (session()->has('user')) {
            $session = session()->get('user');
            $id = $session['id'];
            return $id;
        } else {
            return 'expire';
        }
    }
}
