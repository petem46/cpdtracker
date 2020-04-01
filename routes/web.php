<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/courselist', 'CourseController@courselist');

Route::get('/u/getMyCourses', 'CourseController@getMyCourses');

Route::put('/u/addToMyCourses/{course_id}',  'CourseController@addToMyCourses');

Route::get('/u/dashboarddata', 'CourseController@dashboarddata');

Auth::routes();


Route::get('/redirect', 'SocialAuthGoogleController@redirect');
Route::get('/callback', 'SocialAuthGoogleController@callback');

Route::group(['middleware' => ['auth']], function () {



  Route::get('/{any}', 'SpaController@index')->where('any', '.*');
});
