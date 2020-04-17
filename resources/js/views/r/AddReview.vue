<template>
	<div>
		<div v-if="loading">LODAING....</div>
		<div v-if="!loading">
			<course-details :name="coursename" :review="true"></course-details>

			<v-dialog v-model="review" persistent max-width="600px">
				<template v-slot:activator="{ on }">
					<v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
				</template>
				<v-card>
					<v-card-title>Add Course Review / Feedback</v-card-title>
					<v-card-subtitle>{{ this.coursename }}</v-card-subtitle>
					<form @submit.prevent="submit">
						<v-card-text>
							<v-textarea
								v-model="review.review"
								label="Course Review/Feedback"
								outlined
								auto-grow
								counter="500"
							></v-textarea>
							<v-switch id="public" v-model="review.public" label="Public"></v-switch>
						</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn text @click="close()">Close</v-btn>
							<v-btn type="submit" color="blue darken-1" text>Save</v-btn>
						</v-card-actions>
					</form>
				</v-card>
			</v-dialog>
		</div>
	</div>
</template>
<script>
import axios from "axios";
export default {
	props: ["courseid"],
	data() {
		return {
			loading: true,
			coursename: "",
			review: {
				courseid: this.courseid,
				review: "",
				public: false
			},
			snackbar: {
				color: "",
				mode: "",
				show: false,
				text: "",
				timeout: 3000,
				x: null,
				y: "top"
			}
		};
	},
	mounted() {
		this.fetch();
	},
	methods: {
		fetch() {
			axios.get("/get/c/name/" + this.courseid).then(({ data }) => {
				console.log(data.course);
				this.coursename = data.course[0].name;
				this.getMyReview();
				this.loading = false;
			});
		},
		getMyReview() {
			axios.get("/get/u/myreview/" + this.courseid).then(({ data }) => {
				console.log(data.myreview);
				this.review = data.myreview[0];
			});
		},
		submit() {
			this.errors = {};
			axios.post("/post/r/savereview", this.review).then(response => {
				this.dialog = false;

				this.snackbar.color = "success";
				this.snackbar.text = response.data;
				this.snackbar.show = true;

				this.$router.push({
					path: "/c/details/" + this.coursename,
					params: { snackbar: snackbar, review: false }
				});
			});
		},
		close() {
			this.$router.push({
				path: "/c/details/" + this.coursename,
				params: { review: false }
			});
		}
	},
	computed: {}
};
</script>
<style>
</style>
