<?php

namespace App\Data\Core;

use Carbon\CarbonImmutable;
use Spatie\LaravelData\Data;

class CoreUserNameHistoryData extends Data
{
    public function __construct(
        public int              $id,
        public string           $name,
        public ?CarbonImmutable $created_at,
    )
    {
    }
}
