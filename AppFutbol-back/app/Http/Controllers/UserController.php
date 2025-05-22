<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
class UserController extends Controller
{
    public function register(Request $request)
    {
        try {
            $user = User::create([
                'username' => $request->userName,
                'password' => Hash::make($request->password),
                'email' => $request->email
            ]);

            // Llamamos a AuthController para generar token
            $authController = new AuthController();
            $response = $authController->generateToken($request->userName, $request->password);

            return $response;

        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

}
