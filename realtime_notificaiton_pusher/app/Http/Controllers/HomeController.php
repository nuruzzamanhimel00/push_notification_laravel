<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use DB;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $notifications = DB::select("SELECT users.id, users.name, users.email, COUNT(is_read) AS unread FROM users LEFT JOIN mesages ON users.id = mesages.from AND mesages.is_read = 0 WHERE users.id = ".Auth::id()." GROUP BY users.id, users.name, users.email");
        // dd($notifications);

        return view('home',compact('notifications'));
    }
}
