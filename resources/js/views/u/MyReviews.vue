<template>
	<div>
		<h1>
			<v-icon>fas fa-folder-open</v-icon>&nbsp;&nbsp;My Reviews
		</h1>
		<v-progress-linear v-if="loading" indeterminate></v-progress-linear>
		<v-data-table
			click:row="editItem"
			:headers="datatableheaders"
			:items="reviews"
			:search="search"
			fixed-header
			:multi-sort="multisort"
			:items-per-page="100"
		>
			<!-- <v-divider class="mx-4" inset vertical></v-divider> -->
			<template v-slot:top>
				<v-row class="px-3">
					<v-col cols="12" md="9" class="order-md-1 order-last">
						<v-text-field
							v-model="search"
							append-icon="fas fa-search fa-sm"
							label="Search"
							single-line
							hide-details
						></v-text-field>
					</v-col>
					<v-col right cols="12" md="3" class="text-right order-first order-md-2">
						<v-btn @click="addReview()" color="blue darken-3">Add Review</v-btn>
					</v-col>
				</v-row>
			</template>
			<template v-slot:item.review="{ item }">
				<span class="review">{{ item.review }}</span>
			</template>
			<template v-slot:item.public="{ item }">
				<v-chip v-if="publicchip(item)" x-small color="green darken-3" class="mr-2">Public</v-chip>
				<v-chip v-if="!publicchip(item)" x-small color="red" class="mr-2">Private</v-chip>
			</template>
			<template v-slot:item.course="{ item }">{{ item.course }}</template>
			<template
				v-slot:item.date="{ item }"
			>{{ item.date | dateParse('YYYY.MM.DD')| dateFormat('DD-MM-YYYY') }}</template>
			<template
				v-slot:item.updated="{ item }"
			>{{ item.updated | dateParse('YYYY.MM.DD')| dateFormat('DD-MM-YYYY') }}</template>
			<template v-slot:item.actions="{ item }">
				<v-avatar>
					<v-icon class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
				</v-avatar>
			</template>
		</v-data-table>

		<v-dialog v-model="dialog" max-width="600px" :fullscreen="$vuetify.breakpoint.xsOnly">
			<v-card>
				<v-card-title class="pb-1">
					<span class="headline">{{ formTitle }}</span>
				</v-card-title>
				<form @submit.prevent="submit">
					<v-card-text class="pb-1">
						<v-container class="pb-1">
							<v-row>
								<v-col cols="12">
									<v-select
										id="course"
										:items="courses"
										v-model="editedItem.course"
										label="Course"
										hint="Select Course"
										persistent-hint
									></v-select>
								</v-col>
								<v-col cols="12">
									<v-textarea id="review" v-model="editedItem.review" label="Review"></v-textarea>
								</v-col>
								<v-col cols="12">
									<v-text-field
										readonly
										disabled
										id="reviewer"
										v-model="editedItem.reviewer"
										label="Reviewer"
										:rules="rules"
										hide-details="auto"
									></v-text-field>
								</v-col>
								<v-col cols="12">
									<v-switch
										id="public"
										v-model="editedItem.public"
										:label="publicPrivateLabel(editedItem.public)"
									></v-switch>
								</v-col>
							</v-row>
						</v-container>
					</v-card-text>
					<v-card-actions>
						<v-btn v-if="formDelete" color="red darken-1" text @click="deleteReview()">Delete</v-btn>
						<v-spacer></v-spacer>
						<v-btn text @click="close">Cancel</v-btn>
						<v-btn type="submit" text>Save</v-btn>
					</v-card-actions>
				</form>
			</v-card>
		</v-dialog>

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
export default {
	data() {
		return {
			loading: true,
			dialog: false,
			reviews: [],
			course: "All",
			courses: [],
			reviewer: "Any",
			reviewers: [],
			search: "",
			multisort: false,
			editedIndex: -1,
			editedItem: {
				id: "",
				review: "",
				course: "",
				courseid: "",
				reviewer: this.getUserName,
				public: ""
			},
			defaultItem: {
				id: "",
				review: "",
				course: "",
				courseid: "",
				reviewer: this.getUserName,
				public: false
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
					align: "center",
					sortable: false,
					value: "public"
				},
				{
					text: "Course",
					align: "left",
					sortable: true,
					value: "course",
					width: "20%"
				},
				{
					text: "Review",
					align: "left",
					sortable: true,
					value: "review",
					width: "30%"
				},
				{
					text: "Date",
					align: "center",
					sortable: true,
					value: "date"
				},
				{
					text: "Updated",
					align: "center",
					sortable: true,
					value: "updated"
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
		this.getCourseNames();
	},
	methods: {
		fetch() {
			axios
				.get("/get/r/getMyReviews")
				.then(({ data }) => {
					this.reviews = data.data.reviews;
				})
				.then(() => {
					this.editedItem.reviewer = this.getUserName;
					this.defaultItem.reviewer = this.getUserName;
					setTimeout(() => {
						this.loading = false;
					}, 1000);
				});
		},
		getCourseNames() {
			axios
				.get("/get/c/all")
				.then(({ data }) => {
					this.courses = data.data.courses.map(courses => courses.name);
				})
				.then(() => {
					this.courses.unshift("All");
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
		reviewDetails(value) {
			// this.$emit("closeappdrawer");
			alert(
				"Router Push: /r/" + this.$store.getters.getUserId + "/" + value.id
			);
			// this.$router.push("/c/details/" + value.name);
		},
		close() {
			this.dialog = false;
			setTimeout(() => {
				this.editedItem = Object.assign({}, this.defaultItem);
				this.editedIndex = -1;
			}, 300);
		},
		editItem(item) {
			this.editedIndex = this.reviews.indexOf(item);
			this.editedItem = Object.assign({}, item);

      if (this.editedItem.public == 1) {
				this.editedItem.public = true;
			} else {
				this.editedItem.public = false;
			}

			this.dialog = true;
		},
		addReview() {
			this.editedItem.reviewer = this.getUserName;
			this.dialog = true;
		},
		deleteReview() {
			axios
				.delete("/delete/r/deleteMyReview/" + this.editedItem.id)
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
			// console.log(this.editedItem);
			axios
				.post("/post/r/savereview", this.editedItem)
				.then(response => {
					this.dialog = false;
					setTimeout(() => {
						this.editedItem = Object.assign({}, this.defaultItem);
						this.editedIndex = -1;
					}, 300);

					this.fetch();
					this.snackbar.color = "success";
					this.snackbar.text = response.data;
					this.snackbar.show = true;
				})
				.catch(error => {
					if (error.response.status === 422) {
						this.errors = error.response.data.errors || {};
					}
				});
		},
		// save() {
		// 	// console.log(this.editedItem)
		// 	this.coursedata.name = this.editedItem.name;
		// 	this.coursedata.category = this.editedItem.category;
		// 	this.coursedata.access_details = this.editedItem.access_details;
		// 	this.coursedata.cost = this.editedItem.cost;
		// 	this.coursedata.active = this.editedItem.active;
		// 	console.log(this.coursedata);

		// 	axios.put("/put/r/savereview/" + this.coursedata).then(() => {
		// 		this.fetch();
		// 	});
		// },
		clickCheck(item) {
			alert("you clicked me: " + item);
		},
		filterCourse(item) {
			if (item.course == this.course) {
				this.course = "All";
			} else {
				this.course = item.course;
			}
			return true;
		},
		filterReviewer(item) {
			if (item.reviewer == this.reviewer) {
				this.reviewer = "Any";
			} else {
				this.reviewer = item.reviewer;
			}
			return true;
		},
		publicchip(item) {
			if (item.public == 1) {
				return true;
			} else {
				return false;
			}
		},
		publicPrivateLabel(item) {
      if(item) {return "Public"} else {return "Private"}
    }
	},
	computed: {
		formTitle() {
			return this.editedIndex === -1 ? "Add Review" : "Manage Review";
		},
		formDelete() {
			return this.editedIndex === -1 ? false : true;
		},
		getUserName() {
			return this.$store.getters.getName;
		}
	}
};
</script>
<style scoped>
.v-data-table >>> td {
	padding-top: 0.5rem !important;
	padding-bottom: 1.5rem !important;
	vertical-align: top !important;
	white-space: pre-wrap;
}
.v-data-table >>> .v-data-table__mobile-row__header {
	padding-right: 2.5rem;
	color: grey;
}
.v-data-table >>> .v-data-table__mobile-row__cell {
	text-align: left !important;
	white-space: normal;
}
.v-data-table >>> span.review {
	text-align: left !important;
	/* padding-left: 3rem !important; */
}
</style>
