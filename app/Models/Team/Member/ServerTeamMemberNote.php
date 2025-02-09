<?php

namespace App\Models\Team\Member;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class ServerTeamMemberNote extends Model
{
    protected $fillable = [
        "note"
    ];

    public function serverTeamMember()
    {
        return $this->belongsTo(ServerTeamMember::class);
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class, "created_by_id");
    }
}
