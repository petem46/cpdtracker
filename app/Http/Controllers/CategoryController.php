<?php

namespace App\Http\Controllers;

use App\Category;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\CategoriesResource;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

  public function index()
  {
    CategoriesResource::withoutWrapping();
    return new CategoriesResource(Category::get());
  }

  public function show($category)
  {
    $category = Category::find($category);
    CategoryResource::withoutWrapping();
    return new CategoryResource($category);
  }

}
