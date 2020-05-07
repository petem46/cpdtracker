<template>
	<v-dialog max-width="50%">
		<template v-slot:activator="{ on }">
			<v-btn color="primary" dark class="mb-2 float-right" v-on="on">Add Course</v-btn>
		</template>
		<v-card>
			<v-card-title>
				<span class="headline">{{ formTitle }}</span>
			</v-card-title>
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
								<v-select id="category" :items="categories" v-model="editedItem.category" label="Category"></v-select>
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
							<v-col cols="6" class="d-none">
								<v-text-field
									type="number"
									id="viewcounter"
									v-model="editedItem.viewcounter"
									label="View Counter"
								></v-text-field>
							</v-col>
							<v-col cols="12">
								<v-switch id="active" v-model="editedItem.active" label="Active"></v-switch>
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
</template>
<script>
export default {
	props: ["dialog", "editedIndex", "editedItem", "defaultItem", "categories"],
	data() {
		return {
			rules: [
				value => !!value || "Required.",
				value => (value && value.length >= 3) || "Min 3 characters"
			]
		};
	},
	methods: {
		close() {
			this.$emit("close");
			console.log("CLOSE!");
		},
		submit() {
			this.$emit("submit", this.editedIndex);
		}
	},
	computed: {
		formTitle() {
			console.log(this.editedIndex);
			return this.editedIndex === -1 ? "New Course" : "Edit Course";
		}
	}
};
</script>
