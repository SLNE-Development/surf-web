<?php

namespace App\Http\Controllers\Team\Team;

use App\Data\Team\Team\ServerTeamMemberData;
use App\Http\Controllers\Controller;
use App\Http\Requests\Team\Team\StoreServerTeamMemberRequest;
use App\Http\Resources\UserResource;
use App\Models\Team\Member\ServerTeamMember;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServerTeamMemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = $request->query("query");
        $members = ServerTeamMember::where("nickname", "LIKE", "%$query%")->paginate(100)->withQueryString();
        $users = User::all();

        return Inertia::render('Team/Team/Index', [
            'members' => ServerTeamMemberData::collect($members),
            "users" => UserResource::collection($users),
            'query' => $query,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(ServerTeamMember $user) {}

    public function store(StoreServerTeamMemberRequest $request)
    {
        $data = $request->validated();
        $user = User::find($data["user_id"]);

        if (!$user) {
            return redirect()->route('team.team.index')->with('error', 'User not found');
        }

        $user->serverTeamMember()->create($data);

        return redirect()->route('team.members.index');
    }
}
