<?php

namespace App\Data\Core;

use App\Data\Punishment\BanPunishmentData;
use Carbon\CarbonImmutable;
use Spatie\LaravelData\Attributes\LoadRelation;
use Spatie\LaravelData\Data;

class CoreUserData extends Data
{
    public function __construct(
        public int              $id,
        public string           $uuid,
        public ?CarbonImmutable $last_seen,
        public ?string          $last_server,
        public ?string          $last_name,
        public ?CarbonImmutable $created_at,
        public ?CarbonImmutable $updated_at,

        /** @var array<CoreUserNameHistoryData> */
        #[LoadRelation]
        public array            $name_histories,

        /** @var array<BanPunishmentData> */
        public ?array           $bans
    )
    {
    }
}
