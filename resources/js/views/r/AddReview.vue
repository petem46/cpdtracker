<template>
	<div>
		<v-col cols="12" md="8" lg="6">
			<v-card>
				<v-card-title>
					Add Course Review
				</v-card-title>
				<v-card-subtitle>
					{{ this.coursename }}
				</v-card-subtitle>
				<v-card-text>
					<v-textarea
						v-model="review.review"
						label="Course Review/Feedback"
						outlined
						counter
						maxlength="500"
					></v-textarea>
					<v-switch
						v-model="review.public"
						flat
						outlined
						:label="`${review.public}`"
						true-value="Public"
						false-value="Private"
					></v-switch>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn text>Cancel</v-btn>
					<v-btn text @click="save()">Save</v-btn>
				</v-card-actions>
			</v-card>
		</v-col>
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
				review: "",
				public: "Private"
			}
		};
	},
	mounted() {
		axios.get("/get/c/" + this.courseid).then(({ data }) => {
			console.log(data.course);
			this.coursename = data.course[0].name;
		});
	},
	methods: {
    save() {
      alert(review.review);
    }
  },
	computed: {}
};
</script>
<style>
</style>
