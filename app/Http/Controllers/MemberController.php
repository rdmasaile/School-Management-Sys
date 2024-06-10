<?php

namespace App\Http\Controllers;

use App\Models\Member;
use Illuminate\Http\Request;
use Illuminate\Http\Client\ResponseSequence;
use App\Http\Requests\StoreMemberRequest;
use App\Http\Requests\UpdateMemberRequest;
use Illuminate\Support\Facades\DB;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return response()->json(Member::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMemberRequest $request)
    {
        return response()->json(Member::create($request->all()));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\member  $member
     * @return \Illuminate\Http\Response
     */
    public function getMemberGroups($memberId)
    {       
        $member = DB::table('members as m')
            ->where('MemberId',$memberId)
            ->join('groups as g','m.GroupId','=','g.id')
            ->select('m.MemberId','m.GroupId','g.GroupName')
            ->get();

        return response()->json($member);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\member  $member
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMemberRequest $request, member $member)
    {
        //  
        $mem = Member::findOrFail($member);
        $mem->update($request->all());

        return response()->json([
            'message' => "successfully updated",
            'data' => $mem,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\member  $member
     * @return \Illuminate\Http\Response
     */
    public function destroy($member)
    {
        //
        return response()->json(Member::destroy($member));
    }
}
