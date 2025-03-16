<?php

namespace Admin\Controllers\Content;

use Admin\Controllers\Public\BaseAbstract;

class BlogController extends BaseAbstract
{
    protected $model = "Models\Content\Blog";
    protected $request = "Publics\Requests\Content\BlogRequest";
    protected $with = ["subject","activeStatus","creatorAdmin","editorAdmin"];
    protected $showWith = ["imageFiles","videoFiles","keywords","creatorAdmin","editorAdmin","subject"];
    // protected $destroy = ["keywords","Content\BlogComment"];
    protected $files = ["image","thumb"];
    protected $searchFilter = ["title","lang"];
    protected $needles = ["Base\Keyword","Content\BlogSubject"];

    public function init()
    {
        $this->storeQuery = function ($query)
        {
            (request()->_method == "PUT")? $query->editor_id = $this->user_id : $query->creator_id = $this->user_id;
            // $query->text = str_replace("media/blogs", "/media/blogs", request()->text);
            $query->save();
            if(request()->keyword_id) { $query->Keywords()->sync(request()->keyword_id); }
        };
        $this->showQuery = function ($query)
        {
            $query->withCount('comments');
        };
    }
}
