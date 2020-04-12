<template>
	<div>
		<h1>Course Details</h1>
		<h1 class="display-3">{{ this.name }}</h1>
		<h1>Access Details</h1>
		<a :href="this.course.access_details" target="_blank">{{ this.course.access_details }}</a>
		<h1>Current Status</h1>
		<div>
			<v-chip label class="mr-4" color="green" text-color="white">
				Completed
				<v-avatar right color="white" class="green--text">{{this.course.completedcount}}</v-avatar>
			</v-chip>
			<v-chip label class="mr-4" color="indigo" text-color="white">
				InProgress
				<v-avatar right color="white" class="indigo--text">{{this.course.inprogresscount}}</v-avatar>
			</v-chip>
			<v-chip label class="mr-4" color="blue" text-color="white">
				Shortlisted
				<v-avatar right color="white" class="blue--text">{{this.course.shortlistedcount}}</v-avatar>
			</v-chip>
		</div>

		<v-row class>
			<v-col cols="12" md="4">
				<h1>Ratings</h1>
				<v-card>
					<v-card-text>
						<v-row>
							<v-col cols="4">
								<v-rating
									:value="this.course.avgrating"
									readonly
									half-increments
									color="amber"
									size="1rem"
									dense
								></v-rating>
							</v-col>
							<v-col cols="8" class="my-auto">
								<div
									v-if="this.course.ratingscount > 0"
									class="my-auto"
								>{{roundOff(this.course.avgrating, 1)}} out of 5</div>
							</v-col>
							<v-col cols="12" class="headline">{{ this.course.ratingscount }} staff reviews</v-col>

							<v-col cols="12">
								<table class="table" width="100%">
									<tr>
										<td>5 star</td>
										<td width="80%">
											<v-progress-linear :value="this.fives" color="amber" class="mb-3" height="25">
												<span v-if="this.course.ratingscount > 0">{{Math.ceil(this.fives)}} %</span>
											</v-progress-linear>
										</td>
									</tr>
									<tr>
										<td>4 star</td>
										<td width="80%">
											<v-progress-linear :value="this.fours" color="amber" class="mb-3" height="25">
												<span v-if="this.course.ratingscount > 0">{{Math.ceil(this.fours)}} %</span>
											</v-progress-linear>
										</td>
									</tr>
									<tr>
										<td>3 star</td>
										<td width="80%">
											<v-progress-linear :value="this.threes" color="amber" class="mb-3" height="25">
												<span v-if="this.course.ratingscount > 0">{{Math.ceil(this.threes)}} %</span>
											</v-progress-linear>
										</td>
									</tr>
									<tr>
										<td>2 star</td>
										<td width="80%">
											<v-progress-linear :value="this.twos" color="amber" class="mb-3" height="25">
												<span v-if="this.course.ratingscount > 0">{{Math.ceil(this.twos)}} %</span>
											</v-progress-linear>
										</td>
									</tr>
									<tr>
										<td>1 star</td>
										<td width="80%">
											<v-progress-linear :value="this.ones" color="amber" class="mb-3" height="25">
												<span v-if="this.course.ratingscount > 0">{{Math.ceil(this.ones)}} %</span>
											</v-progress-linear>
										</td>
									</tr>
								</table>
							</v-col>
						</v-row>
					</v-card-text>
				</v-card>
			</v-col>
			<v-col cols="12" md="8" class>
				<h1>Reviews</h1>
				<v-row>
					<v-card
						class="col-12 col-md-5 mb-3 mr-3"
						v-for="review in course.reviews"
						v-bind="review"
						:key="review.id"
					>
						<v-card-text>
							{{ review.review }}
							<v-subheader>{{review.user.name}} - {{review.user.school}}</v-subheader>
						</v-card-text>
					</v-card>
				</v-row>
			</v-col>
		</v-row>
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
		},
		roundOff(value, decimals) {
			return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
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
			counter =
				(this.course.threeratingscount / this.course.ratingscount) * 100;
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
		}
	}
};
</script>
<style>
h1 {
	font-weight: 100 !important;
	margin-top: 12px !important;
	margin-bottom: 12px !important;
	/* letter-spacing: 0.125rem !important; */
	font-size: 2.125rem !important;
	line-height: 2.5rem;
}
</style>
