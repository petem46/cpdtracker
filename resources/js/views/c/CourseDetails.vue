<template>
	<div>
		<h1 class="display-3">Course Details</h1>
		<h1 class="headline font-weight-thin">{{ this.name }}</h1>
		<h1 class="font-weight-thin mt-3">Access Details</h1>
		<a :href="this.course.access_details" target="_blank">{{ this.course.access_details }}</a>
		<h1 class="font-weight-thin mt-3">Current Status</h1>
		<v-row>
			<v-col cols="12" sm="4" md="2" class>
				<v-chip label class="ma-2" color="green" text-color="white">
					Completed
					<v-avatar right color="white" class="green--text">{{this.course.completedcount}}</v-avatar>
				</v-chip>
			</v-col>
			<v-col cols="12" sm="4" md="2" class>
				<v-chip label class="ma-2" color="indigo" text-color="white">
					InProgress
					<v-avatar right color="white" class="indigo--text">{{this.course.inprogresscount}}</v-avatar>
				</v-chip>
			</v-col>
			<v-col cols="12" sm="4" md="2" class>
				<v-chip label class="ma-2" color="blue" text-color="white">
					Shortlisted
					<v-avatar right color="white" class="blue--text">{{this.course.shortlistedcount}}</v-avatar>
				</v-chip>
			</v-col>
		</v-row>
		<h1 class="font-weight-thin mt-3">Ratings ({{ this.course.ratingscount}})</h1>
		<v-row class="mx-0">
			<div class="my-auto">Average Rating</div>
			<v-rating :value="this.course.avgrating" readonly half-increments color="amber"></v-rating>
			<div class="my-auto">({{this.course.avgrating}})</div>
		</v-row>
		<v-row class="mx-0">
			<div class="my-auto">5 Star Ratings</div>
			<div class="my-auto">{{this.fives}}</div>
		</v-row>
		<v-row class="mx-0">
			<div class="my-auto">4 Star Ratings</div>
			<div class="my-auto">{{this.fours}}</div>
		</v-row>
		<v-row class="mx-0">
			<div class="my-auto">3 Star Ratings</div>
			<div class="my-auto">{{this.threes}}</div>
		</v-row>
		<v-row class="mx-0">
			<div class="my-auto">2 Star Ratings</div>
			<div class="my-auto">{{this.twos}}</div>
		</v-row>
		<v-row class="mx-0">
			<div class="my-auto">1 Star Ratings</div>
			<div class="my-auto">{{this.ones}}</div>
		</v-row>
		<h1 class="font-weight-thin mt-3">Reviews</h1>
		<p v-for="review in course.reviews" v-bind="review" :key="review.id">
			{{ review.review }}
			<v-subheader>{{review.user.name}} - {{review.user.school}}</v-subheader>
		</p>
	</div>
</template>
<script>
import axios from "axios";
export default {
	props: ["name"],
	data() {
		return {
			course: [],
			endpoint: "/get/c/details/" + this.name
		};
	},
	mounted() {
		this.fetch();
	},
	methods: {
		fetch() {
			axios
				.get(this.endpoint)
				.then(({ data }) => {
					this.course = data.data.course[0];
				})
				.then(() => {});
		}
	},
	computed: {
		fives() {
      var counter = 0;
      counter = (this.course.fiveratingscount / this.course.ratingscount) * 100;
      return counter;
    },
		fours() {
      var counter = 0;
      counter = (this.course.fourratingscount / this.course.ratingscount) * 100;
      return counter;
    },
		threes() {
      var counter = 0;
      counter = (this.course.threeratingscount / this.course.ratingscount) * 100;
      return counter;
    },
		twos() {
      var counter = 0;
      counter = (this.course.tworatingscount / this.course.ratingscount) * 100;
      return counter;
    },
		ones() {
      var counter = 0;
      counter = (this.course.oneratingscount / this.course.ratingscount) * 100;
      return counter;
    },
	}
};
</script>
