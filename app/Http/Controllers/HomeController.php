<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use TheSeer\Tokenizer\Exception;
use Illuminate\Support\Facades\Log;
use App\Models\User;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }
    public function getUsersList()
    {
        # code...
        try{
            $usersList = User::all();
            return response()->json($usersList);

        }catch(Exception $e){
            Log::error($e);
        }
    
    }
}
