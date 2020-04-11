<template>
	<div>
		<h1 class>Course Details: {{ this.name }}</h1>
		<v-rating :value="this.course.avgrating" readonly half-increments color="amber"></v-rating>
		<h1 class="mt-3">Access Details</h1>
		{{this.course.access_details}}
		<h1 class="mt-3">Ratings ({{ this.course.ratings.length}})</h1>
		<h1 class="mt-3">Current Status</h1>
		<v-row>
			<v-col cols="12" sm="4" md="2" class="">
				<v-chip
					label
					class="ma-2"
					color="green"
					text-color="white"
				>Completed<v-avatar right color="white" class="green--text">{{this.course.completedcount}}</v-avatar></v-chip>
			</v-col>
			<v-col cols="12" sm="4" md="2" class="">
				<v-chip
					label
					class="ma-2"
					color="indigo"
					text-color="white"
				>InProgress<v-avatar right color="white" class="indigo--text">{{this.course.inprogresscount}}</v-avatar></v-chip>
			</v-col>
			<v-col cols="12" sm="4" md="2" class="">
				<v-chip
					label
					class="ma-2"
					color="blue"
					text-color="white"
				>Shortlisted<v-avatar right color="white" class="blue--text">{{this.course.shortlistedcount}}</v-avatar></v-chip>
			</v-col>
		</v-row>
		<h1 class="mt-3">Reviews</h1>
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
		console.log(this.endpoint);
		this.fetch();
	},
	methods: {
		fetch() {
			axios
				.get(this.endpoint)
				.then(({ data }) => {
					this.course = data.data.course[0];
					console.log(this.course);
				})
				.then(() => {});
		}
	}
};
</script>
