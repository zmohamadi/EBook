<?php

namespace Admin\Controllers\Public;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class Breadcrumb extends Controller
{   // model, title, primaryKey:id
    private $models = [
        
        'users' => [\Models\Person\User::class, 'lastname'],
        'personnels' => [\Models\Person\Personnel::class, 'lastname'],
        'promoters' => [\Models\Person\Promoter::class, 'lastname'],
        'promotions' => [\Models\Promotion::class, 'title'],
        'blogs' => [\Models\Content\Blog::class, 'title'],
        'tickets' => [\Models\Ticket\Ticket::class, 'title'],
        'courses' => [\Models\Course::class, 'subject'],
        'tribunes' => [\Models\Tribune::class, 'subject'],
    ];

    public function getItems(Request $request)
    {
        $params = request()->except('lang');
        $lang = app()->getLocale();
        $info = [];

        foreach ($params as $modelKey => $value){
            if(isset($this->models[$modelKey])){
                [$model, $attr] = $this->models[$modelKey];
                $primary = $this->models[$modelKey][2]??"id";
                if($primary == '') $primary = "id";
                if (substr($attr, -1, 1) == '_') {
                    $attr .= $lang;
                }
                $record = $model::select($attr)->where($primary, $value)->first();
                $info[$modelKey] = $record[$attr]??"NotFound";
            }
        }
        return response()->json([
            'info' => $info
        ]);
    }

    public function getInfo(Request $request)
    {
        $params = request()->except('lang');
        $lang = $request->lang;
        $info = [];

        // dd("params: ", $params);
        
        // بررسی اینکه آیا کلید "path" وجود دارد یا نه
        if (!$request->has('path')) {
            return response()->json(['error' => 'Path parameter is missing'], 400);
        }
    
        $path = $request->input('path');
        
        // تقسیم مسیر به اجزاء
        $pathParts = explode('/', trim($path, '/')); // برای جدا کردن بخش‌های مسیر
        $modelKey = isset($pathParts[1]) ? $pathParts[1] : null; // فرض کنیم اولین جزء مدل باشد
        $itemId = isset($pathParts[2]) ? $pathParts[2] : null; // فرض کنیم دومین جزء شناسه آیتم باشد
        
        // بررسی وجود مدل برای جستجو
        if ($modelKey && isset($this->models[$modelKey])) {
            $attr = $this->models[$modelKey][1];
            if (substr($attr, -1, 1) == '_') {
                $attr .= $lang;
            }
    
            // جستجو در مدل مربوطه با شناسه آیتم
            $obj = $this->models[$modelKey][0]::select($attr)->find($itemId);
            
            if ($obj) {
                $info[$modelKey . 'Title'] = $obj->$attr;
            } else {
                $info[$modelKey . 'Title'] = 'Not found';
            }
        } else {
            return response()->json(['error' => 'Invalid model or item ID'], 400);
        }
    
        // برگشت اطلاعات به صورت JSON
        return response()->json([
            'path' => $path,
            'info' => $info
        ]);
    }
    

}
