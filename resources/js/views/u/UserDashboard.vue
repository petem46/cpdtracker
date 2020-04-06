<template>
  <div>
    <h1>UserDashboard.vue</h1>
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
			endpoint: "/u/dashboarddata",
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
			return "https://picsum.photos/295/165/?random=" + $courseid;
		},
		tileClick($id, $name) {
			alert("You Clicked course.id:" + $id + " course.name:" + $name + "!");
		}
	},
  computed: {
    userid() {
      return this.$store.getters.getUserid;
    }
  },
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
</script>
