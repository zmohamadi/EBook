<?php
namespace Admin\Controllers\Public;

use App\Http\Controllers\Controller;
use Admin\Controllers\Public\EMail;
use Illuminate\Support\Facades\Mail;

class PublicController extends Controller
{
    /**
     * get records condition a field
    */
    public static function getRecords($model = "", $field = "", $field_value = "", $operator = "=")
    {
        $m = ucfirst($model);
        $m = str_replace('-', '\\', $m);
        $className = 'Models\\' . $m;
        $records = $className::active();
        if ($field != "") {
            $records = $records->where($field, $operator, $field_value);
        }
        $records = $records->get();

        return $records;
    }
    /**
     * show info a record
    */
    public static function showInfoRecord($model="", $id="", $field="")
    {
        $m = ucfirst($model);
        $m = str_replace('-','\\',$m);
        $className = 'Models\\' . $m;
        $record = $className::where('id', $id)
            ->select('id', $field)
            ->first()
            ;
        return $record;
    }
    /**
     * update info a record
    */
    public static function updateRecord($model, $id, $field, $request_value)
    {
        $m = ucfirst($model);
        $m = str_replace('-','\\',$m);
        $className = 'Models\\' . $m;
        $modelObj =  new $className;
        $record = $modelObj->find($id);
        // $record->$field = $request_value;
        // $record->update();
        $record->update([$field=>$request_value]);
        return $record;
    }
    /**
     * insert in table Keyword
    */
    public static function insertNewKeyword($obj)
    {
        $lang = request()->lang;
        $keys = explode("-", request()->keywords);
        foreach($keys as $key)
        {
            if($key != '')
            {
                $check_keyword = \Models\Base\Keyword::where("title", $key)->select("id")->first();
                if($check_keyword)
                {
                    $obj->keywords()->attach($check_keyword->id);
                }
                else
                {
                    $new_keyword = new \Models\Base\Keyword();
                    $new_keyword->title = $key;
                    $new_keyword->lang = $lang;
                    $new_keyword->save();
                    $obj->keywords()->attach($new_keyword->id);
                }
            }
        }
        return $obj;
    }
    /**
     * get provinces a country for use in Select2
     */
    public function getProvince()
    {
        $country_id = request()->country_id;
        $pro = \Models\Base\Province::with(["cities" => function($q)
        {
            $q->active();
        }])
        ->where("country_id", $country_id)
        ->get()
        ;
        return \Response::json($pro);
    }

    public function plusCourseTools($id,$field){
        return \Models\Edu\Course::where('id',$id)->increment($field);
    }

    public function sendEmail($email,$view)
    {
        // if($request->email) $this->sendEmail($request->email);
        \Mail::to($email)->queue(new EMail($email,$view));
    }
    // public function email()
    // {
    //     $email = "afgwomen@afg-womens-academy.org";
    //     return $this->view('views::emails.sample')->with(compact('email'));
    // }
    /**
     * Update field count_comment of tables blogs
     */
    public static function updateCountComment()
    {
        \DB::update("UPDATE blogs SET `count_comment` =
            (SELECT count(blog_comments.blog_id) FROM blog_comments
                WHERE blog_comments.blog_id = blogs.id AND blog_comments.deleted_at IS null)");
    }
    /**
     * Update field count_comment_waiting of tables blogs
     */
    public static function updateCountCommentWaiting()
    {
        \DB::update("UPDATE blogs SET `count_comment_waiting` =
            (SELECT count(blog_comments.blog_id) FROM blog_comments
                WHERE blog_comments.blog_id = blogs.id AND blog_comments.confirm_id = 2 AND blog_comments.deleted_at IS null)");
    }
    /**
     * Update field count_comment_confirmed of tables blogs
     */
    public static function updateCountCommentConfirmed()
    {
        \DB::update("UPDATE blogs SET `count_comment_confirmed` =
            (SELECT count(blog_comments.blog_id) FROM blog_comments
                WHERE blog_comments.blog_id = blogs.id AND blog_comments.confirm_id = 1 AND blog_comments.deleted_at IS null)");
    }
    /**
     * Update field count_comment_rejected of tables blogs
     */
    public static function updateCountCommentRejected()
    {
        \DB::update("UPDATE blogs SET `count_comment_rejected` =
            (SELECT count(blog_comments.blog_id) FROM blog_comments
                WHERE blog_comments.blog_id = blogs.id AND blog_comments.confirm_id = 0 AND blog_comments.deleted_at IS null)");
    }
    /**
     * Update field count_ticket of tables ticket_subjects
     */
    public static function updateCountTicket()
    {
        \DB::update("UPDATE ticket_subjects SET `count_ticket` =
            (SELECT count(tickets.subject_id) FROM tickets
                WHERE tickets.subject_id = ticket_subjects.id AND tickets.deleted_at IS null)");
    }
    /**
     * Update field count_ticket_awaiting of tables ticket_subjects
     */
    public static function updateCountTicketAwaiting()
    {
        \DB::update("UPDATE ticket_subjects SET `count_ticket_awaiting` =
            (SELECT count(tickets.subject_id) FROM tickets
                WHERE tickets.subject_id = ticket_subjects.id AND tickets.reply_status_id = 0 AND tickets.deleted_at IS null)");
    }
    /**
     * Update field count_ticket_checking of tables ticket_subjects
     */
    public static function updateCountTicketChecking()
    {
        \DB::update("UPDATE ticket_subjects SET `count_ticket_checking` =
            (SELECT count(tickets.subject_id) FROM tickets
                WHERE tickets.subject_id = ticket_subjects.id AND tickets.reply_status_id = 1 AND tickets.deleted_at IS null)");
    }
    /**
     * Update field count_ticket_answered of tables ticket_subjects
     */
    public static function updateCountTicketAnswered()
    {
        \DB::update("UPDATE ticket_subjects SET `count_ticket_answered` =
            (SELECT count(tickets.subject_id) FROM tickets
                WHERE tickets.subject_id = ticket_subjects.id AND tickets.reply_status_id = 2 AND tickets.deleted_at IS null)");
    }
    /**
     * Update field count_ticket_closed of tables ticket_subjects
     */
    public static function updateCountTicketClosed()
    {
        \DB::update("UPDATE ticket_subjects SET `count_ticket_closed` =
            (SELECT count(tickets.subject_id) FROM tickets
                WHERE tickets.subject_id = ticket_subjects.id AND tickets.reply_status_id = 3 AND tickets.deleted_at IS null)");
    }
}