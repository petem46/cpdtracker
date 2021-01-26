@extends('layouts.vue')

@section('content')

<template>
	<v-app id="inspire">
		<v-content>
			<v-container {{-- class="fill-height" --}} fluid>
				<v-row align="center" justify="center">
					<v-col cols="12" sm="8" md="4">
            <form method="POST" action="{{ route('login') }}">
              @csrf
              <v-card class="elevation-12">
                <v-toolbar color="teal darken-2" dark flat>
                  <v-toolbar-title class="text-uppercase">
                    <v-icon class="mr-2">mdi-lock-outline</v-icon>
                    TeamFCAT CPD Portal Sign In
                  </v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-row>
                    <v-col cols="12">
                      <v-btn width="100%" href="{{ url('/redirect') }}" tile dark color="green">
                        <v-icon class="mr-3">mdi-google</v-icon>Sign In With FCAT Google
                      </v-btn>
                    </v-col>
                    <v-col>
                      <v-btn width="100%" href="{{ url('/msredirect') }}" tile dark color="blue darken-2">
                        <v-icon class="mr-3">mdi-microsoft</v-icon>Sign In With Microsoft
                      </v-btn>
                    </v-col>
                  </v-row>
                  {{-- <v-divider></v-divider> --}}
                </v-card-text>
                <v-expansion-panels>
                  <v-expansion-panel>
                    <v-expansion-panel-header class="overline" expand-icon="mdi-menu-down">
                      <template v-slot:default="{ open }">
                        Sign In with Username
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <v-text-field id="email" label="Email" name="email" prepend-icon="mdi-account" type="email">
                      </v-text-field>
                      <v-text-field id="password" label="Password" name="password" prepend-icon="mdi-lock"
                        type="password">
                      </v-text-field>
                      <v-row>
                        <v-col>
                          <v-btn width="100%" type="submit" class="mr-5" tile outlined>Sign In With Username</v-btn>
                        </v-col>
                      </v-row>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
              </v-card>
            </form>
					</v-col>
				</v-row>
				<v-row class="justify-center">
					<v-col cols="6" sm="4" md="2">
						<v-img src="/images/fcat-logo-inverted.png"></v-img>
					</v-col>
				</v-row>
			</v-container>
		</v-content>
	</v-app>
</template>

@endsection
