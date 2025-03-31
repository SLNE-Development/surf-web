<?php

namespace App\Models\Core;

use Illuminate\Database\Eloquent\Model;

class CoreUserNameHistory extends Model
{
    protected $fillable = [
        "name",
        "user_id"
    ];

    public function user()
    {
        return $this->belongsTo(CoreUser::class);
    }
}
