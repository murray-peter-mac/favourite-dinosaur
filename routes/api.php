<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('user', 'UserController@index');
Route::get('user/find', 'UserController@existing');
Route::post('user', 'UserController@create');
Route::put('user', 'UserController@edit');
Route::get('token', function (){ $response = Http::withHeaders([ 'Content-type' => 'application/json' ])->post('https://candidates.fusebox-staging.co.za/api/get_token', [ 'username' => 'Fusebox', 'password' => 'RocksYourSocks' ]); return $response->json(); });
