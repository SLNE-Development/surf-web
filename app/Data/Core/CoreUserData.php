<?php

namespace App\Data\Core;

use Carbon\CarbonImmutable;
use Spatie\LaravelData\Data;

class CoreUserData extends Data
{
    public function __construct(
        public int $id,
        public string $uuid,
        public ?CarbonImmutable $last_seen,
        public ?string $last_server,
        public ?string $last_name,
        public ?CarbonImmutable $created_at,
        public ?CarbonImmutable $updated_at,
    ) {}
}
