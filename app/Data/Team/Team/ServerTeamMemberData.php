<?php

namespace App\Data\Team\Team;

use Carbon\CarbonImmutable;
use Illuminate\Support\Facades\Date;
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

        public ?int $userId,
    ) {}
}
