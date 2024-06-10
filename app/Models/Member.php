<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;
    protected $fillable = [
        'GroupId',
        'MemberId',
        'Admin',
    ];

    public function groups()
    {
        # code...
        return $this->belongsToMany(Group::class);
    }
    public function users()
    {
        # code...
        return $this->hasMany(User::class);
    }
}
