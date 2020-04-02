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

			<!--
        -- Course Tile Start --
			-->
			<v-col
				cols="6"
				md="4"
				lg="3"
				xl="2"
				v-for="course in category.course"
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
									Length: {{ course.length }} time
								</div>
							</div>
						</v-expand-transition>
					</v-img>
				</v-hover>
				<div id="course-details-container" class="black darken-3">
					<v-card-text class="pt-6 pb-1" style="position: relative;">
						<!-- @click="addToMyCourses(course.id)" -->
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
							<v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
							<div class="grey--text ml-4">4.5 (413)</div>
						</v-row>
						<div class="my-1 caption text-left">Cost: {{ course.cost }}</div>
						<!-- <div>{{ course.description }}</div> -->
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
				<v-list-item v-for="tile in addtooptions" :key="tile.title" @click="addtosheet = false; addToMyCourses(tile.action, tile.stateid)">
					<v-list-item-avatar>
						<v-avatar size="32px" tile>
							<img :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`" :alt="tile.title" />
						</v-avatar>
					</v-list-item-avatar>
					<v-list-item-title>{{ tile.title }}</v-list-item-title>
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
			colors: [
				"indigo",
				"warning",
				"pink darken-2",
				"red lighten-1",
				"deep-purple accent-4"
			],
			slides: ["First", "Second", "Third", "Fourth", "Fifth"],
			courses: [],
			endpoint: "/courselist",
			rating: 4.5,
      addtocoursename: '',
      addtocourseid: '',
      addtosheet: false,
			addtooptions: [
				{ img: "hangouts.png", title: "Add To Shortlisted Courses",  action: "addtoshortlist", stateid: 3},
				{ img: "inbox.png", title: "Add To In Progress Courses",  action: "addtoinprogress", stateid: 1},
				{ img: "keep.png", title: "Add To Completed Courses",  action: "addtocompleted", stateid: 2},
			]
		};
	},
	created() {
		this.fetch();
	},
	methods: {
		fetch() {
			axios.get(this.endpoint).then(({ data }) => {
				this.courses = data.category_courses;
			});
		},
		addToMyCourses($action, $state_id) {
      console.log("Course ID: " + this.addtocourseid);
			axios.put("/u/addToMyCourses/" + this.addtocourseid + "/" + $state_id).then(() => {
        // this.updated = true;
        console.log('YOU WOT!?')
			});
		},
		randomTile($courseid) {
			return "https://picsum.photos/295/165/?random=" + $courseid;
		},
		tileClick($id, $name) {
			alert("You Clicked course.id:" + $id + " course.name:" + $name + "!");
		},
    addcourse($action, $state) {
      alert('You Cllicked ' + $action + " with a state_id of " + $state);

    },
    setaddcoursedata($id, $name) {
      this.addtocourseid = $id;
      this.addtocoursename = $name;
      return true;
    },
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
