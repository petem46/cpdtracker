<template>
	<div>
		<h1>Manage Courses</h1>
		<v-progress-linear v-if="loading" indeterminate></v-progress-linear>
		<v-data-table
			@click:row="checkrow"
			:headers="datatableheaders"
			:items="courses"
			:search="search"
			fixed-header
			multi-sort
		>
			<template v-slot:item.avgrating="{ item }">
				<v-rating :value="roundOff(item.avgrating, 1)" half-increments color="amber" size="1rem"></v-rating>
			</template>
			<template v-slot:item.actions="{ item }">
				<v-btn small color="blue">Edit</v-btn>
				<v-btn small color="red">Delete</v-btn>
			</template>
		</v-data-table>
		<p></p>
	</div>
</template>
<script>
import Axios from "axios";
export default {
	data() {
		return {
			loading: true,
			courses: [],
			search: "",
			datatableheaders: [
				{
					text: "Name",
					align: "left",
					sortable: true,
					value: "name"
				},
				{
					text: "Category",
					align: "left",
					sortable: true,
					value: "category"
				},
				{
					text: "Completed",
					align: "center",
					sortable: true,
					value: "completed"
				},
				{
					text: "Started",
					align: "center",
					sortable: true,
					value: "inprogress"
				},
				{
					text: "Shortlisted",
					align: "center",
					sortable: true,
					value: "shortlisted"
				},
				{
					text: "Avg Rating",
					align: "center",
					sortable: true,
					value: "avgrating"
				},
				{
					text: "Ratings",
					align: "center",
					sortable: true,
					value: "ratings"
				},
				{
					text: "Reviews",
					align: "center",
					sortable: true,
					value: "reviews"
				},
				{
					text: "Actions",
					align: "center",
					sortable: true,
					value: "actions"
				}
			]
		};
	},
	mounted() {
		this.fetch();
	},
	methods: {
		fetch() {
			axios
				.get("/get/c/all")
				.then(({ data }) => {
					this.courses = data.data.courses;
					console.log(this.courses);
				})
				.then(() => {
					setTimeout(() => {
						this.loading = false;
					}, 1000);
				});
		},
		checkrow(value) {
			alert(value.name);
		},
		roundOff(value, decimals) {
			return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
		}
	}
};
</script>
