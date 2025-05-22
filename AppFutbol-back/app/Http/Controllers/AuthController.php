<?php

namespace App\Http\Controllers;
  
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class AuthController extends Controller
{
    public function signIn(Request $request){
        return $this->generateToken($request->userName,$request->password);
    }

    public function generateToken($userName,$password){
        $credentials = ['userName' => $userName, 'password' => $password];
        $token = Auth::attempt($credentials);
        if(!$token) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        $cookie = cookie('acces_token', $token, 60, '/', null, false, true); // SameSite=Lax
        return response()->json()->withCookie($cookie);
    }

}
