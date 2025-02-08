<?php

use App\Http\Controllers\ProfileController;
use App\Http\Resources\TicketResource;
use App\Http\Resources\UserResource;
use App\Models\Ticket;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

Route::get('/', function () {
    // dd(Hash::make("password"));
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
})->middleware(['auth', 'verified'])->name('dashboard');

Route::post("/users/{user}", function (Request $request, User $user) {
    $data = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255',
    ]);

    $user->update($data);

    return redirect()->route('dashboard')->with('success', 'User updated.');
})->middleware(['auth', 'verified'])->name('users.update');

Route::get("/api/tickets/search", function (Request $request) {
    $query = $request->query('query');
    $searchedTickets = [];

    if (Str::length($query) >= 3) {
        $searchedTickets = Ticket::where('title', 'like', "%$query%")->get();
    }

    return TicketResource::collection($searchedTickets);
})->middleware(['auth', 'verified'])->name('tickets.search');

Route::post("/users/{user}/ticket", function (Request $request, User $user) {
    $toAttach = User::find($request->input('ticket_id'));

    if (!$toAttach) {
        return redirect()->route('dashboard')->with('error', 'Ticket not found.');
    }

    $user->attachedTickets()->attach($toAttach);

    return UserResource::make($user);
})->middleware(['auth', 'verified'])->name('users.addTicket');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
