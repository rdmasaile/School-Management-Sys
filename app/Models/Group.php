<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Group extends Model
{
    use HasFactory;

    protected $fillable = [
        'GroupName',
        'CourseCode',
        'Members',
    ];
    public function course()
    {
        # code...
        return $this->belongsTo(Course::class);
    }
    public function members()
    {
        # code...
        return $this->hasMany(Member::class);
    }
}
