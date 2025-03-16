<?php

namespace Api\Controllers\Blog;

use App\Http\Controllers\Controller;
use Models\Content\Blog;
use Models\Content\BlogSubject;

class BlogController extends Controller
{
    public $list_blogs;
    public $search;
    public $subject_id;
    public $limit;
    public $limit_most;
    public $page;

    public function index()
    {
        $this->search = request()->search;
        $this->subject_id = request()->subject;
        $this->limit = 6;
        $this->limit_most = 4;
        $this->page = request()->page;
        $items = [];

        $this->list_blogs = Blog::with("subject")->active();
        
        if(request()->type == "first")
        {
            $items['mostVisitedBlogs'] = $this->mostVisitedBlogs();
            $items['subjects'] = $this->subject();
        }

        if(request()->filled('search') || request()->filled('subject'))
            $items ['blogs'] = $this->filterBlogs();
        else $items ['blogs'] = $this->blogs();

        return response()->json($items);
    }
    /**
     * get All Blogs
     */
    public function blogs()
    {
        return $this->list_blogs->orderByDesc("id")->paginate($this->limit);
    }
    /**
     * get All Blogs
     */
    public function mostVisitedBlogs()
    {
        return $this->list_blogs->orderByDesc("count_view")->latest()->limit($this->limit_most)->get();
    }
    /**
     * get All Subjects
     */
    public function subject()
    {
        return BlogSubject::active()->get();
    }
    /**
     * get filter In Blogs By $search || $subject_id
     */
    public function filterBlogs()
    {
        $blogs = $this->list_blogs;
        if($this->search)
        {
            $search_like = $this->search;
            $blogs = $blogs->where(function ($q) use($search_like) { $q->where("title", "LIKE", "%".$search_like."%")->orWhere("summary", "LIKE", "%".$search_like."%"); });
        }
        if($this->subject_id)
        {
            $filter_blogs = $blogs->where("subject_id", $this->subject_id);
        }
        $filter_blogs = $blogs->orderByDesc("id")->paginate($this->limit);
        return $filter_blogs;
    }
    /**
     * get Info a Blog By $id
     */
    public function show($id)
    {

        $blog = Blog::with("subject","keywords")->active()->find($id);
        $blogs = Blog::where("id", "!=", $id)->where("subject_id", $blog->subject_id)->active()->get();
        
        $this->incrementCount(["blog"=>$blog,"field"=>"count_view"]);

        $data = [
            'blog'=>$blog,
            'blogs'=>$blogs,
        ];
        return $data;
    }
    /**
     * Plus Count For Field (view,like,sell,...)
     */
    public function incrementCount($info)
    {
        if(isset($info["id"]) && $info["id"] > 0) $info["blog"] = Blog::find($info["id"]);
        $info["blog"]->increment($info["field"]);
    }
}
