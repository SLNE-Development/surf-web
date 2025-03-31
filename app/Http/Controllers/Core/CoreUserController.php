<?php

namespace App\Http\Controllers\Core;

use App\Data\Core\CoreUserData;
use App\Http\Controllers\Controller;
use App\Models\Core\CoreUser;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CoreUserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = $request->query("query");
        $users = CoreUser::where("last_name", "LIKE", "%$query%")
            ->orWhere("uuid", $query)->paginate(100)->withQueryString();

        return Inertia::render('panel/core/users/index/page', [
            'users' => CoreUserData::collect($users),
            'query' => $query,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(CoreUser $user)
    {
        return Inertia::render('panel/core/users/show/page', [
            'user' => CoreUserData::from($user),
        ]);
    }
}
