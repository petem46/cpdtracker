<template>
	<div>
		<!-- <h1>Manage Courses</h1> -->
		<v-progress-linear v-if="loading" indeterminate></v-progress-linear>
		<v-data-table
			@click:row="editItem"
			:headers="datatableheaders"
			:items="courses"
			:search="search"
			fixed-header
			:multi-sort="multisort"
			:items-per-page="100"
		>
			<template v-slot:top>
				<v-toolbar flat>
					<v-toolbar-title>
						<v-icon>fas fa-folder-open</v-icon>&nbsp;&nbsp;Manage Courses
					</v-toolbar-title>
					<v-divider class="mx-4" inset vertical></v-divider>
					<v-spacer></v-spacer>
					<v-dialog v-model="dialog" max-width="50%">
						<template v-slot:activator="{ on }">
							<v-btn color="primary" dark class="mb-2" v-on="on">Add Course</v-btn>
						</template>
						<v-card>
							<v-card-title>
								<span class="headline">{{ formTitle }}</span>
							</v-card-title>

							<v-card-text>
								<v-container>
									<v-row>
										<v-col cols="12">
											<v-text-field
												v-model="editedItem.name"
												label="Course name"
												:rules="rules"
												hide-details="auto"
											></v-text-field>
										</v-col>
										<v-col cols="12">
											<v-select :items="categories" v-model="editedItem.category" label="Category"></v-select>
										</v-col>
										<v-col cols="12">
											<v-text-field v-model="editedItem.access_details" label="Access Details"></v-text-field>
										</v-col>
										<v-col cols="6">
											<v-text-field v-model="editedItem.cost" label="Cost"></v-text-field>
										</v-col>
										<v-col cols="12">
											<v-switch v-model="editedItem.active" label="Active"></v-switch>
										</v-col>
									</v-row>
								</v-container>
							</v-card-text>

							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
								<v-btn color="blue darken-1" text @click="save">Save</v-btn>
							</v-card-actions>
						</v-card>
					</v-dialog>
				</v-toolbar>
			</template>
			<template v-slot:item.actions="{ item }">
				<v-avatar>
					<v-icon class="mr-2"  @click="editItem(item)">mdi-pencil</v-icon>
				</v-avatar>
				<v-btn @click="courseDetails(item)" outlined text >Details
        </v-btn>
			</template>
			<template v-slot:no-data>
				<v-btn color="primary" @click="this.fetch()">Reset</v-btn>
				<!-- </template> -->
				<!-- <template v-slot:top>
				<v-text-field v-model="search" append-icon="fa-search" label="Search" class="mx-4 mt-4"></v-text-field>
				</template>-->
				<!-- <template v-slot:top> -->
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
		</v-data-table>
	</div>
</template>
<script>
import Axios from "axios";
export default {
	data() {
		return {
			loading: true,
			dialog: false,
			courses: [],
			category: "All",
			categories: [],
			search: "",
			multisort: false,
			editedIndex: -1,
			editedItem: {
				name: "",
				category: "",
				access_details: "",
				cost: 0,
				active: 1
			},
			defaultItem: {
				name: "",
				calories: 0,
				fat: 0,
				carbs: 0,
				protein: 0
			},
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
					align: "right",
					sortable: false,
					value: "actions",
					width: "200px"
				}
			],
			rules: [
				value => !!value || "Required.",
				value => (value && value.length >= 3) || "Min 3 characters"
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
			// this.$emit("closeappdrawer");
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
			// this.$emit("closeappdrawer");
			this.$router.push("/c/details/" + value.name);
		},
		close() {
			this.dialog = false;
			setTimeout(() => {
				this.editedItem = Object.assign({}, this.defaultItem);
				this.editedIndex = -1;
			}, 300);
		},
		editItem(item) {
			this.editedIndex = this.courses.indexOf(item);
			this.editedItem = Object.assign({}, item);
			console.log(this.editedItem);
			this.dialog = true;
		},
		deleteItem(item) {},
		save() {}
	},
	computed: {
		formTitle() {
			console.log(this.editedIndex);
			return this.editedIndex === -1 ? "New Course" : "Edit Course";
		}
	}
};
</script>
