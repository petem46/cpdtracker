<template>
	<div>
		<h1 v-if="loading">
			LOADING CPD LISTINGS...
			<v-progress-linear indeterminate color="teal"></v-progress-linear>
		</h1>
		<div v-if="!loading">
			<v-expand-transition>
				<v-carousel
					v-show="showbanner && $vuetify.breakpoint.xlOnly && $vuetify.breakpoint.xsOnly"
					cycle
					height="400"
					hide-delimiter-background
					show-arrows-on-hover
				>
					<v-carousel-item v-for="(slide, i) in slides" :key="i">
						<v-sheet :color="colors[i]" height="100%">
							<v-row class="fill-height" align="center" justify="center">
								<div class="display-3">{{ slide }} CPD</div>
							</v-row>
						</v-sheet>
					</v-carousel-item>
				</v-carousel>
			</v-expand-transition>

			<v-row v-for="category in courses" v-bind="category" :key="category.id">
				<h1
					v-if="category.courses.length == 0 && endpoint != '/get/c'"
					class="col-12 font-weight-light"
				>No {{ category.name }} courses available at the moment</h1>
				<h1 v-if="category.courses.length > 0" class="col-12 font-weight-light">{{ category.name }}</h1>
				<course-tile
					v-for="course in category.courses"
					v-bind="course"
					:key="course.id"
					class="col-sm-6 col-md-4 col-xl-3 col-12"
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
						@click="addtosheet = false; addToMyCPD(tile.action, tile.stateid)"
					>
						<v-btn class="mx-2" fab dark small :color="tile.buttoncolor">
							<v-icon>{{tile.icon}}</v-icon>
						</v-btn>
						<v-list-item-title>{{ tile.title }}</v-list-item-title>
					</v-list-item>
					<v-list-item @click="addtosheet = false; deleteFromMyCPD()">
						<v-btn class="mx-2" fab dark small :color="deleteFromShortlist.buttoncolor">
							<v-icon>{{deleteFromShortlist.icon}}</v-icon>
						</v-btn>
						<v-list-item-title>{{ deleteFromShortlist.title }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-bottom-sheet>
		</div>

		<!--
    ****  SNACKBAR ALERT AFTER EDIT OR ADD COURSE
		-->
		<v-snackbar
			v-model="snackbar.show"
			:color="snackbar.color"
			:timeout="snackbar.timeout"
			multi-line
			bottom
		>
			{{ snackbar.text }}
			<v-btn dark text @click="snackbar.show = false">Close</v-btn>
		</v-snackbar>
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
			slides: [
				"GDPR Training",
				"Level 2 Safeguarding",
				"Third",
				"Fourth",
				"Fifth"
			],
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
				title: "Remove from my lists",
				action: "delete"
			},
			snackbar: {
				color: "",
				mode: "",
				show: false,
				text: "",
				timeout: 3000,
				y: "top"
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
			if (
				this.$route.path === "/c/all" ||
				this.$route.path === "/" ||
				this.$route.path === "/home"
			) {
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
					if (
						this.$route.path === "/c/all" ||
						this.$route.path === "/" ||
						this.$route.path === "/home"
					) {
						this.showbanner = true;
					}
				});
		},
		addToMyCPD($action, $state_id) {
			axios
				.put("/put/u/addToMyCourses/" + this.addtocourseid + "/" + $state_id)
				.then(() => {
					this.fetch();
				});
		},
		deleteFromMyCPD() {
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
			axios.put("/put/u/addRating/" + id + "/" + value).then(response => {
				this.fetch();
				this.snackbar.color = "success";
				this.snackbar.text = response.data;
				this.snackbar.show = true;
			});
		}
	},
	computed: {
		userid() {
			return this.$store.getters.getUserId;
    },
    filteredcourses() {
      return this.courses.filter(course => {
        return course.name.toLowerCase().include(this.search.toLowerCase())
      })
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
