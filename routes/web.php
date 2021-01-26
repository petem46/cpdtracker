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

// Route::get('/get/cpdCompletionData/{school}', 'CourseController@getAllCPDCompletionData');

Route::get('/redirect', 'SocialAuthGoogleController@redirect');
Route::get('/callback', 'SocialAuthGoogleController@callback');
// Route::get('/redirect', 'SocialAuthMSGraphController@redirect');
// Route::get('/callback', 'SocialAuthMSGraphController@callback');


Route::group(['middleware' => ['auth']], function () {
  Route::get('/get/u/getUserCPD/{id}', 'CourseController@getUserCPD');
  // Route::get('/get/hash', 'UsersController@hash')->name('hash');
  Route::get('/get/schools', 'UsersController@getSchools');

  /*
  |- COURSE ROUTES
  */
  Route::get('/get/courselist', 'CategoryController@index');
  Route::get('/get/cpd', 'CategoryController@index');
  Route::get('/get/cpd/details/{id}', 'CourseController@details');
  Route::get('/get/cpd/name/{id}', 'CourseController@getname');
  Route::put('/put/cpd/updateViewCounter/{id}', 'CourseController@updateViewCounter');
  Route::delete('/delete/cpd/deleteCourse/{id}', 'CourseController@deleteCourse');
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
  Route::get('/get/u/getdashboarddata', 'CourseController@dashboarddata');
  Route::get('/get/r/getMyReviews', 'ReviewController@getMyReviews');
  Route::get('/get/u/getMyCourses', 'CourseController@getMyCourses');
  Route::post('/post/cpd/suggestcourse', 'CourseController@suggestcourse');

  Route::put('/put/u/addToMyCPD/{course_id}/{state_id}',  'CourseController@addToMyCPD');
  Route::put('/put/u/addRating/{course_id}/{rating}',  'CourseController@addRating');

  Route::delete('/delete/u/deleteFromMyCourses/{course_id}/',  'CourseController@deleteFromMyCourses');
  Route::delete('/delete/r/deleteMyReview/{id}', 'ReviewController@deleteMyReview');

  /*
  |- MYCPD SPECIFIC
  */
  Route::get('/get/u/getMyCPD', 'CourseController@getMyCPD');
  Route::get('/get/u/getMyCPD/{id}', 'CourseController@getUserCPD');

  Route::post('/post/u/updateMyCPD', 'CourseController@updateMyCPD');
  Route::post('/post/u/uploadCertificate', 'CourseController@uploadCertificate');

  Route::delete('/delete/u/deleteCertificate/{id}', 'CourseController@deleteCertificate');
  Route::delete('/delete/u/deleteMyProgress/{id}', 'CourseController@deleteMyProgress');
  Route::delete('/delete/u/deleteMyRating/{id}', 'CourseController@deleteMyRating');
  Route::delete('/delete/u/deleteMyReview/{id}', 'CourseController@deleteMyReview');

  /*
  |- MANAGE USERS ROUTES
  */
  Route::get('/get/u/all', 'UsersController@overview');

  /*
  |- MANAGE COURSES ROUTES
  */
  Route::get('/get/cpd/all', 'CourseController@overview');
  Route::post('/post/cpd/savecourse', 'CourseController@savecourse');
  Route::get('/get/cpdCompletionData/{school}', 'CourseController@getAllCPDCompletionData');

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
