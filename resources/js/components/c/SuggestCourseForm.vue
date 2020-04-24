<template>
	<v-dialog v-model="dialog" persistent max-width="50%" fullscreen>
		<v-card>
			<v-toolbar color="primary">
				<v-btn icon @click="close">
					<v-icon>mdi-close</v-icon>
				</v-btn>
				<v-toolbar-title>Suggest A Course</v-toolbar-title>
				<v-spacer></v-spacer>
				<!-- <v-toolbar-items>
					<v-btn text @click="dialog = false">Save</v-btn>
				</v-toolbar-items>-->
			</v-toolbar>
			<v-form @submit.prevent="submit" ref="form" lazy-validation>
				<v-container>
					<v-card-text>
						<v-row>
							<v-col cols="12">
								<v-text-field
									id="name"
									v-model="suggested.name"
									label="Course name"
									prepend-icon="far fa-bookmark"
									:rules="nameRules"
									hide-details="auto"
								></v-text-field>
							</v-col>
							<v-col cols="12">
								<v-select
									id="category"
									:items="categories"
									v-model="suggested.category"
									label="Category"
									prepend-icon="fa-tags"
									:rules="categoryRules"
								></v-select>
							</v-col>
							<v-col cols="12">
								<v-textarea
									id="description"
									v-model="suggested.description"
									label="Description"
									prepend-icon="fa-info-circle"
									:rules="descriptionRules"
									hint="Brief oultine of course details"
								></v-textarea>
							</v-col>
							<v-col cols="12">
								<v-text-field
									id="access_details"
									v-model="suggested.access_details"
									label="Access Details"
									prepend-icon="fa-external-link-alt"
									:rules="accessRules"
									hint="How to access the course materials and/or link to course website"
								></v-text-field>
							</v-col>
							<v-col cols="6" lg="12">
								<v-menu
									v-model="startdatepicker"
									:close-on-content-click="false"
									transition="scale-transition"
									offset-y
									:nudge-right="50"
									min-width="290px"
								>
									<template v-slot:activator="{ on }">
										<v-text-field
											v-model="suggested.startdate"
											label="Course Start Date"
											prepend-icon="far fa-calendar-check"
											readonly
											v-on="on"
											hint="Leave blank if date not known"
											persistent-hint
											clearable
										></v-text-field>
									</template>
									<v-date-picker v-model="suggested.startdate" scrollable @input="startdatepicker = false"></v-date-picker>
								</v-menu>
							</v-col>
							<v-col cols="6" lg="12">
								<v-menu
									v-model="enddatepicker"
									:close-on-content-click="false"
									transition="scale-transition"
									offset-y
									:nudge-right="50"
									min-width="290px"
								>
									<template v-slot:activator="{ on }">
										<v-text-field
											v-model="suggested.enddate"
											label="Course End Date"
											prepend-icon="far fa-calendar-alt"
											readonly
											v-on="on"
											hint="Leave blank if date not known"
											persistent-hint
											clearable
										></v-text-field>
									</template>
									<v-date-picker v-model="suggested.enddate" scrollable @input="enddatepicker = false"></v-date-picker>
								</v-menu>
							</v-col>
							<v-col cols="12" md="12">
								<v-text-field
									id="cost"
									v-model="suggested.cost"
									label="Cost of Course"
									prepend-icon="fa-pound-sign"
									hint="Details of costs invovled, if no costs please enter 'Free'"
                  :rules="costRules"
								></v-text-field>
							</v-col>
							<v-col cols="12" class="d-none">
								<v-switch id="active" v-model="suggested.active" label="Active"></v-switch>
							</v-col>
						</v-row>
					</v-card-text>
					<v-card-actions>
						<v-btn outlined text color="orange accent-3" class="ml-10" @click="reset">
							<v-icon class="mr-3">far fa-times-circle</v-icon>Reset
						</v-btn>
						<v-spacer></v-spacer>
						<!-- <v-btn text @click="close">Cancel</v-btn> -->
						<v-btn type="submit" color="green accent-3" class text>Submit</v-btn>
					</v-card-actions>
				</v-container>
			</v-form>
		</v-card>
	</v-dialog>
</template>
<script>
export default {
	props: ["dialog"],
	data() {
		return {
			// dialog: true,
			categories: [],
			startdatepicker: false,
			enddatepicker: false,
			suggested: {
				name: "",
				category: "",
				description: "",
				access_details: "",
				startdate: "",
				enddate: "",
				viewcounter: 0,
        type: "suggested",
				cost: "",
				length: 0,
				active: 0
			},
			default: {
				name: "",
				category: "",
				description: "",
				access_details: "",
				startdate: "",
				enddate: "",
				viewcounter: 0,
        type: "suggested",
				cost: "",
				length: 0,
				active: 0
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
			nameRules: [
				value => !!value || "A course NAME is required.",
				value => (value && value.length >= 3) || "Min 2 characters"
			],
			categoryRules: [
				value => !!value || "Please select a CATEGORY.",
				value => (value && value.length >= 3) || "Min 3 characters"
			],
			descriptionRules: [
				value => !!value || "Please provide a DESCRIPTION of this course.",
				value => (value && value.length >= 3) || "Min 3 characters"
			],
			accessRules: [
				value => !!value || "Please provide a ACCESS DETAILS for this course.",
				value => (value && value.length >= 3) || "Min 3 characters"
      ],
			costRules: [
				value => !!value || "Details of COSTs invovled, if no costs please enter 'Free'.",
				value => (value && value.length >= 1) || "Min 1 characters"
      ],

		};
	},
	mounted() {
		this.getCatFilters();
	},
	methods: {
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
		close() {
			this.$emit("close");
			// if (this.$router.currentRoute.name == managecourses) {
			//   this.$router.push('/a/managecourses')
			// }
		},
		submit() {
			this.$refs.form.validate();
			if (this.$refs.form.validate()) {
				axios.post("/post/c/savecourse", this.suggested).then(response => {
					console.log(this.suggested);
					this.snackbar.color = "success";
					this.snackbar.text = "Course Suggestion Submitted";
					this.snackbar.show = true;
					this.$emit("suggestedsnackbarupdate", this.snackbar);
					this.reset();
					this.close();
				});
			}
		},
		reset() {
			this.$refs.form.reset();
			this.$refs.form.resetValidation();
		}
	},
	computed: {}
};
</script>
