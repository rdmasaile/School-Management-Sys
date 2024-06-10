<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
//use Carbon\Traits\Rounding;
use App\Http\Controllers\LecturerController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\ConversationController;
use App\Http\Controllers\MemberController;

//use App\Models\Lecturer;
//use App\Models\Lecturer;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/Users',[UserController::class,'index']);
Route::post('/Users',[UserController::class,'store']);
Route::get('/Users/{users}',[UserController::class,'show']);

//Route::get('/Student/search/{student}',[StudentController::class,'search']);
Route::post('/Login1',[UserController::class,'login']);

Route::get('/Group/search{group}',[GroupController::class,'index']);

Route::apiResource('/Group',GroupController::class);
Route::apiResource('/AddMember',MemberController::class);
Route::get('/GetMemberGroups/{memberId}',[MemberController::class,'getMemberGroups']);

Route::apiResource('/Conversation',ConversationController::class);
Route::get('/GetConversation/{userId}/{groupId}',[ConversationController::class,'getConversation']);
Route::delete('/Conversation/{convId}/{UserId}/{to}',[ConversationController::class,'destroy']);

Route::group(['middleware' => ['auth:sanctum']],function(){

   //Route::get('/Group',[GroupController::class,'index']);
   //Route::get('/Group/{group}',[GroupController::class,'show']);
   //Route::post('/Group',[GroupController::class,'index']);
   //Route::delete('/Group/{group}',[GroupController::class,'index']);
   //Route::put('/Group/{group}',[GroupController::class,'index']);
   //Route::get('/Group/search{group}',[GroupController::class,'index']);
   //Route::apiResource('/Group',GroupController::class);
   

    Route::put('/Users/{users}',[UserController::class,'update']);
    Route::delete('/Users/{users}',[UserController::class,'destroy']);
    Route::get('/Student/search/{student}',[StudentController::class,'search']);
    
});