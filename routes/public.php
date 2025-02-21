<?php

use App\Http\Controllers\Public\Blog\BlogController;
use Illuminate\Support\Facades\Route;

Route::get("/", function () {
    return redirect()->route("blog.index");
});

Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
Route::get('/blog/{slugOrPermaLink}', [BlogController::class, 'show'])->name('blog.show');
