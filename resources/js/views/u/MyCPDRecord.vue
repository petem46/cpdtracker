<template>
	<div class="v-container">
		<h1 class="mb-5">
			<v-icon>fas fa-folder-open</v-icon>&nbsp;&nbsp;My CPD Record
		</h1>
		<div id="mycpdcourses" class="mb-10">
			<v-progress-linear v-if="loading" indeterminate></v-progress-linear>
			<v-data-table
				:headers="datatableheaders"
				:items="mycpd"
				:items-per-page="25"
				:search="search"
				:sort-by="['completed_date', 'start_date']"
				:sort-desc="[true, true]"
				multi-sort
			>
				<template v-slot:top>
					<v-row class="px-3">
						<v-col cols="12" md="6" class="order-md-1 order-last">
							<v-text-field
								v-model="search"
								prepend-icon="fas fa-search fa-sm"
								single-line
								hint="Search courses and reviews"
								persistent-hint
								clearable
							>
								<template v-slot:label>Search</template>
							</v-text-field>
						</v-col>
						<v-col cols="12" md="4" class="order-md-3 order-9">
							<v-select
								prepend-icon="fa-filter fa-sm"
								hint="Type Filter"
								persistent-hint
								v-model="type"
								:items="types"
							></v-select>
						</v-col>
						<v-col cols="12" md="2" class="order-md-last order-first">
							<v-spacer></v-spacer>
							<v-dialog v-model="dialog" :fullscreen="$vuetify.breakpoint.smAndDown" width="50%">
								<template v-slot:activator="{ on }">
									<v-btn color="primary" dark class="d-none d-md-block mb-2 float-right" v-on="on">Add CPD</v-btn>
									<v-btn
										color="primary"
										dark
										class="d-md-none btn-block mb-2 float-left"
										v-on="on"
									>Add Course</v-btn>
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
																label="Course Name"
																hide-details="auto"
																prepend-icon="far fa-calendar-alt"
																:disabled="formDelete"
															></v-text-field>
														</v-col>
														<v-col cols="12" md="6">
															<v-menu
																v-model="start_datepicker"
																:close-on-content-click="false"
																transition="scale-transition"
																:nudge-right="50"
																min-width="290px"
															>
																<template v-slot:activator="{ on }">
																	<v-text-field
																		:value="formatedStartDate"
																		label="Course Start Date"
																		prepend-icon="far fa-calendar-alt"
																		readonly
																		v-on="on"
																		hint="Leave blank if couse not yet started"
																		persistent-hint
																		clearable
                                    @click:clear="clearStartDate"
																	></v-text-field>
																</template>
																<v-date-picker
																	v-model="editedItem.start_date"
																	scrollable
																	@input="start_datepicker = false"
																></v-date-picker>
															</v-menu>
														</v-col>

														<v-col cols="12" md="6">
															<v-menu
																v-model="completed_datepicker"
																:close-on-content-click="false"
																transition="scale-transition"
																:nudge-right="50"
																min-width="290px"
															>
																<template v-slot:activator="{ on }">
																	<v-text-field
																		:value="formatedCompletedDate"
																		label="Course Completed Date"
																		prepend-icon="far fa-calendar-alt"
																		readonly
																		v-on="on"
																		hint="Leave blank if couse not yet completed"
																		persistent-hint
																		clearable
                                    @click:clear="clearCompletedDate"
																	></v-text-field>
																</template>
																<v-date-picker
																	v-model="editedItem.completed_date"
																	scrollable
																	@input="completed_datepicker = false"
																></v-date-picker>
															</v-menu>
														</v-col>
														<v-col cols="12">
															<v-textarea
																id="myreview"
																v-model="editedItem.myreview"
																label="Course Review"
																prepend-icon="fa-pen-alt fa-sm"
                                hint="Delete your review by clearing this textbox"
                                persistent-hint
																outlined
																counter
															></v-textarea>
														</v-col>
														<v-col cols="12">
															<v-switch
																id="myreviewpublic"
																v-model="editedItem.myreviewpublic"
																:label="publicPrivateLabel(editedItem.myreviewpublic)"
															></v-switch>
														</v-col>
														<v-col cols="12">
															<div id="myrating" class="text-center">
																<v-rating
																	id="myrating"
																	v-model="editedItem.myrating"
																	:color="getStarColor(editedItem.myrating)"
																	full-icon="fas fa-star"
																	half-icon="fa-star-half-alt"
																	empty-icon="far fa-star"
																	background-color="grey"
																></v-rating>
															</div>
														</v-col>
													</v-row>
												</v-container>
											</v-card-text>

											<v-card-actions>
												<v-btn
													v-if="formDelete"
                          disabled
													outlined
													color="red darken-1"
													text
													@click="deleteRecord()"
												>Delete</v-btn>
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
				<template v-slot:item.myreview="{ item }">
					<v-chip v-if="publicchip(item)" x-small color="green" class="mr-2">Public</v-chip>
					<v-chip v-if="!publicchip(item) && item.myreview" x-small color="red" class="mr-2">Private</v-chip>
					<div class="review">{{ item.myreview }}</div>
				</template>

				<template v-slot:item.myprogress="{ item }">
					<v-avatar color="blue" v-if="item.myprogress == 1" size="36">
						<v-icon>mdi-alarm</v-icon>
					</v-avatar>
					<v-avatar color="green" v-if="item.myprogress == 2" size="36">
						<v-icon>mdi-check</v-icon>
					</v-avatar>
					<v-avatar color="pink" v-if="item.myprogress == 3" size="36">
						<v-icon>mdi-heart</v-icon>
					</v-avatar>
				</template>

				<template v-slot:item.start_date="{ item }">
					<div
						v-if="item.start_date"
					>{{ item.start_date | dateParse('YYYY.MM.DD')| dateFormat('DD-MM-YYYY') }}</div>
				</template>
				<template v-slot:item.completed_date="{ item }">
					<div
						v-if="item.completed_date"
					>{{ item.completed_date | dateParse('YYYY.MM.DD')| dateFormat('DD-MM-YYYY') }}</div>
				</template>

				<template v-slot:item.myrating="{ item }">
					<v-icon v-if="item.myrating" :color="getStarColor(item.myrating)" class="mr-2">fa-star fa-sm</v-icon>
					{{ item.myrating }}
				</template>
				<template v-slot:item.avgrating="{ item }">
					<v-icon v-if="item.avgrating" :color="getStarColor(item.avgrating)" class="mr-2">fa-star fa-sm</v-icon>
					{{ roundOff(item.avgrating, 1) }}
				</template>

				<template v-slot:item.actions="{ item }">
					<v-menu offset-y bottom left>
						<template v-slot:activator="{ on }">
							<v-btn v-if="!$vuetify.breakpoint.xsOnly" icon v-on="on">
								<v-icon v-if="!$vuetify.breakpoint.xsOnly">mdi-dots-vertical</v-icon>
							</v-btn>
							<v-btn v-if="$vuetify.breakpoint.xsOnly" text outlined v-on="on">Actions</v-btn>
						</template>
						<v-list>
							<v-list-item @click="gotoCourse(item)">
								<v-avatar>
									<v-icon class="mr-2">mdi-folder-search-outline</v-icon>
								</v-avatar>View Course
							</v-list-item>
							<v-list-item @click="editRecord(item)">
								<v-avatar>
									<v-icon color="amber" class="mr-2">fa-edit fa-sm</v-icon>
								</v-avatar>Edit Record
							</v-list-item>
							<v-list-item @click="changestate(item, 2)">
								<v-avatar>
									<v-icon color="green accent-3" class="mr-2">mdi-check</v-icon>
								</v-avatar>Set Completed
							</v-list-item>
							<v-list-item @click="changestate(item, 1)">
								<v-avatar>
									<v-icon color="blue lighten-3" class="mr-2">mdi-alarm</v-icon>
								</v-avatar>Set Started
							</v-list-item>
							<v-list-item @click="changestate(item, 3)">
								<v-avatar>
									<v-icon color="pink" class="mr-2">mdi-heart</v-icon>
								</v-avatar>Set Shortlisted
							</v-list-item>
						</v-list>
					</v-menu>
				</template>
			</v-data-table>
		</div>

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
import VueFilterDateParse from "vue-filter-date-format";
import moment from "moment";
export default {
	data() {
		return {
			loading: true,
			dialog: false,
			start_datepicker: false,
			completed_datepicker: false,
			mycpd: [],
			search: "",
			type: "All",
			types: ["All", "Complete", "Started", "Shortlisted"],
			editedItem: {
				name: "",
				completed_date: "",
				myprogress: "",
				myrating: null,
				myreview: "",
				myreviewpublic: false,
				start_date: ""
			},
			defaultItem: {
				name: "",
				completed_date: "",
				myprogress: "",
				myrating: null,
				myreview: "",
				myreviewpublic: false,
				start_date: ""
			},
			snackbar: {
				color: "",
				mode: "",
				show: false,
				text: "",
				timeout: 3000,
				y: "top"
			},

			datatableheaders: [
				{
					text: "",
					align: "left",
					value: "myprogress",
					width: "40px",
					filter: value => {
						if (this.type === "All") return true;
						if (!this.type) return true;
						if (this.type === "Complete") return value === 2;
						if (this.type === "Started") return value === 1;
						if (this.type === "Shortlisted") return value === 3;
					}
				},
				{
					text: "Course",
					align: "left",
					value: "name"
				},
				{
					text: "Start Date",
					align: "left",
					value: "start_date"
				},
				{
					text: "Completed Date",
					align: "left",
					value: "completed_date"
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
					width: "25%"
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
		changestate(item, state) {
			if (this.myprogress == state) {
				return true;
			} else {
				axios.put("/put/u/addToMyCourses/" + item.id + "/" + state).then(() => {
					this.fetch();
				});
			}
		},
		editReviewHint(item) {
			return "Edit review for " + item.name;
		},
		editRecord(item) {
			this.editedIndex = this.mycpd.indexOf(item);
			this.editedItem = Object.assign({}, item);
			this.dialog = true;
		},
		deleteRecord(item) {
			alert("Delete Function not ready");
		},
		submit() {
			axios
				.post("/post/u/updateMyCPD", this.editedItem)
				.then(response => {
					this.dialog = false;
					this.fetch();
					this.snackbar.color = "success";
					this.snackbar.text = response.data;
					this.snackbar.show = true;
					this.close();
				})
				.catch(error => {
					console.log("ZDFLKGHDLKFJHG");
					console.log(error);
				});
		},
		close() {
			this.dialog = false;
			setTimeout(() => {
				this.editedItem = Object.assign({}, this.defaultItem);
			}, 300);
		},
		getStarColor(value) {
			if (value > 4) {
				return "green";
			}
			if (value > 3) {
				return "amber";
			}
			if (value >= 2) {
				return "orange";
			}
			if (value < 2) {
				return "red";
			}
			if (value < 1) {
				return "black";
			}
    },
    clearCompletedDate() {
      this.editedItem.completed_date = null;
    },
    clearStartDate() {
      this.editedItem.start_date = null;
    },
		publicchip(item) {
			if (item.myreviewpublic == 1) {
				return true;
			} else {
				return false;
			}
		},
		publicPrivateLabel(item) {
			if (item) {
				return "Review can be seen by all";
			} else {
				return "Review is private";
			}
		}
	},
	computed: {
		formTitle() {
			if (this.editedItem.id) {
				return "Edit CPD record for " + this.editedItem.name;
			} else {
				return "Add CPD Record";
			}
		},
		formDelete() {
			if (this.editedItem.id) {
				return true;
			} else {
				return false;
			}
		},
		formatedStartDate() {
			return this.editedItem.start_date
				? moment(this.editedItem.start_date).format("dddd, MMMM Do YYYY")
				: "";
		},
		formatedCompletedDate() {
			return this.editedItem.completed_date
				? moment(this.editedItem.completed_date).format("dddd, MMMM Do YYYY")
				: "";
		}
	}
};
</script>

