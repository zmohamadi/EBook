<?php

namespace Admin\Controllers\Book;

use Admin\Controllers\Public\BaseAbstract;
use Models\Book\Book;

class BookController extends BaseAbstract
{
    protected $model = "Models\Book\Book";
    protected $request = "Publics\Requests\Book\BookRequest";
    protected $with = ["publisher", "activeStatus", "publication", "fileType"];
    protected $showWith = ["publisher", "categories", "activeStatus", "creators", "publication", "fileType",'reviews.user'];
    protected $needles = ["Book\Publisher", "Book\Category", "Base\Status", "Person\User"];
    protected $searchFilter = ["title"];
    protected $files = ["image", "sample_file", "file"];

    public function init()
    {
        $this->indexQuery = function ($query) {
            $query->when(request()->publication_status != null, function ($q) {
                $q->where('publication_status', request()->publication_status);
            })
            ->when(request()->type != null, function ($q) {
                $q->where('type', request()->type);
            })
            ->when(request()->publisher != null, function ($q) {
                $q->whereHas('publisher', function ($subQuery) {
                    $subQuery->where('id', request()->publisher);
                });
            })
            ->when(request()->file_type != null, function ($q) {
                $q->whereHas('fileType', function ($subQuery) {
                    $subQuery->where('code', request()->file_type);
                });
            })
            ->when(request()->author != null, function ($q) {
                $q->whereHas('creators', function ($subQuery) {
                    $subQuery->where('user_id', request()->author)->where('type', 'author');
                });
            })
            ->when(request()->narrator != null, function ($q) {
                $q->whereHas('creators', function ($subQuery) {
                    $subQuery->where('user_id', request()->narrator)->where('type', 'narrator');
                });
            })
            ->when(request()->translator != null, function ($q) {
                $q->whereHas('creators', function ($subQuery) {
                    $subQuery->where('user_id', request()->translator)->where('type', 'translator');
                });
            })
            ->when(request()->category != null, function ($q) {
                $q->whereHas('categories', function ($subQuery) {
                    $subQuery->where('id', request()->category);
                });
            });
        };

        $this->storeQuery = function ($query) {
            $query->authors()->sync(request()->authors);
            $query->narrators()->sync(request()->narrators);
            $query->translators()->sync(request()->translators);
            $query->categories()->sync(request()->categories);
        };
    }
}