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
			:multi-sort="multisort"
			:items-per-page="100"
		>
			<template v-slot:top>
				<v-text-field v-model="search" append-icon="fa-search" label="Search" class="mx-4 mt-4"></v-text-field>
			</template>
			<template v-slot:top>
				<v-row class="px-3">
					<v-col cols="4">
						<v-text-field
							v-model="search"
							append-icon="mdi-account-search"
							label="Search"
							single-line
							hide-details
						></v-text-field>
					</v-col>
					<v-col cols="4">
						<v-select v-model="category" :items="categories" label="Category Filter"></v-select>
					</v-col>
				</v-row>
			</template>
			<template v-slot:item.avgrating="{ item }">
				<!-- <v-rating :value="roundOff(item.avgrating, 1)" half-increments color="amber" size="1rem"></v-rating> -->
				<v-icon v-if="item.avgrating" :color="getStarColor(item.avgrating)" class="mr-1">mdi-star</v-icon>
				<span v-if="item.avgrating">{{roundOff(item.avgrating, 1)}}</span>
			</template>
			<template v-slot:item.actions="{ item }">
				<!-- <v-btn @click="courseDetails(course.name)" small outlined color>Details</v-btn> -->
			</template>
		</v-data-table>
	</div>
</template>
<script>
import Axios from "axios";
export default {
	data() {
		return {
			loading: true,
			courses: [],
			category: "All",
			categories: [],
			search: "",
			multisort: false,
			datatableheaders: [
				{
					text: "Name",
					align: "left",
					sortable: true,
					value: "name",
					width: "45%"
				},
				{
					text: "Category",
					align: "left",
					sortable: true,
					value: "category",
					filter: value => {
						if (this.category === "All") return true;
						if (!this.category) return true;
						return value === this.category;
					},
					width: "20%"
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
					align: "left",
					sortable: true,
					value: "avgrating",
					width: "100px"
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
					text: "",
					align: "center",
					sortable: false,
					value: "actions"
				}
			]
		};
	},
	mounted() {
		this.fetch();
		this.getCatFilters();
	},
	methods: {
		fetch() {
			axios
				.get("/get/c/all")
				.then(({ data }) => {
					this.courses = data.data.courses;
				})
				.then(() => {
					setTimeout(() => {
						this.loading = false;
					}, 1000);
				});
		},
		getCatFilters() {
			axios
				.get("/get/cc/catfilter")
				.then(({ data }) => {
					this.categories = data.categories.map(categories => categories.name);
				})
				.then(() => {
					this.categories.unshift("All");
				});
		},
		checkrow(value) {
			this.$emit("closeappdrawer");
			this.$router.push("/c/details/" + value.name);
		},
		roundOff(value, decimals) {
			return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
		},
		getStarColor(value) {
			if (value > 4) {
				return "green dark-2";
			}
			if (value > 3.5) {
				return "amber";
			}
			if (value >= 2) {
				return "orange darken-4";
			}
			if (value < 2) {
				return "red";
			}
			if (value < 1) {
				return "black";
			}
		},
		courseDetails(value) {
			this.$emit("closeappdrawer");
			this.$router.push("/c/details/" + value.name);
		}
	}
};
</script>
