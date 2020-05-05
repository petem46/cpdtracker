<template>
	<div>
		<h1>
			<v-icon>fas fa-tags</v-icon>&nbsp;&nbsp;Manage Category Tags
		</h1>
		<v-progress-linear v-if="loading" indeterminate></v-progress-linear>
		<v-data-table
			:headers="datatableheaders"
			:items="categories"
			:search="search"
			fixed-header
			:items-per-page="20"
		>
			<template v-slot:top>
				<v-row class="px-3">
					<v-col cols="12" md="6" class="order-md-1 order-last">
						<v-text-field
							v-model="search"
							prepend-icon="fas fa-search fa-sm"
							single-line
							hint="Search by course name or category"
							persistent-hint
							clearable
						>
							<template v-slot:label>Search</template>
						</v-text-field>
					</v-col>
					<v-col cols="12" md="6" class="order-md-last order-first">
						<v-spacer></v-spacer>
						<v-dialog v-model="dialog" max-width="800px" :fullscreen="$vuetify.breakpoint.smAndDown">
							<!-- <v-dialog v-model="dialog" fullscreen> -->
							<template v-slot:activator="{ on }">
								<v-btn
									color="primary"
									dark
									class="d-none d-md-block mb-2 float-right"
									v-on="on"
								>Add Category</v-btn>
								<v-btn
									color="primary"
									dark
									class="d-md-none btn-block mb-2 float-left"
									v-on="on"
								>Add Category</v-btn>
							</template>
							<v-card>
								<v-toolbar color="primary">
									<v-btn icon @click="close">
										<v-icon>mdi-close</v-icon>
									</v-btn>
									<v-toolbar-title>Add New Category Tag</v-toolbar-title>
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
															v-model="category.name"
															label="Category name"
															:rules="[max55chars]"
															hide-details="auto"
														></v-text-field>
													</v-col>
												</v-row>
											</v-container>
										</v-card-text>
										<v-card-actions>
											<v-spacer></v-spacer>
											<v-btn text @click="close">Cancel</v-btn>
											<v-btn type="submit" outlined color="green darken-3" text>Save</v-btn>
										</v-card-actions>
									</form>
								</v-container>
							</v-card>
						</v-dialog>
					</v-col>
				</v-row>
			</template>

			<template v-slot:item.name="props">
				<v-edit-dialog
					:return-value.sync="props.item.name"
					@save="save(props.item)"
					@cancel="cancel"
					@open="open"
					@close="close"
				>
					<v-avatar>
						<v-icon color="orange accent-3" class="px-0">fa-tag fa-sm</v-icon>
					</v-avatar>
					{{ props.item.name }}
					<template v-slot:input>
						<v-text-field
							v-model="props.item.name"
							:rules="[max55chars]"
							label="Edit"
							single-line
							counter
						></v-text-field>
					</template>
				</v-edit-dialog>
			</template>
			<template v-slot:item.actions="{ item }">
				<v-avatar>
					<v-icon @click="deleteCategory(item)" color="red" class="mr-2">fa-trash fa-sm</v-icon>
				</v-avatar>
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
			category: {
				name: ""
			},
			editname: {
				name: ""
			},
			categories: [],
			snackbar: {
				color: "",
				mode: "",
				show: false,
				text: "",
				timeout: 3000,
				x: null,
				y: "top"
			},
			max55chars: v => v.length <= 55 || "Input too long!",
			search: "",
			datatableheaders: [
				{
					text: "Name",
					align: "left",
					sortable: true,
					value: "name"
				},
				{
					text: "Courses",
					align: "center",
					sortable: true,
					value: "courses.length"
				},
				{
					text: "",
					align: "right",
					sortable: false,
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
				.get("/get/cc")
				.then(({ data }) => {
					this.categories = data.data.category_courses;
				})
				.then(() => {
					setTimeout(() => {
						this.loading = false;
					}, 250);
				});
		},
		save(item) {
			this.category = item;
			axios.post("/post/cc/savecategory", this.category).then(response => {
				this.dialog = false;
				this.snackbar.color = "success";
				this.snackbar.text = response.data;
				this.snackbar.show = true;
				this.close();
				this.fetch();
			});
		},
		submit() {
			axios.post("/post/cc/savecategory", this.category).then(response => {
				this.dialog = false;
				this.fetch();
				this.close();
				setTimeout(() => {
					this.snackbar.color = "success";
					this.snackbar.text = response.data;
					this.snackbar.show = true;
				}, 1000);
			});
		},
		cancel() {
			setTimeout(() => {
				this.category.name = "";
			}, 300);
			this.snackbar.show = true;
			this.snackbar.color = "error";
			this.snackbar.text = "Canceled";
			this.dialog = false;
		},
		open() {
			this.snackbar.show = true;
			this.snackbar.color = "info";
			this.snackbar.text = "Edit Category Name";
		},
		close() {
			setTimeout(() => {
				this.category.name = "";
			}, 300);
			console.log("Dialog closed");
			this.dialog = false;
		},
		deleteCategory(item) {
			axios.delete("/delete/cc/deleteCategory/" + item.id).then(response => {
				this.dialog = false;
				this.fetch();
				setTimeout(() => {
					this.snackbar.color = "red";
					this.snackbar.text = response.data;
					this.snackbar.show = true;
					this.editedItem = Object.assign({}, this.defaultItem);
					this.editedIndex = -1;
				}, 500);
			});
		},

		gotoCourses() {}
	}
};
</script>
