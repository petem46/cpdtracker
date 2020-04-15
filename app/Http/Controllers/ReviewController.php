<?php

namespace App\Http\Controllers;

use App\User;
Use App\CourseReview;

use App\Http\Resources\ManageReviewsResource;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class ReviewController extends Controller
{
  public function overview()
  {
      return new ManageReviewsResource(CourseReview::with('course')->orderBy('id')->get());
  }

  public function reviewers()
  {
      return ['reviewers' => User::select('id', 'name')->with('coursereview')->orderBy('name')->get()];
  }

  public function savereview(Request $request) {

    // return $data;
    $review_id = $request->get('id');
    // $category_id = Category::select('id')->where('name', $request->get('category'))->first();
    $review = CourseReview::where('id', $review_id)->first();
    if($review) {
      $review->review = $request->get('review');
      $review->public = $request->get('public');
      $review->touch();
      $review->save();
      return response('Review Updated Successfully', Response::HTTP_OK);
    } else {
      return response('Review Added Successfully', Response::HTTP_OK);
    }
    return response(null, Response::HTTP_OK);
  }



}
