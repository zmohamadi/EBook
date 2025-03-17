<?php

namespace Publics\Requests\Book;

use Illuminate\Foundation\Http\FormRequest;

class BookRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|string|max:255',
            'publisher_id' => 'required',
            'publication_year' => 'required|integer',
            'original_price' => 'required|numeric|min:0',
            'discounted_price' => 'nullable|numeric|min:0',
            'introduction' => 'nullable|string',
            'recommended_audience' => 'nullable|string',
            'excerpt' => 'nullable|string',
            // 'sample_file' => 'nullable|file|mimes:pdf,epub,mobi|max:20480', // 20MB
            // 'file' => 'nullable|file|mimes:pdf,epub,mobi|max:20480', // 20MB
            // 'type' => 'required|in:1,2,3', // 1: نویسنده, 2: راوی, 3: مترجم
            'file_type' => 'nullable|string',
            'page_count' => 'nullable|integer|min:1',
            'duration' => 'nullable|integer|min:1',
            'file_size' => 'nullable|integer|min:1',
            'publication_status' => 'nullable|string',
            // 'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // 2MB
            // 'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // 2MB
            'rating' => 'nullable|numeric|min:0|max:5',
            'rating_count' => 'nullable|integer|min:0',
            'view_count' => 'nullable|integer|min:0',
            'status_id' => 'nullable',
            'categories' => 'required',
            
        ];
    }
}