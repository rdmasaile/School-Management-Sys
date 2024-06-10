<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\StoreUsersRequest;
use App\Http\Requests\UpdateUsersRequest;
use TheSeer\Tokenizer\Exception;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return response()->json(User::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreUsersRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUsersRequest $request)
    {
        // 
        try{
            $user = User::create([
                'IdNumber'=>$request['IdNumber'],
                'Name' => $request['Name'],
                'Email' => $request['Email'],
                'PhoneNumber' => $request['PhoneNumber'],
                'Position' => $request['Position'],
                'Password' => bcrypt($request['Password']),
            ]);
            //$token = $user->createToken('myapp')->plainTextToken;
        }catch(Exception $e){
            Log::error($e);
        }

        return response()->json([
            'status' => 200,
            'message' => 'successfully registered',
            'data' => $user,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $users
     * @return \Illuminate\Http\Response
     */
    public function show($users)
    {
        //
        return response()->json(User::findOrFail($users));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateUsersRequest  $request
     * @param  \App\Models\User  $users
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUsersRequest $request, $users)
    {
        //
        $user = User::find($users);
        $user->update($request->all());
        
        return $user;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $users
     * @return \Illuminate\Http\Response
     */
    public function destroy($users)
    {
        // 
        User::destroy($users);

        return response()->json([
            'message' => 'Successfully deleted'
        ]);
    }
    public function search($users)
    {
        //        
        return response()->json(User::where('Name','like','%'.$users.'%')->get());
    }
    public function login(Request $request)
    {
        # code...
        $inputs = $request->validate([
            'Email'=> 'required|email|string',
            'Password' => 'required|string'

        ]);
        $user = User::where('Email',$inputs['Email'])->first();

        if(!$user || !Hash::check($inputs['Password'],$user->Password)){
            return response()->json([
                'status' => 401,
                'message' => 'Invalid Details or not Registered'
            ]);
        }
        
        $token = $user->createToken('myapp')->plainTextToken;

        return response()->json([
            'status' => 200,
            'message' => 'successfully Logged in',
            'data' => $user,
            'token' => $token,
        ]);
    }
}
