<?php

namespace App\Data\Blog;

use Carbon\CarbonImmutable;
use Spatie\LaravelData\Attributes\LoadRelation;
use Spatie\LaravelData\Data;

class BlogPostData extends Data
{
    public function __construct(
        public int $id,
        public string $permalink,
        public string $slug,
        public string $title,
        public string $content,
        public string $blog_type,

        public CarbonImmutable $created_at,
        public CarbonImmutable $updated_at,

        #[LoadRelation]
        public BlogMetaData $meta
    ) {}
}
