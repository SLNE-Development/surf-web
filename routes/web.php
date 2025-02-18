<?php

use Illuminate\Support\Facades\Route;

Route::domain(env("APP_DOMAIN"))->group(function () {
    require __DIR__ . '/main.php';
});


Route::domain(env("APP_PUBLIC_DOMAIN"))->group(function () {
    require __DIR__ . '/public.php';
});
