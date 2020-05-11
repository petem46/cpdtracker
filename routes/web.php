<?php

use App\CourseReview;
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

Auth::routes([
  'register' => false,
  'reset' => false,
  'verify' => false
]);



Route::get('/redirect', 'SocialAuthGoogleController@redirect');
Route::get('/callback', 'SocialAuthGoogleController@callback');


Route::group(['middleware' => ['auth']], function () {
  Route::get('/get/u/getUserCPD/{id}', 'CourseController@getUserCPD');
  // Route::get('/get/hash', 'UsersController@hash')->name('hash');
  Route::get('/get/schools', 'UsersController@getSchools');

  /*
  |- COURSE ROUTES
  */
  Route::get('/get/courselist', 'CategoryController@index');
  Route::get('/get/c', 'CategoryController@index');
  Route::get('/get/c/details/{id}', 'CourseController@details');
  Route::get('/get/c/name/{id}', 'CourseController@getname');
  Route::put('/put/c/updateViewCounter/{id}', 'CourseController@updateViewCounter');
  Route::delete('/delete/c/deleteCourse/{id}', 'CourseController@deleteCourse');

  /*
  |- CATEGORY ROUTES
  */
  Route::get('/get/cc/catfilter', 'CategoryController@catfilter');
  Route::get('/get/cc', 'CategoryController@list');
  Route::get('/get/cats', 'CategoryController@list');
  Route::get('/get/cat/list', 'CategoryController@list');
  Route::get('/get/cc/list', 'CategoryController@list');
  Route::get('/get/cat/{catname}', 'CategoryController@show');
  Route::delete('/delete/cc/deleteCategory/{id}', 'CategoryController@deleteCategory');

  /*
  |- USER ROUTES
  */
  Route::get('get/u/myreview/{courseid}', 'ReviewController@getmyreview');
  Route::get('/get/u/getMyCPD', 'CourseController@getMyCPD');
  Route::get('/get/u/getMyCPD/{id}', 'CourseController@getUserCPD');
  Route::get('/get/u/getdashboarddata', 'CourseController@dashboarddata');
  Route::get('/get/r/getMyReviews', 'ReviewController@getMyReviews');
  Route::get('/get/u/getMyCourses', 'CourseController@getMyCourses');
  Route::post('/post/c/suggestcourse', 'CourseController@suggestcourse');
  Route::post('/post/u/updateMyCPD', 'CourseController@updateMyCPD');
  Route::put('/put/u/addToMyCourses/{course_id}/{state_id}',  'CourseController@addToMyCourses');
  Route::put('/put/u/addRating/{course_id}/{rating}',  'CourseController@addRating');
  Route::delete('/delete/u/deleteFromMyCourses/{course_id}/',  'CourseController@deleteFromMyCourses');
  Route::delete('/delete/r/deleteMyReview/{id}', 'ReviewController@deleteMyReview');


  /*
|- MANAGE USERS ROUTES
*/
  Route::get('/get/u/all', 'UsersController@overview');

  /*
|- MANAGE COURSES ROUTES
*/
  Route::get('/get/c/all', 'CourseController@overview');
  Route::post('/post/c/savecourse', 'CourseController@savecourse');

  /*
  |- MANAGE REVIEWS ROUTES
  */
  Route::get('/get/r/all', 'ReviewController@overview');
  Route::get('/get/r/reviewers', 'ReviewController@reviewers');
  Route::post('/post/r/savereview', 'ReviewController@savereview');

  /*
  |- MANAGE CATEGORIES ROUTES
  */
  Route::post('/post/cc/savecategory', 'CategoryController@saveCategory');

  // Route::resource('cc', 'CategoryController');
  // Route::resource('c', 'CourseController');

  Route::get('/{any}', 'SpaController@index')->where('any', '.*');
});
