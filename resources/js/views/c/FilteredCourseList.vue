<template>
	<div>
		<v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
			<v-carousel-item v-for="(slide, i) in slides" :key="i">
				<v-sheet :color="colors[i]" height="100%">
					<v-row class="fill-height" align="center" justify="center">
						<div class="display-3">{{ slide }} Course</div>
					</v-row>
				</v-sheet>
			</v-carousel-item>
		</v-carousel>

		<v-row v-for="category in courses" v-bind="category" :key="category.id">
			<h1 class="col-12 font-weight-light">{{ category.name }}</h1>
			<!-- <CourseTile
				v-for="course in category.courses"
				v-bind="course"
				:key="course.id"
			></CourseTile>-->
			<!--
        -- Course Tile Start --
			-->
			<v-col
				cols="6"
				md="4"
				lg="3"
				xl="2"
				v-for="course in category.courses"
				v-bind="course"
				:key="course.id"
			>
				<!-- <v-card class="flex d-flex flex-column"> -->
				<v-hover v-slot:default="{ hover }" open-delay="150" close-delay="200">
					<v-img :src="randomTile(course.id)" alt="Course Tile" height="165" width="295">
						<v-expand-transition>
							<div
								v-if="hover"
								class="d-flex transition-fast-in-fast-out teal v-card--reveal white--text"
								style="height: 100%;"
							>
								<div class="pa-3">
									{{ course.description }}
									<br />
									<v-btn class="mx-auto my-2 teal--text" color="white">Course Details</v-btn>
								</div>
							</div>
						</v-expand-transition>
					</v-img>
				</v-hover>
				<!-- SHOW IF COURSE NOT ON ANY LIST -->
				<div
					id="course-details-container"
					class="black darken-3"
					v-if="!checkUserProgress(course.courseprogress)"
				>
					<v-card-text class="pt-6 pb-1" style="position: relative;">
						<v-btn
							@click="addtosheet = true; setaddcoursedata(course.id, course.name)"
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
					>{{ course.name }}</v-card-text>
					<v-card-text class="py-2">
						<v-row align="center" class="mx-0">
							<v-rating
								:value="getAverageRating(course.courserating)"
								color="amber"
								dense
								half-increments
								background-color="grey lighten-1"
								readonly
							></v-rating>
							<div class="grey--text ml-4">
								<div v-if="course.courserating.length">({{course.courserating.length }})</div>
							</div>
						</v-row>
						<div class="my-1 caption text-left">Cost: {{ course.cost }}</div>
					</v-card-text>
				</div>
				<!-- SHOW IF COURSE COMPLETED -->
				<div
					id="course-details-container"
					class="black darken-3"
					v-if="checkUserProgress(course.courseprogress) === 2"
				>
					<v-card-text class="pt-6 pb-1" style="position: relative;">
						<v-btn
							@click="addtosheet = true; setaddcoursedata(course.id, course.name)"
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
					>{{ course.name }}</v-card-text>
					<v-card-text class="py-2">
						<v-row align="center" class="mx-0">
							<v-rating
								:value="getUserRating(course.courserating)"
								color="green"
								dense
								half-increments
								background-color="grey lighten-1"
								@input="addRating($event, course.id)"
							></v-rating>
							<div class="grey--text ml-4">
								<div v-if="course.courserating.length"></div>
							</div>
						</v-row>
						<div
							v-if="getUserRating(course.courserating) === 0"
							class="my-1 caption red--text text-left"
						>Please rate this course</div>
						<div
							v-if="getUserRating(course.courserating) > 0"
							class="my-1 caption green--text text-left"
						>You have completed this course</div>
					</v-card-text>
				</div>
				<!-- SHOW IF COURSE IN-PROGRESS -->
				<div
					id="course-details-container"
					class="black darken-3"
					v-if="checkUserProgress(course.courseprogress) === 1"
				>
					<v-card-text class="pt-6 pb-1" style="position: relative;">
						<v-btn
							@click="addtosheet = true; setaddcoursedata(course.id, course.name)"
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
					>{{ course.name }}</v-card-text>
					<v-card-text class="py-2">
						<v-row align="center" class="mx-0">
							<v-rating
								:value="getAverageRating(course.courserating)"
								color="amber"
								dense
								half-increments
								background-color="grey lighten-1"
								readonly
							></v-rating>
							<div class="grey--text ml-4">
								<div v-if="course.courserating.length">({{course.courserating.length }})</div>
							</div>
						</v-row>
						<div class="my-1 caption blue--text text-left">You have started this course</div>
					</v-card-text>
				</div>
				<!-- SHOW IF COURSE SHORTLISTED -->
				<div
					id="course-details-container"
					class="black darken-3"
					v-if="checkUserProgress(course.courseprogress) === 3"
				>
					<v-card-text class="pt-6 pb-1" style="position: relative;">
						<v-btn
							@click="addtosheet = true; setaddcoursedata(course.id, course.name)"
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
					>{{ course.name }}</v-card-text>
					<v-card-text class="py-2">
						<v-row align="center" class="mx-0">
							<v-rating
								:value="getAverageRating(course.courserating)"
								color="amber"
								dense
								half-increments
								background-color="grey lighten-1"
								readonly
							></v-rating>
							<div class="grey--text ml-4">
								<div v-if="course.courserating.length">({{course.courserating.length }})</div>
							</div>
						</v-row>
						<div class="my-1 caption text-left">You have shortlisted this course</div>
					</v-card-text>
				</div>
			</v-col>
			<!--
        -- Course Tile End --
			-->
		</v-row>
		<v-bottom-sheet v-model="addtosheet">
			<v-list>
				<v-subheader>Add course to</v-subheader>
				<v-list-item
					v-for="tile in addtooptions"
					:key="tile.title"
					@click="addtosheet = false; addToMyCourses(tile.action, tile.stateid)"
				>
					<v-list-item-avatar>
						<v-avatar size="32px" tile>
							<img :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`" :alt="tile.title" />
						</v-avatar>
					</v-list-item-avatar>
					<v-list-item-title>{{ tile.title }}</v-list-item-title>
				</v-list-item>
				<v-list-item
					@click="addtosheet = false; deleteFromMyCourses()"
				>
					<v-list-item-avatar>
						<v-avatar size="32px" tile>
							<img :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${deleteFromShortlist.img}`" :alt="deleteFromShortlist.title" />
						</v-avatar>
					</v-list-item-avatar>
					<v-list-item-title>{{ deleteFromShortlist.title }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-bottom-sheet>
	</div>
</template>
<script>
import axios from "axios";
export default {
  props: ['name', 'id'],
	data() {
		return {
			// csrf: document
			// 	.querySelector('meta[name="csrf-token"]')
			//   .getAttribute("content"),
			// userid: document
			// 	.querySelector('meta[name="user-id"]')
			//   .getAttribute("content"),
			colors: [
				"indigo",
				"warning",
				"pink darken-2",
				"red lighten-1",
				"deep-purple accent-4"
			],
			slides: ["First", "Second", "Third", "Fourth", "Fifth"],
			courses: [],
			endpoint: "cat/" + this.name,
			// rating: 4.5,
			addtocoursename: "",
			addtocourseid: "",
			addtosheet: false,
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
					action: "delete",
				},
		};
	},
	created() {},
	mounted() {
		this.fetch();
	},
	methods: {
		fetch() {
			axios.get(this.endpoint).then(({ data }) => {
        this.courses = data;
			});
		},
		addToMyCourses($action, $state_id) {
			console.log("Course ID: " + this.addtocourseid);
			axios
				.put("/u/addToMyCourses/" + this.addtocourseid + "/" + $state_id)
				.then(() => {
					this.fetch();
        });
    },
		deleteFromMyCourses() {
			axios
				.delete("/u/deleteFromMyCourses/" + this.addtocourseid)
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
			alert("You Cllicked " + $action + " with a state_id of " + $state);
		},
		setaddcoursedata($id, $name) {
			this.addtocourseid = $id;
			this.addtocoursename = $name;
			return true;
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
						console.log("A MATCH!");
						state = 1;
					}
					if (
						courseprogress[i].state_id == 2 &&
						courseprogress[i].user_id == userid
					) {
						console.log("A MATCH!");
						state = 2;
					}
					if (
						courseprogress[i].state_id == 3 &&
						courseprogress[i].user_id == userid
					) {
						console.log("A MATCH!");
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
					console.log("Your rating");
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
			console.log("Rating Added: " + value + " Course ID: " + id);
			axios.put("/u/addRating/" + id + "/" + value).then(($res) => {
				this.fetch();
			});
		},
	},
	computed: {
		userid() {
			return this.$store.getters.getUserId;
		}
	}
};
</script>
<style>
.v-card--reveal {
	/* align-items: center; */
	bottom: 0;
	/* justify-content: center; */
	opacity: 0.85;
	position: absolute;
	width: 100%;
}
</style>
