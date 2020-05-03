<template>
	<div>
		<h1>Manage Users</h1>
		<v-progress-linear v-if="loading" indeterminate></v-progress-linear>
		<v-data-table
			@click:row="checkrow"
			:headers="datatableheaders"
			:items="users"
			:search="search"
			fixed-header
			:multi-sort="multisort"
			:items-per-page="100"
		>
			<template v-slot:top>
				<v-text-field
					v-model="search"
					append-icon="fas fa-search fa-sm"
					label="Search"
					class="mx-4 mt-4"
				></v-text-field>
			</template>
			<template v-slot:item.avgrating="{ item }">
				<v-rating
					:value="roundOff(item.avgrating, 1)"
					readonly
					half-increments
					:color="getStarColor(item.avgrating)"
					full-icon="fas fa-star"
					half-icon="fa-star-half-alt"
					empty-icon="far fa-star"
					background-color="grey"
				></v-rating>
				<!-- <v-icon v-if="item.avgrating" :color="getStarColor(item.avgrating)" class="mr-1">mdi-star</v-icon> -->
				<!-- <span v-if="item.avgrating">{{roundOff(item.avgrating, 1)}}</span> -->
			</template>
			<template v-slot:item.actions="{ item }">
				<v-btn @click="buttonclicker('details')" small outlined color>Details</v-btn>
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
			users: [],
			search: "",
			multisort: false,
			datatableheaders: [
				{
					text: "Name",
					align: "left",
					sortable: true,
					value: "name"
				},
				{
					text: "School",
					align: "left",
					sortable: true,
					value: "school"
				},
				{
					text: "Completed",
					align: "center",
					sortable: true,
					value: "completed"
				},
				// {
				// 	text: "Started",
				// 	align: "center",
				// 	sortable: true,
				// 	value: "inprogress"
				// },
				// {
				// 	text: "Shortlisted",
				// 	align: "center",
				// 	sortable: true,
				// 	value: "shortlisted"
				// },
				{
					text: "Total",
					align: "center",
					sortable: true,
					value: "totalcourses"
				},
				{
					text: "Avg Rating",
					align: "left",
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
	},
	methods: {
		fetch() {
			axios
				.get("/get/u/all")
				.then(({ data }) => {
					this.users = data.data.users;
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
		},
		getStarColor(value) {
			if (value > 4) {
				return "green";
			}
			if (value > 3) {
				return "amber";
			}
			if (value >= 2) {
				return "orange darken-3";
			}
			if (value < 2) {
				return "red";
			}
			if (value < 1) {
				return "black";
			}
		},
		buttonclicker(value) {
			alert(value);
		}
	}
};
</script>
