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
									<v-toolbar-title>FCAT CPD TRACKER: SIGN IN</v-toolbar-title>
								</v-toolbar>
								<v-card-text>
									<v-text-field
										id="email"
										label="Email"
										name="email"
										prepend-icon="mdi-account"
										type="email"
									></v-text-field>

									<v-text-field
										id="password"
										label="Password"
										name="password"
										prepend-icon="mdi-lock"
										type="password"
									></v-text-field>
								</v-card-text>
								<v-card-actions>
									<v-row>
										<v-col>
											<v-btn type="submit" class="mr-5" outlined>Login</v-btn>
										</v-col>
										<v-col>
											<v-btn href="{{url('/redirect')}}" color="teal darken-2">
												<v-icon class="mr-3">mdi-google</v-icon>FCAT Sign In With Google
											</v-btn>
										</v-col>
									</v-row>
								</v-card-actions>
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
