<?php

namespace App\Http\Controllers;

use App\Models\conversation;
use App\Http\Requests\StoreconversationRequest;
use App\Http\Requests\UpdateconversationRequest;
use Illuminate\Support\Facades\DB;
use App\Models\Member;

class ConversationController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreconversationRequest  $request

     */
    public function store(StoreconversationRequest $request)
    {
        //
        //dd('jeojifiojfia');
        $conv = Conversation::create($request->all());

        return response()->json($conv);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\conversation  $id
     */
    public function getConversation($userId,$groupId)
    {   
        $member = DB::table('members')->where('MemberId','=',$userId)
                ->where('GroupId', '=', $groupId)->get();

        // echo '<pre>';
        // var_dump($member);
        // echo '<pre>';

        if($member->isEmpty()){
            return;       
        }
        $conv = DB::table('conversations')
            ->where('To','=',$groupId)
            ->get();//->orderBy('created_at')
        
        return response()->json($conv);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateconversationRequest  $request
     * @param  \App\Models\conversation  $id
   
     */
    public function update(UpdateconversationRequest $request, conversation $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\conversation  $id

     */
    public function destroy($convId,$userId,$to)
    {
        //
        $conv = Conversation::where('id','=',$convId,'and','From','=',$userId, 'and', 'To','=',$to);      
        $conv->delete();
        
        return response()->json([
            'message' => 'Successfully deleted'
        ]);
    }
}
