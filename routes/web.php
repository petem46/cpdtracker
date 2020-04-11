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

/*
|- COURSE ROUTES
*/
Route::get('/get/courselist', 'CategoryController@index');
Route::get('/get/c', 'CategoryController@index');
Route::get('/get/c/details/{name}', 'CourseController@details');

/*
|- CATEGORY ROUTES
*/
Route::get('/get/cc/catfilter', 'CategoryController@catfilter');
Route::get('/get/cc', 'CategoryController@list');
Route::get('/get/cats', 'CategoryController@list');
Route::get('/get/cat/list', 'CategoryController@list');
Route::get('/get/cc/list', 'CategoryController@list');
Route::get('/get/cat/{catname}', 'CategoryController@show');

/*
|- USER ROUTES
*/
Route::get('/get/u/getMyCourses', 'CourseController@getMyCourses');
Route::put('/put/u/addToMyCourses/{course_id}/{state_id}',  'CourseController@addToMyCourses');
Route::put('/put/u/addRating/{course_id}/{rating}',  'CourseController@addRating');
Route::delete('/delete/u/deleteFromMyCourses/{course_id}/',  'CourseController@deleteFromMyCourses');
Route::get('/get/u/getdashboarddata', 'CourseController@dashboarddata');

/*
|- MANAGE USERS ROUTES
*/
Route::get('/get/u/all', 'UsersController@overview');
Route::get('/get/c/all', 'CourseController@overview');


// Route::resource('cc', 'CategoryController');
// Route::resource('c', 'CourseController');

Auth::routes();


Route::get('/redirect', 'SocialAuthGoogleController@redirect');
Route::get('/callback', 'SocialAuthGoogleController@callback');

Route::group(['middleware' => ['auth']], function () {



  Route::get('/{any}', 'SpaController@index')->where('any', '.*');
});
