<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'CourseCode',
        'CourseName',
    ];

    public function groups()
    {
        # code...
        return $this->hasMany(Group::class);
    }
    public function users()
    {
        # code...
        return $this->hasMany(User::class);
    }
}
