<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\Cache;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'IdNumber',
        'Name',
        'Email',
        'PhoneNumber',
        'Position',
        'Password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    public function members()
    {
        # code...
        return $this->belongsToMany(Member::class);
    }
    public function courses()
    {
        # code...
        return $this->belongsToMany(Course::class);
    }
    
    public function isUserOnline()
    {
        # code...
        return Cache::has('userIsOnline'. $this->id);
    }
}
