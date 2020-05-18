<template>
	<div id="myCPDRecord">
		<h1 class="display-1 font-weight-light mb-5 ml-5">
			<v-icon large>mdi-folder-account-outline</v-icon>
			<span v-if="loading">&nbsp;&nbsp;My CPD Record - Loading...</span>
			<span v-if="!loading">&nbsp;&nbsp;My CPD Record - {{this.mycpd.user.name}}</span>
		</h1>
		<p v-if="!loading">&nbsp;&nbsp;Response - {{this.responsedata.original}}</p>
		<v-progress-linear v-if="loading" indeterminate></v-progress-linear>
		<div v-if="!loading" class="v-container px-5">
			<div id="mycpdheadlines">
				<v-row>
					<v-col cols="12" sm="6" lg="3" class="mt-5">
						<v-card>
							<v-card-text class="py-0">
								<v-row>
									<v-col cols="4">
										<v-avatar
											tile
											size="80"
											color="green darken-3"
											style="margin-top: -2rem !important; border-radius: 4px;"
											class="mr-5"
										>
											<v-icon large>mdi-check</v-icon>
										</v-avatar>
									</v-col>
									<v-col cols="8" class="text-right">
										<p class="caption font-weight-light mb-0">Completed CPD</p>
										<h1 class="display-1 font-weight-light">{{ this.mycpd.completedcount }}</h1>
									</v-col>
								</v-row>
							</v-card-text>
						</v-card>
					</v-col>
					<v-col cols="12" sm="6" lg="3" class="mt-5">
						<v-card>
							<v-card-text class="py-0">
								<v-row>
									<v-col cols="4">
										<v-avatar
											tile
											size="80"
											color="amber darken-2"
											style="margin-top: -2rem !important; border-radius: 4px;"
											class="mr-5"
										>
											<v-icon large>fa-star</v-icon>
										</v-avatar>
									</v-col>
									<v-col cols="8" class="text-right">
										<p class="caption font-weight-light mb-0">My Average Rating</p>
										<h1 class="display-1 font-weight-light">{{ roundOff(this.mycpd.myratingaverage,1) }}</h1>
									</v-col>
								</v-row>
							</v-card-text>
						</v-card>
					</v-col>
					<v-col cols="12" sm="6" lg="3" class="mt-5">
						<v-card>
							<v-card-text class="py-0">
								<v-row>
									<v-col cols="4">
										<v-avatar
											tile
											size="80"
											color="blue darken-3"
											style="margin-top: -2rem !important; border-radius: 4px;"
											class="mr-5"
										>
											<v-icon large>mdi-alarm</v-icon>
										</v-avatar>
									</v-col>
									<v-col cols="8" class="text-right">
										<p class="caption font-weight-light mb-0">Started CPD</p>
										<h1 class="display-1 font-weight-light">{{ this.mycpd.startedcount }}</h1>
									</v-col>
								</v-row>
							</v-card-text>
						</v-card>
					</v-col>
					<v-col cols="12" sm="6" lg="3" class="mt-5">
						<v-card>
							<v-card-text class="py-0">
								<v-row>
									<v-col cols="4">
										<v-avatar
											tile
											size="80"
											color="pink"
											style="margin-top: -2rem !important; border-radius: 4px;"
											class="mr-5"
										>
											<v-icon large>fa-heart</v-icon>
										</v-avatar>
									</v-col>
									<v-col cols="8" class="text-right">
										<p class="caption font-weight-light mb-0">Shortlisted CPD</p>
										<h1 class="display-1 font-weight-light">{{ this.mycpd.shortlistedcount }}</h1>
									</v-col>
								</v-row>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</div>
			<v-row>
				<div id="mycpdcourses" class="mb-10 mt-5 col-xl-6 col-12 px-3">
					<v-progress-linear v-if="loading" indeterminate></v-progress-linear>
					<v-data-table
						@click:row="editRecord"
						:headers="completeddatatableheaders"
						:items="mycpd.completedcourses"
						:items-per-page="10"
						:search="searchcompleted"
						:sort-by="'completed_date'"
						:sort-desc="true"
					>
						<template v-slot:top>
							<v-row>
								<v-col class="mx-5">
									<v-card>
										<v-card-title class="green darken-3 py-5" style="margin-top: -2rem !important;">
											<v-icon large>mdi-check</v-icon>&nbsp;&nbsp;Completed CPD
										</v-card-title>
									</v-card>
								</v-col>
							</v-row>
							<v-row class="px-3">
								<v-col cols="12" md="10" class="order-md-1 order-last">
									<v-text-field
										v-model="searchcompleted"
										prepend-icon="fas fa-search fa-sm"
										single-line
										hint="Search your completed courses"
										persistent-hint
										clearable
									>
										<template v-slot:label>Search by keyword</template>
									</v-text-field>
								</v-col>
								<v-col cols="12" md="4" class="order-md-3 order-9 d-none">
									<v-select
										prepend-icon="fa-filter fa-sm"
										hint="Type Filter"
										persistent-hint
										v-model="type"
										:items="types"
									></v-select>
								</v-col>
								<v-col cols="12" md="2" class="order-md-last order-first">
									<v-spacer></v-spacer>
									<v-dialog
										v-model="dialog"
										persistent
										:fullscreen="$vuetify.breakpoint.smAndDown"
										width="80%"
									>
										<template v-slot:activator="{ on }">
											<v-btn
												v-if="mycpdcheck"
												color="primary"
												dark
												class="d-none d-md-block mb-2 float-right"
												v-on="on"
											>Add CPD</v-btn>
											<v-btn
												v-if="mycpdcheck"
												color="primary"
												dark
												class="d-md-none btn-block mb-2 float-left"
												v-on="on"
											>Add CPD</v-btn>
										</template>
										<v-card>
											<v-toolbar :color="formTitleColor">
												<v-btn icon @click="close">
													<v-icon>mdi-close</v-icon>
												</v-btn>
												<v-toolbar-title>{{ formTitle }}</v-toolbar-title>
												<v-spacer></v-spacer>
												<v-toolbar-items>
													<v-btn v-if="mycpdcheck" text @click="submit">Save</v-btn>
												</v-toolbar-items>
											</v-toolbar>
											<v-container>
												<form @submit.prevent="submit" enctype="multipart/form-data">
													<v-card-text>
														<v-container>
															<v-row>
																<v-col cols="12">
																	<v-text-field
																		id="name"
																		v-model="editedItem.name"
																		label="CPD Name"
																		hide-details="auto"
																		prepend-icon="fas fa-book-reader"
																		:disabled="formDelete"
																	></v-text-field>
																</v-col>
																<v-col cols="12">
																	<v-textarea
																		id="description"
																		v-model="editedItem.description"
																		label="CPD description"
																		hide-details="auto"
																		prepend-icon="fa-info"
																		:disabled="formDelete"
																		auto-grow
																		rows="1"
																		outlined
																		counter
																	></v-textarea>
																</v-col>
																<v-col cols="12" md="6">
																	<v-menu
																		v-model="start_datepicker"
																		:close-on-content-click="false"
																		transition="scale-transition"
																		:nudge-right="50"
																		min-width="290px"
																		:disabled="!mycpdcheck"
																		:readonly="!mycpdcheck"
																	>
																		<template v-slot:activator="{ on }">
																			<v-text-field
																				:value="formatedStartDate"
																				label="CPD Start Date"
																				prepend-icon="far fa-calendar-alt"
																				:disabled="!mycpdcheck"
																				readonly
																				v-on="on"
																				hint="Leave blank if couse not yet started"
																				persistent-hint
																				clearable
																				outlined
																				@click:clear="clearStartDate"
																			></v-text-field>
																		</template>
																		<v-date-picker
																			v-model="editedItem.start_date"
																			scrollable
																			@input="start_datepicker = false"
																		></v-date-picker>
																	</v-menu>
																</v-col>

																<v-col cols="12" md="6">
																	<v-menu
																		v-model="completed_datepicker"
																		:close-on-content-click="false"
																		transition="scale-transition"
																		:nudge-right="50"
																		min-width="290px"
																		:disabled="!mycpdcheck"
																		:readonly="!mycpdcheck"
																	>
																		<template v-slot:activator="{ on }">
																			<v-text-field
																				:value="formatedCompletedDate"
																				label="CPD Completed Date"
																				prepend-icon="far fa-calendar-alt"
																				readonly
																				:disabled="!mycpdcheck"
																				v-on="on"
																				hint="Leave blank if couse not yet completed"
																				persistent-hint
																				clearable
																				outlined
																				@click:clear="clearCompletedDate"
																			></v-text-field>
																		</template>
																		<v-date-picker
																			v-model="editedItem.completed_date"
																			scrollable
																			@input="completed_datepicker = false"
																		></v-date-picker>
																	</v-menu>
																</v-col>
																<v-col cols="12">
																	<v-textarea
																		id="myreview"
																		v-model="editedItem.myreview"
																		label="CPD Review"
																		prepend-icon="fa-pen-alt fa-sm"
																		hint="Delete your review by clearing this textbox"
																		persistent-hint
																		auto-grow
																		rows="1"
																		outlined
																		counter
																		:disabled="!mycpdcheck"
																		:readonly="!mycpdcheck"
																	></v-textarea>
																</v-col>
																<v-col cols="12">
																	<v-switch
																		id="myreviewpublic"
																		v-model="editedItem.myreviewpublic"
																		:label="publicPrivateLabel(editedItem.myreviewpublic)"
																		:disabled="!mycpdcheck"
																		:readonly="!mycpdcheck"
																	></v-switch>
																</v-col>
																<v-col cols="12">
																	<div id="myrating">
																		<v-icon class="mr-3">fa-thumbs-up</v-icon>CPD Rating
																		<v-rating
																			id="myrating"
																			v-model="editedItem.myrating"
																			:color="getStarColor(editedItem.myrating)"
																			full-icon="fas fa-star"
																			half-icon="fa-star-half-alt"
																			empty-icon="far fa-star"
																			background-color="grey"
																			clearable
																			class="ml-7"
																			:disabled="!mycpdcheck"
																			:readonly="!mycpdcheck"
																		></v-rating>
																	</div>
																</v-col>
																<v-col v-if="editedItem.mycertificates.length">
																	<div id="certificates">
																		<v-icon class="mr-3">fa-certificate fa-fw</v-icon>Attached Certificate(s)
																		<v-col
																			class="py-0 pl-5"
																			v-for="certificate in editedItem.mycertificates"
																			:key="certificate.id"
																		>
																			<v-icon class="d-none d-lg-block">fas fa-blank fa-fw</v-icon>
																			<a
																				:href="'../' + certificate.path"
																				target="_blank"
																				style="text-decoration: none;"
																			>
																				<v-btn text class="ma-2">
																					<v-icon class="mr-3">mdi-certificate</v-icon>
																					{{certificate.name}}
																					<v-icon class="ml-3" color="white">mdi-download</v-icon>
																				</v-btn>
																			</a>
																			<v-btn
																				@click="confirmDeleteUpload(certificate)"
																				class="ma-2 outlined"
																				color="red darken-3"
																			>
																				<v-icon color="white">far fa-trash-alt fa-sm</v-icon>
																			</v-btn>
																		</v-col>
																	</div>
																</v-col>
																<v-col cols="12">
																	<div id="addcertificates">
																		<p>
																			<v-icon class="mr-3">mdi-upload</v-icon>Upload Certificate(s)
																		</p>
																		<v-file-input
																			v-model="editedItem.files"
																			color="blue accent-4"
																			counter
																			label="Upload your certificate"
																			placeholder="Select your files"
																			prepend-icon="mdi-none"
																			outlined
																			multiple
																			:show-size="1000"
																		>
																			<template v-slot:selection="{ index, text }">
																				<v-chip v-if="index < 2" color="teal darken-3" dark label small>{{ text }}</v-chip>

																				<span
																					v-else-if="index === 2"
																					class="overline grey--text text--darken-3 mx-2"
																				>+{{ editedItem.files.length - 2 }} File(s)</span>
																			</template>
																		</v-file-input>
																		<div class="ml-8">
																			<v-btn
																				v-if="editedItem.files"
																				color="teal darken-3"
																				class="btn-block"
																				@click="uploadFiles"
																			>Upload Files</v-btn>
																		</div>
																	</div>
																</v-col>
															</v-row>
														</v-container>
													</v-card-text>

													<v-card-actions v-if="mycpdcheck">
														<v-btn
															v-if="formDelete"
															disabled
															outlined
															color="red darken-1"
															text
															@click="deleteRecord()"
														>Delete</v-btn>
														<v-spacer></v-spacer>
														<v-btn text @click="close">Cancel</v-btn>
														<v-btn type="submit" color="green">Save</v-btn>
													</v-card-actions>
												</form>
											</v-container>
										</v-card>
									</v-dialog>
								</v-col>
							</v-row>
						</template>
						<template v-slot:item.myreview="{ item }">
							<v-chip v-if="publicchip(item)" x-small color="green darken-3" class="mr-2">Public</v-chip>
							<v-chip v-if="!publicchip(item) && item.myreview" x-small color="red" class="mr-2">Private</v-chip>
							<div class="review">{{ item.myreview }}</div>
						</template>

						<template v-slot:item.myprogress="{ item }">
							<v-avatar color="blue darken-3" v-if="item.myprogress == 1" size="36">
								<v-icon>mdi-alarm</v-icon>
							</v-avatar>
							<v-avatar color="green darken-3" v-if="item.myprogress == 2" size="36">
								<v-icon>mdi-check</v-icon>
							</v-avatar>
							<v-avatar color="pink" v-if="item.myprogress == 3" size="36">
								<v-icon>mdi-heart</v-icon>
							</v-avatar>
						</template>

						<template v-slot:item.start_date="{ item }">
							<div
								v-if="item.start_date"
							>{{ item.start_date | dateParse('YYYY.MM.DD')| dateFormat('DD-MM-YYYY') }}</div>
						</template>
						<template v-slot:item.completed_date="{ item }">
							<div
								v-if="item.completed_date"
							>{{ item.completed_date | dateParse('YYYY.MM.DD')| dateFormat('DD-MM-YYYY') }}</div>
						</template>

						<template v-slot:item.myrating="{ item }">
							<v-icon v-if="item.myrating" :color="getStarColor(item.myrating)" class="mr-2">fa-star fa-sm</v-icon>
							{{ roundOff(item.myrating,1) || '' }}
						</template>
						<template v-slot:item.avgrating="{ item }">
							<v-icon
								v-if="item.avgrating"
								:color="getStarColor(item.avgrating)"
								class="mr-2"
							>fa-star fa-sm</v-icon>
							{{ roundOff(item.avgrating, 1) || '' }}
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
									<v-list-item @click="gotoCPD(item)">
										<v-avatar>
											<v-icon class="mr-2">mdi-folder-search-outline</v-icon>
										</v-avatar>View CPD
									</v-list-item>
									<v-list-item @click="editRecord(item)">
										<v-avatar>
											<v-icon color="amber" class="mr-2">fa-edit fa-sm</v-icon>
										</v-avatar>View Record
									</v-list-item>
									<v-list-item v-if="mycpdcheck" @click="changestate(item, 2)">
										<v-avatar>
											<v-icon color="green darken-3" class="mr-2">mdi-check</v-icon>
										</v-avatar>Set Completed
									</v-list-item>
									<v-list-item v-if="mycpdcheck" @click="changestate(item, 1)">
										<v-avatar>
											<v-icon color="blue lighten-3" class="mr-2">mdi-alarm</v-icon>
										</v-avatar>Set Started
									</v-list-item>
									<v-list-item v-if="mycpdcheck" @click="changestate(item, 3)">
										<v-avatar>
											<v-icon color="pink" class="mr-2">mdi-heart</v-icon>
										</v-avatar>Set Shortlisted
									</v-list-item>
								</v-list>
							</v-menu>
						</template>
					</v-data-table>
				</div>
				<div id="mycpdcourses" class="mb-10 mt-5 col-xl-6 col-12 px-3">
					<v-progress-linear v-if="loading" indeterminate></v-progress-linear>
					<v-data-table
						@click:row="editRecord"
						:headers="otherdatatableheaders"
						:items="mycpd.othercourses"
						:items-per-page="10"
						:search="searchothers"
						:sort-by="'name'"
						:sort-desc="false"
					>
						<template v-slot:top>
							<v-row>
								<v-col class="mx-5">
									<v-card>
										<v-card-title class="blue darken-3 py-5" style="margin-top: -2rem !important;">
											<v-icon large>mdi-alarm</v-icon>&nbsp;&nbsp;To Be Completed CPD
										</v-card-title>
									</v-card>
								</v-col>
							</v-row>
							<v-row class="px-3">
								<v-col cols="12" md="6" class="order-md-1 order-last">
									<v-text-field
										v-model="searchothers"
										prepend-icon="fas fa-search fa-sm"
										single-line
										hint="Search your started and shortlisted courses"
										persistent-hint
										clearable
									>
										<template v-slot:label>Search by keyword</template>
									</v-text-field>
								</v-col>
								<v-col cols="12" md="6" class="order-md-3 order-9">
									<v-select
										prepend-icon="fa-filter fa-sm"
										hint="Type Filter"
										persistent-hint
										v-model="type"
										:items="types"
									></v-select>
								</v-col>
							</v-row>
						</template>
						<template v-slot:item.myreview="{ item }">
							<v-chip v-if="publicchip(item)" x-small color="green darken-3" class="mr-2">Public</v-chip>
							<v-chip v-if="!publicchip(item) && item.myreview" x-small color="red" class="mr-2">Private</v-chip>
							<div class="review">{{ item.myreview }}</div>
						</template>

						<template v-slot:item.myprogress="{ item }">
							<v-avatar color="blue darken-3" v-if="item.myprogress == 1" size="36">
								<v-icon>mdi-alarm</v-icon>
							</v-avatar>
							<v-avatar color="green darken-3" v-if="item.myprogress == 2" size="36">
								<v-icon>mdi-check</v-icon>
							</v-avatar>
							<v-avatar color="pink" v-if="item.myprogress == 3" size="36">
								<v-icon>mdi-heart</v-icon>
							</v-avatar>
						</template>

						<template v-slot:item.start_date="{ item }">
							<div
								v-if="item.start_date"
							>{{ item.start_date | dateParse('YYYY.MM.DD')| dateFormat('DD-MM-YYYY') }}</div>
						</template>
						<template v-slot:item.completed_date="{ item }">
							<div
								v-if="item.completed_date"
							>{{ item.completed_date | dateParse('YYYY.MM.DD')| dateFormat('DD-MM-YYYY') }}</div>
						</template>

						<template v-slot:item.myrating="{ item }">
							<v-icon v-if="item.myrating" :color="getStarColor(item.myrating)" class="mr-2">fa-star fa-sm</v-icon>
							{{ roundOff(item.myrating,1) || '' }}
						</template>
						<template v-slot:item.avgrating="{ item }">
							<v-icon
								v-if="item.avgrating"
								:color="getStarColor(item.avgrating)"
								class="mr-2"
							>fa-star fa-sm</v-icon>
							{{ roundOff(item.avgrating, 1) || '' }}
						</template>

						<template v-slot:item.actions="{ item }">
							<v-menu v-if="mycpdcheck" offset-y bottom left>
								<template v-slot:activator="{ on }">
									<v-btn v-if="!$vuetify.breakpoint.xsOnly" icon v-on="on">
										<v-icon v-if="!$vuetify.breakpoint.xsOnly">mdi-dots-vertical</v-icon>
									</v-btn>
									<v-btn v-if="$vuetify.breakpoint.xsOnly" text outlined v-on="on">Actions</v-btn>
								</template>
								<v-list>
									<v-list-item @click="gotoCPD(item)">
										<v-avatar>
											<v-icon class="mr-2">mdi-folder-search-outline</v-icon>
										</v-avatar>View CPD
									</v-list-item>
									<v-list-item @click="editRecord(item)">
										<v-avatar>
											<v-icon color="amber" class="mr-2">fa-edit fa-sm</v-icon>
										</v-avatar>View Record
									</v-list-item>
									<v-list-item @click="changestate(item, 2)">
										<v-avatar>
											<v-icon color="green darken-3" class="mr-2">mdi-check</v-icon>
										</v-avatar>Set Completed
									</v-list-item>
									<v-list-item @click="changestate(item, 1)">
										<v-avatar>
											<v-icon color="blue lighten-3" class="mr-2">mdi-alarm</v-icon>
										</v-avatar>Set Started
									</v-list-item>
									<v-list-item @click="changestate(item, 3)">
										<v-avatar>
											<v-icon color="pink" class="mr-2">mdi-heart</v-icon>
										</v-avatar>Set Shortlisted
									</v-list-item>
								</v-list>
							</v-menu>
						</template>
					</v-data-table>
				</div>
			</v-row>

			<v-dialog v-if="confirmDelete" persistent v-model="confirmDelete" max-width="500px">
				<v-card>
					<v-card-title class="red darken-4">
						<v-icon class="mr-3">fa-exclamation-triangle</v-icon>Confirm Delete
					</v-card-title>
					<v-card-text class="pt-3">
						<h3 class="title">{{deleteCertificate.name}}</h3>
						<p
							class="grey--text"
						>Upload date: {{deleteCertificate.created_at | dateParse('YYYY.MM.DD')| dateFormat('DD-MM-YYYY')}}</p>
						<h3 class="mb-3">Are you sure you want to delete this file?</h3>
						<h3 class="red--text darken-4">This file will be permanently deleted!</h3>
					</v-card-text>
					<v-card-actions>
						<v-btn text @click="cancelDeleteUpload">Cancel</v-btn>
						<v-spacer></v-spacer>
						<v-btn color="red darken-4" @click="doDeleteCertificate(deleteCertificate.id)">Delete</v-btn>
					</v-card-actions>
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
	</div>
</template>
<script>
import Axios from "axios";
import VueFilterDateParse from "vue-filter-date-format";
import moment from "moment";
export default {
	props: ["userid"],
	watch: {
		$route(to, from) {
			this.to = to;
			this.from = from;
			if (this.to.path != this.from.path) {
				this.loading = true;
				this.fetch();
			}
		}
	},
	data() {
		return {
			responsedata: "response",
			file: "",
			loading: true,
			endpoint: "",
			to: {},
			from: {},
			dialog: false,
			confirmDelete: false,
			start_datepicker: false,
			completed_datepicker: false,
			mycpd: [],
			searchcompleted: "",
			searchothers: "",
			type: "All",
			types: ["All", "Started", "Shortlisted"],
			editedItem: {
				name: "",
				completed_date: "",
				myprogress: "",
				myrating: null,
				myreview: "",
				myreviewpublic: 0,
				start_date: "",
				uid: this.userid,
				username: "",
				files: [],
				mycertificates: [],
				file: ""
			},
			defaultItem: {
				name: "",
				completed_date: "",
				myprogress: "",
				myrating: null,
				myreview: "",
				myreviewpublic: 0,
				start_date: "",
				uid: this.userid,
				username: "",
				files: [],
				mycertificates: []
			},
			deleteCertificate: {
				id: "",
				name: "",
				course_id: "",
				created_at: "",
				deleted_at: "",
				extension: "",
				filename: "",
				path: "",
				updated_at: "",
				user_id: ""
			},
			defaultCertificate: {
				id: "",
				name: "",
				course_id: "",
				created_at: "",
				deleted_at: "",
				extension: "",
				filename: "",
				path: "",
				updated_at: "",
				user_id: ""
			},
			snackbar: {
				color: "",
				mode: "",
				show: false,
				text: "",
				timeout: 10000,
				y: "top"
			},
			completeddatatableheaders: [
				{
					text: "",
					align: "left",
					value: "myprogress",
					width: "40px"
				},
				{
					text: "CPD Name",
					align: "left",
					value: "name"
				},
				{
					text: "Completed Date",
					align: "left",
					value: "completed_date"
				},
				{
					text: "My Rating",
					align: "center",
					value: "myrating"
				},
				{
					text: "Avg Rating",
					align: "center d-none",
					value: "avgrating"
				},
				{
					text: "Review",
					align: "left d-none",
					value: "myreview",
					width: "25%"
				},
				{
					text: "",
					align: "right",
					value: "actions"
				}
			],
			otherdatatableheaders: [
				{
					text: "",
					align: "left",
					value: "myprogress",
					width: "40px",
					filter: value => {
						if (this.type === "All") return true;
						if (!this.type) return true;
						// if (this.type === "Complete") return value === 2;
						if (this.type === "Started") return value === 1;
						if (this.type === "Shortlisted") return value === 3;
					}
				},
				{
					text: "CPD Name",
					align: "left",
					value: "name"
				},
				{
					text: "Start Date",
					align: "left",
					value: "start_date"
				},
				{
					text: "Avg Rating",
					align: "center",
					value: "avgrating"
				},
				{
					text: "",
					align: "right",
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
			if (this.userid) {
				this.endpoint = "/get/u/getMyCPD/" + this.userid;
			} else {
				this.endpoint = "/get/u/getMyCPD";
			}
			if (this.endpoint == "/get/u/getMyCPD") {
				this.editedItem.uid = this.$store.getters.getUserId;
			}
			axios
				.get(this.endpoint)
				.then(({ data }) => {
					this.mycpd = data.mycpd;
				})
				.then(() => {
					setTimeout(() => {
						this.loading = false;
					}, 300);
				});
		},
		roundOff(value, decimals) {
			return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
		},
		gotoCPD(item) {
			this.$router.push("/c/details/" + item.id);
		},
		changestate(item, state) {
			if (this.myprogress == state) {
				return true;
			} else {
				axios.put("/put/u/addToMyCourses/" + item.id + "/" + state).then(() => {
					this.fetch();
				});
			}
		},
		onFileChange(e) {
			console.log(e.target.files[0]);
			// this.filename = "Selected File: " + e.target.files[0].name;
			// this.file = e.target.files[0];
		},
		rowClick(item) {
			this.editedIndex = item.id;
			this.editedItem = Object.assign({}, item);
			this.editedItem.username = this.mycpd.user.name;
			this.dialog = true;
		},
		editRecord(item) {
			this.editedIndex = item.id;
			this.editedItem = Object.assign({}, item);
			this.editedItem.username = this.mycpd.user.name;
			this.dialog = true;
		},
		deleteRecord(item) {
			alert("Delete Function not ready");
		},
		submit() {
			axios
				.post("/post/u/updateMyCPD", this.editedItem)
				.then($data => {
					this.loading = true;
					this.dialog = false;
					this.responsedata = $data.data.response;
					if (this.editedItem.files) {
						for (let i = 0; i < this.editedItem.files.length; i++) {
							if (this.editedItem.files[i].id) {
								continue;
							}
							let formData = new FormData();
							formData.append("file", this.editedItem.files[i]);
							formData.append("course_id", $data.data.course_id);
							formData.append("user_id", this.editedItem.uid);
							formData.append("username", this.editedItem.username);
							axios.post("/post/u/uploadCertificate", formData, {
								headers: {
									"content-type": "multipart/form-data",
									"X-CSRF-TOKEN": document.querySelector(
										'meta[name="csrf-token"]'
									).content
								}
							});
						}
					}
					this.dialog = false;
					this.fetch();
					this.snackbar.color = "success";
					this.snackbar.text = this.responsedata.original;
					this.snackbar.show = true;
					this.close();
					this.fetch();
				})
				.catch(error => {
					console.log("ZDFLKGHDLKFJHG");
					console.log(error);
				});
		},
		uploadFiles() {
			if (this.editedItem.files && this.editedItem.id) {
				for (let i = 0; i < this.editedItem.files.length; i++) {
					if (this.editedItem.files[i].id) {
						continue;
					}
					let formData = new FormData();
					formData.append("file", this.editedItem.files[i]);
					formData.append("course_id", this.editedItem.id);
					formData.append("user_id", this.editedItem.uid);
					formData.append("username", this.editedItem.username);
					axios.post("/post/u/uploadCertificate", formData, {
						headers: {
							"content-type": "multipart/form-data",
							"X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]')
								.content
						}
					});
				}
			}
			setTimeout(() => {
				this.fetch();
			}, 100);
			this.snackbar.color = "success";
			this.snackbar.text = "File Uploaded Successfully";
			this.snackbar.show = true;
			setTimeout(() => {
				this.refreshEditedItem();
			}, 300);
		},
		close() {
			this.dialog = false;
			setTimeout(() => {
				this.editedItem = Object.assign({}, this.defaultItem);
			}, 300);
		},
		getStarColor(value) {
			if (value > 4) {
				return "green";
			}
			if (value > 3) {
				return "amber";
			}
			if (value >= 2.5) {
				return "orange darken-1";
			}
			if (value > 1.5) {
				return "orange darken-4";
			}
			if (value <= 1.5) {
				return "red darke-1";
			}
			if (value < 1) {
				return "black";
			}
		},
		clearCompletedDate() {
			this.editedItem.completed_date = null;
		},
		clearStartDate() {
			this.editedItem.start_date = null;
		},
		publicchip(item) {
			if (item.myreviewpublic == 1) {
				return true;
			} else {
				return false;
			}
		},
		publicPrivateLabel(item) {
			if (item) {
				return "This review can be seen by all users";
			} else {
				return "This review is private";
			}
		},
		confirmDeleteUpload(upload) {
			this.deleteCertificate = upload;
			this.confirmDelete = true;
		},
		cancelDeleteUpload() {
			this.deleteCertificate = this.defaultCertificate;
			this.confirmDelete = false;
		},
		doDeleteCertificate(id) {
			axios.delete("/delete/u/deleteCertificate/" + id).then(response => {
				this.deleteCertificate = this.defaultCertificate;
				this.confirmDelete = false;
				this.snackbar.color = "red";
				this.snackbar.text = response.data;
				this.snackbar.show = true;
				setTimeout(() => {
					this.refreshEditedItem();
				}, 300);
			});
		},
		refreshEditedItem() {
			axios.get(this.endpoint).then(({ data }) => {
				this.mycpd = data.mycpd;
				if (this.mycpd.completedcourses) {
					for (let i = 0; i < this.mycpd.completedcourses.length; i++) {
						if (this.mycpd.completedcourses[i].id == this.editedItem.id) {
							this.editedItem = this.mycpd.completedcourses[i];
							continue;
						}
					}
				}
				if (this.mycpd.othercourses) {
					for (let i = 0; i < this.mycpd.othercourses.length; i++) {
						if (this.mycpd.othercourses[i].id == this.editedItem.id) {
							this.editedItem = this.mycpd.othercourses[i];
							continue;
						}
					}
				}
			});
		}
	},
	computed: {
		mycpdcheck() {
			if (this.userid === this.$store.getters.getUserId) {
				return true;
			}
			if (this.endpoint === "/get/u/getMyCPD") {
				return true;
			}
		},
		formTitle() {
			if (this.editedItem.id) {
				return "Edit CPD record for " + this.editedItem.name;
			} else {
				return "Add CPD Record";
			}
		},
		formTitleColor() {
			if (this.editedItem.myprogress == 1) {
				return "blue";
			} else if (this.editedItem.myprogress == 2) {
				return "green";
			} else if (this.editedItem.myprogress == 3) {
				return "pink";
			} else {
				return "blue";
			}
		},
		formDelete() {
			if (this.editedItem.id) {
				return true;
			} else {
				return false;
			}
		},
		formatedStartDate() {
			return this.editedItem.start_date
				? moment(this.editedItem.start_date).format("dddd, MMMM Do YYYY")
				: "";
		},
		formatedCompletedDate() {
			return this.editedItem.completed_date
				? moment(this.editedItem.completed_date).format("dddd, MMMM Do YYYY")
				: "";
		}
	}
};
</script>

