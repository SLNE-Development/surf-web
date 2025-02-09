<?php

namespace App\Models\Team\Member;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class ServerTeamMember extends Model
{
    protected $fillable = [
        "nickname",
        "discord_id",
        "minecraft_uuid",
        "date_of_birth",
        "first_name",
        "gender",
        "personal_email",
        "phone_number",
        "recruitment_date",
        "team_email",
        "termination_date",
        "user_id"
    ];

    protected $nullable = [
        "termination_date"
    ];

    protected $dates = [
        "date_of_birth",
        "recruitment_date",
        "termination_date"
    ];

    public function notes()
    {
        return $this->hasMany(ServerTeamMemberNote::class);
    }

    public function promotions()
    {
        return $this->hasMany(ServerTeamMemberPromotion::class);
    }

    public function valuations()
    {
        return $this->hasMany(ServerTeamMemberValuation::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function absences()
    {
        return $this->hasMany(ServerTeamMemberAbsence::class);
    }
}
