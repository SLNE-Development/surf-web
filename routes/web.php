<?php

use App\Http\Controllers\Core\CoreUserController;
use App\Http\Controllers\ProfileController;
use App\Http\Resources\TicketResource;
use App\Http\Resources\UserResource;
use App\Models\Core\CoreUser;
use App\Models\Ticket;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Str;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    $users = User::with("attachedTickets")->paginate(perPage: 10);

    return Inertia::render('Dashboard', [
        "users" => UserResource::collection($users),
    ]);
})->middleware(['auth', 'verified'])->name('dashboard')->breadcrumb("Dashboard");

Route::middleware("auth")->name("core.")->prefix("core")->group(function () {
    Route::get("/users", [CoreUserController::class, "index"])->name("users.index")->breadcrumb("Spielerverwaltung");
    Route::get("/users/{user}", [CoreUserController::class, "show"])->name("users.show")->breadcrumb(fn(CoreUser $user) => $user->last_name ?? "/", "core.users.index");
});

Route::get("/imprint", function () {
    return "Impressum";
})->name("imprint")->breadcrumb("Impressum");

Route::get("/privacy", function () {
    return "Datenschutz";
})->name("privacy")->breadcrumb("Datenschutz");

require __DIR__ . '/auth.php';
