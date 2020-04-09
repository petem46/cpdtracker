<template>
	<div>
		<h1>Manage Users</h1>
		<v-progress-linear v-if="loading" indeterminate></v-progress-linear>
		<v-simple-table>
			<thead>
				<th>School</th>
				<th>Name</th>
				<th>Email</th>
				<th>Completed</th>
				<th>Started</th>
				<th>Shortlisted</th>
				<th>Ratings</th>
				<th>Average Rating</th>
				<th>Reviews</th>
				<!-- <th>Last Login</th> -->
			</thead>
			<tbody>
				<tr v-for="user in users" v-bind="user" :key="user.id">
					<td>{{user.school}}</td>
					<td>{{user.name}}</td>
					<td>{{user.email}}</td>
					<td>{{completedCount(user.courseprogress)}}</td>
					<td>{{inprogressCount(user.courseprogress)}}</td>
					<td>{{shortlistedCount(user.courseprogress)}}</td>
					<td>
						<v-row align="center" class="mx-0">
							<v-rating
								:value="getAverageRating(user.courserating)"
								color="amber"
								background-color="grey lighten-1"
								half-increments
								dense
								size="1rem"
							></v-rating>
							<div v-if="user.courserating.length">({{user.courserating.length}})</div>
						</v-row>
					</td>
					<td v-if="user.courserating.length">{{getAverageRating(user.courserating)}}</td>
					<td v-if="!user.courserating.length">No Ratings</td>
					<td v-if="user.coursereview.length">{{user.coursereview.length}}</td>
					<td v-if="!user.coursereview.length">No Reviews</td>
					<!-- <td>{{user.updated_at}}</td> -->
				</tr>
			</tbody>
		</v-simple-table>
		<p></p>
	</div>
</template>
<script>
import Axios from "axios";
export default {
	data() {
		return {
			loading: true,
			users: []
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
					this.users = data.users;
					console.log(this.users);
				})
				.then(() => {
					setTimeout(() => {
						this.loading = false;
					}, 1000);
				});
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
			return this.roundOff(courserating.avgRating,1);
		},
		roundOff(value, decimals) {
			return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
		}
	}
};
</script>
