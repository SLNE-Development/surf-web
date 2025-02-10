<?php

namespace App\Data\Team\Team;

use App\Data\Web\UserData;
use Carbon\CarbonImmutable;
use Spatie\LaravelData\Attributes\LoadRelation;
use Spatie\LaravelData\Data;

class ServerTeamMemberValuationData extends Data
{
    public function __construct(
        public int $id,
        public string $valuation,
        public string $comment,
        public int $serverTeamMemberId,
        public int $valuatedById,
        public ?CarbonImmutable $createdAt,
        public ?CarbonImmutable $updatedAt,

        #[LoadRelation]
        public UserData $valuatedBy,
    ) {}
}
