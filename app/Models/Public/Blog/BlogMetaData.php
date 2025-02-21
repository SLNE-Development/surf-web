<?php

namespace App\Models\Public\Blog;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogMetaData extends Model
{

    /** @use HasFactory<\Database\Factories\BlogMetaDataFactory> */
    use HasFactory;

    protected $fillable = [
        "title",
        "description",
        "image",
        "blog_post_id"
    ];

    public function post()
    {
        return $this->belongsTo(BlogPost::class);
    }
}
