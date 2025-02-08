<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    protected $fillable = [
        'title',
        'description',
    ];

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_attached_tickets');
    }
}
