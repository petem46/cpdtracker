<template>
	<div class="v-container">
		<h1 class="mb-5">
			<v-icon>fas fa-folder-open</v-icon>&nbsp;&nbsp;My CPD Record
		</h1>
		<div id="mycpdcourses" class="mb-10">
			<v-progress-linear v-if="loading" indeterminate></v-progress-linear>
			<v-data-table :headers="datatableheaders" :items="mycpd" :search="search">
				<template v-slot:item.myprogress="{ item }">
					<v-chip v-if="item.myprogress == 1" small outlined class="mr-2 white--text">
						<v-icon color="blue lighten-3">fa-user-clock fa-sm</v-icon>
					</v-chip>
					<v-chip v-if="item.myprogress == 2" small outlined class="mr-2 white--text">
						<v-icon color="green accent-3">fa-user-check fa-sm</v-icon>
					</v-chip>
					<v-chip v-if="item.myprogress == 3" small outlined class="mr-2 white--text">
						<v-icon color="amber">fa-user-plus fa-sm</v-icon>
					</v-chip>
				</template>

				<template v-slot:item.myrating="{ item }">
					<v-icon v-if="item.myrating" color="amber accent-3" class="mr-2">fa-star fa-sm</v-icon>
					{{ item.myrating }}
				</template>
				<template v-slot:item.avgrating="{ item }">
					<v-icon v-if="item.avgrating" color="amber accent-3" class="mr-2">fa-star fa-sm</v-icon>
					{{ roundOff(item.avgrating, 1) }}
				</template>
				<template
					v-slot:item.startdate="{ item }"
				>{{ item.startdate | dateParse('YYYY.MM.DD')| dateFormat('DD-MM-YYYY') }}</template>
				<template
					v-slot:item.enddate="{ item }"
				>{{ item.enddate | dateParse('YYYY.MM.DD')| dateFormat('DD-MM-YYYY') }}</template>
				<template v-slot:item.actions="{ item }">
					<v-menu offset-y bottom left>
						<template v-slot:activator="{ on }">
							<v-btn v-if="!$vuetify.breakpoint.xsOnly" icon v-on="on">
								<v-icon v-if="!$vuetify.breakpoint.xsOnly">mdi-dots-vertical</v-icon>
							</v-btn>
							<v-btn v-if="$vuetify.breakpoint.xsOnly" text outlined v-on="on">Actions</v-btn>
						</template>
						<v-list>
							<v-list-item @click="editItem(item)">
								<v-avatar>
									<v-icon class="mr-2">mdi-pencil</v-icon>
								</v-avatar>Edit Details
							</v-list-item>
							<v-list-item @click="gotoCourse(item)">
								<v-avatar>
									<v-icon class="mr-2">mdi-folder-search-outline</v-icon>
								</v-avatar>View Course
							</v-list-item>
							<v-list-item disabled>
								<v-avatar>
									<v-icon class="mr-2">mdi-account-search-outline</v-icon>
								</v-avatar>Menu Item
							</v-list-item>
						</v-list>
					</v-menu>
				</template>
			</v-data-table>
		</div>
	</div>
</template>
<script>
import Axios from "axios";
import VueFilterDateParse from "vue-filter-date-format";
export default {
	data() {
		return {
			loading: true,
			mycpd: [],
			search: "",
			datatableheaders: [
				{
					text: "",
					align: "left",
					value: "myprogress"
				},
				{
					text: "Course",
					align: "left",
					value: "name"
				},
				{
					text: "Provider",
					align: "left",
					value: "provider"
				},
				{
					text: "Method",
					align: "left",
					value: "method"
				},
				{
					text: "My Rating",
					align: "center",
					value: "myrating"
				},
				{
					text: "Avg Rating",
					align: "center",
					value: "avgrating"
				},
				{
					text: "Review",
					align: "left",
					value: "myreview",
					width: "50%"
				},
				{
					text: "",
					align: "right",
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
				.get("/get/u/getMyCPD")
				.then(({ data }) => {
					// console.log(data.completed);
					this.mycpd = data.mycpd.courses;
				})
				.then(() => {
					setTimeout(() => {
						this.loading = false;
					}, 1000);
				});
		},
		roundOff(value, decimals) {
			return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
    },
		gotoCourse(item) {
      this.$router.push("/c/details/" + item.name);
		},

	}
};
</script>
