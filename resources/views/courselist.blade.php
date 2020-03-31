@extends('layouts.vue')

@section('content')

{{-- <app></app> --}}



    <div class="content">
      <div class="">
        CPD Tracker
      </div>

      @foreach ($category_courses as $category)
        <h1>{{ $category->name }}</h1>
        <v-row>
        @foreach ($category->course as $course)
            <h3 class="display-3">{{ $course->name }} </h3>
        @endforeach
      @endforeach

    </div>
@endsection
