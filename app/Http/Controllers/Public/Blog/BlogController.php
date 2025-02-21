<?php

namespace App\Http\Controllers\Public\Blog;

use App\Data\Blog\BlogPostData;
use App\Http\Controllers\Controller;
use App\Models\Public\Blog\BlogPost;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $posts = BlogPost::paginate(10);

        return Inertia::render("public/blog/index", [
            "posts" => Inertia::defer(fn() => BlogPostData::collect($posts)),
        ]);
    }

    public function show(string $slugOrPermaLink)
    {
        $post = BlogPost::where("slug", $slugOrPermaLink)->orWhere("permalink", $slugOrPermaLink)->firstOrFail();

        return Inertia::render("public/blog/show", [
            "post" => BlogPostData::from($post),
        ]);
    }
}
