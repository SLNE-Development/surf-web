<?php

namespace App\Models\Punishment;

use App\Models\Core\CoreUser;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BanPunishment extends Model
{
    protected $table = 'punish_bans';
    
    protected $fillable = [
        'punishment_id',
        'punished_uuid',
        'server',
        'security_ban',
        'permanent',
        'raw_ban',
        'reason',
        'expiration_date',
        'issuer_uuid',
        'punishment_date',
        'unpunished',
        'unpunished_date',
        'unpunished_issuer_id'
    ];

    protected $casts = [
        'punishment_date' => 'datetime',
        'expiration_date' => 'datetime',
        'unpunished_date' => 'datetime',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(CoreUser::class, 'punished_uuid', 'uuid');
    }
}
