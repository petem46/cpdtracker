<template>
	<div>
		<h1 v-if="loading">
			LOADING COURSES...
			<v-progress-linear indeterminate color="teal"></v-progress-linear>
		</h1>
		<div v-if="!loading">
			<v-expand-transition>
				<v-carousel
					v-show="showbanner"
					cycle
					height="400"
					hide-delimiter-background
					show-arrows-on-hover
				>
					<v-carousel-item v-for="(slide, i) in slides" :key="i">
						<v-sheet :color="colors[i]" height="100%">
							<v-row class="fill-height" align="center" justify="center">
								<div class="display-3">{{ slide }} Course</div>
							</v-row>
						</v-sheet>
					</v-carousel-item>
				</v-carousel>
			</v-expand-transition>

			<v-row v-for="category in courses" v-bind="category" :key="category.id">
				<h1 class="col-12 font-weight-light">{{ category.name }}</h1>
				<course-tile
					v-for="course in category.courses"
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
	</div>
</template>
<script>
import axios from "axios";
export default {
	props: ["name", "id"],
	watch: {
		$route: function() {
			this.checkroute();
			this.fetch();
		}
	},
	data() {
		return {
			// csrf: document
			// 	.querySelector('meta[name="csrf-token"]')
			//   .getAttribute("content"),
			// userid: document
			// 	.querySelector('meta[name="user-id"]')
			//   .getAttribute("content"),
			showbanner: true,
			loading: true,
			loadingtiles: true,
			colors: [
				"indigo",
				"warning",
				"pink darken-2",
				"red lighten-1",
				"deep-purple accent-4"
			],
			slides: ["GDPR Training", "Level 2 Safeguarding", "Third", "Fourth", "Fifth"],
			courses: [],
			endpoint: "/get/c",
			// rating: 4.5,
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
	created() {},
	mounted() {
		this.checkroute();
		this.fetch();
	},
	methods: {
		checkroute() {
			if (this.$route.path === "/c/all" || this.$route.path === "/" || this.$route.path === "/home" ) {
				this.endpoint = "/get/c";
				this.loading = true;
			} else {
				this.endpoint = "/get/cat/" + this.name;
				this.showbanner = false;
			}
		},
		fetch() {
			this.loadingtiles = true;
			axios
				.get(this.endpoint)
				.then(({ data }) => {
					this.courses = data.data.category_courses;
				})
				.then(() => {
					this.loading = false;
					this.loadingtiles = false;
					if (this.$route.path === "/c/all" || this.$route.path === "/" || this.$route.path === "/home" ) {
						this.showbanner = true;
					}
				});
		},
		addToMyCourses($action, $state_id) {
			// console.log("Course ID: " + this.addtocourseid);
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
		addcoursedata(id, name) {
			console.log("Hello from CourseList.vue");
			this.addtosheet = true;
			this.addtocourseid = id;
			this.addtocoursename = name;
			return true;
		},
		addRating(value, id) {
			// console.log("Rating Added: " + value + " Course ID: " + id);
			axios.put("/put/u/addRating/" + id + "/" + value).then($res => {
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
