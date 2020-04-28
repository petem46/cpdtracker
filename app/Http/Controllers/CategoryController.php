<?php

namespace App\Http\Controllers;

use App\Category;
use App\Http\Resources\CategoriesFilterResource;
use App\Http\Resources\CategoriesResource;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Arr;
use Illuminate\Support\Collection;

class CategoryController extends Controller
{

  public function index()
  {
    CategoriesResource::withoutWrapping();
    return new CategoriesResource(Category::get());
  }

  public function catfilter()
  {
    return ['categories' => Category::orderBy('name')->get()];
  }

  public function list()
  {
    CategoriesResource::withoutWrapping();
    return new CategoriesResource(Category::orderBy('name')->get());

  }

  public function show($name)
  {
    CategoriesResource::withoutWrapping();
    return new CategoriesResource(Category::where('name', $name)->get());
  }

  public function saveCategory(Request $request)
  {
    $category = Category::where('id', $request->get('id'))->first();

    if ($category) {
      $category->name = $request->get('name');
      $category->touch();
      $category->save();
      return response('Category Updated Successfully', Response::HTTP_OK);
    } else {
      $category = Category::create([
        'name' => $request->get('name'),
      ]);
      return response('Category Added Successfully', Response::HTTP_OK);
    }

  }

  public function deleteCategory($id)
  {
    $category = Category::find($id);
    if ($category) {
      $category->delete();
    }

    return response('Category Deleted Successfully', Response::HTTP_OK);
  }
}
