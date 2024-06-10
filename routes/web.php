<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LecturerController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/get/Users/list',[HomeController::class,'getUsersList'])->name('usersList');

Route::get('/home', [HomeController::class, 'index'])->name('home');

Route::post('/post/Lecturer',[LecturerController::class,'store'])->name('usersList');
