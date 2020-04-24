<template>
	<div>
		<h1>
			<v-icon>fas fa-folder-open</v-icon>&nbsp;&nbsp;Manage Courses
		</h1>
		<v-progress-linear v-if="loading" indeterminate></v-progress-linear>
		<v-data-table
			id="testid"
			click:row="editItem"
			:headers="datatableheaders"
			:items="courses"
			:search="search"
			fixed-header
			:multi-sort="multisort"
			:items-per-page="100"
		>
			<!-- <v-divider class="mx-4" inset vertical></v-divider> -->
			<template v-slot:top>
				<v-row class="px-3">
					<v-col cols="12" md="4" class="order-md-1 order-last">
						<v-text-field
							v-model="search"
							append-icon="fas fa-search fa-sm"
							label="Search"
							single-line
							hide-details
						></v-text-field>
					</v-col>
					<v-col cols="12" md="4" class="order-md-2 order-8">
						<v-select hint="Category Filter" persistent-hint v-model="category" :items="categories"></v-select>
					</v-col>
					<v-col cols="12" md="2" class="order-md-3 order-9">
						<v-select hint="Type Filter" persistent-hint v-model="type" :items="types"></v-select>
					</v-col>
					<v-col cols="12" md="2" class="order-md-last order-first">
						<v-spacer></v-spacer>
						<!-- <v-dialog v-model="dialog" max-width="800px" :fullscreen="$vuetify.breakpoint.smAndDown"> -->
						<v-dialog v-model="dialog" fullscreen>
							<template v-slot:activator="{ on }">
								<v-btn color="primary" dark class="d-none d-md-block mb-2 float-right" v-on="on">Add Course</v-btn>
								<v-btn color="primary" dark class="d-md-none btn-block mb-2 float-left" v-on="on">Add Course</v-btn>
							</template>
							<v-card>
								<v-toolbar color="primary">
									<v-btn icon @click="close">
										<v-icon>mdi-close</v-icon>
									</v-btn>
									<v-toolbar-title>{{ formTitle }}</v-toolbar-title>
									<v-spacer></v-spacer>
									<v-toolbar-items>
										<v-btn text @click="submit">Save</v-btn>
									</v-toolbar-items>
								</v-toolbar>
                <v-container>
								<form @submit.prevent="submit">
									<v-card-text>
										<v-container>
											<v-row>
												<v-col cols="12">
													<v-text-field
														id="name"
														v-model="editedItem.name"
														label="Course name"
														:rules="rules"
														hide-details="auto"
													></v-text-field>
												</v-col>
												<v-col cols="12">
													<v-select
														id="category"
														:items="categories"
														v-model="editedItem.category"
														label="Category"
													></v-select>
												</v-col>
												<v-col cols="12">
													<v-textarea id="description" v-model="editedItem.description" label="Description"></v-textarea>
												</v-col>
												<v-col cols="12">
													<v-text-field
														id="access_details"
														v-model="editedItem.access_details"
														label="Access Details"
													></v-text-field>
												</v-col>
												<v-col cols="6">
													<v-text-field id="cost" v-model="editedItem.cost" label="Cost"></v-text-field>
												</v-col>
												<v-col v-if="editedIndex > -1" cols="6">
													<v-text-field
														type="number"
														id="viewcounter"
														v-model="editedItem.viewcounter"
														label="View Counter"
													></v-text-field>
												</v-col>
												<v-col cols="12">
													<v-radio-group v-model="editedItem.type" column label="Course Status">
														<v-radio label="Active" color="green accent-3" value="active"></v-radio>
														<v-radio label="Inactive" color="grey" value="inactive"></v-radio>
														<v-radio label="Suggested" color="orange accent-3" value="suggested"></v-radio>
													</v-radio-group>
												</v-col>
											</v-row>
										</v-container>
									</v-card-text>

									<v-card-actions>
										<v-btn v-if="formDelete" outlined color="red darken-1" text @click="deleteCourse()">Delete</v-btn>
										<v-spacer></v-spacer>
										<v-btn text @click="close">Cancel</v-btn>
										<v-btn type="submit" outlined color="green accent-2" text>Save</v-btn>
									</v-card-actions>
								</form>
                </v-container>
							</v-card>
						</v-dialog>
					</v-col>
				</v-row>
			</template>
			<!--
      SLOT modifier for course name column
      include type/status icon
			-->
			<template v-slot:item.type="{ item }">
				<span class="d-none"></span>
			</template>
			<template v-slot:item.name="{ item }">
				<v-avatar v-if="item.type == 'suggested'">
					<v-icon @click="editItem(item)" color="orange accent-3" class="px-0">far fa-question-circle</v-icon>
				</v-avatar>
				<v-avatar v-if="item.type == 'active'">
					<v-icon @click="editItem(item)" color="green accent-3" class="px-0">fa-power-off</v-icon>
				</v-avatar>
				<v-avatar v-if="item.type == 'inactive'">
					<v-icon @click="editItem(item)" color="grey" class="px-0">fa-power-off</v-icon>
				</v-avatar>
				{{ item.name }}
			</template>
			<!--
      SLOT modifier for category column
			-->
			<template v-slot:item.category="{ item }">
				<v-chip small outlined class="mr-2" @click="filterCategory(item)">
					<v-icon left color="amber">mdi-label</v-icon>
					{{ item.category }}
				</v-chip>
			</template>
			<!--
      SLOT modifier for average rating column
			-->
			<template v-slot:item.avgrating="{ item }">
				<!-- <v-rating :value="roundOff(item.avgrating, 1)" half-increments color="amber" size="1rem"></v-rating> -->
				<v-icon v-if="item.avgrating" :color="getStarColor(item.avgrating)" class="mr-1">mdi-star</v-icon>
				<span v-if="item.avgrating">{{roundOff(item.avgrating, 1)}}</span>
			</template>
			<!--
      SLOT modifier for action buttons
			-->
			<template v-slot:item.actions="{ item }">
				<v-avatar>
					<v-icon class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
				</v-avatar>
				<v-btn @click="courseDetails(item)" outlined text>Details</v-btn>
			</template>
		</v-data-table>

		<!--
    ****  SNACKBAR ALERT AFTER EDIT OR ADD COURSE
		-->
		<v-snackbar
			v-model="snackbar.show"
			:color="snackbar.color"
			:timeout="snackbar.timeout"
			multi-line
			bottom
		>
			{{ snackbar.text }}
			<v-btn dark text @click="snackbar.show = false">Close</v-btn>
		</v-snackbar>
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
			type: "Any",
			types: ["Any", "Active", "Inactive", "Suggested"],
			search: "",
			multisort: false,
			editedIndex: -1,
			editedItem: {
				name: "",
				category: "",
				description: "",
				access_details: "",
				viewcounter: 0,
				cost: 0,
				length: 0,
				startdate: "",
				enddate: "",
				active: 1,
				type: "",
				suggested_by: "",
				suggested_date: "",
				approved_by: "",
				approved_date: ""
			},
			defaultItem: {
				name: "",
				category: "",
				description: "",
				access_details: "",
				viewcounter: 0,
				cost: 0,
				length: 0,
				startdate: "",
				enddate: "",
				active: 0,
				type: "inactive",
				suggested_by: "",
				suggested_date: "",
				approved_by: "",
				approved_date: ""
			},
			snackbar: {
				color: "",
				mode: "",
				show: false,
				text: "",
				timeout: 3000,
				x: null,
				y: "top"
			},
			datatableheaders: [
				{
					text: "",
					class: "hide",
					align: "center",
					sortable: false,
					value: "type",
					width: "0%",
					filter: value => {
						if (this.type === "Any") return true;
						if (!this.type) return true;
						return value === this.type.toLowerCase();
					}
				},
				{
					text: "Name",
					align: "left",
					sortable: true,
					value: "name",
					width: "45%"
				},
				{
					text: "",
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
					text: "Views",
					align: "center",
					sortable: true,
					value: "viewcounter"
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
		deleteCourse() {
			axios
				.delete("/delete/c/deleteCourse/" + this.editedItem.id)
				.then(response => {
					this.dialog = false;
					this.fetch();
					this.snackbar.color = "red";
					this.snackbar.text = response.data;
					this.snackbar.show = true;
					setTimeout(() => {
						this.editedItem = Object.assign({}, this.defaultItem);
						this.editedIndex = -1;
					}, 300);
				});
		},
		submit() {
			this.errors = {};
			axios
				.post("/post/c/savecourse", this.editedItem)
				.then(response => {
					console.log(this.editedItem);
					this.dialog = false;
					this.fetch();
					this.snackbar.color = "success";
					this.snackbar.text = response.data;
					this.snackbar.show = true;
					this.close();

					// alert(response.data);
				})
				.catch(error => {
					if (error.response.status === 422) {
						this.errors = error.response.data.errors || {};
					}
				});
		},
		clickCheck(item) {
			alert("you clicked me: " + item);
		},
		filterCategory(item) {
			if (item.category == this.category) {
				this.category = "All";
			} else {
				this.category = item.category;
			}
			return true;
		}
	},
	computed: {
		formTitle() {
			console.log(this.editedIndex);
			return this.editedIndex === -1 ? "New Course" : "Edit Course";
		},
		formDelete() {
			return this.editedIndex === -1 ? false : true;
		}
	}
};
</script>
<style scoped>
.v-data-table tr >>> th.hide {
	width: 1px !important;
	padding: 0 !important;
}
.v-data-table >>> td {
	padding-left: 0rem !important;
}
</style>
