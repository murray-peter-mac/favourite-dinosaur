<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    // Define Fillable Fields
    protected $fillable = [
        "user_id",
        "emailaddress"
    ];
}
