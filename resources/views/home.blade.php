@extends('layouts.vue')

@section('content')

<app :userid={{Auth::id()}} :roleid={{Auth::user()->role_id}}>
</app>

@endsection
