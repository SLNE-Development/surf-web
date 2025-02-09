<?php

namespace App\Http\Requests\Team\Team;

use Illuminate\Foundation\Http\FormRequest;

class UpdateServerTeamMemberRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $id = $this->route("member")->id;

        return [
            "nickname" => ["required", "string", "max:255"],
            "discord_id" => ["required", "string", "max:20", "min:16", "unique:server_team_members,discord_id,$id}"],
            "minecraft_uuid" => ["required", "string", "max:36", "min:36", "unique:server_team_members,minecraft_uuid,$id"],
            "date_of_birth" => ["required", "date"],
            "first_name" => ["required", "string", "max:255"],
            "gender" => ["required", "string", "max:255", "in:MALE,FEMALE,OTHER"],
            "personal_email" => ["required", "email", "max:255", "unique:server_team_members,personal_email,$id"],
            "phone_number" => ["required", "string", "max:255", "unique:server_team_members,phone_number,$id"],
            "recruitment_date" => ["required", "date"],
            "team_email" => ["required", "email", "max:255", "unique:server_team_members,team_email,$id"],
            "user_id" => ["required", "integer", "exists:users,id", "unique:server_team_members,user_id,$id"],
        ];
    }
}
