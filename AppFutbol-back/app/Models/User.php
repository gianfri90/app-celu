<?php

namespace App\Models;
 
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Groups;
use App\Models\Promedio;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;
use PHPUnit\Framework\Attributes\Group;

class User extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;
    protected $table = 'custom_users';

    protected $primaryKey = 'IdUser';

    protected $fillable = ['name', 'email', 'username', 'password'];
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
 
    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function promedio(){
        return $this->hasMany(Promedio::class,'idUser');
    }

    public function groups(){
        return $this->hasMany(Groups::class,'idUser');
    }

}
