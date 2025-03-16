<?php

namespace Api\Controllers\Blog;

use App\Http\Controllers\Controller;
use Api\Controllers\Traits\ApiTrait;
use Symfony\Component\HttpFoundation\Request;
use \Models\Content\Blog;

class BlogCommentController extends Controller
{
    use ApiTrait;

    public function store(Request $request)
    {
        $this->validate($request, [
            'sender_name' => 'required|string',
            'comment' => 'required',
        ]);

        $comment = \Models\Content\BlogComment::create($request->all());
       
        // $message = 'نظر شما با موفقیت ثبت شد';
        $message = trans('Lang::public.comment_success');
        
        if ($comment) {
            return response()->json(['message' => $message, 'status' => 200]);
        }
    }
    public function like(Request $request)
    {
        $blog = \Models\Content\Blog::select('count_like','id')->find($request->id);
        $blog->count_like = $blog->count_like + 1;
        $blog->update();
        return $blog->count_like + 1;

    }
    public function dislike(Request $request)
    {
        $blog = \Models\Content\Blog::select('count_dislike','id')->find($request->id);
        $blog->count_dislike = $blog->count_dislike + 1;
        $blog->update();
        return $blog->count_dislike + 1;

    }
}
