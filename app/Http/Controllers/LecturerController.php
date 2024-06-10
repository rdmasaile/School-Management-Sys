<?php

namespace App\Http\Controllers;

use App\Models\Lecturer;
use App\Http\Requests\StoreLecturerRequest;
use App\Http\Requests\UpdateLecturerRequest;
use TheSeer\Tokenizer\Exception;
use Illuminate\Support\Facades\Log;

class LecturerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return view('welcome');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreLecturerRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreLecturerRequest $request)
    {
        //
        try{
            $lect = Lecturer::create([
                'LectId'=>$request['LectId'],
                'LectName' => $request['LectName'],
                'LectEmail' => $request['LectEmail'],
                'LectPhoneNumber' => $request['LectPhoneNumber'],
                'LectPassword' => bcrypt($request['LectPassword']),
            ]);
            $token = $lect->createToken('myapp')->plainTextToken;
        }catch(Exception $e){
            Log::error($e);
        }

        return response()->json([
            'status' => 200,
            'message' => 'successfully registered',
            'data' => $lect,
            'token' => $token,
        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Lecturer  $lecturer
     * @return \Illuminate\Http\Response
     */
    public function show($lecturer)
    {
        //
        return response()->json(Lecturer::find($lecturer));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateLecturerRequest  $request
     * @param  \App\Models\Lecturer  $lecturer
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateLecturerRequest $request,  $lecturer)
    {
        //
        $lect = Lecturer::find($lecturer);
        $lect->update($request->all());

        return response()->json($lect);
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Lecturer  $lecturer
     * @return \Illuminate\Http\Response
     */
    public function destroy( $lecturer)
    {
        //
        delete(Lecturer::find($lecturer));
    
        return response()->json(Lecturer::all());
    }
    public function search($lecturer)
    {
        //        
        return response()->json(Lecturer::where('LectName','like','%'.$lecturer.'%')->get());
    }
}
