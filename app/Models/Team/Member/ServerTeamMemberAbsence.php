<?php

namespace App\Models\Team\Member;

use Illuminate\Database\Eloquent\Model;

class ServerTeamMemberAbsence extends Model
{

    protected $fillable = [
        "start_date",
        "end_date",
        "reason",
    ];

    public function serverTeamMember()
    {
        return $this->belongsTo(ServerTeamMember::class);
    }
}
