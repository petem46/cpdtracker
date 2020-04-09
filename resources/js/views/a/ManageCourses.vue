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
			<!-- <thead>
				<th>Name</th>
				<th>Category</th>
				<th>Completed</th>
				<th>Started</th>
				<th>Shortlisted</th>
				<th>Ratings</th>
				<th>Average Rating</th>
				<th>Reviews</th>
				<th>Last Login</th>
			</thead>
			<tbody>
				<tr v-for="course in courses" v-bind="course" :key="course.id">
					<td>{{course.name}}</td>
					<td>{{course.category.name}}</td>
					<td>{{completedCount(course.courseprogress)}}</td>
					<td>{{inprogressCount(course.courseprogress)}}</td>
					<td>{{shortlistedCount(course.courseprogress)}}</td>
					<td>
						<v-row align="center" class="mx-0">
							<v-rating
								:value="getAverageRating(course.courserating)"
								color="amber"
								background-color="grey lighten-1"
								half-increments
								dense
								size="1rem"
							></v-rating>
							<div v-if="course.courserating.length">({{course.courserating.length}})</div>
						</v-row>
					</td>
					<td v-if="course.courserating.length">{{getAverageRating(course.courserating)}}</td>
					<td v-if="!course.courserating.length">No Ratings</td>
					<td v-if="course.coursereview.length">{{course.coursereview.length}}</td>
					<td v-if="!course.coursereview.length">No Reviews</td>
					<td>{{course.updated_at}}</td>
				</tr>
			</tbody>-->
			<template v-slot:course.courseprogress ="{ item }">
        <div>{{completedCount(course.courseprogress)}}</div>
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
					value: "category.name"
				},
				{
					text: "Completed",
					align: "left",
					sortable: true,
					value: "course.courseprogress"
				},
				{
					text: "Started",
					align: "left",
					sortable: true,
					value: ""
				},
				{
					text: "Shortlisted",
					align: "left",
					sortable: true,
					value: ""
				},
				{
					text: "Rating",
					align: "left",
					sortable: true,
					value: ""
				},
				{
					text: "Reviews",
					align: "left",
					sortable: true,
					value: ""
				},
				{
					text: "",
					align: "left",
					sortable: true,
					value: ""
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
					this.courses = data.courses;
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
		completedCount(courseprogress) {
			var total = 0,
				length = courseprogress.length;
			for (var i = 0; i < length; i++) {
				if (courseprogress[i].state_id == 2) {
					total++;
				}
			}
			return total;
		},
		inprogressCount(courseprogress) {
			var total = 0,
				length = courseprogress.length;
			for (var i = 0; i < length; i++) {
				if (courseprogress[i].state_id == 1) {
					total++;
				}
			}
			return total;
		},
		shortlistedCount(courseprogress) {
			var total = 0,
				length = courseprogress.length;
			for (var i = 0; i < length; i++) {
				if (courseprogress[i].state_id == 3) {
					total++;
				}
			}
			return total;
		},
		getAverageRating(courserating) {
			var total = 0,
				length = courserating.length;
			for (var i = 0; i < length; i++) {
				total += parseFloat(courserating[i].rating);
			}
			courserating.avgRating = total / length;
			return this.roundOff(courserating.avgRating, 1);
		},
		roundOff(value, decimals) {
			return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
		}
	}
};
</script>
