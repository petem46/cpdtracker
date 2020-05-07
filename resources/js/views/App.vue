<template>
	<v-app id="fcatcpdapp">
		<v-navigation-drawer
			v-model="primaryDrawer.model"
			:clipped="$vuetify.breakpoint.lgAndUp"
			:floating="primaryDrawer.floating"
			:mini-variant="primaryDrawer.mini"
			app
			dark
		>
			<v-list shaped dense flat>
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
								<router-link exact exact-active-class="teal--yellow" to="/u/mycpdrecord">My CPD Record</router-link>
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item :disabled="this.checkroute()" @click="dialog = true">
						<v-list-item-icon>
							<v-icon color="light-green accent-3">mdi-playlist-plus</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>Suggest A Course</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item class="d-none">
						<v-list-item-icon>
							<v-icon color="amber">mdi-playlist-play</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>
								<router-link exact exact-active-class="teal--yellow" to="/u/inprogress">In Progress</router-link>
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item class="d-none">
						<v-list-item-icon>
							<v-icon color="yellow accent-2">mdi-playlist-star</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>
								<router-link exact exact-active-class="teal--yellow" to="/u/shortlist">Shortlist</router-link>
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
				<v-subheader>GOV.UK - National Careers Service</v-subheader>
				<v-list-item-group>
					<v-list-item>
						<v-list-item-icon>
							<v-icon color="blue darken-3">fas fa-external-link-alt fa-sm</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>
								<a
									href="https://nationalcareers.service.gov.uk/find-a-course/the-skills-toolkit"
									target="_blank"
								>The Skills Toolkit</a>
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item>
						<v-list-item-icon>
							<v-icon color="blue darken-3">fas fa-external-link-alt fa-sm</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>
								<a
									href="https://nationalcareers.service.gov.uk/find-a-course/where-to-find-free-online-learning"
									target="_blank"
								>Free Online Learning</a>
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item>
						<v-list-item-icon>
							<v-icon color="blue darken-3">fas fa-external-link-alt fa-sm</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>
								<a
									href="https://nationalcareers.service.gov.uk/find-a-course/search"
									target="_blank"
								>ESFA Find a Course</a>
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
				<!-- MONTGOMERY ACADEMY OFFERS -->
				<v-subheader
					v-if="this.school === 'Montgomery' || this.school === 'FCAT'"
				>Montgomery Academy Only</v-subheader>
				<v-list-item-group v-if="this.school === 'Montgomery' || this.school === 'FCAT'">
					<v-list-item>
						<v-list-item-icon>
							<v-icon color="blue darken-3">fas fa-external-link-alt fa-sm</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>
								<a href="https://thenationalcollege.co.uk/" target="_blank">The National College</a>
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
				<v-subheader>External Offers</v-subheader>
				<v-list-item-group>
					<v-list-item>
						<v-list-item-icon>
							<v-icon color="blue darken-3">fas fa-external-link-alt fa-sm</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>
								<a href="https://www.open.edu/openlearn/free-courses/full-catalogue" target="_blank">OpenLearn</a>
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
				<v-subheader>External Offers</v-subheader>
				<v-list-item-group>
					<v-list-item>
						<v-list-item-icon>
							<v-icon color="blue darken-3">fas fa-external-link-alt fa-sm</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>
								<a href="#" target="_blank">Randstad</a>
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item>
						<v-list-item-icon>
							<v-icon color="blue darken-3">fas fa-external-link-alt fa-sm</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>
								<a href="#" target="_blank">Hays</a>
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
				<v-subheader>CATEGORIES</v-subheader>
				<v-list-item-group>
					<v-list-item>
						<v-list-item-icon>
							<v-icon color="green darken-3">mdi-label</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>
								<router-link exact exact-active-class="teal--yellow" to="/c/all">All Courses</router-link>
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item
						v-for="category in categories.category_courses"
						v-bind="categories"
						:key="category.id"
					>
						<v-list-item-icon>
							<v-icon :color="tagcolor(category.name)">mdi-label</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>
								<router-link
									exact
									exact-active-class="teal--yellow"
									:to="{ path: '/c/' + category.name, params:{ name: category.name}}"
								>{{category.name}}</router-link>
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar
			:clipped-left="$vuetify.breakpoint.lgAndUp"
			app
			dark
			flat
			:hide-on-scroll="$vuetify.breakpoint.smAndDown"
		>
			<v-app-bar-nav-icon @click.stop="primaryDrawer.model = !primaryDrawer.model" />
			<v-toolbar-title>
				<v-avatar tile class="mr-5" v-if="!$vuetify.breakpoint.xsOnly">
					<img src="/images/layers-icon.png" />
				</v-avatar>FCAT CPD Portal
			</v-toolbar-title>
			<v-spacer />
			<v-tooltip bottom>
				<template v-slot:activator="{ on }">
					<v-btn tile text v-on="on" class="px-0 mx-0 d-none d-sm-block">
						<router-link exact exact-active-class="teal--yellow" :to="{ name: 'usermycpdrecord' }">
							<v-icon>mdi-folder-account-outline</v-icon>
						</router-link>
					</v-btn>
				</template>
				<span>My CPD Record</span>
			</v-tooltip>
			<v-tooltip bottom>
				<template v-slot:activator="{ on }">
					<v-btn tile text v-on="on" class="px-0 mx-0 d-none d-md-block">
						<router-link exact exact-active-class="teal--yellow" :to="{ name: 'courselist' }">
							<v-icon>mdi-book-search-outline</v-icon>
						</router-link>
					</v-btn>
				</template>
				<span>Find A Course</span>
			</v-tooltip>
			<v-menu v-if="this.roleid == 1" bottom left close-on-content-click offset-y>
				<template v-slot:activator="{ on: onMenu }">
					<v-tooltip bottom>
						<template #activator="{ on: onTooltip }">
							<v-btn v-on="{ ...onMenu, ...onTooltip }" tile text class="px-0 mx-0">
								<v-icon>fas fa-cog fa-sm</v-icon>
							</v-btn>
						</template>
						<span>Admin Menu</span>
					</v-tooltip>
				</template>
				<v-card>
					<v-card-text>
						<v-list>
							<v-list-item @click="gotoManageUsers" class="ml-0 pl-0">
								<v-list-item-title>
									<v-avatar>
										<v-icon>fas fa-users-cog</v-icon>
									</v-avatar>Manage Users
								</v-list-item-title>
							</v-list-item>
							<v-list-item @click="gotoManageCourses" class="ml-0 pl-0">
								<v-list-item-title>
									<v-avatar>
										<v-icon>far fa-folder-open</v-icon>
									</v-avatar>Manage Courses
								</v-list-item-title>
							</v-list-item>
							<v-list-item @click="gotoManageReviews" class="ml-0 pl-0">
								<v-list-item-title>
									<v-avatar>
										<v-icon>far fa-comment-dots</v-icon>
									</v-avatar>Manage Reviews
								</v-list-item-title>
							</v-list-item>
							<v-list-item @click="gotoManageCategories" class="ml-0 pl-0">
								<v-list-item-title>
									<v-avatar>
										<v-icon>fas fa-tags</v-icon>
									</v-avatar>Manage Categories
								</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-card-text>
				</v-card>
			</v-menu>
			<v-divider v-if="this.roleid == 1" class="mx-1 d-none d-md-block" vertical inset></v-divider>
			<v-menu bottom left close-on-content-click offset-y>
				<template v-slot:activator="{ on }">
					<v-btn v-on="on" tile text>
						<v-avatar size="36" class="mr-3">
							<img :src="avatar" />
						</v-avatar>
						<span class="d-none d-md-block">{{name}}</span>
					</v-btn>
				</template>
				<v-card>
					<v-card-text>
						<v-list>
							<v-list-item disabled @click="gotoMyProfile" class="ml-0 pl-0">
								<v-list-item-title>
									<v-avatar>
										<v-icon>mdi-account</v-icon>
									</v-avatar>My Profile
								</v-list-item-title>
							</v-list-item>
							<v-list-item @click="gotoMyCPDRecord" class="ml-0 pl-0">
								<v-list-item-title>
									<v-avatar>
										<v-icon>mdi-folder-account-outline</v-icon>
									</v-avatar>My CPD Record
								</v-list-item-title>
							</v-list-item>
							<v-divider></v-divider>
							<v-list-item @click="logout" class="ml-0 pl-0">
								<v-list-item-title>
									<v-avatar>
										<v-icon>mdi-logout-variant</v-icon>
									</v-avatar>Log Out
								</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-card-text>
				</v-card>
			</v-menu>
		</v-app-bar>
		<v-content>
			<v-container fluid>
				<transition name="fade" mode="out-in">
					<router-view @closeappdrawer="closeappdrawer"></router-view>
				</transition>
			</v-container>
		</v-content>
		<v-bottom-navigation grow fixed v-if="$vuetify.breakpoint.smAndDown">
			<v-btn @click="gotoMyCPDRecord()" tile text>
				<span>My CPD Record</span>
				<v-icon>mdi-folder-account-outline</v-icon>
			</v-btn>
			<v-btn @click="gotoAllCourses()" tile text>
				<span>All Courses</span>
				<v-icon>mdi-book-search-outline</v-icon>
			</v-btn>
		</v-bottom-navigation>
		<template>
			<suggest-course-form
				:dialog="dialog"
				@suggestedsnackbarupdate="suggestedsnackbarupdate"
				@close="closeSuggestForm"
			></suggest-course-form>
		</template>
		<!--
    ****  SNACKBAR ALERT AFTER EDIT OR ADD COURSE
		-->
		<v-snackbar
			v-model="suggestedsnackbar.show"
			:color="suggestedsnackbar.color"
			:timeout="suggestedsnackbar.timeout"
			multi-line
			bottom
		>
			{{ suggestedsnackbar.text }}
			<v-btn text @click="suggestedsnackbar.show = false">Close</v-btn>
		</v-snackbar>
	</v-app>
</template>
<script>
import { mdiCog } from "@mdi/js";
import SuggestCourseForm from "../components/c/SuggestCourseForm";
export default {
	props: ["userid", "roleid", "avatar", "name", "school"],
	watch: {
		$route: function() {
			this.checkroute();
		}
	},
	data: () => ({
		csrf: document
			.querySelector('meta[name="csrf-token"]')
			.getAttribute("content"),
		primaryDrawer: {
			model: false,
			clipped: false,
			floating: false,
			mini: false,
			drawer: false
		},
		dialog: false,
    categories: [],
    courses: [],
    courseSearch: "",
		suggestedsnackbar: {
			color: "",
			mode: "",
			show: false,
			text: "",
			timeout: 3000,
			x: null,
			y: "top"
		},
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
		this.$store.commit("setName", this.name);
		this.$store.commit("setUserId", this.userid);
		this.$store.commit("setRoleId", this.roleid);
		this.$store.commit("setAvatar", this.avatar);
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
		tagcolor(tag) {
			if (tag === "Compulsory") {
				return "yellow accent-3";
			} else {
				return "white";
			}
		},
		getlabelcolour(id) {
			return this.randomItem(this.labelcolors);
		},
		gotoManageUsers() {
			this.$router.push("/a/manageusers");
		},
		gotoManageCourses() {
			this.$router.push("/a/managecourses");
		},
		gotoManageReviews() {
			this.$router.push("/a/managereviews");
		},
		gotoManageCategories() {
			this.$router.push("/a/managecategories");
		},
		gotoMyCPDRecord() {
			this.$router.push("/u/mycpdrecord");
		},
		gotoMyCourses() {
			this.$router.push("/u/mycourses");
		},
		gotoMyProfile() {
			this.$router.push("/u/myprofile");
		},
		gotoMyReviews() {
			this.$router.push("/u/myreviews");
		},
		gotoAllCourses() {
			this.$router.push("/c/all");
		},
		closeappdrawer() {
			this.primaryDrawer.model = !this.primaryDrawer.model;
		},
		closeSuggestForm() {
			this.dialog = false;
		},
		logout() {
			axios
				.post("/logout")
				.then(response => {
					if (response.status === 302 || 401) {
						window.location.href = "/login";
					} else {
						// throw error and go to catch block
					}
				})
				.catch(error => {});
		},
		checkroute() {
			if (this.$route.path.indexOf("/a/") >= 0) {
				return true;
			} else {
				return false;
			}
		},
		suggestedsnackbarupdate(sb) {
			this.suggestedsnackbar = sb;
		}
	},
	computed: {}
};
</script>
<style>
.v-toolbar__content a {
	color: white !important;
	text-decoration: none !important;
}
.fa-sm {
	font-size: 1.2rem !important;
}
.fade-enter {
	opacity: 0;
}

.fade-enter-active {
	transition: opacity 1s ease;
}

.fade-leave {
}

.fade-leave-active {
	transition: opacity 0.5s ease;
	opacity: 0;
}
.btn-block {
	display: block;
	width: 100%;
}
#id a,
.disabled a {
	color: grey !important;
}

html {
	--scrollbarBG: #272727;
	--thumbBG: #121212;
}
body::-webkit-scrollbar {
	width: 11px;
}
body {
	scrollbar-width: thin;
	scrollbar-color: var(--thumbBG) var(--scrollbarBG);
}
body::-webkit-scrollbar-track {
	background: var(--scrollbarBG);
}
body::-webkit-scrollbar-thumb {
	background-color: var(--thumbBG);
	border-radius: 6px;
	border: 3px solid var(--scrollbarBG);
}

.v-navigation-drawer {
	overflow: hidden;
}

.v-navigation-drawer__content {
	margin-bottom: -50px; /* maximum width of scrollbar */
	padding-bottom: 50px; /* maximum width of scrollbar */
	margin-right: -50px; /* maximum width of scrollbar */
	padding-right: 50px; /* maximum width of scrollbar */
}
</style>
