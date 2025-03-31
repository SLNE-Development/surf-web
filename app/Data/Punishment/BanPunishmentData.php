<?php

namespace App\Data\Punishment;

use Carbon\CarbonImmutable;
use Spatie\LaravelData\Data;

class BanPunishmentData extends Data
{
    public function __construct(
        public int              $id,
        public string           $punishment_id,
        public string           $punished_uuid,
        public ?string          $server,
        public bool             $security_ban,
        public bool             $permanent,
        public bool             $raw_ban,
        public string           $reason,
        public ?CarbonImmutable $expiration_date,
        public string           $issuer_uuid,
        public CarbonImmutable  $punishment_date,
        public ?CarbonImmutable $unpunished_date,
        public ?string          $unpunished_issuer_id,
        public ?CarbonImmutable $created_at,
        public ?CarbonImmutable $updated_at,
    )
    {
    }
}
