<template>
	<div>
		<v-row>
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
				>{{ myinprogresscourses.length }}</v-chip>
			</h1>

			<!--
        -- Course Tile Start --
			-->
			<v-col
				cols="6"
				md="4"
				lg="3"
				xl="2"
				v-for="course in myinprogresscourses"
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

		<v-row>
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
				>{{ myshortlistedcourses.length }}</v-chip>
			</h1>
			<!--
        -- Course Tile Start --
			-->
			<v-col
				cols="6"
				md="4"
				lg="3"
				xl="2"
				v-for="course in myshortlistedcourses"
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
		<v-row>
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
				>{{ mycompletedcourses.length }}</v-chip>
			</h1>

			<!--
        -- Course Tile Start --
			-->
			<v-col
				cols="6"
				md="4"
				lg="3"
				xl="2"
				v-for="course in mycompletedcourses"
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
	</div>
</template>
<script>
import axios from "axios";
export default {
	data() {
		return {
			endpoint: "/u/getMyCourses",
			mycompletedcourses: [],
			myinprogresscourses: [],
			myshortlistedcourses: []
		};
	},
	created() {
		this.fetch();
	},
	methods: {
		fetch() {
			axios.get(this.endpoint).then(({ data }) => {
				this.mycompletedcourses = data.completed.courses;
				this.myinprogresscourses = data.inprogress.courses;
        this.myshortlistedcourses = data.shortlisted.courses;
			});
		},
		addToMyCourses($action, $state_id) {
			console.log("Course ID: " + this.addtocourseid);
			axios
				.put("/u/addToMyCourses/" + this.addtocourseid + "/" + $state_id)
				.then(() => {
					// this.updated = true;
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
      for (
        var i = 0;
        i < length;
        i = i+1) {
        if (
					courseprogress[i].state_id == 1 &&
					courseprogress[i].user_id == userid
				) {
          console.log('A MATCH!');
					state = 1;
				}
				if (
          courseprogress[i].state_id == 2 &&
					courseprogress[i].user_id == userid
				) {
          console.log('A MATCH!');
					state = 2;
				}
				if (
          courseprogress[i].state_id == 3 &&
					courseprogress[i].user_id == userid
				) {
          console.log('A MATCH!');
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
        console.log('Course uID: ' + courserating[i].user_id + ' User ID: ' + userid);
				if (courserating[i].user_id == userid) {
          usercourserating += parseFloat(courserating[i].rating);
          console.log('Your rating');
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
    update() {},
  },
  computed: {
    userid() {
      return this.$store.getters.getUserId;
    }
  },
};
</script>
