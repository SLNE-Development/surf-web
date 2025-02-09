<?php

namespace App\Http\Resources\Core;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CoreUserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'uuid' => $this->uuid,
            'last_seen' => $this->last_seen,
            'last_server' => $this->last_server,
            'last_name' => $this->last_name,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }
}
