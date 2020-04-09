<template>
	<div>
		<h1 v-if="loading">
			LOADING...
			<v-progress-linear indeterminate color="teal"></v-progress-linear>
		</h1>
		<v-row v-if="!loading">
			<h1 class="col-12 font-weight-light">
				My In-Progress Courses
				<v-chip v-if="!myinprogresscourses" class="ma-2" color="red darken-4" text-color="white">0</v-chip>
				<h3
					v-if="!myinprogresscourses"
					class="font-weight-light orange--text"
				>You have no in-progress courses.</h3>
				<v-chip
					v-if="myinprogresscourses"
					class="ma-2"
					color="teal"
					text-color="white"
				>{{ myinprogresscourses.courses.length }}</v-chip>
			</h1>
			<course-tile
				v-for="course in myinprogresscourses.courses"
				v-bind="course"
				:key="course.id"
				class="col-md-4 col-lg-3 col-xl-2 col-6"
				@addcoursedata="addcoursedata"
				@addRating="addRating"
			></course-tile>
		</v-row>

		<v-row v-if="!loading">
			<h1 class="col-12 font-weight-light">
				My Shortlisted Courses
				<v-chip v-if="!myshortlistedcourses" class="ma-2" color="red darken-4" text-color="white">0</v-chip>
				<h3
					v-if="!myshortlistedcourses"
					class="font-weight-light orange--text"
				>You have no shortlisted courses.</h3>
				<v-chip
					v-if="myshortlistedcourses"
					class="ma-2"
					color="teal"
					text-color="white"
				>{{ myshortlistedcourses.courses.length }}</v-chip>
			</h1>
			<course-tile
				v-for="course in myshortlistedcourses.courses"
				v-bind="course"
				:key="course.id"
				class="col-md-4 col-lg-3 col-xl-2 col-6"
				@addcoursedata="addcoursedata"
				@addRating="addRating"
			></course-tile>
		</v-row>
		<v-row v-if="!loading">
			<h1 class="col-12 font-weight-light">
				My Completed Courses
				<v-chip v-if="!mycompletedcourses" class="ma-2" color="red darken-4" text-color="white">0</v-chip>
				<h3
					v-if="!mycompletedcourses"
					class="font-weight-light orange--text"
				>You have not completed any courses.</h3>
				<v-chip
					v-if="mycompletedcourses"
					class="ma-2"
					color="teal"
					text-color="white"
				>{{ mycompletedcourses.courses.length }}</v-chip>
			</h1>
			<course-tile
				v-for="course in mycompletedcourses.courses"
				v-bind="course"
				:key="course.id"
				class="col-md-4 col-lg-3 col-xl-2 col-6"
				@addcoursedata="addcoursedata"
				@addRating="addRating"
			></course-tile>
		</v-row>

		<v-bottom-sheet v-model="addtosheet">
			<v-list>
				<v-subheader>
					Choose an action for&nbsp;
					<span class="blue--text">{{ this.addtocoursename }}</span>
				</v-subheader>
				<v-list-item
					v-for="tile in addtooptions"
					:key="tile.title"
					@click="addtosheet = false; addToMyCourses(tile.action, tile.stateid)"
				>
					<v-btn class="mx-2" fab dark small :color="tile.buttoncolor">
						<v-icon>{{tile.icon}}</v-icon>
					</v-btn>
					<v-list-item-title>{{ tile.title }}</v-list-item-title>
				</v-list-item>
				<v-list-item @click="addtosheet = false; deleteFromMyCourses()">
					<v-btn class="mx-2" fab dark small :color="deleteFromShortlist.buttoncolor">
						<v-icon>{{deleteFromShortlist.icon}}</v-icon>
					</v-btn>
					<v-list-item-title>{{ deleteFromShortlist.title }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-bottom-sheet>
	</div>
</template>
<script>
import axios from "axios";
export default {
	data() {
		return {
			loading: true,
			endpoint: "/get/u/getMyCourses",
			mycompletedcourses: [],
			myinprogresscourses: [],
			myshortlistedcourses: [],
			addtocoursename: "",
			addtocourseid: "",
			addtosheet: false,
			addtooptions: [
				{
					buttoncolor: "pink",
					icon: "mdi-heart",
					title: "Add to my shortlist",
					action: "addtoshortlist",
					stateid: 3
				},
				{
					buttoncolor: "blue",
					icon: "mdi-alarm",
					title: "Set as started",
					action: "addtoinprogress",
					stateid: 1
				},
				{
					buttoncolor: "green",
					icon: "mdi-check",
					title: "Set as completed",
					action: "addtocompleted",
					stateid: 2
				}
			],
			deleteFromShortlist: {
				buttoncolor: "red",
				icon: "mdi-delete-alert",
				title: "Remove from my shortlist",
				action: "delete"
			}
		};
	},
	created() {
		this.fetch();
	},
	methods: {
		fetch() {
			axios
				.get(this.endpoint)
				.then(({ data }) => {
					// console.log(data.completed);
					this.mycompletedcourses = data.completed;
					this.myinprogresscourses = data.inprogress;
					this.myshortlistedcourses = data.shortlisted;
				})
				.then(() => {
					setTimeout(() => {
						this.loading = false;
					}, 1000);
				});
		},
		addToMyCourses($action, $state_id) {
			console.log("Course ID: " + this.addtocourseid);
			axios
				.put("/put/u/addToMyCourses/" + this.addtocourseid + "/" + $state_id)
				.then(() => {
					this.fetch();
				});
		},
		deleteFromMyCourses() {
			axios.delete("/delete/u/deleteFromMyCourses/" + this.addtocourseid).then(() => {
				this.fetch();
			});
		},
		randomTile($courseid) {
			return "https://picsum.photos/295/165/?random=" + $courseid;
		},
		addcoursedata(id, name) {
			console.log("Hello from CourseList.vue");
			this.addtosheet = true;
			this.addtocourseid = id;
			this.addtocoursename = name;
			return true;
		},
		addRating(value, id) {
			console.log("Rating Added: " + value + " Course ID: " + id);
			axios.put("/u/addRating/" + id + "/" + value).then($res => {
				this.fetch();
			});
		}
	},
	computed: {
		userid() {
			return this.$store.getters.getUserId;
		}
	}
};
</script>
