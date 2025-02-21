<?php

namespace App\Data\Blog;

use Spatie\LaravelData\Data;

class BlogMetaData extends Data
{
    public function __construct(
        public string $title,
        public string $description,
        public string $image
    ) {}
}
