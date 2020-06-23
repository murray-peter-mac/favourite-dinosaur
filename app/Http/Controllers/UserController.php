<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class UserController extends Controller
{
    //
    public function index(){
        return User::all();
    }
    public function existing(Request $request){
        $validatedData = $request->validate([
            'token' => 'required',
            'email' => 'required'
        ]);
        $token = $validatedData['token'];
        $email = $validatedData['email'];
        
        // Get local user (for id)
        $user = User::firstWhere('emailaddress', $email);

        if (!$user)
            return response()->json($user, 200);

        $response = Http::withHeaders([
            'Token' => $token,
            'Content-type' => 'application/json'
        ])->post(URL . '/get', [
            'id' => $user->user_id
        ]);

        return response()->json([
            'user' => $response->json(),
            'id' => $user->user_id
        ], 200);
    }
    public function create(Request $request){
        $validatedData = $request->validate([
            'token' => 'required',
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required',
            'dinosaur' => 'required'
        ]);

        $response = Http::withHeaders([
            'Token' => $validatedData['token'],
            'Content-type' => 'application/json'
        ])->post(URL . '/create', [
            'firstname' => $validatedData['firstname'],
            'surname' => $validatedData['lastname'],
            'emailaddress' => $validatedData['email'],
            'favoritedinosar' => $validatedData['dinosaur'],
        ]);
        
        if (!$response->ok())
            return $response->json();
        
        $user = User::create([
            'user_id' => $response['id'],
            'emailaddress' => $validatedData['email'],
        ]);
        
        $ret = [
            'firstname' => $validatedData['firstname'],
            'surname' => $validatedData['lastname'],
            'emailaddress' => $validatedData['email'],
            'favoritedinosar' => $validatedData['dinosaur'],
        ];

        return response()->json([
            'user' => $ret,
            'id' => $response['id']
            ], 201);
    }
    public function edit(Request $request){
        $validatedData = $request->validate([
            'token' => 'required',
            'id' => 'required',
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required',
            'dinosaur' => 'required'
        ]);

        $response = Http::withHeaders([
            'Token' => $validatedData['token'],
            'Content-type' => 'application/json'
        ])->post(URL . '/edit', [
            'id' => $validatedData['id'],
            'firstname' => $validatedData['firstname'],
            'surname' => $validatedData['lastname'],
            'emailaddress' => $validatedData['email'],
            'favoritedinosar' => $validatedData['dinosaur'],
        ]);

        $user = User::firstWhere('user_id', $validatedData['id']);

        $user->emailaddress = $validatedData['email'];
        $user->save();

        $ret = [
            'firstname' => $validatedData['firstname'],
            'surname' => $validatedData['lastname'],
            'emailaddress' => $validatedData['email'],
            'favoritedinosar' => $validatedData['dinosaur'],
        ];

        return response()->json([
            'user' => $ret,
        ], 202);
    }
}

define('URL', 'https://candidates.fusebox-staging.co.za/api');
