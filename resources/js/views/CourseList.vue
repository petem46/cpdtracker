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
        @click="tileClick(course.id, course.name)"
			>
      <v-hover v-slot:default="{ hover }" close-delay="200">
				<v-img :src="randomTile(course.id)" alt="Course Tile" height="165" width="295">
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out teal v-card--reveal white--text"
            style="height: 100%;"
          >
          <div class="pa-3">
          {{ course.description }}
          <br/>
          <br/>
          Length: {{ course.length }}
          <br/>
          <br/>
          Cost: {{ course.cost }}
          </div>
          </div>
        </v-expand-transition>

        </v-img>
      </v-hover>
				<div class="pt-2">
					<v-icon>mdi-label</v-icon>
					&nbsp;
					{{ course.name }}
				</div>
				<v-rating v-model="rating" half-increments background-color="orange lighten-3" color="orange"></v-rating>
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
			rating: 4.5
		};
	},
	created() {
		this.fetch();
	},
	methods: {
		fetch() {
			axios.get(this.endpoint).then(({ data }) => {
				this.courses = data.category_courses;
				console.log(this.courses);
			});
		},
		randomTile($courseid) {
			return (
				"https://picsum.photos/295/165/?random=" + $courseid
			);
		},
    tileClick($id, $name) {
      alert('You Clicked course.id:' + $id + ' course.name:' + $name + '!');
    }
	}
};
</script>
<style>
.v-card--reveal {
  /* align-items: center; */
  bottom: 0;
  /* justify-content: center; */
  opacity: .85;
  position: absolute;
  width: 100%;
}
</style>
