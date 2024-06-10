<?php

namespace App\Http\Controllers;

use App\Models\student;
use App\Http\Requests\StorestudentRequest;
use App\Http\Requests\UpdatestudentRequest;
use TheSeer\Tokenizer\Exception;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return response()->json(Student::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorestudentRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorestudentRequest $request)
    {
        //
        try{
            $std = Student::create([
                'StdNumber'=>$request['StdNumber'],
                'StdName' => $request['StdName'],
                'StdEmail' => $request['StdEmail'],
                'StdPhoneNumber' => $request['StdPhoneNumber'],
                'StdPassword' => bcrypt($request['StdPassword']),
            ]);
            $token = $std->createToken('myapp')->plainTextToken;
        }catch(Exception $e){
            Log::error($e);
        }

        return response()->json([
            'status' => 200,
            'message' => 'successfully registered',
            'data' => $std,
            'token' => $token,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\student  $student
     * @return \Illuminate\Http\Response
     */
    public function show( $student)
    {
        //
        return response()->json(Student::find($student));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatestudentRequest  $request
     * @param  \App\Models\student  $student
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatestudentRequest $request, $student)
    {
        //
        $std = Student::find($student);
        $std->update($request->all());
        return $std;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\student  $student
     * @return \Illuminate\Http\Response
     */
    public function destroy($student)
    {
        //        
        return response()->json(Student::destroy($student));
    }
    public function search($student)
    {
        //        
        return response()->json(Student::where('StdName','like','%'.$student.'%')->get());
    }

}
