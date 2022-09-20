<?php

namespace App\Http\Controllers;

use OneSignal;
use Illuminate\Http\Request;

class NotificationController extends Controller
{

    public function viewApps(){
        // you can specify app id as wel but it's optional
        return $app = OneSignal::getApp();
    }
}
