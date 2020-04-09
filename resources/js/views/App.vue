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
			dense
		>
			<v-list shaped dense flat>
				<!-- <v-subheader class="font-weight-light">MY CPD</v-subheader>
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
				</v-list-item-group>-->
				<v-subheader>COURSES</v-subheader>
				<v-list-item-group>
					<v-list-item>
						<v-list-item-icon>
							<v-icon>mdi-book-search-outline</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>
								<router-link
									exact
									exact-active-class="teal--yellow"
									:to="{ name: 'courselist' }"
								>Find A Course</router-link>
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
								<router-link exact exact-active-class="teal--yellow" to="/c/all">All</router-link>
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item
						v-for="category in categories.category_courses"
						v-bind="categories"
						:key="category.id"
					>
						<v-list-item-icon>
							<!-- <v-icon :color="getlabelcolour(category.id)">mdi-label</v-icon> -->
							<v-icon color="white">mdi-label</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>
								<router-link
									exact
									exact-active-class="teal--yellow"
									:to="{ path: '/c/' + category.name, params:{ name: category.name}}"
								>{{category.name}}</router-link>
							</v-list-item-title>
							<!-- <v-list-item-title @click="filterCourses(category)">{{category.name}}</v-list-item-title> -->
						</v-list-item-content>
					</v-list-item>
					<!-- <v-list-item>
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
					</v-list-item>-->
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar :clipped-left="primaryDrawer.clipped" app dark>
			<v-app-bar-nav-icon @click.stop="primaryDrawer.model = !primaryDrawer.model" />
			<v-toolbar-title>FCAT CPD Tracker</v-toolbar-title>
			<v-spacer />
			<v-menu
        bottom
				left
				close-on-content-click
				offset-y
			>
				<template v-slot:activator="{ on }">
					<v-btn v-on="on" tile text>
						<v-icon left dark>mdi-apps</v-icon>
            User Menu
					</v-btn>
				</template>
				<v-card>
					<v-card-text>
						<v-list>
              <v-list-item @click="gotoMyProfile" class="ml-0 pl-0">
                <v-list-item-title>
                  <v-avatar>
                    <v-icon dark>mdi-account</v-icon>
                  </v-avatar>
                  My Profile
                </v-list-item-title>
              </v-list-item>
              <v-list-item @click="gotoMyCourses" class="ml-0 pl-0">
                <v-list-item-title>
                  <v-avatar>
                    <v-icon dark>mdi-folder-account-outline</v-icon>
                  </v-avatar>
                  My Courses
                </v-list-item-title>
              </v-list-item>
              <v-list-item @click="gotoMyReviews" class="ml-0 pl-0">
                <v-list-item-title>
                  <v-avatar>
                    <v-icon dark>mdi-lan</v-icon>
                  </v-avatar>
                  My Reviews
                </v-list-item-title>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item @click="logout" class="ml-0 pl-0">
                <v-list-item-title class="red--text">
                  <v-avatar>
                    <v-icon dark color="red">mdi-logout-variant</v-icon>
                  </v-avatar>
                  Log Out
                </v-list-item-title>
              </v-list-item>
            </v-list>
					</v-card-text>
				</v-card>
			</v-menu>
			<!-- <v-icon @click="logout">mdi-logout</v-icon> -->
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
		},
		categories: [],
		labelcolors: [
			"green lighten-2",
			"orange darken-2",
			"red darken-2",
			"purple lighten-1",
			"blue lighten-3",
			"teal darken-2",
			"pink darken-1",
			"indigo darken-4",
			"deep-purple darken-1",
			"deep-purple lighten-3",
			"deep-purple accent-4",
			"light-blue lighten-1",
			"light-green accent-3",
			"lime accent-2",
			"yellow accent-2",
			"yellow accent-4"
		]
	}),
	mounted() {
		this.$store.commit("setUserId", this.userid);
		console.log("Store userid = " + this.$store.getters.getUserId);
		this.getCategories();
	},
	methods: {
		getCategories() {
			axios.get("/get/cat/list").then(({ data }) => {
				this.categories = data.data;
			});
		},
		randomItem(items) {
			return items[Math.floor(Math.random() * items.length)];
		},
		getlabelcolour(id) {
			return this.randomItem(this.labelcolors);
		},
    gotoMyCourses() {
      this.$router.push('/u/mycourses');
      },
    gotoMyProfile() {
      this.$router.push('/u/myprofile');
    },
    gotoMyReviews() {
      this.$router.push('/u/myreviews');
    },
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
	computed: {}
};
</script>
