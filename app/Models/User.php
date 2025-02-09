<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Models\Team\Member\ServerTeamMember;
use App\Models\Team\Member\ServerTeamMemberNote;
use App\Models\Team\Member\ServerTeamMemberPromotion;
use App\Models\Team\Member\ServerTeamMemberValuation;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        "avatar",
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function serverTeamMember()
    {
        return $this->hasOne(ServerTeamMember::class);
    }

    public function createdServerTeamMemberNotes()
    {
        return $this->hasMany(ServerTeamMemberNote::class, "created_by_id");
    }

    public function promotedServerTeamMembers()
    {
        return $this->hasMany(ServerTeamMemberPromotion::class, "promoted_by_id");
    }

    public function valuatedServerTeamMembers()
    {
        return $this->hasMany(ServerTeamMemberValuation::class, "valuated_by_id");
    }
}
