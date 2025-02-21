<?php

namespace Database\Seeders;

use App\Models\Public\Blog\BlogMetaData;
use App\Models\Public\Blog\BlogPost;
use Illuminate\Database\Seeder;

class BlogPostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        BlogPost::factory(100)->create()->each(function ($post) {
            $post->meta()->save(BlogMetaData::factory()->make());
        });
    }
}
