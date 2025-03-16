<?php

namespace Api\Controllers;

use App\Http\Controllers\Controller;
use \Models\Edu\CourseCategory;
use \Models\Edu\CourseLevel;
use \Models\Person\Teacher;

class PublicController extends Controller
{

    public function edu_level()
    {
        $items['levels'] = \Models\Edu\EducationLevel::where('status_id', 1)
            ->select('id', 'title_' . \Api::getLocale())
            ->get();

        $items['timezones'] = \Models\Person\Timezone::where('status_id', 1)
            ->select('id','title','offset')
            ->get();

        return $items;
    }

    public function course_level()
    {
        return CourseLevel::active()->get();
    }

    public function course_category()
    {
        return CourseCategory::active()->get();
    }

    public function footer()
    {
        return $needles = [
            'category' => CourseCategory::active()->limit(58)->get(),
            'level' => CourseLevel::active()->get(),
            'socials' => \Models\Content\ApiText::active()->where('code', 19)->get(),

        ];
    }

    public function teachers()
    {
        return Teacher::select('id','name','lname','pic')->active()->get();
    }

    public function enroll_checker()
    {
        $student = \Models\Person\Student::find(auth()->user()->id);
        $enroll = $student->enroll()->where('course_id', request()->course_id)->first();

        if (is_null($enroll)) {
            return 'not_enrolled'; // not enrolled yet
        }

        $status;
        switch ($enroll->status_id) {
            case 0:
                $status = 'waiting';
                break;
            case 1:
                $status = 'accept';
                break;
            case 2:
                $status = 'reject';
                break;
        }

        return response()->json($status);
    }
    
    public function mentee_checker()
    {
        // $mentee = \Models\Person\Mentee::find(auth()->user()->id);

        // if (is_null($mentee)) {
        //     return 'not_mentee';
        // }
        $mentee = \Models\Person\User::find(auth()->user()->id);

        $mentee_calendar = $mentee->menteeRequests()->get();
        
        if (is_null($mentee_calendar)) {
            return 'not_enrolled'; // not enrolled yet
        }
        // dd($mentee_calendar);
        
        $mentee_calendar = $mentee->menteeRequests()->pluck('confirm_status_id', 'calendar_id');

        return response()->json($mentee_calendar);
    }

}
