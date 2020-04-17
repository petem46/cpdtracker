<?php

namespace App\Http\Controllers;

use App\User;
Use App\CourseReview;

use App\Http\Resources\ManageReviewsResource;
use App\Http\Resources\ManageMyReviewsResource;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class ReviewController extends Controller
{
  public function overview()
  {
      return new ManageReviewsResource(CourseReview::with('course')->orderBy('id')->get());
  }

  public function getMyReview($cid)
  {
      return ['myreview' => CourseReview::where('course_id', $cid)->where('user_id', Auth::id())->get()];
      // return ['myreview' => CourseReview::where('course_id', $cid)->get()];
      // return Auth::id();
  }

  public function getMyReviews()
  {
      return new ManageMyReviewsResource(CourseReview::with('course')->where('user_id', Auth::id())->orderBy('updated_at', 'DESC')->get());
  }

  public function reviewers()
  {
      return ['reviewers' => User::select('id', 'name')->with('coursereview')->orderBy('name')->get()];
  }

  public function savereview(Request $request) {

    $review_id = $request->get('id');
    $review = CourseReview::where('id', $review_id)->first();
    if($review) {
      $review->review = $request->get('review');
      $review->public = $request->get('public');
      $review->touch();
      $review->save();
      return response('Review Updated Successfully', Response::HTTP_OK);
    } else {
      $review = CourseReview::create([
        'course_id' => $request->get('courseid'),
        'review' => $request->get('review'),
        'user_id' => Auth::id()
      ]);
      return response('Review Added Successfully', Response::HTTP_OK);
    }
    return response(null, Response::HTTP_OK);
  }



}
