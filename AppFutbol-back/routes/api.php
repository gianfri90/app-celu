<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\JwtFromCookie;

Route::group([
], function ($router) {
});

Route::post('/login', [AuthController::class, 'signIn']);
Route::post('/register', [UserController::class, 'register']);