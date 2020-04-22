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
				<v-card-text>
					<v-container>
						<v-row>
							<v-col cols="12">
								<v-text-field
									id="name"
									v-model="suggested.name"
									label="Course name"
									:rules="rules"
									hide-details="auto"
								></v-text-field>
							</v-col>
							<v-col cols="12">
								<v-select
									id="category"
									:items="categories"
									v-model="suggested.category"
									label="Category"
									:rules="rules"
								></v-select>
							</v-col>
							<v-col cols="12">
								<v-textarea
									id="description"
									v-model="suggested.description"
									label="Description"
									:rules="rules"
								></v-textarea>
							</v-col>
							<v-col cols="12">
								<v-text-field
									id="access_details"
									v-model="suggested.access_details"
									label="Access Details"
									:rules="rules"
									hint="URL or Link to course website"
									persistent-hint
								></v-text-field>
							</v-col>
							<v-col cols="6">
								<v-text-field
									id="cost"
									v-model="suggested.cost"
									label="Cost"
									hint="If no cost, enter 'Free'"
									persistent-hint
								></v-text-field>
							</v-col>
							<v-col cols="6" class="d-none">
								<v-text-field
									type="number"
									id="viewcounter"
									v-model="suggested.viewcounter"
									label="View Counter"
								></v-text-field>
							</v-col>
							<v-col cols="12" class="d-none">
								<v-switch id="active" v-model="suggested.active" label="Active"></v-switch>
							</v-col>
						</v-row>
					</v-container>
				</v-card-text>

				<v-card-actions d-none>
					<v-btn text color="orange accent-3" @click="reset">Reset</v-btn>
					<v-spacer></v-spacer>
					<!-- <v-btn text @click="close">Cancel</v-btn> -->
					<v-btn type="submit" color="green accent-3" text>Submit</v-btn>
				</v-card-actions>
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
			suggested: {
				name: "",
				category: "",
				description: "",
				access_details: "",
				viewcounter: 0,
				cost: 0,
				length: 0,
				active: 0
			},
			default: {
				name: "",
				category: "",
				description: "",
				access_details: "",
				viewcounter: 0,
				cost: 0,
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
			rules: [
				value => !!value || "Required.",
				value => (value && value.length >= 3) || "Min 3 characters"
			]
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
			if(this.$refs.form.validate()) {
        axios.post("/post/c/savecourse", this.suggested).then(response => {
            console.log(this.suggested);
			    this.snackbar.color = "success";
					this.snackbar.text = "Course Suggestion Submitted";
					this.snackbar.show = true;
			  this.$emit('suggestedsnackbarupdate', this.snackbar);
			  this.reset();
			  this.close();
			});
      };
		},
		reset() {
			this.$refs.form.reset();
			this.$refs.form.resetValidation();
		}
	},
	computed: {}
};
</script>
