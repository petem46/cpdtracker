<template>
	<div>
		<v-col
			cols="6"
			md="4"
			lg="3"
			xl="2"
		>
			<!-- <v-card class="flex d-flex flex-column"> -->
			<v-hover v-slot:default="{ hover }" open-delay="150" close-delay="200">
				<v-img :src="randomTile(7)" alt="Course Tile" height="165" width="295">
					<v-expand-transition>
						<div
							v-if="hover"
							class="d-flex transition-fast-in-fast-out teal v-card--reveal white--text"
							style="height: 100%;"
						>
							<div class="pa-3">
								{{ this.description }}
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
				v-if="!checkUserProgress(this.courseprogress)"
			>
				<v-card-text class="pt-6 pb-1" style="position: relative;">
					<v-btn
						@click="addtosheet = true; setaddcoursedata(this.id, this.name)"
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
							color="amber"
							dense
							half-increments
							background-color="grey lighten-1"
							readonly
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
						@click="addtosheet = true; setaddcoursedata(this.id, this.name)"
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
						<v-rating></v-rating>
						<div class="grey--text ml-4">
							<div v-if="this.courserating.length"></div>
						</div>
					</v-row>
					<div class="my-1 caption green--text text-left">You have completed this course</div>
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
						@click="addtosheet = true; setaddcoursedata(this.id, this.name)"
						absolute
						color="blue darken-2"
						class="white--text"
						fab
						right
						top
					>
						<v-icon>mdi-play</v-icon>
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
							color="amber"
							dense
							half-increments
							background-color="grey lighten-1"
							readonly
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
						@click="addtosheet = true; setaddcoursedata(this.id, this.name)"
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
							color="amber"
							dense
							half-increments
							background-color="grey lighten-1"
							readonly
						></v-rating>
						<div class="grey--text ml-4">
							<div v-if="this.courserating.length">({{this.courserating.length }})</div>
						</div>
					</v-row>
					<div class="my-1 caption text-left">You have shortlisted this course</div>
				</v-card-text>
			</div>
		</v-col>
	</div>
</template>
<script>
import axios from "axios";
export default {
  props: ['id', 'name', 'courseprogress', 'courserating', 'coursereview'],
  data() {
    return {
      cname: this.name,
      cid: this.id,
    };
  },
  mounted() {
    console.log(this.progress)
  },
  methods: {
    update() {
      console.log("UPDATE METHOD");
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

  }
};
</script>
