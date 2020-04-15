<template>
	<div>
		<v-progress-linear v-if="loading" indeterminate></v-progress-linear>
		<section v-if="!loading">
			<v-row class="mt--3">
				<v-toolbar dense flat>
					<v-avatar>
						<v-icon small class="mr-5" @click="back(-1)">fas fa-arrow-left</v-icon>
					</v-avatar>

					<v-chip
						label
						:outlined="checkmystate(this.mystate,2)"
						class="mr-4"
						:color="statechipcolour(2)"
						text-color="white"
						@click="changestate(2)"
					>
						Completed
						<v-avatar right color="white" class="green--text">{{this.course.completedcount}}</v-avatar>
					</v-chip>

					<v-chip
						label
						:outlined="checkmystate(this.mystate,1)"
						class="mr-4"
						:color="statechipcolour(1)"
						text-color="white"
						@click="changestate(1)"
					>
						InProgress
						<v-avatar right color="white" class="indigo--text">{{this.course.inprogresscount}}</v-avatar>
					</v-chip>

					<v-chip
						label
						:outlined="checkmystate(this.mystate,3)"
						class="mr-4"
						:color="statechipcolour(3)"
						text-color="white"
						@click="changestate(3)"
					>
						Shortlisted
						<v-avatar right color="white" class="pink--text">{{this.course.shortlistedcount}}</v-avatar>
					</v-chip>
				</v-toolbar>
			</v-row>
			<!-- <h1>Course Details</h1> -->
			<h1 class="display-3">{{ this.name }}</h1>
			<!-- <h1>Access Details</h1> -->
			<a :href="this.course.access_details" target="_blank">{{ this.course.access_details }}</a>
			<v-row class>
				<v-col cols="12" md="4">
					<h1>Course Ratings</h1>
					<v-card>
						<v-card-text>
							<v-row>
								<v-col cols="4" class="pb-1">
									<v-rating
										:value="this.course.avgrating"
										readonly
										half-increments
										color="amber"
										size="1rem"
										dense
									></v-rating>
									<div v-if="this.course.ratingscount > 0">{{roundOff(this.course.avgrating, 1)}} out of 5</div>
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
					<h1>Public Reviews</h1>
					<v-row>
						<v-card
							class="col-12 col-md-5 mb-3 mr-3"
							v-for="review in publicreviews"
							v-bind="review"
							:key="review.id"
						>
							<v-card-text>
								{{ review.review }}
								<v-subheader>{{review.user.name}} - {{review.user.school}}</v-subheader>
							</v-card-text>
						</v-card>
					</v-row>
					<v-row id="private_reviews" v-if="adminuser">
						<v-col cols="12">
							<h1>Private Reviews</h1>
						</v-col>
						<v-card
							class="col-12 col-md-5 mb-3 mr-3"
							v-for="review in privatereviews"
							v-bind="review"
							:key="review.id"
							color="grey darken-3"
						>
							<v-card-text>
								{{ review.review }}
								<v-subheader>{{review.user.name}} - {{review.user.school}}</v-subheader>
							</v-card-text>
						</v-card>
					</v-row>
				</v-col>
			</v-row>
		</section>
	</div>
</template>
<script>
import axios from "axios";
export default {
	props: ["name"],
	data() {
		return {
			loading: true,
			addtocoursename: "",
			addtocourseid: "",
			course: [],
			endpoint: "/get/c/details/" + this.name,
			mystate: 0
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
					this.mystate = this.course.mystate;
				})
				.then(() => {
					this.loading = false;
				});
		},
		roundOff(value, decimals) {
			return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
		},
		checkmystate(mystate, state) {
			console.log("CHECKING..... state:" + state + " = mystate:" + mystate);

			if (state === this.mystate) {
				console.log("WE HAVE A MATCH:" + this.mystate);
				return false;
			} else {
				return true;
			}
    },
    statechipcolour(state) {
      if(this.mystate == 0) {return '';}
      if(this.mystate == state) {
        if(state == 1) {return 'blue'}
        if(state == 2) {return 'green'}
        if(state == 3) {return 'pink'}
      }
    },
		changestate(state) {
			console.log(
				"CHANGING....  state:" + state + " = mystate:" + this.mystate
			);
			if (this.mystate == state) {
				this.deleteFromMyCourses();
			} else {
				this.addToMyCourses(state);
			}
		},
		addToMyCourses(state) {
			console.log("addToMyCourses");
			axios
				.put("/put/u/addToMyCourses/" + this.course.id + "/" + state)
				.then(() => {
					this.fetch();
				});
		},
		deleteFromMyCourses() {
			console.log("deleteFromMyCourses");
			axios
				.delete("/delete/u/deleteFromMyCourses/" + this.course.id)
				.then(() => {
					this.fetch();
				});
		},
		back(val) {
			this.$router.go(val);
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
		},
		publicreviews: function() {
			var reviews = this.course.reviews;
			console.log(reviews.filter(r => r.public === 1));
			return reviews.filter(r => r.public === 1);
		},
		privatereviews() {
			var reviews = this.course.reviews;
			console.log(reviews.filter(r => r.public === 0));
			return reviews.filter(r => r.public === 0);
		},
		adminuser() {
			if (this.$store.getters.getRoleId === 1) {
				return true;
			} else {
				return false;
			}
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
.mt--3 {
	margin-top: -1rem !important;
}
</style>
