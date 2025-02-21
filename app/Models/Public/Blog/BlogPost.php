<?php

namespace App\Models\Public\Blog;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogPost extends Model
{

    /** @use HasFactory<\Database\Factories\BlogPostFactory> */
    use HasFactory;

    protected $fillable = [
        'permalink',
        'slug',
        'title',
        'content',
        'blog_type',
    ];

    public function meta()
    {
        return $this->hasOne(BlogMetaData::class);
    }
}
