<template>
	<div>
		<v-progress-linear v-if="loading" indeterminate></v-progress-linear>
		<section v-if="!loading">
			<v-row class="mt--3">
				<v-toolbar dense flat>
					<v-avatar>
						<v-icon small class="mr-5" @click="back(-1)">fas fa-arrow-left</v-icon>
					</v-avatar>
					<v-divider class="mr-4" vertical inset></v-divider>
					<v-chip label outlined class="mr-4">
						Views
						<v-avatar v-model="this.course.viewcounter" right>{{this.course.viewcounter}}</v-avatar>
					</v-chip>
					<v-divider class="mr-4" vertical inset></v-divider>
					<section v-if="!$vuetify.breakpoint.smAndDown">
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
					</section>

					<section v-if="!$vuetify.breakpoint.smAndDown && $vuetify.breakpoint.smAndDown">
						<v-divider class="mr-4" vertical inset></v-divider>

						<v-tooltip bottom>
							<template v-slot:activator="{ on }">
								<v-chip v-on="on" label outlined class="mr-4" text-color="amber">
									<v-icon>mdi-star</v-icon>
								</v-chip>
							</template>
							<span>You have rated this course</span>
						</v-tooltip>

						<v-tooltip bottom>
							<template v-slot:activator="{ on }">
								<v-chip v-on="on" label outlined class="mr-4" text-color="green darken-3">
									<v-icon>mdi-check</v-icon>
								</v-chip>
							</template>
							<span>You have reviewed this course</span>
						</v-tooltip>
						<v-tooltip bottom>
							<template v-slot:activator="{ on }">
								<v-chip v-on="on" label outlined class="mr-4" text-color="white" @click="changestate(2)">
									<v-icon>mdi-pencil</v-icon>
								</v-chip>
							</template>
							<span>Edit your review</span>
						</v-tooltip>
						<v-divider class="mr-4" vertical inset></v-divider>
					</section>
				</v-toolbar>
			</v-row>

			<h1 class>
				<v-avatar v-if="this.course.type == 'suggested'">
					<v-icon color="orange accent-3" class="px-0">fa-power-off</v-icon>
				</v-avatar>
				<v-avatar v-if="this.course.type == 'active'">
					<v-icon color="green darken-3" class="px-0">fa-power-off</v-icon>
				</v-avatar>
				<v-avatar v-if="this.course.type == 'inactive'">
					<v-icon color="grey" class="px-0">fa-power-off</v-icon>
				</v-avatar>
				{{ this.course.name }}
			</h1>
			<v-chip
				v-for="category in this.course.categories"
				v-bind="category"
				:key="category.id"
				small
				outlined
				class="mr-2 mb-5"
			>
				<v-icon left color="amber">mdi-label</v-icon>
				{{ category.name }}
			</v-chip>
			<v-subheader v-if="this.course.description">{{ this.course.description}}</v-subheader>
			<v-subheader v-if="!this.course.description">No description avaiable</v-subheader>
			<v-subheader v-if="this.course.type != 'MyCPD'">
				<a :href="this.course.access_details" target="_blank">{{ this.course.access_details }}</a>
			</v-subheader>
			<v-subheader v-if="this.course.type == 'MyCPD'">
				Course Completed by {{ this.course.approved_by }}
			</v-subheader>
			<v-row class>
				<v-col cols="12" md="4">
					<h1>Course Ratings</h1>
					<v-card>
						<v-card-text>
							<v-row>
								<v-col cols="6" class="pb-1">
									<div v-if="this.course.ratingscount > 0">Average Rating</div>
									<v-rating
										:value="this.course.avgrating"
										dense
										readonly
										half-increments
										:color="getStarColor(this.course.avgrating)"
										full-icon="fas fa-star"
										half-icon="fa-star-half-alt"
										empty-icon="far fa-star"
										background-color="grey"
									></v-rating>
									<div v-if="this.course.ratingscount > 0">{{roundOff(this.course.avgrating, 1)}} out of 5</div>
								</v-col>
								<v-col cols="6" class="pb-1">
									<div v-if="this.course.ratingscount > 0">Your Rating</div>
									<v-rating
										:value="this.myrating"
										dense
										:color="getStarColor(this.myrating)"
										full-icon="fas fa-star"
										half-icon="fa-star-half-alt"
										empty-icon="far fa-star"
										background-color="grey"
										@input="addRating($event)"
									></v-rating>
									<div v-if="this.myrating > 0">{{ this.myrating }} out of 5</div>
									<div v-if="!this.myrating" class="my-1 caption red--text text-left">Please rate this course</div>
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
							v-for="review in this.publicreviews"
							v-bind="review"
							:key="review.id"
						>
							<v-card-text class="prewrap">
								{{ review.review }}
								<v-subheader>{{review.user.name}} - {{review.user.school}}</v-subheader>
							</v-card-text>
						</v-card>
					</v-row>
					<v-row id="private_reviews" v-if="adminuser && this.privatereviews.length > 0">
						<v-col cols="12">
							<h1>Private Reviews</h1>
						</v-col>
						<v-card
							class="col-12 col-md-5 mb-3 mr-3"
							v-for="review in this.privatereviews"
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
      <v-row v-if="this.adminuser">
      <!-- <v-col cols="12" md="6">
        <v-list-group>
          <v-list-item-title>
            TITLE
          </v-list-item-title>
          <v-list-item
          v-for="completed in course.completed"
          				v-bind="completed"
				:key="completed.id">
        {{ completed.user_id}}
          </v-list-item>
        </v-list-group>
      </v-col> -->

      </v-row>
		</section>

		<!--
    ****  SNACKBAR ALERT AFTER EDIT OR ADD COURSE
		-->
		<v-snackbar
			v-if="snackbar"
			v-model="snackbar.show"
			:color="this.snackbar.color"
			:timeout="this.snackbar.timeout"
			multi-line
			bottom
		>
			{{ snackbar.text }}
			<v-btn dark text @click="snackbar.show = false">Close</v-btn>
		</v-snackbar>
		<v-snackbar
			v-if="snackbar1"
			v-model="snackbar1.show"
			:color="this.snackbar1.color"
			:timeout="this.snackbar1.timeout"
			multi-line
			bottom
		>
			{{ snackbar1.text }}
			<v-btn dark text @click="snackbar1.show = false">Close</v-btn>
		</v-snackbar>
	</div>
</template>
<script>
import axios from "axios";
export default {
	props: ["id", "review", "snackbar"],
	data() {
		return {
			loading: true,
			addreview: this.review,
			addtocoursename: "",
			addtocourseid: "",
			course: [],
			endpoint: "/get/c/details/" + this.id,
			myrating: 0,
			mystate: 0,
			publicreviews: [],
			privatereviews: [],
			viewcountupdated: 0,
			snackbar1: {
				color: "",
				mode: "",
				show: false,
				text: "",
				timeout: 3000,
				y: "top"
			}
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
					this.mystate = this.course.mystate || 0;
					this.myrating = this.course.myrating;
					this.publicreviews = this.course.publicreviews;
					this.privatereviews = this.course.privatereviews;
				})
				.then(() => {
					this.loading = false;
					if (this.viewcountupdated == 0) {
						this.updateViewCounter();
					}
				});
		},
		roundOff(value, decimals) {
			return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
		},
		checkmystate(mystate, state) {
			if (state == mystate) {
				return false;
			} else {
				return true;
			}
		},
		statechipcolour(state) {
			if (this.mystate == 0) {
				return "";
			}
			if (this.mystate == state) {
				if (state == 1) {
					return "blue";
				}
				if (state == 2) {
					return "green";
				}
				if (state == 3) {
					return "pink";
				}
			}
		},
		changestate(state) {
			if (this.mystate == state) {
				this.deleteFromMyCourses();
			} else {
				this.addToMyCourses(state);
			}
		},
		addToMyCourses(state) {
			axios
				.put("/put/u/addToMyCourses/" + this.course.id + "/" + state)
				.then(() => {
					this.fetch();
				});
		},
		deleteFromMyCourses() {
			axios
				.delete("/delete/u/deleteFromMyCourses/" + this.course.id)
				.then(() => {
					this.fetch();
				});
		},
		updateViewCounter() {
			this.course.viewcounter = this.course.viewcounter + 1;
			axios.put("/put/c/updateViewCounter/" + this.course.id).then(() => {
				this.viewcountupdated = 1;
				this.fetch();
			});
		},
		addRating(value) {
			// console.log("Rating Added: " + value + " Course ID: " + id);
			axios
				.put("/put/u/addRating/" + this.course.id + "/" + value)
				.then(response => {
					this.fetch();
					this.snackbar1.color = "success";
					this.snackbar1.text = response.data;
					this.snackbar1.show = true;
				});
		},
		getStarColor(value) {
			if (value > 4) {
				return "green";
			}
			if (value > 3) {
				return "amber";
			}
			if (value >= 2) {
				return "orange";
			}
			if (value < 2) {
				return "red";
			}
			if (value < 1) {
				return "black";
			}
		},
		back(val) {
			// console.log(this.$router.go(val));
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
		adminuser() {
			if (this.$store.getters.getRoleId == 1) {
				return true;
			} else {
				return false;
			}
		}
	}
};
</script>
<style scoped>
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
.v-card >>> .v-card__text {
	white-space: pre-line !important;
	/* padding: 0 !important; */
}
div >>> .v-subheader {
	padding: 0px !important;
}
</style>
