<template>
	<v-app id="cpdtrackerapp">
		<v-navigation-drawer
			v-model="primaryDrawer.model"
			:clipped="primaryDrawer.clipped"
			:floating="primaryDrawer.floating"
			:mini-variant="primaryDrawer.mini"
			app
			dark
			overflow
		>
			<v-list shaped>
				<v-subheader class="font-weight-light">MY CPD</v-subheader>
				<v-list-item-group>
					<v-list-item>
						<v-list-item-icon>
							<v-icon>mdi-account-details</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>
								<router-link exact exact-active-class="teal--yellow" to="/u/dashboard">My Profile</router-link>
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item>
						<v-list-item-icon>
							<v-icon>mdi-book-plus-multiple</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>
								<router-link exact exact-active-class="teal--yellow" to="/u/dashboard">Add A Course</router-link>
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
				<v-subheader>COURSES</v-subheader>
				<v-list-item-group>
					<v-list-item>
						<v-list-item-icon>
							<v-icon>mdi-book-search-outline</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>
								<router-link exact exact-active-class="teal--yellow" :to="{ name: 'courselist' }">Find A Course</router-link>
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item>
						<v-list-item-icon>
							<v-icon>mdi-folder-account-outline</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>
								<router-link exact exact-active-class="teal--yellow" to="/u/mycourses">My Courses</router-link>
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item>
						<v-list-item-icon>
							<v-icon color="light-green accent-3">mdi-playlist-check</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>
								<router-link exact exact-active-class="teal--yellow" to="/u/completed">Completed</router-link>
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item>
						<v-list-item-icon>
							<v-icon color="amber">mdi-playlist-play</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>
								<router-link exact exact-active-class="teal--yellow" to="/u/inprogress">In Progress</router-link>
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item>
						<v-list-item-icon>
							<v-icon color="yellow accent-2">mdi-playlist-star</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>
								<router-link exact exact-active-class="teal--yellow" to="/u/tostart">To Start</router-link>
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
				<v-subheader>CATEGORIES</v-subheader>
				<v-list-item-group>
					<v-list-item>
						<v-list-item-icon>
							<v-icon color="green lighten-2">mdi-label</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>
								<router-link exact exact-active-class="teal--yellow" to="/c">Pastoral Wellbeing</router-link>
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item>
						<v-list-item-icon>
							<v-icon color="orange darken-2">mdi-label</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>
								<router-link exact exact-active-class="teal--yellow" to="/c">SEN</router-link>
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item>
						<v-list-item-icon>
							<v-icon color="red darken-1">mdi-label</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>
								<router-link exact exact-active-class="teal--yellow" to="/u/completed">Ed Tech</router-link>
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item>
						<v-list-item-icon>
							<v-icon color="purple lighten-1">mdi-label</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>
								<router-link exact exact-active-class="teal--yellow" to="/u/inprogress">Leadership</router-link>
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item>
						<v-list-item-icon>
							<v-icon color="blue lighten-3">mdi-label</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>
								<router-link exact exact-active-class="teal--yellow" to="/u/tostart">STEM</router-link>
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar :clipped-left="primaryDrawer.clipped" app dark>
			<v-app-bar-nav-icon @click.stop="primaryDrawer.model = !primaryDrawer.model" />
			<v-toolbar-title>FCAT CPD Tracker</v-toolbar-title>
			<v-spacer />
			<v-icon @click="logout">mdi-logout</v-icon>
		</v-app-bar>
		<v-content>
			<v-container fluid>
				<router-view></router-view>
			</v-container>
		</v-content>
	</v-app>
</template>
<script>
export default {
	data: () => ({
		csrf: document
			.querySelector('meta[name="csrf-token"]')
      .getAttribute("content"),
    userid: document
			.querySelector('meta[name="user-id"]')
      .getAttribute("content"),
		primaryDrawer: {
			model: null,
			clipped: false,
			floating: false,
			mini: false
		}
	}),
	mounted() {
    this.$store.commit("setUserId", this.userid);
    console.log("Store userid = " + this.$store.getters.getUserId);
	},
	methods: {
		logout() {
			axios
				.post("/logout")
				.then(response => {
					if (response.status === 302 || 401) {
						// this.$router.push('/login')
						window.location.href = "/login";
					} else {
						// throw error and go to catch block
					}
				})
				.catch(error => {});
		}
	},
	computed: {
	}
};
</script>
