<template>
	<div>
		<v-row>
			<h1 class="col-12 font-weight-light">
				My In-Progress Courses
				<v-chip v-if="!myinprogresscourses" class="ma-2" color="red darken-4" text-color="white">0</v-chip>
				<h3
					v-if="!myinprogresscourses"
					class="font-weight-light orange--text"
				>You have no in-progress courses.</h3>
				<v-chip
					v-if="myinprogresscourses"
					class="ma-2"
					color="teal"
					text-color="white"
				>{{ myinprogresscourses.length }}</v-chip>
			</h1>

			<!--
        -- Course Tile Start --
			-->
			<v-col
				cols="6"
				md="4"
				lg="3"
				xl="2"
				v-for="course in myinprogresscourses"
				v-bind="course"
				:key="course.id"
			>
				<!-- <v-card class="flex d-flex flex-column"> -->
				<v-hover v-slot:default="{ hover }" open-delay="150" close-delay="200">
					<v-img :src="randomTile(course.id)" alt="Course Tile" height="165" width="295">
						<v-expand-transition>
							<div
								v-if="hover"
								class="d-flex transition-fast-in-fast-out teal v-card--reveal white--text"
								style="height: 100%;"
							>
								<div class="pa-3">
									{{ course.description }}
									<br />
									Length: {{ course.length }} time
								</div>
							</div>
						</v-expand-transition>
					</v-img>
				</v-hover>
				<div id="course-details-container" class="black darken-3">
					<v-card-text class="pt-6 pb-1" style="position: relative;">
						<v-btn
							@click="addToMyCourses(course.id)"
							absolute
							color="orange darken-2"
							class="white--text"
							fab
							right
							top
						>
							<v-icon>mdi-heart</v-icon>
						</v-btn>
					</v-card-text>
					<v-card-text
						class="subtitle-1 py-1 grey--text text--lighten-1"
						style="word-break: break-word; min-height: 100px"
					>{{ course.name }}</v-card-text>
					<v-card-text class="py-2">
						<v-row align="center" class="mx-0">
							<v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
							<div class="grey--text ml-4">4.5 (413)</div>
						</v-row>
						<div class="my-1 caption text-left">Cost: {{ course.cost }}</div>
						<!-- <div>{{ course.description }}</div> -->
					</v-card-text>
				</div>
			</v-col>
			<!--
        -- Course Tile End --
			-->
		</v-row>

		<v-row>
			<h1 class="col-12 font-weight-light">
				My Shortlisted Courses
				<v-chip v-if="!myshortlistedcourses" class="ma-2" color="red darken-4" text-color="white">0</v-chip>
				<h3
					v-if="!myshortlistedcourses"
					class="font-weight-light orange--text"
				>You have no shortlisted courses.</h3>
				<v-chip
					v-if="myshortlistedcourses"
					class="ma-2"
					color="teal"
					text-color="white"
				>{{ myshortlistedcourses.length }}</v-chip>
			</h1>

			<!--
        -- Course Tile Start --
			-->
			<v-col
				cols="6"
				md="4"
				lg="3"
				xl="2"
				v-for="course in myshortlistedcourses"
				v-bind="course"
				:key="course.id"
			>
				<!-- <v-card class="flex d-flex flex-column"> -->
				<v-hover v-slot:default="{ hover }" open-delay="150" close-delay="200">
					<v-img :src="randomTile(course.id)" alt="Course Tile" height="165" width="295">
						<v-expand-transition>
							<div
								v-if="hover"
								class="d-flex transition-fast-in-fast-out teal v-card--reveal white--text"
								style="height: 100%;"
							>
								<div class="pa-3">
									{{ course.description }}
									<br />
									Length: {{ course.length }} time
								</div>
							</div>
						</v-expand-transition>
					</v-img>
				</v-hover>
				<div id="course-details-container" class="black darken-3">
					<v-card-text class="pt-6 pb-1" style="position: relative;">
						<v-btn
							@click="addToMyCourses(course.id)"
							absolute
							color="orange darken-2"
							class="white--text"
							fab
							right
							top
						>
							<v-icon>mdi-heart</v-icon>
						</v-btn>
					</v-card-text>
					<v-card-text
						class="subtitle-1 py-1 grey--text text--lighten-1"
						style="word-break: break-word; min-height: 100px"
					>{{ course.name }}</v-card-text>
					<v-card-text class="py-2">
						<v-row align="center" class="mx-0">
							<v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
							<div class="grey--text ml-4">4.5 (413)</div>
						</v-row>
						<div class="my-1 caption text-left">Cost: {{ course.cost }}</div>
						<!-- <div>{{ course.description }}</div> -->
					</v-card-text>
				</div>
			</v-col>
			<!--
        -- Course Tile End --
			-->
		</v-row>
		<v-row>
			<h1 class="col-12 font-weight-light">
				My Completed Courses
				<v-chip v-if="!mycompletedcourses" class="ma-2" color="red darken-4" text-color="white">0</v-chip>
				<h3
					v-if="!mycompletedcourses"
					class="font-weight-light orange--text"
				>You have not completed any courses.</h3>
				<v-chip
					v-if="mycompletedcourses"
					class="ma-2"
					color="teal"
					text-color="white"
				>{{ mycompletedcourses.length }}</v-chip>
			</h1>

			<!--
        -- Course Tile Start --
			-->
			<v-col
				cols="6"
				md="4"
				lg="3"
				xl="2"
				v-for="course in mycompletedcourses"
				v-bind="course"
				:key="course.id"
			>
				<!-- <v-card class="flex d-flex flex-column"> -->
				<v-hover v-slot:default="{ hover }" open-delay="150" close-delay="200">
					<v-img :src="randomTile(course.id)" alt="Course Tile" height="165" width="295">
						<v-expand-transition>
							<div
								v-if="hover"
								class="d-flex transition-fast-in-fast-out teal v-card--reveal white--text"
								style="height: 100%;"
							>
								<div class="pa-3">
									{{ course.description }}
									<br />
									Length: {{ course.length }} time
								</div>
							</div>
						</v-expand-transition>
					</v-img>
				</v-hover>
				<div id="course-details-container" class="black darken-3">
					<v-card-text class="pt-6 pb-1" style="position: relative;">
						<v-btn
							@click="addToMyCourses(course.id)"
							absolute
							color="orange darken-2"
							class="white--text"
							fab
							right
							top
						>
							<v-icon>mdi-heart</v-icon>
						</v-btn>
					</v-card-text>
					<v-card-text
						class="subtitle-1 py-1 grey--text text--lighten-1"
						style="word-break: break-word; min-height: 100px"
					>{{ course.name }}</v-card-text>
					<v-card-text class="py-2">
						<v-row align="center" class="mx-0">
							<v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
							<div class="grey--text ml-4">{{ course.averageRating }}</div>
						</v-row>
						<div class="my-1 caption text-left">Cost: {{ course.cost }}</div>
						<!-- <div>{{ course.description }}</div> -->
					</v-card-text>
				</div>
			</v-col>
			<!--
        -- Course Tile End --
			-->
		</v-row>
	</div>
</template>
<script>
import axios from "axios";
export default {
	data() {
		return {
			endpoint: "/u/getMyCourses",
			mycompletedcourses: [],
			myinprogresscourses: [],
			myshortlistedcourses: []
		};
	},
	created() {
		this.fetch();
	},
	methods: {
		fetch() {
			axios.get(this.endpoint).then(({ data }) => {
				this.mycompletedcourses = data.mycompletedcourses;
				this.myinprogresscourses = data.myinprogresscourses;
        this.myshortlistedcourses = data.myshortlistedcourses;
			});
		},
		randomTile() {
			return (
				"https://picsum.photos/295/165/?random=" +
				Math.floor(Math.random() * 250)
			);
		},
		averageRating() {}
	}
};
</script>
