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

}
