<template>
	<div>
		<h1>
			<v-icon>fas fa-folder-open</v-icon>&nbsp;&nbsp;Manage Reviews
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
					<v-col cols="12" md="4">
						<v-text-field
							v-model="search"
							append-icon="fas fa-search fa-sm"
							label="Search"
							single-line
							hide-details
						></v-text-field>
					</v-col>
					<v-col cols="12" md="4">
						<v-select hint="CPD Filter" persistent-hint v-model="course" :items="courses"></v-select>
					</v-col>
					<v-col cols="12" md="4">
						<v-select hint="Reviewer Filter" persistent-hint v-model="reviewer" :items="reviewers"></v-select>
					</v-col>
				</v-row>
			</template>
			<template v-slot:item.review="{ item }">
				<span class="review">{{ item.review }}</span>
			</template>
			<template v-slot:item.course="{ item }">
				<v-chip
					v-if="!$vuetify.breakpoint.xsOnly"
					outlined
					small
					@click="filterCPD(item)"
				>{{ item.course }}</v-chip>
				<span v-if="$vuetify.breakpoint.xsOnly" @click="filterCPD(item)">{{ item.course }}</span>
			</template>
			<template v-slot:item.reviewer="{ item }">
				<v-chip outlined small @click="filterReviewer(item)">{{ item.reviewer }}</v-chip>
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
						<v-list-item @click="editItem(item)">
							<v-avatar>
								<v-icon class="mr-2">mdi-pencil</v-icon>
							</v-avatar>Edit Review
						</v-list-item>
						<v-list-item @click="gotoCPD(item)">
							<v-avatar>
								<v-icon class="mr-2">mdi-folder-search-outline</v-icon>
							</v-avatar>View CPD
						</v-list-item>
						<v-list-item disabled>
							<v-avatar>
								<v-icon class="mr-2" @click="editItem(item)">mdi-account-search-outline</v-icon>
							</v-avatar>View User
						</v-list-item>
					</v-list>
				</v-menu>
			</template>
			<template
				v-slot:item.date="{ item }"
			>{{ item.date | dateParse('YYYY.MM.DD')| dateFormat('DD-MM-YYYY') }}</template>
			<template v-slot:item.public="{ item }">
				<v-chip v-if="publicchip(item)" x-small color="green darken-3" class="mr-2">Public</v-chip>
				<v-chip v-if="!publicchip(item)" x-small color="red" class="mr-2">Private</v-chip>
			</template>
			<template v-slot:item.avgrating="{ item }">
				<!-- <v-rating :value="roundOff(item.avgrating, 1)" half-increments color="amber" size="1rem"></v-rating> -->
				<v-icon v-if="item.avgrating" :color="getStarColor(item.avgrating)" class="mr-1">mdi-star</v-icon>
				<span v-if="item.avgrating">{{roundOff(item.avgrating, 1)}}</span>
			</template>
		</v-data-table>

		<v-dialog :fullscreen="$vuetify.breakpoint.xsOnly" v-model="dialog" max-width="50%">
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
										readonly
										disabled
										id="course"
										:items="courses"
										v-model="editedItem.course"
										label="CPD"
										hint="Non-editable"
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
										hint="Non-editable"
										persistent-hint
									></v-text-field>
								</v-col>
								<v-col cols="12">
									<v-switch id="public" v-model="editedItem.public" :label="publicPrivateLabel(editedItem.public)"></v-switch>
								</v-col>
							</v-row>
						</v-container>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
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
				review: "",
				course: "",
				reviewer: "",
				public: 1
			},
			defaultItem: {
				review: "",
				course: "",
				reviewer: "",
				public: 1
			},
			snackbar: {
				color: "",
				mode: "",
				show: false,
				text: "",
				timeout: 2000,
				x: null,
				y: "top"
			},
			datatableheaders: [
				// {
				// 	text: "",
				// 	align: "center",
				// 	sortable: false,
				// 	value: "mobileactions"
				// },
				{
					text: "Visibility",
					align: "center",
					sortable: false,
					value: "public"
				},
				{
					text: "Review",
					align: "left",
					sortable: true,
					value: "review",
					width: "30%"
				},
				{
					text: "CPD",
					align: "left",
					sortable: true,
					value: "course",
					width: "20%",
					filter: value => {
						if (this.course === "All") return true;
						if (!this.course) return true;
						return value === this.course;
					}
				},
				{
					text: "Reviewer",
					align: "left",
					sortable: true,
					value: "reviewer",
					width: "10%",
					filter: value => {
						if (this.reviewer === "Any") return true;
						if (!this.reviewer) return true;
						return value === this.reviewer;
					}
				},
				{
					text: "Date",
					align: "center",
					sortable: true,
					value: "date"
				},
				// {
				// 	text: "Updated",
				// 	align: "center",
				// 	sortable: true,
				// 	value: "updated"
				// },
				{
					text: "",
					align: "right",
					sortable: false,
					value: "actions"
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
		this.getCPDNames();
		this.getReviewerNames();
	},
	methods: {
		fetch() {
			axios
				.get("/get/r/all")
				.then(({ data }) => {
					this.reviews = data.data.reviews;
				})
				.then(() => {
					setTimeout(() => {
						this.loading = false;
					}, 1000);
				});
		},
		getCPDNames() {
			axios
				.get("/get/cpd/all")
				.then(({ data }) => {
					this.courses = data.data.courses.map(courses => courses.name);
				})
				.then(() => {
					this.courses.unshift("All");
				});
		},
		getReviewerNames() {
			axios
				.get("/get/r/reviewers")
				.then(({ data }) => {
					this.reviewers = data.reviewers.map(reviewers => reviewers.name);
				})
				.then(() => {
					this.reviewers.unshift("Any");
				});
		},
		checkrow(value) {
			// this.$emit("closeappdrawer");
			this.$router.push("/cpd/details/" + value.name);
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
			// this.$router.push("/cpd/details/" + value.name);
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
		gotoCPD(item) {
			this.editedIndex = this.reviews.indexOf(item);
			this.editedItem = Object.assign({}, item);
			console.log(item);
			// this.dialog = true;
			this.$router.push("/cpd/details/" + this.editedItem.id);
		},
		deleteItem(item) {},
		submit() {
			this.errors = {};
			axios
				.post("/post/r/savereview", this.editedItem)
				.then(response => {
					this.dialog = false;
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
		filterCPD(item) {
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
			console.log(this.editedIndex);
			return this.editedIndex === -1 ? "Add Review" : "Manage Review";
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
