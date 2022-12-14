<?php

use App\Models\User;
use App\Events\TaskEvent;
use Illuminate\Support\Facades\Route;
use App\Notifications\AccountApproved;
use Illuminate\Notifications\Notification;
use App\Http\Controllers\NotificationController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/view-app', [NotificationController::class, 'viewApps'])->name('viewApps');

Route::get('/event', function(){
   event(new TaskEvent('hat how r you again'));
});

Route::get('/listen', function(){
   return view('listen');
 });

Route::group(['middleware' => ['auth']],function(){

    Route::get('/send-notificaon', function(){
        $user = User::first();
        $user->notify( new AccountApproved );
        return "Send notificaon";
    });
});



