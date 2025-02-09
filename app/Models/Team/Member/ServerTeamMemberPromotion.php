<?php

namespace App\Models\Team\Member;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class ServerTeamMemberPromotion extends Model
{
    protected $fillable = [
        "old_role",
        "new_role"
    ];

    public function serverTeamMember()
    {
        return $this->belongsTo(ServerTeamMember::class);
    }

    public function promotedBy()
    {
        return $this->belongsTo(User::class, "promoted_by_id");
    }
}
