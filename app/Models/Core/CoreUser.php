<?php

namespace App\Models\Core;

use Illuminate\Database\Eloquent\Model;

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

    public function nameHistories()
    {
        return $this->hasMany(CoreUserNameHistory::class);
    }

    public function getRouteKeyName(): string
    {
        return 'uuid';
    }
}
