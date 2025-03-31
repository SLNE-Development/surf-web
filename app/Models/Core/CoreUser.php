<?php

namespace App\Models\Core;

use App\Models\Punishment\BanPunishment;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class CoreUser extends Model
{
    protected $fillable = [
        'uuid',
        'last_seen',
        'last_server',
        'last_name',
    ];

    protected $casts = [
        'last_seen' => 'datetime',
    ];

    public function nameHistories(): HasMany|CoreUser
    {
        return $this->hasMany(CoreUserNameHistory::class);
    }

    public function bans(): HasMany|CoreUser
    {
        return $this->hasMany(BanPunishment::class, "punished_uuid", "uuid");
    }

    public function getRouteKeyName(): string
    {
        return 'uuid';
    }
}
