<template>
	<div>
		<!-- <v-card class="flex d-flex flex-column"> -->
		<v-hover v-slot:default="{ hover }" open-delay="150" close-delay="200">
			<v-img :src="randomTile(id)" alt="Course Tile" height="165" width="100%">
				<v-expand-transition>
					<div
						v-if="hover"
						class="d-flex transition-fast-in-fast-out teal v-card--reveal white--text justify-center"
						style="height: 100%;"
					>
						<div class="pa-3">
							<div class="module fade">
								<p class="cpation">{{ description }}</p>
							</div>
							<v-btn
								@click="courseDetails(name);"
								min-width="100px"
								class="mx-auto mb-1 teal--text"
								color="white"
								small
							>Details</v-btn>
							<br />
							<v-btn
								v-if="checkUserProgress(courseprogress) === 2"
								@click="addReview(id, 1)"
								min-width="100px"
								outlined
								class="mx-auto"
								color="white"
								small
							>Review</v-btn>
							<!-- <br />
							Cost: {{ cost }}-->
						</div>
					</div>
				</v-expand-transition>
			</v-img>
		</v-hover>
		<!-- SHOW IF COURSE NOT ON ANY LIST -->
		<div
			id="course-details-container"
			class="black darken-3"
			v-if="!checkUserProgress(this.courseprogress)"
		>
			<v-card-text class="pt-6 pb-1" style="position: relative;">
				<v-btn
					@click="setaddcoursedata(id, name)"
					absolute
					color="orange darken-2"
					class="white--text"
					fab
					right
					top
				>
					<v-icon>mdi-plus</v-icon>
				</v-btn>
			</v-card-text>
			<v-card-text
				class="subtitle-1 py-1 grey--text text--lighten-1"
				style="word-break: break-word; min-height: 100px"
			>{{ this.name }}</v-card-text>
			<v-card-text class="py-2">
				<v-row align="center" class="mx-0">

					<v-rating
						:value="getAverageRating(this.courserating)"
						dense
						readonly
						half-increments
						:color="getStarColor(getAverageRating(this.courserating))"
						full-icon="fas fa-star"
						half-icon="fa-star-half-alt"
						empty-icon="far fa-star"
						background-color="grey"
					></v-rating>

					<div class="grey--text ml-4">
						<div v-if="this.courserating.length">({{this.courserating.length }})</div>
					</div>
				</v-row>
				<div class="my-1 caption text-left">Cost: {{ this.cost }}</div>
			</v-card-text>
		</div>
		<!-- SHOW IF COURSE COMPLETED -->
		<div
			id="course-details-container"
			class="black darken-3"
			v-if="checkUserProgress(this.courseprogress) === 2"
		>
			<v-card-text class="pt-6 pb-1" style="position: relative;">
				<v-btn
					@click="setaddcoursedata(id, name)"
					absolute
					color="green darken-2"
					class="white--text"
					fab
					right
					top
				>
					<v-icon>mdi-check</v-icon>
				</v-btn>
			</v-card-text>
			<v-card-text
				class="subtitle-1 py-1 grey--text text--lighten-1"
				style="word-break: break-word; min-height: 100px"
			>{{ this.name }}</v-card-text>
			<v-card-text class="py-2">
				<v-row align="center" class="mx-0">
					<v-rating
						:value="getUserRating(this.courserating)"
						dense
						readonly
						half-increments
						:color="getStarColor(getUserRating(this.courserating))"
						full-icon="fas fa-star"
						half-icon="fa-star-half-alt"
						empty-icon="far fa-star"
						background-color="grey"
					></v-rating>
					<div class="grey--text ml-4">
						<div v-if="this.courserating.length"></div>
					</div>
				</v-row>
				<div
					v-if="getUserRating(this.courserating) === 0"
					class="my-1 caption red--text text-left"
				>Please rate this course</div>
				<div
					v-if="getUserRating(this.courserating) > 0"
					class="my-1 caption green--text text-left"
				>You have completed this course</div>
			</v-card-text>
		</div>
		<!-- SHOW IF COURSE IN-PROGRESS -->
		<div
			id="course-details-container"
			class="black darken-3"
			v-if="checkUserProgress(this.courseprogress) === 1"
		>
			<v-card-text class="pt-6 pb-1" style="position: relative;">
				<v-btn
					@click="setaddcoursedata(id, name)"
					absolute
					color="blue darken-2"
					class="white--text"
					fab
					right
					top
				>
					<v-icon>mdi-alarm-snooze</v-icon>
				</v-btn>
			</v-card-text>
			<v-card-text
				class="subtitle-1 py-1 grey--text text--lighten-1"
				style="word-break: break-word; min-height: 100px"
			>{{ this.name }}</v-card-text>
			<v-card-text class="py-2">
				<v-row align="center" class="mx-0">
					<v-rating
						:value="getAverageRating(this.courserating)"
						dense
						readonly
						half-increments
						:color="getStarColor(getAverageRating(this.courserating))"
						full-icon="fas fa-star"
						half-icon="fa-star-half-alt"
						empty-icon="far fa-star"
						background-color="grey"
					></v-rating>
					<div class="grey--text ml-4">
						<div v-if="this.courserating.length">({{this.courserating.length }})</div>
					</div>
				</v-row>
				<div class="my-1 caption blue--text text-left">You have started this course</div>
			</v-card-text>
		</div>
		<!-- SHOW IF COURSE SHORTLISTED -->
		<div
			id="course-details-container"
			class="black darken-3"
			v-if="checkUserProgress(this.courseprogress) === 3"
		>
			<v-card-text class="pt-6 pb-1" style="position: relative;">
				<v-btn
					@click="setaddcoursedata(id, name)"
					absolute
					color="pink"
					class="white--text"
					fab
					right
					top
				>
					<v-icon>mdi-heart</v-icon>
				</v-btn>
			</v-card-text>
			<v-card-text
				class="subtitle-1 py-1 grey--text text--lighten-1"
				style="word-break: break-word; min-height: 100px"
			>{{ this.name }}</v-card-text>
			<v-card-text class="py-2">
				<v-row align="center" class="mx-0">
					<v-rating
						:value="getAverageRating(this.courserating)"
						dense
						readonly
						half-increments
						:color="getStarColor(getAverageRating(this.courserating))"
						full-icon="fas fa-star"
						half-icon="fa-star-half-alt"
						empty-icon="far fa-star"
						background-color="grey"
					></v-rating>
					<div class="grey--text ml-4">
						<div v-if="this.courserating.length">({{this.courserating.length }})</div>
					</div>
				</v-row>
				<div class="my-1 caption text-left">You have shortlisted this course</div>
			</v-card-text>
		</div>
	</div>
</template>
<script>
import axios from "axios";
export default {
	props: [
		"id",
		"name",
		"description",
		"length",
		"slug",
		"rating",
		"cost",
		"access_details",
		"category_id",
		"courseprogress",
		"courserating",
		"coursereview",
		"created_at",
		"updated_at"
	],
	data() {
		return {
			addtocoursename: "",
			addtocourseid: "",
			addtooptions: [
				{
					img: "hangouts.png",
					title: "Add To Shortlisted Courses",
					action: "addtoshortlist",
					stateid: 3
				},
				{
					img: "inbox.png",
					title: "Add To In Progress Courses",
					action: "addtoinprogress",
					stateid: 1
				},
				{
					img: "keep.png",
					title: "Add To Completed Courses",
					action: "addtocompleted",
					stateid: 2
				}
			],
			deleteFromShortlist: {
				img: "hangouts.png",
				title: "Delete From Shortlist",
				action: "delete"
			}
		};
	},
	created() {},
	mounted() {},
	methods: {
		clickCheck(value) {
			alert("CLICK:" + value);
		},
		addToMyCourses($action, $state_id) {
			axios
				.put("/put/u/addToMyCourses/" + this.addtocourseid + "/" + $state_id)
				.then(() => {
					this.fetch();
				});
		},
		deleteFromMyCourses() {
			axios
				.delete("/delete/u/deleteFromMyCourses/" + this.addtocourseid)
				.then(() => {
					this.fetch();
				});
		},
		randomTile($courseid) {
			return "https://picsum.photos/295/165/?random=" + $courseid;
		},
		tileClick($id, $name) {
			alert("You Clicked course.id:" + $id + " course.name:" + $name + "!");
		},
		addcourse($action, $state) {
			alert("You Clicked " + $action + " with a state_id of " + $state);
		},
		setaddcoursedata($id, $name) {
			this.addtocourseid = $id;
			this.addtocoursename = $name;
			this.$emit("addcoursedata", this.addtocourseid, this.addtocoursename);
			return true;
		},
		addReview(id) {
			this.$router.push("/r/add/" + id);
		},
		checkUserProgress(courseprogress) {
			var state = 0;
			var length = courseprogress.length;
			var userid = 0;

			userid = this.$store.getters.getUserId;
			if (length > 0) {
				for (var i = 0; i < length; i = i + 1) {
					if (
						courseprogress[i].state_id == 1 &&
						courseprogress[i].user_id == userid
					) {
						state = 1;
					}
					if (
						courseprogress[i].state_id == 2 &&
						courseprogress[i].user_id == userid
					) {
						state = 2;
					}
					if (
						courseprogress[i].state_id == 3 &&
						courseprogress[i].user_id == userid
					) {
						state = 3;
					}
				}
				return state;
			}
		},
		getUserRating(courserating) {
			var usercourserating = 0;
			var length = courserating.length;
			var userid = 0;

			userid = this.$store.getters.getUserId;

			for (var i = 0; i < length; i++) {
				if (courserating[i].user_id == userid) {
					usercourserating += parseFloat(courserating[i].rating);
				}
			}
			return usercourserating;
		},
		getAverageRating(courserating) {
			var total = 0,
				length = courserating.length;

			for (var i = 0; i < length; i++) {
				total += parseFloat(courserating[i].rating);
			}

			courserating.avgRating = total / length;
			return courserating.avgRating;
		},
		addRating(value, id) {
			this.$emit("addRating", value, id);
		},
		courseDetails(value) {
			this.$emit("closeappdrawer");
			this.$router.push({
				path: "/c/details/" + value,
				params: { review: true }
			});
		},
		getStarColor(value) {
			if (value > 4) {
				return "green";
			}
			if (value >= 3) {
				return "amber";
			}
			if (value >= 2) {
				return "orange darken-3";
			}
			if (value < 2) {
				return "red";
			}
			if (value < 1) {
				return "black";
			}
		}
	},
	computed: {
		userid() {
			return this.$store.getters.getUserId;
		}
	}
};
</script>
<style>
.module {
	width: 250px;
	margin: 0 0 1em 0;
	overflow: hidden;
}
.module p {
	margin: 0;
}
.fade {
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
}
</style>
