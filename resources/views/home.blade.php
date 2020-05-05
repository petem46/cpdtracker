@extends('layouts.vue')

@section('content')

@php
    $avatar = '' . Auth::user()->avatar . '';
@endphp

<app
  userid="{{ Auth::id() }}"
  roleid="{{ Auth::user()->role_id }}"
  avatar="{{ Auth::user()->avatar }}"
  name="{{ Auth::user()->name }}"
  school="{{ Auth::user()->school }}"
>
</app>

@endsection
