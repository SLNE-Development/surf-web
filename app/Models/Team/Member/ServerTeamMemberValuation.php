<?php

namespace App\Models\Team\Member;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class ServerTeamMemberValuation extends Model
{
    protected $fillable = [
        "valuation",
        "comment",
    ];

    public function serverTeamMember()
    {
        return $this->belongsTo(ServerTeamMember::class);
    }

    public function valuatedBy()
    {
        return $this->belongsTo(User::class, "valuated_by_id");
    }
}
