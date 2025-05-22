<?php

namespace App\Http\Middleware;

use Closure;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Exists;

class JwtFromCookie
{
    public function handle(Request $request, Closure $next)
    {
        $token = $request->cookie('acces_token');
        if(!$request->cookie('acces_token')){
            return $next($request);    
        }
        if (!$token) {
            return response()->json(['error' => 'Token no encontrado'], 401);
        }

        try {
            $user = JWTAuth::setToken($token)->authenticate();

            if (!$user) {
                return response()->json(['error' => 'Usuario no encontrado'], 404);
            }

            Auth::setUser($user);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Token inválido'], 401);
        }

        return $next($request);
    }
}