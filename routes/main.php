<?php

use App\Http\Controllers\Core\CoreUserController;
use App\Http\Controllers\Team\Team\ServerTeamMemberController;
use App\Http\Resources\UserResource;
use App\Models\Core\CoreUser;
use App\Models\Team\Member\ServerTeamMember;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('dashboard');
});

Route::get('/dashboard', function () {
    $users = User::paginate(perPage: 10);

    return Inertia::render('panel/dashboard', [
        "users" => UserResource::collection($users),
    ]);
})->middleware(['auth', 'verified'])->name('dashboard')->breadcrumb("Dashboard");

Route::middleware("auth")->name("core.")->prefix("core")->group(function () {
    Route::get("/users", [CoreUserController::class, "index"])->name("users.index")->breadcrumb("Spielerverwaltung");
    Route::get("/users/{user}", [CoreUserController::class, "show"])->name("users.show")
        ->breadcrumb(fn($user) => $user instanceof CoreUser ? ($user->last_name ?? "/") : "/", "core.users.index");
});

Route::middleware("auth")->name("team.")->prefix("team")->group(function () {
    Route::get("/members", [ServerTeamMemberController::class, "index"])->name("members.index")->breadcrumb("Serverteammitglieder");
    Route::get("/members/{member}", [ServerTeamMemberController::class, "show"])->name("members.show")->breadcrumb(fn(ServerTeamMember $member) => $member->nickname ?? "/", "team.members.index");
    Route::post("/members", [ServerTeamMemberController::class, "store"])->name("members.store");
    Route::put("/members/{member}", [ServerTeamMemberController::class, "update"])->name("members.update");
});

Route::get("/imprint", function () {
    return "Impressum";
})->name("imprint")->breadcrumb("Impressum");

Route::get("/privacy", function () {
    return "Datenschutz";
})->name("privacy")->breadcrumb("Datenschutz");

require __DIR__ . '/auth.php';
