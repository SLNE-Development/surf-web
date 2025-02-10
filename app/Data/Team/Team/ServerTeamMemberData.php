<?php

namespace App\Data\Team\Team;

use App\Data\Web\UserData;
use Carbon\CarbonImmutable;
use Illuminate\Support\Facades\Date;
use Spatie\LaravelData\Attributes\LoadRelation;
use Spatie\LaravelData\Data;

class ServerTeamMemberData extends Data
{
    public function __construct(
        public int $id,
        public string $nickname,
        public string $discordId,
        public string $minecraftUuid,
        public string $dateOfBirth,
        public string $firstName,
        public string $gender,
        public string $personalEmail,
        public string $phoneNumber,
        public string $recruitmentDate,
        public string $teamEmail,
        public ?string $terminationDate,
        public ?CarbonImmutable $createdAt,
        public ?CarbonImmutable $updatedAt,

        #[LoadRelation]
        public UserData $user,

        /** @var array<ServerTeamMemberValuationData> */
        #[LoadRelation]
        public array $valuations,
    ) {}
}
