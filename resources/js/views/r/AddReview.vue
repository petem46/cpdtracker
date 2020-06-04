<template>
	<div>
		<h1 v-if="loading">LOADING....</h1>
		<v-progress-linear indeterminate v-if="loading"></v-progress-linear>
		<div v-if="!loading">
			<course-details :id="courseid" :review="fromreview"></course-details>

			<v-dialog v-model="review" persistent max-width="600px" :fullscreen="$vuetify.breakpoint.xsOnly">
				<template v-slot:activator="{ on }">
					<v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
				</template>
				<v-card>
					<v-card-title class="subtitle-2 pb-0 grey--text">Add CPD Review</v-card-title>
					<v-card-title class="pt-1">{{ this.coursename }}</v-card-title>
					<form @submit.prevent="submit">
						<v-card-text>
							<v-textarea
								v-model="review.review"
								label="CPD Review/Feedback"
								outlined
								auto-grow
								counter="500"
							></v-textarea>
							<v-switch id="public" v-model="review.public" :label="publicPrivateLabel(review.public)"></v-switch>
						</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn text @click="close()">Close</v-btn>
							<v-btn type="submit" text>Save</v-btn>
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
			fromreview: true,
			review: {
				courseid: this.courseid,
				course: "",
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
		this.review.course = this.coursename;
	},
	methods: {
		fetch() {
			axios.get("/get/cpd/name/" + this.courseid).then(({ data }) => {
				console.log(data.course);
				this.coursename = data.course[0].name;
				this.getMyReview();
				// this.review.course = this.cname;
				this.review.course = this.coursename;
				this.loading = false;
			});
		},
		getMyReview() {
			axios.get("/get/u/myreview/" + this.courseid).then(({ data }) => {
				console.log(data.myreview);
				if (data.myreview.length > 0) {
					this.review = data.myreview[0];
					this.review.course = this.cname;
					if (this.review.public == 1) {
						this.review.public = true;
					} else {
						this.review.public = false;
					}
				}
				// this.review.course = this.cname;
			});
		},
		submit() {
			// this.errors = {};
			// this.review.course = this.cname;
			axios.post("/post/r/savereview", this.review).then(response => {
				this.dialog = false;

				this.snackbar.color = "success";
				this.snackbar.text = response.data;
				this.snackbar.show = true;

				this.$router.push({
					path: "/cpd/details/" + this.courseid,
					params: { snackbar: this.snackbar, review: false }
				});
			});
		},
		close() {
			this.$router.push({
				path: "/cpd/details/" + this.courseid,
				params: { review: false }
			});
		},
		publicPrivateLabel(item) {
			if (item) {
				return "Public";
			} else {
				return "Private";
			}
		}
	},
	computed: {
		cname() {
			this.review.course = this.coursename;
		}
	}
};
</script>
<style>
.v-card__title {
	word-break: normal !important;
}
</style>
