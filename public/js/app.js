(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cpd/CourseTile.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cpd/CourseTile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["id", "name", "description", "length", "slug", "rating", "cost", "access_details", "category_id", "courseprogress", "courserating", "coursereview", "created_at", "updated_at"],
  data: function data() {
    return {
      addtocoursename: "",
      addtocourseid: "",
      addtooptions: [{
        img: "hangouts.png",
        title: "Add To Shortlisted CPD",
        action: "addtoshortlist",
        stateid: 3
      }, {
        img: "inbox.png",
        title: "Add To In Progress CPD",
        action: "addtoinprogress",
        stateid: 1
      }, {
        img: "keep.png",
        title: "Add To Completed CPD",
        action: "addtocompleted",
        stateid: 2
      }],
      deleteFromShortlist: {
        img: "hangouts.png",
        title: "Delete From Shortlist",
        action: "delete"
      }
    };
  },
  created: function created() {},
  mounted: function mounted() {},
  methods: {
    clickCheck: function clickCheck(value) {
      alert("CLICK:" + value);
    },
    // addToMyCPD($action, $state_id) {
    // 	axios
    // 		.put("/put/u/addToMyCPD/" + this.addtocourseid + "/" + $state_id)
    // 		.then(() => {
    // 			this.fetch();
    // 		});
    // },
    // deleteFromMyCourses() {
    // 	axios
    // 		.delete("/delete/u/deleteFromMyCourses/" + this.addtocourseid)
    // 		.then(() => {
    // 			this.fetch();
    // 		});
    // },
    getRandomInt: function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    },
    randomTile: function randomTile(courseid) {
      return "https://picsum.photos/600/300/?random=" + courseid;
    },
    // randomTile(courseid) {
    // 	// let tilestyle = this.getRandomInt(3);
    //   let tilestyle = courseid;
    //   console.log(tilestyle);
    // 	if (tilestyle <= 3) {
    // 		return (
    // 			"https://generative-placeholders.glitch.me/image?width=600&height=300&style=mondrian&img=0" +
    // 			courseid
    // 		);
    // 	} else if (tilestyle <= 6) {
    // 		return (
    // 			"https://generative-placeholders.glitch.me/image?width=600&height=300&style=tiles&colors=49&img=0" +
    // 			courseid
    // 		);
    // 	} else if (tilestyle > 6) {
    // 		return (
    // 			"https://generative-placeholders.glitch.me/image?width=600&height=300&style=triangles&colors="+ courseid + "&gap=" +
    // 			this.getRandomInt(30, 80) +
    // 			"&img=0" +
    // 			courseid
    // 		);
    // 	}
    // },
    tileClick: function tileClick($id, $name) {
      alert("You Clicked course.id:" + $id + " course.name:" + $name + "!");
    },
    addcourse: function addcourse($action, $state) {
      alert("You Clicked " + $action + " with a state_id of " + $state);
    },
    setaddcoursedata: function setaddcoursedata($id, $name) {
      this.addtocourseid = $id;
      this.addtocoursename = $name;
      this.$emit("addcoursedata", this.addtocourseid, this.addtocoursename);
      return true;
    },
    addReview: function addReview(id) {
      this.$router.push("/r/add/" + id);
    },
    checkUserProgress: function checkUserProgress(courseprogress) {
      var state = 0;
      var length = courseprogress.length;
      var userid = 0;
      userid = this.$store.getters.getUserId;

      if (length > 0) {
        for (var i = 0; i < length; i = i + 1) {
          if (courseprogress[i].state_id == 1 && courseprogress[i].user_id == userid) {
            state = 1;
          }

          if (courseprogress[i].state_id == 2 && courseprogress[i].user_id == userid) {
            state = 2;
          }

          if (courseprogress[i].state_id == 3 && courseprogress[i].user_id == userid) {
            state = 3;
          }
        }

        return state;
      }
    },
    getUserRating: function getUserRating(courserating) {
      var usercourserating = 0;
      var length = courserating.length;
      var userid = 0;
      userid = this.$store.getters.getUserId;

      for (var i = 0; i < length; i++) {
        if (courserating[i].user_id == userid) {
          usercourserating += parseFloat(courserating[i].rating);
        }
      }

      return usercourserating;
    },
    getAverageRating: function getAverageRating(courserating) {
      var total = 0,
          length = courserating.length;

      for (var i = 0; i < length; i++) {
        total += parseFloat(courserating[i].rating);
      }

      courserating.avgRating = total / length;
      return courserating.avgRating;
    },
    roundOff: function roundOff(value, decimals) {
      return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
    },
    addRating: function addRating(value, id) {
      this.$emit("addRating", value, id);
    },
    courseDetails: function courseDetails(value) {
      this.$emit("closeappdrawer");
      this.$router.push({
        path: "/cpd/details/" + value,
        params: {
          review: true
        }
      });
    },
    getStarColor: function getStarColor(value) {
      if (value > 4) {
        return "green";
      }

      if (value >= 3) {
        return "amber";
      }

      if (value >= 2) {
        return "orange darken-3";
      }

      if (value < 2) {
        return "red";
      }

      if (value < 1) {
        return "black";
      }
    }
  },
  computed: {
    userid: function userid() {
      return this.$store.getters.getUserId;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cpd/SuggestCourseForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cpd/SuggestCourseForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["dialog"],
  data: function data() {
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
      "default": {
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
        timeout: 2000,
        x: null,
        y: "top"
      },
      nameRules: [function (value) {
        return !!value || "A course NAME is required.";
      }, function (value) {
        return value && value.length >= 3 || "Min 2 characters";
      }],
      categoryRules: [function (value) {
        return !!value || "Please select a CATEGORY.";
      }, function (value) {
        return value && value.length >= 3 || "Min 3 characters";
      }],
      descriptionRules: [function (value) {
        return !!value || "Please provide a DESCRIPTION of this course.";
      }, function (value) {
        return value && value.length >= 3 || "Min 3 characters";
      }],
      accessRules: [function (value) {
        return !!value || "Please provide a ACCESS DETAILS for this course.";
      }, function (value) {
        return value && value.length >= 3 || "Min 3 characters";
      }],
      costRules: [function (value) {
        return !!value || "Details of COSTs invovled, if no costs please enter 'Free'.";
      }, function (value) {
        return value && value.length >= 1 || "Min 1 characters";
      }]
    };
  },
  mounted: function mounted() {
    this.getCatFilters();
  },
  methods: {
    getCatFilters: function getCatFilters() {
      var _this = this;

      axios.get("/get/cc/catfilter").then(function (_ref) {
        var data = _ref.data;
        _this.categories = data.categories.map(function (categories) {
          return categories;
        });
      }).then(function () {// this.categories.unshift("All");
      });
    },
    close: function close() {
      this.$emit("close"); // if (this.$router.currentRoute.name == managecourses) {
      //   this.$router.push('/a/managecourses')
      // }
    },
    submit: function submit() {
      var _this2 = this;

      this.$refs.form.validate();

      if (this.$refs.form.validate()) {
        axios.post("/post/cpd/savecourse", this.suggested).then(function (response) {
          console.log(_this2.suggested);
          _this2.snackbar.color = "success";
          _this2.snackbar.text = "CPD Suggestion Submitted";
          _this2.snackbar.show = true;

          _this2.$emit("suggestedsnackbarupdate", _this2.snackbar);

          _this2.reset();

          _this2.close();
        });
      }
    },
    reset: function reset() {
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
/* harmony import */ var _components_cpd_SuggestCourseForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/cpd/SuggestCourseForm */ "./resources/js/components/cpd/SuggestCourseForm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["userid", "roleid", "avatar", "name", "school"],
  watch: {
    $route: function $route() {
      this.checkadminroute(); // this.checkmycpdroute();
    }
  },
  data: function data() {
    return {
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
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
        timeout: 2000,
        x: null,
        y: "top"
      },
      labelcolors: ["green lighten-2", "orange darken-2", "red darken-2", "purple lighten-1", "blue lighten-3", "teal darken-2", "pink darken-1", "indigo darken-4", "deep-purple darken-1", "deep-purple lighten-3", "deep-purple accent-4", "light-blue lighten-1", "light-green accent-3", "lime accent-2", "yellow accent-2", "yellow accent-4"]
    };
  },
  mounted: function mounted() {
    this.$store.commit("setName", this.name);
    this.$store.commit("setUserId", this.userid);
    this.$store.commit("setRoleId", this.roleid);
    this.$store.commit("setAvatar", this.avatar);
    this.getCategories();
  },
  methods: {
    getCategories: function getCategories() {
      var _this = this;

      axios.get("/get/cat/list").then(function (_ref) {
        var data = _ref.data;
        _this.categories = data.data;
      });
    },
    randomItem: function randomItem(items) {
      return items[Math.floor(Math.random() * items.length)];
    },
    tagcolor: function tagcolor(tag) {
      if (tag === "Compulsory") {
        return "yellow accent-3";
      } else {
        return "white";
      }
    },
    getlabelcolour: function getlabelcolour(id) {
      return this.randomItem(this.labelcolors);
    },
    gotoManageUsers: function gotoManageUsers() {
      this.$router.push("/a/manageusers");
    },
    gotoManageCPD: function gotoManageCPD() {
      this.$router.push("/a/managecourses");
    },
    gotoManageReviews: function gotoManageReviews() {
      this.$router.push("/a/managereviews");
    },
    gotoManageCategories: function gotoManageCategories() {
      this.$router.push("/a/managecategories");
    },
    gotoMyCPDRecord: function gotoMyCPDRecord() {
      this.$router.push("/u/mycpdrecord")["catch"](function (err) {});
    },
    gotoMyCPD: function gotoMyCPD() {
      this.$router.push("/u/mycourses");
    },
    gotoMyProfile: function gotoMyProfile() {
      this.$router.push("/u/myprofile");
    },
    gotoMyReviews: function gotoMyReviews() {
      this.$router.push("/u/myreviews");
    },
    gotoAllCPD: function gotoAllCPD() {
      this.$router.push("/cpd/all");
    },
    closeappdrawer: function closeappdrawer() {
      this.primaryDrawer.model = !this.primaryDrawer.model;
    },
    closeSuggestForm: function closeSuggestForm() {
      this.dialog = false;
    },
    logout: function logout() {
      axios.post("/logout").then(function (response) {
        if (response.status === 302 || 401) {
          window.location.href = "/login";
        } else {// throw error and go to catch block
        }
      })["catch"](function (error) {});
    },
    checkadminroute: function checkadminroute() {
      if (this.$route.path.indexOf("/a/") >= 0) {
        return true;
      } else {
        return false;
      }
    },
    // checkmycpdroute() {
    // 	if (this.$route.name == "usermycpdrecord") {
    // 		return false;
    // 		console.log("WTF");
    // 		console.log("WTF");
    // 	} else {
    // 		return true;
    // 	}
    // },
    suggestedsnackbarupdate: function suggestedsnackbarupdate(sb) {
      this.suggestedsnackbar = sb;
    }
  },
  computed: {
    checkmycpdroute: function checkmycpdroute() {
      if (this.$route.name == "usermycpdrecord") {
        return false;
        console.log("WTF");
        console.log("WTF");
      } else {
        return true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      colors: ["indigo", "warning", "pink darken-2", "red lighten-1", "deep-purple accent-4"],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/a/ManageCategories.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/a/ManageCategories.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
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
        timeout: 2000,
        x: null,
        y: "top"
      },
      max55chars: function max55chars(v) {
        return v.length <= 55 || "Input too long!";
      },
      search: "",
      datatableheaders: [{
        text: "Name",
        align: "left",
        sortable: true,
        value: "name"
      }, {
        text: "CPD",
        align: "center",
        sortable: true,
        value: "courses.length"
      }, {
        text: "",
        align: "right",
        sortable: false,
        value: "actions"
      }]
    };
  },
  mounted: function mounted() {
    this.fetch();
  },
  methods: {
    fetch: function fetch() {
      var _this = this;

      axios.get("/get/cc").then(function (_ref) {
        var data = _ref.data;
        _this.categories = data.data.category_courses;
      }).then(function () {
        setTimeout(function () {
          _this.loading = false;
        }, 250);
      });
    },
    save: function save(item) {
      var _this2 = this;

      this.category = item;
      axios.post("/post/cc/savecategory", this.category).then(function (response) {
        _this2.dialog = false;
        _this2.snackbar.color = "success";
        _this2.snackbar.text = response.data;
        _this2.snackbar.show = true;

        _this2.close();

        _this2.fetch();
      });
    },
    submit: function submit() {
      var _this3 = this;

      axios.post("/post/cc/savecategory", this.category).then(function (response) {
        _this3.dialog = false;

        _this3.fetch();

        _this3.close();

        setTimeout(function () {
          _this3.snackbar.color = "success";
          _this3.snackbar.text = response.data;
          _this3.snackbar.show = true;
        }, 1000);
      });
    },
    cancel: function cancel() {
      var _this4 = this;

      setTimeout(function () {
        _this4.category.name = "";
      }, 300);
      this.snackbar.show = true;
      this.snackbar.color = "error";
      this.snackbar.text = "Canceled";
      this.dialog = false;
    },
    open: function open() {
      this.snackbar.show = true;
      this.snackbar.color = "info";
      this.snackbar.text = "Edit Category Name";
    },
    close: function close() {
      var _this5 = this;

      setTimeout(function () {
        _this5.category.name = "";
      }, 300);
      console.log("Dialog closed");
      this.dialog = false;
    },
    deleteCategory: function deleteCategory(item) {
      var _this6 = this;

      axios["delete"]("/delete/cc/deleteCategory/" + item.id).then(function (response) {
        _this6.dialog = false;

        _this6.fetch();

        setTimeout(function () {
          _this6.snackbar.color = "red";
          _this6.snackbar.text = response.data;
          _this6.snackbar.show = true;
          _this6.editedItem = Object.assign({}, _this6.defaultItem);
          _this6.editedIndex = -1;
        }, 500);
      });
    },
    gotoCPD: function gotoCPD() {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/a/ManageCourses.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/a/ManageCourses.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_filter_date_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-filter-date-format */ "./node_modules/vue-filter-date-format/dist/vue-filter-date-format.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _this = this;

    return {
      loading: true,
      dialog: false,
      courses: [],
      cpdCompletionData: [],
      cpdCompletionDataLoaded: false,
      categoryfilter: "All",
      categorylabel: [],
      categorynames: [],
      categories: [],
      test: [],
      coursefiltertest: [],
      type: "Any",
      types: ["Any", "Active", "Inactive", "Suggested", "Personal"],
      search: "",
      catfilter: "",
      multisort: false,
      editedIndex: -1,
      editedItem: {
        name: "",
        category: [],
        description: "",
        access_details: "",
        viewcounter: 0,
        cost: 0,
        length: 0,
        startdate: "",
        enddate: "",
        active: 1,
        type: "",
        suggested_by: "",
        suggested_date: "",
        approved_by: "",
        approved_date: ""
      },
      defaultItem: {
        name: "",
        category: [],
        description: "",
        access_details: "",
        viewcounter: 0,
        cost: 0,
        length: 0,
        startdate: "",
        enddate: "",
        active: 0,
        type: "inactive",
        suggested_by: "",
        suggested_date: "",
        approved_by: "",
        approved_date: ""
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
      datatableheaders: [{
        text: "",
        // class: "hide",
        // align: " d-none",
        sortable: false,
        value: "type",
        width: "0%",
        filter: function filter(value) {
          if (_this.type === "Any") return true;
          if (!_this.type) return true;
          if (_this.type === "Personal") return value === "MyCPD";
          return value === _this.type.toLowerCase();
        }
      }, {
        text: "Name",
        align: "left",
        sortable: true,
        value: "name",
        width: "30%"
      }, {
        text: "",
        align: "left",
        sortable: true,
        value: "category",
        width: "10%"
      }, {
        text: "",
        align: " d-none",
        sortable: true,
        value: "categorylabel1",
        width: "10%"
      }, {
        text: "Completed",
        align: "center",
        sortable: true,
        value: "completed"
      }, {
        text: "Started",
        align: "center",
        sortable: true,
        value: "inprogress"
      }, {
        text: "Shortlisted",
        align: "center",
        sortable: true,
        value: "shortlisted"
      }, {
        text: "Avg Rating",
        align: "center",
        sortable: true,
        value: "avgrating",
        width: "110px"
      }, {
        text: "Ratings",
        align: "center",
        sortable: true,
        value: "ratings"
      }, {
        text: "Reviews",
        align: "center",
        sortable: true,
        value: "reviews"
      }, {
        text: "Views",
        align: "center",
        sortable: true,
        value: "viewcounter"
      }, {
        text: "Date Added",
        align: "left",
        sortable: true,
        value: "approved_date",
        width: "120px"
      }, {
        text: "",
        align: "right",
        sortable: false,
        value: "actions",
        width: "170px"
      }],
      rules: [function (value) {
        return !!value || "Required.";
      }, function (value) {
        return value && value.length >= 3 || "Min 3 characters";
      }]
    };
  },
  created: function created() {// this.getCPDCompletionData();
  },
  mounted: function mounted() {
    this.fetch();
    this.getCategoryNames();
    this.getCatFilters();
    this.getCPDCompletionData();
  },
  methods: {
    fetch: function fetch() {
      var _this2 = this;

      axios.get("/get/cpd/all").then(function (_ref) {
        var data = _ref.data;
        _this2.courses = data.data.courses;

        _this2.getCPDCompletionData();
      }).then(function () {
        setTimeout(function () {
          _this2.loading = false;
        }, 1000);
      });
    },
    getCategoryNames: function getCategoryNames() {
      var _this3 = this;

      axios.get("/get/cc/catfilter").then(function (_ref2) {
        var data = _ref2.data;
        _this3.categorynames = data.categories.map(function (categorynames) {
          return categorynames;
        }); // this.test = data.categories.map(categorynames => categorynames.name);
      }).then(function () {// console.log(this.test);
      });
    },
    getCatFilters: function getCatFilters() {
      var _this4 = this;

      axios.get("/get/cc/catfilter").then(function (_ref3) {
        var data = _ref3.data;
        _this4.categories = data.categories.map(function (categories) {
          return categories.name;
        });
      }).then(function () {
        _this4.categories.unshift("All");
      });
    },
    checkrow: function checkrow(value) {
      this.$router.push("/cpd/details/" + value.name);
    },
    roundOff: function roundOff(value, decimals) {
      return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
    },
    getStarColor: function getStarColor(value) {
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
    courseDetails: function courseDetails(value) {
      // this.$emit("closeappdrawer");
      this.$router.push("/cpd/details/" + value.id);
    },
    close: function close() {
      var _this5 = this;

      this.dialog = false;
      setTimeout(function () {
        _this5.editedItem = Object.assign({}, _this5.defaultItem);
        _this5.editedIndex = -1;
      }, 300);
    },
    editItem: function editItem(item) {
      this.editedIndex = this.courses.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteCPD: function deleteCPD() {
      var _this6 = this;

      axios["delete"]("/delete/cpd/deleteCourse/" + this.editedItem.id).then(function (response) {
        _this6.dialog = false;

        _this6.fetch();

        _this6.snackbar.color = "red";
        _this6.snackbar.text = response.data;
        _this6.snackbar.show = true;
        setTimeout(function () {
          _this6.editedItem = Object.assign({}, _this6.defaultItem);
          _this6.editedIndex = -1;
        }, 300);
      });
    },
    submit: function submit() {
      var _this7 = this;

      axios.post("/post/cpd/savecourse", this.editedItem).then(function (response) {
        _this7.dialog = false;

        _this7.fetch();

        _this7.snackbar.color = "success";
        _this7.snackbar.text = response.data;
        _this7.snackbar.show = true;

        _this7.close();
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this7.errors = error.response.data.errors || {};
        }
      });
    },
    getCPDCompletionData: function getCPDCompletionData() {
      var _this8 = this;

      if (this.adminuser) {
        axios.get("/get/cpdCompletionData/cpd").then(function (_ref4) {
          var data = _ref4.data;
          console.log("WELL WELL WELL");
          console.log(data);
          _this8.cpdCompletionData = data.cpdCompletionData;
        }).then(function () {
          setTimeout(function () {
            _this8.cpdCompletionDataLoaded = true;
          }, 1000);
        });
      }
    },
    clickCheck: function clickCheck(item) {
      alert("you clicked me: " + item);
    },
    filterCategory: function filterCategory(category) {
      console.log(category + this.search);

      if (category == this.search) {
        this.search = "";
      } else {
        this.search = category;
      }

      return true;
    },
    filterType: function filterType(type) {
      if (type.type == this.type.toLowerCase() || this.type == "Personal" && type.type == "MyCPD") {
        this.type = "Any";
      } else if (type.type == "MyCPD") {
        this.type = "Personal";
      } else if (type.type == "MyCPD") {
        this.type = "Personal";
      } else {
        this.type = this.capitalize(type.type);
      }

      return true;
    },
    gotest: function gotest(item) {
      item = item.map(function (item) {
        return item.name;
      });
      item = item.toString();
      return item;
    },
    wiggle: function wiggle(test) {
      console.log("TEST::: " + test);
      var i = 0;
      var length = test.length;
      var wiggle = [];

      for (var i = 0; i < length; i++) {
        wiggle.push(test.lenth[i].name);
      }

      console.log(wiggle);
      return true;
    },
    capitalize: function capitalize(string) {
      if (!string) return "";
      string.toString();
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? "New CPD" : "Edit CPD";
    },
    formDelete: function formDelete() {
      return this.editedIndex === -1 ? false : true;
    },
    adminuser: function adminuser() {
      if (this.$store.getters.getRoleId == 1) {
        return true;
      } else {
        return false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/a/ManageReviews.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/a/ManageReviews.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _this = this;

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
        "public": 1
      },
      defaultItem: {
        review: "",
        course: "",
        reviewer: "",
        "public": 1
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
      datatableheaders: [// {
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
      }, {
        text: "Review",
        align: "left",
        sortable: true,
        value: "review",
        width: "30%"
      }, {
        text: "CPD",
        align: "left",
        sortable: true,
        value: "course",
        width: "20%",
        filter: function filter(value) {
          if (_this.course === "All") return true;
          if (!_this.course) return true;
          return value === _this.course;
        }
      }, {
        text: "Reviewer",
        align: "left",
        sortable: true,
        value: "reviewer",
        width: "10%",
        filter: function filter(value) {
          if (_this.reviewer === "Any") return true;
          if (!_this.reviewer) return true;
          return value === _this.reviewer;
        }
      }, {
        text: "Date",
        align: "center",
        sortable: true,
        value: "date"
      }, // {
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
      }],
      rules: [function (value) {
        return !!value || "Required.";
      }, function (value) {
        return value && value.length >= 3 || "Min 3 characters";
      }]
    };
  },
  mounted: function mounted() {
    this.fetch();
    this.getCPDNames();
    this.getReviewerNames();
  },
  methods: {
    fetch: function fetch() {
      var _this2 = this;

      axios.get("/get/r/all").then(function (_ref) {
        var data = _ref.data;
        _this2.reviews = data.data.reviews;
      }).then(function () {
        setTimeout(function () {
          _this2.loading = false;
        }, 1000);
      });
    },
    getCPDNames: function getCPDNames() {
      var _this3 = this;

      axios.get("/get/cpd/all").then(function (_ref2) {
        var data = _ref2.data;
        _this3.courses = data.data.courses.map(function (courses) {
          return courses.name;
        });
      }).then(function () {
        _this3.courses.unshift("All");
      });
    },
    getReviewerNames: function getReviewerNames() {
      var _this4 = this;

      axios.get("/get/r/reviewers").then(function (_ref3) {
        var data = _ref3.data;
        _this4.reviewers = data.reviewers.map(function (reviewers) {
          return reviewers.name;
        });
      }).then(function () {
        _this4.reviewers.unshift("Any");
      });
    },
    checkrow: function checkrow(value) {
      // this.$emit("closeappdrawer");
      this.$router.push("/cpd/details/" + value.name);
    },
    roundOff: function roundOff(value, decimals) {
      return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
    },
    getStarColor: function getStarColor(value) {
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
    reviewDetails: function reviewDetails(value) {
      // this.$emit("closeappdrawer");
      alert("Router Push: /r/" + this.$store.getters.getUserId + "/" + value.id); // this.$router.push("/cpd/details/" + value.name);
    },
    close: function close() {
      var _this5 = this;

      this.dialog = false;
      setTimeout(function () {
        _this5.editedItem = Object.assign({}, _this5.defaultItem);
        _this5.editedIndex = -1;
      }, 300);
    },
    editItem: function editItem(item) {
      this.editedIndex = this.reviews.indexOf(item);
      this.editedItem = Object.assign({}, item);

      if (this.editedItem["public"] == 1) {
        this.editedItem["public"] = true;
      } else {
        this.editedItem["public"] = false;
      }

      this.dialog = true;
    },
    gotoCPD: function gotoCPD(item) {
      this.editedIndex = this.reviews.indexOf(item);
      this.editedItem = Object.assign({}, item);
      console.log(item); // this.dialog = true;

      this.$router.push("/cpd/details/" + this.editedItem.id);
    },
    deleteItem: function deleteItem(item) {},
    submit: function submit() {
      var _this6 = this;

      this.errors = {};
      axios.post("/post/r/savereview", this.editedItem).then(function (response) {
        _this6.dialog = false;

        _this6.fetch();

        _this6.snackbar.color = "success";
        _this6.snackbar.text = response.data;
        _this6.snackbar.show = true;
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this6.errors = error.response.data.errors || {};
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
    clickCheck: function clickCheck(item) {
      alert("you clicked me: " + item);
    },
    filterCPD: function filterCPD(item) {
      if (item.course == this.course) {
        this.course = "All";
      } else {
        this.course = item.course;
      }

      return true;
    },
    filterReviewer: function filterReviewer(item) {
      if (item.reviewer == this.reviewer) {
        this.reviewer = "Any";
      } else {
        this.reviewer = item.reviewer;
      }

      return true;
    },
    publicchip: function publicchip(item) {
      if (item["public"] == 1) {
        return true;
      } else {
        return false;
      }
    },
    publicPrivateLabel: function publicPrivateLabel(item) {
      if (item) {
        return "Public";
      } else {
        return "Private";
      }
    }
  },
  computed: {
    formTitle: function formTitle() {
      console.log(this.editedIndex);
      return this.editedIndex === -1 ? "Add Review" : "Manage Review";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/a/ManageUsers.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/a/ManageUsers.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _this = this;

    return {
      loading: true,
      users: [],
      search: "",
      school: "All",
      schools: [],
      multisort: false,
      datatableheaders: [{
        text: "Name",
        align: "left",
        sortable: true,
        value: "name"
      }, {
        text: "School",
        align: "left",
        sortable: true,
        value: "school",
        filter: function filter(value) {
          if (_this.school === "All") return true;
          if (!_this.school) return true;
          return value === _this.school;
        }
      }, {
        text: "Completed",
        align: "center",
        sortable: true,
        value: "completed"
      }, {
        text: "Started",
        align: "center",
        sortable: true,
        value: "inprogress"
      }, {
        text: "Shortlisted",
        align: "center",
        sortable: true,
        value: "shortlisted"
      }, {
        text: "Total",
        align: "center",
        sortable: true,
        value: "totalcourses"
      }, {
        text: "Avg Rating",
        align: "left",
        sortable: true,
        value: "avgrating"
      }, {
        text: "Ratings",
        align: "center",
        sortable: true,
        value: "ratings"
      }, {
        text: "Reviews",
        align: "center",
        sortable: true,
        value: "reviews"
      }, {
        text: "Last Login",
        align: "center",
        sortable: true,
        value: "last_login_at"
      }, {
        text: "",
        align: "center",
        sortable: false,
        value: "actions"
      }]
    };
  },
  mounted: function mounted() {
    this.fetch();
    this.getSchools();
  },
  methods: {
    fetch: function fetch() {
      var _this2 = this;

      axios.get("/get/u/all").then(function (_ref) {
        var data = _ref.data;
        _this2.users = data.data.users;
      }).then(function () {
        setTimeout(function () {
          _this2.loading = false;
        }, 1000);
      });
    },
    getSchools: function getSchools() {
      var _this3 = this;

      axios.get("/get/schools").then(function (_ref2) {
        var data = _ref2.data;
        _this3.schools = data.schools.map(function (schools) {
          return schools.school;
        });
      }).then(function () {
        _this3.schools.unshift("All");
      });
    },
    checkrow: function checkrow(value) {
      alert(value.name);
    },
    roundOff: function roundOff(value, decimals) {
      return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
    },
    getStarColor: function getStarColor(value) {
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
    viewUserCPD: function viewUserCPD(user) {
      this.$router.push("/u/" + user.id + "/mycpdrecord")["catch"](function (err) {});
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/cpd/CourseDetails.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/cpd/CourseDetails.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["id", "review", "snackbar"],
  data: function data() {
    return {
      loading: true,
      addreview: this.review,
      addtocoursename: "",
      addtocourseid: "",
      course: [],
      endpoint: "/get/cpd/details/" + this.id,
      myrating: 0,
      mystate: 0,
      publicreviews: [],
      privatereviews: [],
      viewcountupdated: 0,
      snackbar1: {
        color: "",
        mode: "",
        show: false,
        text: "",
        timeout: 2000,
        y: "top"
      }
    };
  },
  mounted: function mounted() {
    this.fetch();
  },
  methods: {
    fetch: function fetch() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.endpoint).then(function (_ref) {
        var data = _ref.data;
        _this.course = data.data.course[0];
        _this.mystate = _this.course.mystate || 0;
        _this.myrating = _this.course.myrating;
        _this.publicreviews = _this.course.publicreviews;
        _this.privatereviews = _this.course.privatereviews;
      }).then(function () {
        _this.loading = false;

        if (_this.viewcountupdated == 0) {
          _this.updateViewCounter();
        }
      });
    },
    roundOff: function roundOff(value, decimals) {
      return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
    },
    checkmystate: function checkmystate(mystate, state) {
      if (state == mystate) {
        return false;
      } else {
        return true;
      }
    },
    statechipcolour: function statechipcolour(state) {
      if (this.mystate == 0) {
        return "";
      }

      if (this.mystate == state) {
        if (state == 1) {
          return "blue";
        }

        if (state == 2) {
          return "green";
        }

        if (state == 3) {
          return "pink";
        }
      }
    },
    changestate: function changestate(state) {
      if (this.mystate == state) {
        this.deleteFromMyCPD();
      } else {
        this.addToMyCPD(state);
      }
    },
    addToMyCPD: function addToMyCPD(state) {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/put/u/addToMyCPD/" + this.course.id + "/" + state).then(function () {
        _this2.fetch();
      });
    },
    deleteFromMyCPD: function deleteFromMyCPD() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/delete/u/deleteFromMyCourses/" + this.course.id).then(function () {
        _this3.fetch();
      });
    },
    updateViewCounter: function updateViewCounter() {
      var _this4 = this;

      this.course.viewcounter = this.course.viewcounter + 1;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/put/cpd/updateViewCounter/" + this.course.id).then(function () {
        _this4.viewcountupdated = 1;

        _this4.fetch();
      });
    },
    addRating: function addRating(value) {
      var _this5 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/put/u/addRating/" + this.course.id + "/" + value).then(function (response) {
        _this5.fetch();

        _this5.snackbar1.color = "success";
        _this5.snackbar1.text = response.data;
        _this5.snackbar1.show = true;
      });
    },
    getStarColor: function getStarColor(value) {
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
    back: function back(val) {
      // console.log(this.$router.go(val));
      this.$router.go(val);
    }
  },
  computed: {
    fives: function fives() {
      var counter = 0;
      counter = this.course.fiveratingscount / this.course.ratingscount * 100;
      return counter;
    },
    fours: function fours() {
      var counter = 0;
      counter = this.course.fourratingscount / this.course.ratingscount * 100;
      return counter;
    },
    threes: function threes() {
      var counter = 0;
      counter = this.course.threeratingscount / this.course.ratingscount * 100;
      return counter;
    },
    twos: function twos() {
      var counter = 0;
      counter = this.course.tworatingscount / this.course.ratingscount * 100;
      return counter;
    },
    ones: function ones() {
      var counter = 0;
      counter = this.course.oneratingscount / this.course.ratingscount * 100;
      return counter;
    },
    adminuser: function adminuser() {
      if (this.$store.getters.getRoleId == 1) {
        return true;
      } else {
        return false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/cpd/CourseList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/cpd/CourseList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["name", "id"],
  watch: {
    $route: function $route() {
      this.checkroute();
      this.fetch();
    }
  },
  data: function data() {
    return {
      // csrf: document
      // 	.querySelector('meta[name="csrf-token"]')
      //   .getAttribute("content"),
      // userid: document
      // 	.querySelector('meta[name="user-id"]')
      //   .getAttribute("content"),
      showbanner: true,
      loading: true,
      loadingtiles: true,
      colors: ["indigo", "warning", "pink darken-2", "red lighten-1", "deep-purple accent-4"],
      slides: ["GDPR Training", "Level 2 Safeguarding", "Third", "Fourth", "Fifth"],
      courses: [],
      endpoint: "/get/cpd",
      // rating: 4.5,
      addtocoursename: "",
      addtocourseid: "",
      addtosheet: false,
      addtooptions: [{
        buttoncolor: "pink",
        icon: "mdi-heart",
        title: "Add to my shortlist",
        action: "addtoshortlist",
        stateid: 3
      }, {
        buttoncolor: "blue",
        icon: "mdi-alarm",
        title: "Set as started",
        action: "addtoinprogress",
        stateid: 1
      }, {
        buttoncolor: "green",
        icon: "mdi-check",
        title: "Set as completed",
        action: "addtocompleted",
        stateid: 2
      }],
      deleteFromShortlist: {
        buttoncolor: "red",
        icon: "mdi-delete-alert",
        title: "Remove from my lists",
        action: "delete"
      },
      snackbar: {
        color: "",
        mode: "",
        show: false,
        text: "",
        timeout: 2000,
        y: "top"
      }
    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.checkroute();
    this.fetch();
  },
  methods: {
    checkroute: function checkroute() {
      if (this.$route.path === "/cpd/all" || this.$route.path === "/" || this.$route.path === "/home") {
        this.endpoint = "/get/cpd";
        this.loading = true;
      } else {
        this.endpoint = "/get/cat/" + this.name;
        this.showbanner = false;
      }
    },
    fetch: function fetch() {
      var _this = this;

      this.loadingtiles = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.endpoint).then(function (_ref) {
        var data = _ref.data;
        _this.courses = data.data.category_courses;
      }).then(function () {
        _this.loading = false;
        _this.loadingtiles = false;

        if (_this.$route.path === "/cpd/all" || _this.$route.path === "/" || _this.$route.path === "/home") {
          _this.showbanner = true;
        }
      });
    },
    addToMyCPD: function addToMyCPD($action, $state_id) {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/put/u/addToMyCPD/" + this.addtocourseid + "/" + $state_id).then(function () {
        _this2.fetch();
      });
    },
    deleteFromMyCPD: function deleteFromMyCPD() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/delete/u/deleteFromMyCourses/" + this.addtocourseid).then(function () {
        _this3.fetch();
      });
    },
    randomTile: function randomTile($courseid) {
      return "https://picsum.photos/295/255/?random=" + $courseid;
    },
    addcoursedata: function addcoursedata(id, name) {
      console.log("Hello from CourseList.vue");
      this.addtosheet = true;
      this.addtocourseid = id;
      this.addtocoursename = name;
      return true;
    },
    addRating: function addRating(value, id) {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/put/u/addRating/" + id + "/" + value).then(function (response) {
        _this4.fetch();

        _this4.snackbar.color = "success";
        _this4.snackbar.text = response.data;
        _this4.snackbar.show = true;
      });
    }
  },
  computed: {
    userid: function userid() {
      return this.$store.getters.getUserId;
    },
    filteredcourses: function filteredcourses() {
      var _this5 = this;

      return this.courses.filter(function (course) {
        return course.name.toLowerCase().include(_this5.search.toLowerCase());
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/r/AddReview.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/r/AddReview.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["courseid"],
  data: function data() {
    return {
      loading: true,
      coursename: "",
      fromreview: true,
      review: {
        courseid: this.courseid,
        course: "",
        review: "",
        "public": false
      },
      snackbar: {
        color: "",
        mode: "",
        show: false,
        text: "",
        timeout: 2000,
        x: null,
        y: "top"
      }
    };
  },
  mounted: function mounted() {
    this.fetch();
    this.review.course = this.coursename;
  },
  methods: {
    fetch: function fetch() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/get/cpd/name/" + this.courseid).then(function (_ref) {
        var data = _ref.data;
        console.log(data.course);
        _this.coursename = data.course[0].name;

        _this.getMyReview(); // this.review.course = this.cname;


        _this.review.course = _this.coursename;
        _this.loading = false;
      });
    },
    getMyReview: function getMyReview() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/get/u/myreview/" + this.courseid).then(function (_ref2) {
        var data = _ref2.data;
        console.log(data.myreview);

        if (data.myreview.length > 0) {
          _this2.review = data.myreview[0];
          _this2.review.course = _this2.cname;

          if (_this2.review["public"] == 1) {
            _this2.review["public"] = true;
          } else {
            _this2.review["public"] = false;
          }
        } // this.review.course = this.cname;

      });
    },
    submit: function submit() {
      var _this3 = this;

      // this.errors = {};
      // this.review.course = this.cname;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/post/r/savereview", this.review).then(function (response) {
        _this3.dialog = false;
        _this3.snackbar.color = "success";
        _this3.snackbar.text = response.data;
        _this3.snackbar.show = true;

        _this3.$router.push({
          path: "/cpd/details/" + _this3.courseid,
          params: {
            snackbar: _this3.snackbar,
            review: false
          }
        });
      });
    },
    close: function close() {
      this.$router.push({
        path: "/cpd/details/" + this.courseid,
        params: {
          review: false
        }
      });
    },
    publicPrivateLabel: function publicPrivateLabel(item) {
      if (item) {
        return "Public";
      } else {
        return "Private";
      }
    }
  },
  computed: {
    cname: function cname() {
      this.review.course = this.coursename;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/MyCPDRecord.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/u/MyCPDRecord.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_filter_date_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-filter-date-format */ "./node_modules/vue-filter-date-format/dist/vue-filter-date-format.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["userid"],
  watch: {
    $route: function $route(to, from) {
      this.to = to;
      this.from = from;

      if (this.to.path != this.from.path) {
        this.loading = true;
        this.fetch();
      }
    }
  },
  data: function data() {
    var _this = this;

    return {
      responsedata: "response",
      file: "",
      loading: true,
      uploadingFile: false,
      endpoint: "",
      to: {},
      from: {},
      dialog: false,
      confirmDeleteUploadDialog: false,
      confirmDeleteCPDDialog: false,
      start_datepicker: false,
      completed_datepicker: false,
      mycpd: [],
      searchcompleted: "",
      searchothers: "",
      type: "All",
      types: ["All", "Started", "Shortlisted"],
      rulesCPDName: [function (v) {
        return !!v || "CPD name is required";
      }, function (v) {
        return v && v.length >= 3 || "Name must be longer than 3 characters";
      }],
      rulesCPDDescription: [function (v) {
        return !!v || "CPD description is required";
      }, function (v) {
        return v && v.length >= 3 || "description must be longer than 3 characters";
      }],
      editedCPD: {
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
      defaultCPD: {
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
        timeout: 2000,
        y: "top"
      },
      completeddatatableheaders: [{
        text: "",
        align: "left",
        value: "myprogress",
        width: "40px"
      }, {
        text: "CPD Name",
        align: "left",
        value: "name"
      }, {
        text: "Completed Date",
        align: "left",
        value: "completed_date"
      }, {
        text: "My Rating",
        align: "center",
        value: "myrating"
      }, {
        text: "Avg Rating",
        align: "center d-none",
        value: "avgrating"
      }, {
        text: "Review",
        align: "left d-none",
        value: "myreview",
        width: "25%"
      }, {
        text: "",
        align: "right",
        value: "actions"
      }],
      otherdatatableheaders: [{
        text: "",
        align: "left",
        value: "myprogress",
        width: "40px",
        filter: function filter(value) {
          if (_this.type === "All") return true;
          if (!_this.type) return true; // if (this.type === "Complete") return value === 2;

          if (_this.type === "Started") return value === 1;
          if (_this.type === "Shortlisted") return value === 3;
        }
      }, {
        text: "CPD Name",
        align: "left",
        value: "name"
      }, {
        text: "Start Date",
        align: "left",
        value: "start_date"
      }, {
        text: "Avg Rating",
        align: "center",
        value: "avgrating"
      }, {
        text: "",
        align: "right",
        value: "actions"
      }]
    };
  },
  mounted: function mounted() {
    this.fetch();
  },
  methods: {
    fetch: function fetch() {
      var _this2 = this;

      if (this.userid) {
        this.endpoint = "/get/u/getMyCPD/" + this.userid;
      } else {
        this.endpoint = "/get/u/getMyCPD";
      }

      if (this.endpoint == "/get/u/getMyCPD") {
        this.editedCPD.uid = this.$store.getters.getUserId;
      }

      axios.get(this.endpoint).then(function (_ref) {
        var data = _ref.data;
        _this2.mycpd = data.mycpd;
      }).then(function () {
        setTimeout(function () {
          _this2.loading = false;
        }, 300);
      });
    },
    roundOff: function roundOff(value, decimals) {
      return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
    },
    gotoCPD: function gotoCPD(item) {
      this.$router.push("/cpd/details/" + item.id);
    },
    changestate: function changestate(item, state) {
      var _this3 = this;

      if (this.myprogress == state) {
        return true;
      } else {
        axios.put("/put/u/addToMyCPD/" + item.id + "/" + state).then(function () {
          _this3.fetch();
        });
      }
    },
    onFileChange: function onFileChange(e) {
      console.log(e.target.files[0]); // this.filename = "Selected File: " + e.target.files[0].name;
      // this.file = e.target.files[0];
    },
    rowClick: function rowClick(item) {
      this.editedIndex = item.id;
      this.editedCPD = Object.assign({}, item);
      this.editedCPD.username = this.mycpd.user.name;
      this.dialog = true;
    },
    editRecord: function editRecord(item) {
      this.editedIndex = item.id;
      this.editedCPD = Object.assign({}, item);
      this.editedCPD.username = this.mycpd.user.name;
      this.dialog = true;
    },
    deleteRecord: function deleteRecord(item) {
      alert("Delete Function not ready");
    },
    submit: function submit() {
      var _this4 = this;

      console.log(this.editedCPD);
      console.log(this.editedCPD);
      axios.post("/post/u/updateMyCPD", this.editedCPD).then(function ($data) {
        // this.dialog = false;
        _this4.responsedata = $data.data.response;

        if (_this4.editedCPD.files) {
          for (var i = 0; i < _this4.editedCPD.files.length; i++) {
            if (_this4.editedCPD.files[i].id) {
              continue;
            }

            var formData = new FormData();
            formData.append("file", _this4.editedCPD.files[i]);
            formData.append("course_id", $data.data.course_id);
            formData.append("user_id", _this4.editedCPD.uid);
            formData.append("username", _this4.editedCPD.username);
            axios.post("/post/u/uploadCertificate", formData, {
              headers: {
                "content-type": "multipart/form-data",
                "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content
              }
            });
          }
        }

        _this4.dialog = false;

        _this4.fetch();

        _this4.snackbar.color = "success";
        _this4.snackbar.text = _this4.responsedata.original;
        _this4.snackbar.show = true;

        _this4.close();

        _this4.fetch();
      })["catch"](function (error) {
        console.log("ZDFLKGHDLKFJHG");
        console.log(error);
      }); // this.reset();
    },
    uploadFiles: function uploadFiles() {
      var _this5 = this;

      if (this.editedCPD.files && this.editedCPD.id) {
        this.uploadingFile = true;

        for (var i = 0; i < this.editedCPD.files.length; i++) {
          if (this.editedCPD.files[i].id) {
            continue;
          }

          var formData = new FormData();
          formData.append("file", this.editedCPD.files[i]);
          formData.append("course_id", this.editedCPD.id);
          formData.append("user_id", this.editedCPD.uid);
          formData.append("username", this.editedCPD.username);
          axios.post("/post/u/uploadCertificate", formData, {
            headers: {
              "content-type": "multipart/form-data",
              "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content
            }
          });
        }
      }

      this.snackbar.color = "success";
      this.snackbar.text = "File Uploaded Successfully";
      this.snackbar.show = true;
      setTimeout(function () {
        _this5.fetch();
      }, 250);
      setTimeout(function () {
        _this5.refreshEditedItem();
      }, 250);
    },
    close: function close() {
      var _this6 = this;

      this.dialog = false;
      setTimeout(function () {
        _this6.editedCPD = Object.assign({}, _this6.defaultCPD);
      }, 300);
    },
    getStarColor: function getStarColor(value) {
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
    clearCompletedDate: function clearCompletedDate() {
      this.editedCPD.completed_date = null;
    },
    clearStartDate: function clearStartDate() {
      this.editedCPD.start_date = null;
    },
    publicchip: function publicchip(item) {
      if (item.myreviewpublic == 1) {
        return true;
      } else {
        return false;
      }
    },
    publicPrivateLabel: function publicPrivateLabel(item) {
      if (item) {
        return "This review can be seen by all users";
      } else {
        return "This review is private";
      }
    },
    confirmDeleteUpload: function confirmDeleteUpload(upload) {
      this.deleteCertificate = upload;
      this.confirmDeleteUploadDialog = true;
    },
    cancelDeleteUpload: function cancelDeleteUpload() {
      this.deleteCertificate = this.defaultCertificate;
      this.confirmDeleteUploadDialog = false;
    },
    doDeleteCertificate: function doDeleteCertificate(id) {
      var _this7 = this;

      if (id) {
        axios["delete"]("/delete/u/deleteCertificate/" + id).then(function (response) {
          _this7.deleteCertificate = _this7.defaultCertificate;
          _this7.confirmDeleteUploadDialog = false;
          _this7.snackbar.color = "red";
          _this7.snackbar.text = response.data;
          _this7.snackbar.show = true;
          setTimeout(function () {
            _this7.refreshEditedItem();
          }, 100);
        });
      }
    },
    confirmDeleteCPD: function confirmDeleteCPD() {
      this.confirmDeleteCPDDialog = true;
    },
    cancelDeleteCPD: function cancelDeleteCPD() {
      this.editedCPD = this.defaultCPD;
      this.confirmDeleteCPDDialog = false;
    },
    doDeleteCPD: function doDeleteCPD(id) {
      var _this8 = this;

      if (id) {
        if (this.editedCPD.mycertificates) {
          for (var i = 0; i < this.editedCPD.mycertificates.length; i++) {
            this.doDeleteCertificate(this.editedCPD.mycertificates[i].id);
          }
        }

        if (this.editedCPD.myprogress) {
          this.doDeleteMyProgress();
        }

        if (this.editedCPD.myrating) {
          this.doDeleteMyRating();
        }

        if (this.editedCPD.myreview) {
          this.doDeleteMyReview();
        }

        axios["delete"]("/delete/cpd/deleteCourse/" + id).then(function (response) {
          _this8.editedCPD = _this8.defaultCPD;
          _this8.confirmDeleteCPDDialog = false;
          _this8.dialog = false;
          _this8.snackbar.color = "red";
          _this8.snackbar.text = response.data;
          _this8.snackbar.show = true;
          setTimeout(function () {
            _this8.refreshEditedItem();
          }, 100);
        });
      }
    },
    doDeleteMyProgress: function doDeleteMyProgress() {
      axios["delete"]("/delete/u/deleteMyProgress/" + this.editedCPD.myprogressid).then(function (response) {});
    },
    doDeleteMyRating: function doDeleteMyRating() {
      axios["delete"]("/delete/u/deleteMyRating/" + this.editedCPD.myratingid).then(function (response) {});
    },
    doDeleteMyReview: function doDeleteMyReview() {
      axios["delete"]("/delete/u/deleteMyReview/" + this.editedCPD.myreviewid).then(function (response) {});
    },
    refreshEditedItem: function refreshEditedItem() {
      var _this9 = this;

      axios.get(this.endpoint).then(function (_ref2) {
        var data = _ref2.data;
        _this9.mycpd = data.mycpd;

        if (_this9.mycpd.completedcourses) {
          for (var i = 0; i < _this9.mycpd.completedcourses.length; i++) {
            if (_this9.mycpd.completedcourses[i].id == _this9.editedCPD.id) {
              _this9.editedCPD = _this9.mycpd.completedcourses[i];
              continue;
            }
          }
        }

        if (_this9.mycpd.othercourses) {
          for (var _i = 0; _i < _this9.mycpd.othercourses.length; _i++) {
            if (_this9.mycpd.othercourses[_i].id == _this9.editedCPD.id) {
              _this9.editedCPD = _this9.mycpd.othercourses[_i];
              continue;
            }
          }
        }
      });
      this.uploadingFile = false;
    }
  },
  computed: {
    mycpdcheck: function mycpdcheck() {
      if (this.userid === this.$store.getters.getUserId) {
        return true;
      }

      if (this.endpoint === "/get/u/getMyCPD") {
        return true;
      }
    },
    formTitle: function formTitle() {
      if (this.editedCPD.id) {
        return "Edit CPD record for " + this.editedCPD.name;
      } else {
        return "Add CPD Record";
      }
    },
    formTitleColor: function formTitleColor() {
      if (this.editedCPD.myprogress == 1) {
        return "blue";
      } else if (this.editedCPD.myprogress == 2) {
        return "green";
      } else if (this.editedCPD.myprogress == 3) {
        return "pink";
      } else {
        return "blue";
      }
    },
    canEditCPD: function canEditCPD() {
      if (!this.editedCPD.id) {
        return true;
      } else if (this.editedCPD.uid == this.$store.getters.getUserId && this.editedCPD.type === "MyCPD") {
        console.log("HEELLLLOOO");
        return true;
      } else {
        return false;
      }
    },
    formatedStartDate: function formatedStartDate() {
      return this.editedCPD.start_date ? moment__WEBPACK_IMPORTED_MODULE_2___default()(this.editedCPD.start_date).format("dddd, MMMM Do YYYY") : "";
    },
    formatedCompletedDate: function formatedCompletedDate() {
      return this.editedCPD.completed_date ? moment__WEBPACK_IMPORTED_MODULE_2___default()(this.editedCPD.completed_date).format("dddd, MMMM Do YYYY") : "";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/MyCourses.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/u/MyCourses.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      endpoint: "/get/u/getMyCourses",
      mycompletedcourses: [],
      myinprogresscourses: [],
      myshortlistedcourses: [],
      addtocoursename: "",
      addtocourseid: "",
      addtosheet: false,
      addtooptions: [{
        buttoncolor: "pink",
        icon: "mdi-heart",
        title: "Add to my shortlist",
        action: "addtoshortlist",
        stateid: 3
      }, {
        buttoncolor: "blue",
        icon: "mdi-alarm",
        title: "Set as started",
        action: "addtoinprogress",
        stateid: 1
      }, {
        buttoncolor: "green",
        icon: "mdi-check",
        title: "Set as completed",
        action: "addtocompleted",
        stateid: 2
      }],
      deleteFromShortlist: {
        buttoncolor: "red",
        icon: "mdi-delete-alert",
        title: "Remove from my lists",
        action: "delete"
      }
    };
  },
  created: function created() {
    this.fetch();
  },
  methods: {
    fetch: function fetch() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.endpoint).then(function (_ref) {
        var data = _ref.data;
        _this.mycompletedcourses = data.completed;
        _this.myinprogresscourses = data.inprogress;
        _this.myshortlistedcourses = data.shortlisted;
      }).then(function () {
        setTimeout(function () {
          _this.loading = false;
        }, 1000);
      });
    },
    addToMyCPD: function addToMyCPD($action, $state_id) {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/put/u/addToMyCPD/" + this.addtocourseid + "/" + $state_id).then(function () {
        _this2.fetch();
      });
    },
    deleteFromMyCPD: function deleteFromMyCPD() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/delete/u/deleteFromMyCourses/" + this.addtocourseid).then(function () {
        _this3.fetch();
      });
    },
    randomTile: function randomTile($courseid) {
      return "https://picsum.photos/295/255/?random=" + $courseid;
    },
    addcoursedata: function addcoursedata(id, name) {
      console.log("Hello from CourseList.vue");
      this.addtosheet = true;
      this.addtocourseid = id;
      this.addtocoursename = name;
      return true;
    },
    addRating: function addRating(value, id) {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/put/u/addRating/" + id + "/" + value).then(function ($res) {
        _this4.fetch();
      });
    }
  },
  computed: {
    userid: function userid() {
      return this.$store.getters.getUserId;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/MyProfile.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/u/MyProfile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/MyReviews.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/u/MyReviews.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_filter_date_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-filter-date-format */ "./node_modules/vue-filter-date-format/dist/vue-filter-date-format.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
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
        id: "",
        review: "",
        course: "",
        courseid: "",
        reviewer: this.getUserName,
        "public": ""
      },
      defaultItem: {
        id: "",
        review: "",
        course: "",
        courseid: "",
        reviewer: this.getUserName,
        "public": false
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
      datatableheaders: [{
        text: "",
        align: "center",
        sortable: false,
        value: "public"
      }, {
        text: "CPD",
        align: "left",
        sortable: true,
        value: "course",
        width: "20%"
      }, {
        text: "Review",
        align: "left",
        sortable: true,
        value: "review",
        width: "30%"
      }, {
        text: "Date",
        align: "center",
        sortable: true,
        value: "date"
      }, {
        text: "Updated",
        align: "center",
        sortable: true,
        value: "updated"
      }, {
        text: "",
        align: "right",
        sortable: false,
        value: "actions",
        width: "200px"
      }],
      rules: [function (value) {
        return !!value || "Required.";
      }, function (value) {
        return value && value.length >= 3 || "Min 3 characters";
      }]
    };
  },
  mounted: function mounted() {
    this.fetch();
    this.getCPDNames();
  },
  methods: {
    fetch: function fetch() {
      var _this = this;

      axios.get("/get/r/getMyReviews").then(function (_ref) {
        var data = _ref.data;
        _this.reviews = data.data.reviews;
      }).then(function () {
        _this.editedItem.reviewer = _this.getUserName;
        _this.defaultItem.reviewer = _this.getUserName;
        setTimeout(function () {
          _this.loading = false;
        }, 1000);
      });
    },
    getCPDNames: function getCPDNames() {
      var _this2 = this;

      axios.get("/get/cpd/all").then(function (_ref2) {
        var data = _ref2.data;
        _this2.courses = data.data.courses.map(function (courses) {
          return courses.name;
        });
      }).then(function () {
        _this2.courses.unshift("All");
      });
    },
    checkrow: function checkrow(value) {
      // this.$emit("closeappdrawer");
      this.$router.push("/cpd/details/" + value.name);
    },
    roundOff: function roundOff(value, decimals) {
      return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
    },
    getStarColor: function getStarColor(value) {
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
    reviewDetails: function reviewDetails(value) {
      // this.$emit("closeappdrawer");
      alert("Router Push: /r/" + this.$store.getters.getUserId + "/" + value.id); // this.$router.push("/cpd/details/" + value.name);
    },
    close: function close() {
      var _this3 = this;

      this.dialog = false;
      setTimeout(function () {
        _this3.editedItem = Object.assign({}, _this3.defaultItem);
        _this3.editedIndex = -1;
      }, 300);
    },
    editItem: function editItem(item) {
      this.editedIndex = this.reviews.indexOf(item);
      this.editedItem = Object.assign({}, item);

      if (this.editedItem["public"] == 1) {
        this.editedItem["public"] = true;
      } else {
        this.editedItem["public"] = false;
      }

      this.dialog = true;
    },
    addReview: function addReview() {
      this.editedItem.reviewer = this.getUserName;
      this.dialog = true;
    },
    deleteReview: function deleteReview() {
      var _this4 = this;

      axios["delete"]("/delete/r/deleteMyReview/" + this.editedItem.id).then(function (response) {
        _this4.dialog = false;

        _this4.fetch();

        _this4.snackbar.color = "red";
        _this4.snackbar.text = response.data;
        _this4.snackbar.show = true;
        setTimeout(function () {
          _this4.editedItem = Object.assign({}, _this4.defaultItem);
          _this4.editedIndex = -1;
        }, 300);
      });
    },
    submit: function submit() {
      var _this5 = this;

      this.errors = {}; // console.log(this.editedItem);

      axios.post("/post/r/savereview", this.editedItem).then(function (response) {
        _this5.dialog = false;
        setTimeout(function () {
          _this5.editedItem = Object.assign({}, _this5.defaultItem);
          _this5.editedIndex = -1;
        }, 300);

        _this5.fetch();

        _this5.snackbar.color = "success";
        _this5.snackbar.text = response.data;
        _this5.snackbar.show = true;
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this5.errors = error.response.data.errors || {};
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
    clickCheck: function clickCheck(item) {
      alert("you clicked me: " + item);
    },
    filterCPD: function filterCPD(item) {
      if (item.course == this.course) {
        this.course = "All";
      } else {
        this.course = item.course;
      }

      return true;
    },
    filterReviewer: function filterReviewer(item) {
      if (item.reviewer == this.reviewer) {
        this.reviewer = "Any";
      } else {
        this.reviewer = item.reviewer;
      }

      return true;
    },
    publicchip: function publicchip(item) {
      if (item["public"] == 1) {
        return true;
      } else {
        return false;
      }
    },
    publicPrivateLabel: function publicPrivateLabel(item) {
      if (item) {
        return "Public";
      } else {
        return "Private";
      }
    }
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? "Add Review" : "Manage Review";
    },
    formDelete: function formDelete() {
      return this.editedIndex === -1 ? false : true;
    },
    getUserName: function getUserName() {
      return this.$store.getters.getName;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/UserCompleted.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/u/UserCompleted.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {},
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/UserDashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/u/UserDashboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {},
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/UserInProgress.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/u/UserInProgress.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {},
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/UserShortlist.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/u/UserShortlist.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {},
  computed: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cpd/CourseTile.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cpd/CourseTile.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.module {\n\t/* width: 90%; */\n\tmargin: 0 0 1em 0;\n\toverflow: hidden;\n}\n.module p {\n\tmargin: 0;\n}\n.fade {\n\tdisplay: -webkit-box;\n\t-webkit-line-clamp: 3;\n\t-webkit-box-orient: vertical;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/App.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/App.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-toolbar__content a {\n\tcolor: white !important;\n\ttext-decoration: none !important;\n}\n.fa-sm {\n\tfont-size: 1.2rem !important;\n}\n.fade-enter {\n\topacity: 0;\n}\n.fade-enter-active {\n\ttransition: opacity 1s ease;\n}\n.fade-leave {\n}\n.fade-leave-active {\n\ttransition: opacity 0.5s ease;\n\topacity: 0;\n}\n.btn-block {\n\tdisplay: block;\n\twidth: 100%;\n}\n#id a,\n.disabled a {\n\tcolor: grey !important;\n}\nhtml {\n\t--scrollbarBG: #272727;\n\t--thumbBG: #121212;\n}\nbody::-webkit-scrollbar {\n\twidth: 11px;\n}\nbody {\n\tscrollbar-width: thin;\n\tscrollbar-color: var(--thumbBG) var(--scrollbarBG);\n}\nbody::-webkit-scrollbar-track {\n\tbackground: var(--scrollbarBG);\n}\nbody::-webkit-scrollbar-thumb {\n\tbackground-color: var(--thumbBG);\n\tborder-radius: 6px;\n\tborder: 3px solid var(--scrollbarBG);\n}\n.v-navigation-drawer {\n\toverflow: hidden;\n}\n.v-navigation-drawer__content {\n\tmargin-bottom: -50px; /* maximum width of scrollbar */\n\tpadding-bottom: 50px; /* maximum width of scrollbar */\n\tmargin-right: -50px; /* maximum width of scrollbar */\n\tpadding-right: 50px; /* maximum width of scrollbar */\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/a/ManageCourses.vue?vue&type=style&index=0&id=dd8ebbd4&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/a/ManageCourses.vue?vue&type=style&index=0&id=dd8ebbd4&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-data-table tr[data-v-dd8ebbd4] th.hide {\n\twidth: 1px !important;\n\tpadding: 0 !important;\n}\n.v-data-table[data-v-dd8ebbd4] td {\n\tpadding-left: 0rem !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/a/ManageReviews.vue?vue&type=style&index=0&id=318aee0e&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/a/ManageReviews.vue?vue&type=style&index=0&id=318aee0e&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-data-table[data-v-318aee0e] td {\n\tpadding-top: 0.5rem !important;\n\tpadding-bottom: 1.5rem !important;\n\tvertical-align: top !important;\n\twhite-space: pre-wrap;\n}\n.v-data-table[data-v-318aee0e] .v-data-table__mobile-row__header {\n\tpadding-right: 2.5rem;\n\tcolor: grey;\n}\n.v-data-table[data-v-318aee0e] .v-data-table__mobile-row__cell {\n\ttext-align: left !important;\n\twhite-space: normal;\n}\n.v-data-table[data-v-318aee0e] span.review {\n\ttext-align: left !important;\n\t/* padding-left: 3rem !important; */\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/cpd/CourseDetails.vue?vue&type=style&index=0&id=21cac0a0&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/cpd/CourseDetails.vue?vue&type=style&index=0&id=21cac0a0&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nh1[data-v-21cac0a0] {\n\tfont-weight: 100 !important;\n\tmargin-top: 12px !important;\n\tmargin-bottom: 12px !important;\n\t/* letter-spacing: 0.125rem !important; */\n\tfont-size: 2.125rem !important;\n\tline-height: 2.5rem;\n}\n.mt--3[data-v-21cac0a0] {\n\tmargin-top: -1rem !important;\n}\n.v-card[data-v-21cac0a0] .v-card__text {\n\twhite-space: pre-line !important;\n\t/* padding: 0 !important; */\n}\ndiv[data-v-21cac0a0] .v-subheader {\n\tpadding: 0px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/cpd/CourseList.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/cpd/CourseList.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-card--reveal {\n\t/* align-items: center; */\n\tbottom: 0;\n\t/* justify-content: center; */\n\topacity: 0.85;\n\tposition: absolute;\n\twidth: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/r/AddReview.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/r/AddReview.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-card__title {\n\tword-break: normal !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/MyCPDRecord.vue?vue&type=style&index=0&id=e415f35a&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/u/MyCPDRecord.vue?vue&type=style&index=0&id=e415f35a&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.m-0--now[data-v-e415f35a] {\n  margin: 0 !important;\n  padding-bottom: 12px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/MyReviews.vue?vue&type=style&index=0&id=778630e6&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/u/MyReviews.vue?vue&type=style&index=0&id=778630e6&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-data-table[data-v-778630e6] td {\n\tpadding-top: 0.5rem !important;\n\tpadding-bottom: 1.5rem !important;\n\tvertical-align: top !important;\n\twhite-space: pre-wrap;\n}\n.v-data-table[data-v-778630e6] .v-data-table__mobile-row__header {\n\tpadding-right: 2.5rem;\n\tcolor: grey;\n}\n.v-data-table[data-v-778630e6] .v-data-table__mobile-row__cell {\n\ttext-align: left !important;\n\twhite-space: normal;\n}\n.v-data-table[data-v-778630e6] span.review {\n\ttext-align: left !important;\n\t/* padding-left: 3rem !important; */\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cpd/CourseTile.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cpd/CourseTile.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseTile.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cpd/CourseTile.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/App.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/App.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/App.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/a/ManageCourses.vue?vue&type=style&index=0&id=dd8ebbd4&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/a/ManageCourses.vue?vue&type=style&index=0&id=dd8ebbd4&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ManageCourses.vue?vue&type=style&index=0&id=dd8ebbd4&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/a/ManageCourses.vue?vue&type=style&index=0&id=dd8ebbd4&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/a/ManageReviews.vue?vue&type=style&index=0&id=318aee0e&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/a/ManageReviews.vue?vue&type=style&index=0&id=318aee0e&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ManageReviews.vue?vue&type=style&index=0&id=318aee0e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/a/ManageReviews.vue?vue&type=style&index=0&id=318aee0e&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/cpd/CourseDetails.vue?vue&type=style&index=0&id=21cac0a0&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/cpd/CourseDetails.vue?vue&type=style&index=0&id=21cac0a0&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseDetails.vue?vue&type=style&index=0&id=21cac0a0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/cpd/CourseDetails.vue?vue&type=style&index=0&id=21cac0a0&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/cpd/CourseList.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/cpd/CourseList.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/cpd/CourseList.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/r/AddReview.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/r/AddReview.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddReview.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/r/AddReview.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/MyCPDRecord.vue?vue&type=style&index=0&id=e415f35a&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/u/MyCPDRecord.vue?vue&type=style&index=0&id=e415f35a&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyCPDRecord.vue?vue&type=style&index=0&id=e415f35a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/MyCPDRecord.vue?vue&type=style&index=0&id=e415f35a&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/MyReviews.vue?vue&type=style&index=0&id=778630e6&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/u/MyReviews.vue?vue&type=style&index=0&id=778630e6&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyReviews.vue?vue&type=style&index=0&id=778630e6&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/MyReviews.vue?vue&type=style&index=0&id=778630e6&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cpd/CourseTile.vue?vue&type=template&id=7fdf00e8&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cpd/CourseTile.vue?vue&type=template&id=7fdf00e8& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("v-hover", {
        attrs: { "open-delay": "100", "close-delay": "200" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var hover = ref.hover
              return [
                _c(
                  "v-img",
                  {
                    attrs: {
                      src: "https://picsum.photos/600/300?random=" + _vm.id,
                      alt: "CPD Tile",
                      height: "255",
                      width: "100%"
                    }
                  },
                  [
                    _c("v-expand-transition", [
                      hover
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "d-flex transition-fast-in-fast-out teal v-card--reveal white--text",
                              staticStyle: { height: "100%" }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "pa-3" },
                                [
                                  _c("div", { staticClass: "module fade" }, [
                                    _c("p", { staticClass: "text-cpation" }, [
                                      _vm._v(_vm._s(_vm.description))
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v("Cost: " + _vm._s(_vm.cost))
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "mx-auto mb-1 teal--text",
                                      attrs: {
                                        "min-width": "100px",
                                        color: "white"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.courseDetails(_vm.id)
                                        }
                                      }
                                    },
                                    [_vm._v("Details")]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        : _vm._e()
                    ])
                  ],
                  1
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      !_vm.checkUserProgress(this.courseprogress)
        ? _c(
            "div",
            {
              staticClass: "black darken-3",
              attrs: { id: "course-details-container" }
            },
            [
              _c(
                "v-card-text",
                {
                  staticClass: "pt-6 pb-1",
                  staticStyle: { position: "relative" }
                },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "white--text",
                      attrs: {
                        absolute: "",
                        color: "orange darken-2",
                        fab: "",
                        right: "",
                        top: ""
                      },
                      on: {
                        click: function($event) {
                          return _vm.setaddcoursedata(_vm.id, _vm.name)
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-plus")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                {
                  staticClass: "subtitle-1 py-1 grey--text text--lighten-1",
                  staticStyle: {
                    "word-break": "break-word",
                    "min-height": "100px"
                  }
                },
                [_vm._v(_vm._s(this.name))]
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticClass: "py-2" },
                [
                  _c(
                    "v-row",
                    { staticClass: "mx-0", attrs: { align: "center" } },
                    [
                      _c("v-rating", {
                        attrs: {
                          value: _vm.getAverageRating(this.courserating),
                          dense: "",
                          readonly: "",
                          "half-increments": "",
                          color: _vm.getStarColor(
                            _vm.getAverageRating(this.courserating)
                          ),
                          "full-icon": "fas fa-star",
                          "half-icon": "fa-star-half-alt",
                          "empty-icon": "far fa-star",
                          "background-color": "grey"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "grey--text ml-4" }, [
                        this.courserating.length
                          ? _c("div", [
                              _vm._v(
                                "(" +
                                  _vm._s(this.courserating.length) +
                                  " reviews)"
                              )
                            ])
                          : _vm._e()
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "mt-5 caption text-left" }, [
                    _vm._v("Cost: " + _vm._s(this.cost))
                  ])
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.checkUserProgress(this.courseprogress) === 2
        ? _c(
            "div",
            {
              staticClass: "black darken-3",
              attrs: { id: "course-details-container" }
            },
            [
              _c(
                "v-card-text",
                {
                  staticClass: "pt-6 pb-1",
                  staticStyle: { position: "relative" }
                },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "white--text",
                      attrs: {
                        absolute: "",
                        color: "green darken-3",
                        fab: "",
                        right: "",
                        top: ""
                      },
                      on: {
                        click: function($event) {
                          return _vm.setaddcoursedata(_vm.id, _vm.name)
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-check")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                {
                  staticClass: "subtitle-1 py-1 grey--text text--lighten-1",
                  staticStyle: {
                    "word-break": "break-word",
                    "min-height": "100px"
                  }
                },
                [_vm._v(_vm._s(this.name))]
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticClass: "py-2" },
                [
                  _c(
                    "v-row",
                    { staticClass: "mx-0", attrs: { align: "center" } },
                    [
                      _c("v-rating", {
                        attrs: {
                          value: _vm.getAverageRating(this.courserating),
                          dense: "",
                          color: _vm.getStarColor(
                            _vm.getAverageRating(this.courserating)
                          ),
                          "full-icon": "fas fa-star",
                          "half-icon": "fa-star-half-alt",
                          "empty-icon": "far fa-star",
                          "background-color": "grey"
                        },
                        on: {
                          input: function($event) {
                            return _vm.addRating($event, _vm.id)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "grey--text ml-4" }, [
                        this.courserating.length
                          ? _c("div", [
                              _vm._v(
                                "(" +
                                  _vm._s(this.courserating.length) +
                                  " reviews)"
                              )
                            ])
                          : _vm._e()
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.getUserRating(this.courserating) === 0
                    ? _c(
                        "div",
                        { staticClass: "mt-5 caption red--text text-left" },
                        [_vm._v("Completed - Please rate this course")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.getUserRating(this.courserating) > 0
                    ? _c(
                        "div",
                        { staticClass: "mt-5 caption green--text text-left" },
                        [
                          _vm._v(
                            "Completed - You rated this course " +
                              _vm._s(_vm.getUserRating(this.courserating)) +
                              "/5"
                          )
                        ]
                      )
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.checkUserProgress(this.courseprogress) === 1
        ? _c(
            "div",
            {
              staticClass: "black darken-3",
              attrs: { id: "course-details-container" }
            },
            [
              _c(
                "v-card-text",
                {
                  staticClass: "pt-6 pb-1",
                  staticStyle: { position: "relative" }
                },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "white--text",
                      attrs: {
                        absolute: "",
                        color: "blue darken-2",
                        fab: "",
                        right: "",
                        top: ""
                      },
                      on: {
                        click: function($event) {
                          return _vm.setaddcoursedata(_vm.id, _vm.name)
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-alarm-snooze")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                {
                  staticClass: "subtitle-1 py-1 grey--text text--lighten-1",
                  staticStyle: {
                    "word-break": "break-word",
                    "min-height": "100px"
                  }
                },
                [_vm._v(_vm._s(this.name))]
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticClass: "py-2" },
                [
                  _c(
                    "v-row",
                    { staticClass: "mx-0", attrs: { align: "center" } },
                    [
                      _c("v-rating", {
                        attrs: {
                          value: _vm.getAverageRating(this.courserating),
                          dense: "",
                          readonly: "",
                          "half-increments": "",
                          color: _vm.getStarColor(
                            _vm.getAverageRating(this.courserating)
                          ),
                          "full-icon": "fas fa-star",
                          "half-icon": "fa-star-half-alt",
                          "empty-icon": "far fa-star",
                          "background-color": "grey"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "grey--text ml-4" }, [
                        this.courserating.length
                          ? _c("div", [
                              _vm._v(
                                "(" +
                                  _vm._s(this.courserating.length) +
                                  " reviews)"
                              )
                            ])
                          : _vm._e()
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "my-1 caption blue--text text-left" },
                    [_vm._v("You have started this course")]
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.checkUserProgress(this.courseprogress) === 3
        ? _c(
            "div",
            {
              staticClass: "black darken-3",
              attrs: { id: "course-details-container" }
            },
            [
              _c(
                "v-card-text",
                {
                  staticClass: "pt-6 pb-1",
                  staticStyle: { position: "relative" }
                },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "white--text",
                      attrs: {
                        absolute: "",
                        color: "pink",
                        fab: "",
                        right: "",
                        top: ""
                      },
                      on: {
                        click: function($event) {
                          return _vm.setaddcoursedata(_vm.id, _vm.name)
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-heart")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                {
                  staticClass: "subtitle-1 py-1 grey--text text--lighten-1",
                  staticStyle: {
                    "word-break": "break-word",
                    "min-height": "100px"
                  }
                },
                [_vm._v(_vm._s(this.name))]
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticClass: "py-2" },
                [
                  _c(
                    "v-row",
                    { staticClass: "mx-0", attrs: { align: "center" } },
                    [
                      _c("v-rating", {
                        attrs: {
                          value: _vm.getAverageRating(this.courserating),
                          dense: "",
                          readonly: "",
                          "half-increments": "",
                          color: _vm.getStarColor(
                            _vm.getAverageRating(this.courserating)
                          ),
                          "full-icon": "fas fa-star",
                          "half-icon": "fa-star-half-alt",
                          "empty-icon": "far fa-star",
                          "background-color": "grey"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "grey--text ml-4" }, [
                        this.courserating.length
                          ? _c("div", [
                              _vm._v(
                                "(" +
                                  _vm._s(this.courserating.length) +
                                  " reviews)"
                              )
                            ])
                          : _vm._e()
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "mt-5 caption text-left" }, [
                    _vm._v("You have shortlisted this course")
                  ])
                ],
                1
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cpd/SuggestCourseForm.vue?vue&type=template&id=e08a3e60&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cpd/SuggestCourseForm.vue?vue&type=template&id=e08a3e60& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { persistent: "", "max-width": "50%", fullscreen: "" },
      model: {
        value: _vm.dialog,
        callback: function($$v) {
          _vm.dialog = $$v
        },
        expression: "dialog"
      }
    },
    [
      _c(
        "v-card",
        [
          _c(
            "v-toolbar",
            { attrs: { color: "primary" } },
            [
              _c(
                "v-btn",
                { attrs: { icon: "" }, on: { click: _vm.close } },
                [_c("v-icon", [_vm._v("mdi-close")])],
                1
              ),
              _vm._v(" "),
              _c("v-toolbar-title", [_vm._v("Suggest CPD")]),
              _vm._v(" "),
              _c("v-spacer")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-form",
            {
              ref: "form",
              attrs: { "lazy-validation": "" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.submit($event)
                }
              }
            },
            [
              _c(
                "v-container",
                [
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  id: "name",
                                  label: "CPD name",
                                  "prepend-icon": "far fa-bookmark",
                                  rules: _vm.nameRules,
                                  "hide-details": "auto"
                                },
                                model: {
                                  value: _vm.suggested.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.suggested, "name", $$v)
                                  },
                                  expression: "suggested.name"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-select", {
                                attrs: {
                                  id: "category",
                                  items: _vm.categories,
                                  "item-text": "name",
                                  "item-value": "id",
                                  label: "Category",
                                  multiple: ""
                                },
                                model: {
                                  value: _vm.suggested.category,
                                  callback: function($$v) {
                                    _vm.$set(_vm.suggested, "category", $$v)
                                  },
                                  expression: "suggested.category"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-textarea", {
                                attrs: {
                                  id: "description",
                                  label: "Description",
                                  "prepend-icon": "fa-info-circle",
                                  rules: _vm.descriptionRules,
                                  hint: "Brief oultine of course details"
                                },
                                model: {
                                  value: _vm.suggested.description,
                                  callback: function($$v) {
                                    _vm.$set(_vm.suggested, "description", $$v)
                                  },
                                  expression: "suggested.description"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  id: "access_details",
                                  label: "Access Details",
                                  "prepend-icon": "fa-external-link-alt",
                                  rules: _vm.accessRules,
                                  hint:
                                    "How to access the course materials and/or link to course website"
                                },
                                model: {
                                  value: _vm.suggested.access_details,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.suggested,
                                      "access_details",
                                      $$v
                                    )
                                  },
                                  expression: "suggested.access_details"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c(
                                "v-menu",
                                {
                                  attrs: {
                                    "close-on-content-click": false,
                                    transition: "scale-transition",
                                    "offset-y": "",
                                    "nudge-right": 50,
                                    "min-width": "290px"
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var on = ref.on
                                        return [
                                          _c(
                                            "v-text-field",
                                            _vm._g(
                                              {
                                                attrs: {
                                                  label: "CPD Start Date",
                                                  "prepend-icon":
                                                    "far fa-calendar-check",
                                                  readonly: "",
                                                  hint:
                                                    "Leave blank if date not known",
                                                  "persistent-hint": "",
                                                  clearable: ""
                                                },
                                                model: {
                                                  value:
                                                    _vm.suggested.startdate,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.suggested,
                                                      "startdate",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "suggested.startdate"
                                                }
                                              },
                                              on
                                            )
                                          )
                                        ]
                                      }
                                    }
                                  ]),
                                  model: {
                                    value: _vm.startdatepicker,
                                    callback: function($$v) {
                                      _vm.startdatepicker = $$v
                                    },
                                    expression: "startdatepicker"
                                  }
                                },
                                [
                                  _vm._v(" "),
                                  _c("v-date-picker", {
                                    attrs: { scrollable: "" },
                                    on: {
                                      input: function($event) {
                                        _vm.startdatepicker = false
                                      }
                                    },
                                    model: {
                                      value: _vm.suggested.startdate,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.suggested,
                                          "startdate",
                                          $$v
                                        )
                                      },
                                      expression: "suggested.startdate"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c(
                                "v-menu",
                                {
                                  attrs: {
                                    "close-on-content-click": false,
                                    transition: "scale-transition",
                                    "offset-y": "",
                                    "nudge-right": 50,
                                    "min-width": "290px"
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var on = ref.on
                                        return [
                                          _c(
                                            "v-text-field",
                                            _vm._g(
                                              {
                                                attrs: {
                                                  label: "CPD End Date",
                                                  "prepend-icon":
                                                    "far fa-calendar-alt",
                                                  readonly: "",
                                                  hint:
                                                    "Leave blank if date not known",
                                                  "persistent-hint": "",
                                                  clearable: ""
                                                },
                                                model: {
                                                  value: _vm.suggested.enddate,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.suggested,
                                                      "enddate",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "suggested.enddate"
                                                }
                                              },
                                              on
                                            )
                                          )
                                        ]
                                      }
                                    }
                                  ]),
                                  model: {
                                    value: _vm.enddatepicker,
                                    callback: function($$v) {
                                      _vm.enddatepicker = $$v
                                    },
                                    expression: "enddatepicker"
                                  }
                                },
                                [
                                  _vm._v(" "),
                                  _c("v-date-picker", {
                                    attrs: { scrollable: "" },
                                    on: {
                                      input: function($event) {
                                        _vm.enddatepicker = false
                                      }
                                    },
                                    model: {
                                      value: _vm.suggested.enddate,
                                      callback: function($$v) {
                                        _vm.$set(_vm.suggested, "enddate", $$v)
                                      },
                                      expression: "suggested.enddate"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  id: "cost",
                                  label: "Cost of CPD",
                                  "prepend-icon": "fa-pound-sign",
                                  hint:
                                    "Details of costs invovled, if no costs please enter 'Free'",
                                  rules: _vm.costRules
                                },
                                model: {
                                  value: _vm.suggested.cost,
                                  callback: function($$v) {
                                    _vm.$set(_vm.suggested, "cost", $$v)
                                  },
                                  expression: "suggested.cost"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { staticClass: "d-none", attrs: { cols: "12" } },
                            [
                              _c("v-switch", {
                                attrs: { id: "active", label: "Active" },
                                model: {
                                  value: _vm.suggested.active,
                                  callback: function($$v) {
                                    _vm.$set(_vm.suggested, "active", $$v)
                                  },
                                  expression: "suggested.active"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "ml-10",
                          attrs: {
                            outlined: "",
                            text: "",
                            color: "orange accent-3"
                          },
                          on: { click: _vm.reset }
                        },
                        [
                          _c("v-icon", { staticClass: "mr-3" }, [
                            _vm._v("far fa-times-circle")
                          ]),
                          _vm._v("Reset\n\t\t\t\t\t")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c("v-btn", { attrs: { type: "submit", text: "" } }, [
                        _vm._v("Submit")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/App.vue?vue&type=template&id=91ac6b5c&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/App.vue?vue&type=template&id=91ac6b5c& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { attrs: { id: "fcatcpdapp" } },
    [
      _c(
        "v-navigation-drawer",
        {
          attrs: {
            clipped: _vm.$vuetify.breakpoint.lgAndUp,
            floating: _vm.primaryDrawer.floating,
            "mini-variant": _vm.primaryDrawer.mini,
            app: "",
            dark: ""
          },
          model: {
            value: _vm.primaryDrawer.model,
            callback: function($$v) {
              _vm.$set(_vm.primaryDrawer, "model", $$v)
            },
            expression: "primaryDrawer.model"
          }
        },
        [
          _c(
            "v-list",
            { attrs: { shaped: "", dense: "", flat: "" } },
            [
              _c("v-subheader", { staticClass: "text-uppercase" }, [
                _vm._v("CPD : Main Menu")
              ]),
              _vm._v(" "),
              _c(
                "v-list-item-group",
                [
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-icon",
                        [_c("v-icon", [_vm._v("mdi-book-search-outline")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item-content",
                        [
                          _c(
                            "v-list-item-title",
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    exact: "",
                                    "exact-active-class": "teal--yellow",
                                    to: { name: "courselist" }
                                  }
                                },
                                [_vm._v("Find CPD")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-icon",
                        [_c("v-icon", [_vm._v("mdi-folder-account-outline")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item-content",
                        { on: { click: _vm.gotoMyCPDRecord } },
                        [_c("v-list-item-title", [_vm._v("My CPD Record")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    {
                      attrs: { disabled: this.checkadminroute() },
                      on: {
                        click: function($event) {
                          _vm.dialog = true
                        }
                      }
                    },
                    [
                      _c(
                        "v-list-item-icon",
                        [
                          _c(
                            "v-icon",
                            { attrs: { color: "light-green accent-3" } },
                            [_vm._v("mdi-playlist-plus")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item-content",
                        [_c("v-list-item-title", [_vm._v("Suggest CPD")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    { staticClass: "d-none" },
                    [
                      _c(
                        "v-list-item-icon",
                        [
                          _c("v-icon", { attrs: { color: "amber" } }, [
                            _vm._v("mdi-playlist-play")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item-content",
                        [
                          _c(
                            "v-list-item-title",
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    exact: "",
                                    "exact-active-class": "teal--yellow",
                                    to: "/u/inprogress"
                                  }
                                },
                                [_vm._v("In Progress")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    { staticClass: "d-none" },
                    [
                      _c(
                        "v-list-item-icon",
                        [
                          _c(
                            "v-icon",
                            { attrs: { color: "yellow accent-2" } },
                            [_vm._v("mdi-playlist-star")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item-content",
                        [
                          _c(
                            "v-list-item-title",
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    exact: "",
                                    "exact-active-class": "teal--yellow",
                                    to: "/u/shortlist"
                                  }
                                },
                                [_vm._v("Shortlist")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              this.school === "Montgomery" || this.school === "FCAT"
                ? _c("v-subheader", [_vm._v("Montgomery Academy Only")])
                : _vm._e(),
              _vm._v(" "),
              this.school === "Montgomery" || this.school === "FCAT"
                ? _c(
                    "v-list-item-group",
                    [
                      _c(
                        "v-list-item",
                        [
                          _c(
                            "v-list-item-icon",
                            [
                              _c(
                                "v-icon",
                                { attrs: { color: "blue darken-3" } },
                                [_vm._v("fas fa-external-link-alt fa-sm")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            [
                              _c("v-list-item-title", [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href: "https://thenationalcollege.co.uk/",
                                      target: "_blank"
                                    }
                                  },
                                  [_vm._v("The National College")]
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("v-subheader", [_vm._v("GOV.UK - National Careers Service")]),
              _vm._v(" "),
              _c(
                "v-list-item-group",
                [
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-icon",
                        [
                          _c("v-icon", { attrs: { color: "blue darken-3" } }, [
                            _vm._v("fas fa-external-link-alt fa-sm")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item-content",
                        [
                          _c("v-list-item-title", [
                            _c(
                              "a",
                              {
                                attrs: {
                                  href:
                                    "https://nationalcareers.service.gov.uk/find-a-course/the-skills-toolkit",
                                  target: "_blank"
                                }
                              },
                              [_vm._v("The Skills Toolkit")]
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-icon",
                        [
                          _c("v-icon", { attrs: { color: "blue darken-3" } }, [
                            _vm._v("fas fa-external-link-alt fa-sm")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item-content",
                        [
                          _c("v-list-item-title", [
                            _c(
                              "a",
                              {
                                attrs: {
                                  href:
                                    "https://nationalcareers.service.gov.uk/find-a-course/where-to-find-free-online-learning",
                                  target: "_blank"
                                }
                              },
                              [_vm._v("Free Online Learning")]
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-icon",
                        [
                          _c("v-icon", { attrs: { color: "blue darken-3" } }, [
                            _vm._v("fas fa-external-link-alt fa-sm")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item-content",
                        [
                          _c("v-list-item-title", [
                            _c(
                              "a",
                              {
                                attrs: {
                                  href:
                                    "https://nationalcareers.service.gov.uk/find-a-course/search",
                                  target: "_blank"
                                }
                              },
                              [_vm._v("ESFA Find a Course")]
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-subheader", [_vm._v("The Open University Free Learning")]),
              _vm._v(" "),
              _c(
                "v-list-item-group",
                [
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-icon",
                        [
                          _c("v-icon", { attrs: { color: "blue darken-3" } }, [
                            _vm._v("fas fa-external-link-alt fa-sm")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item-content",
                        [
                          _c("v-list-item-title", [
                            _c(
                              "a",
                              {
                                attrs: {
                                  href:
                                    "https://www.open.edu/openlearn/free-courses/full-catalogue",
                                  target: "_blank"
                                }
                              },
                              [_vm._v("OpenLearn")]
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-subheader", [_vm._v("External Offers")]),
              _vm._v(" "),
              _c(
                "v-list-item-group",
                [
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-icon",
                        [
                          _c("v-icon", { attrs: { color: "blue darken-3" } }, [
                            _vm._v("fas fa-external-link-alt fa-sm")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item-content",
                        [
                          _c("v-list-item-title", [
                            _c(
                              "a",
                              { attrs: { href: "#", target: "_blank" } },
                              [_vm._v("Randstad")]
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-icon",
                        [
                          _c("v-icon", { attrs: { color: "blue darken-3" } }, [
                            _vm._v("fas fa-external-link-alt fa-sm")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item-content",
                        [
                          _c("v-list-item-title", [
                            _c(
                              "a",
                              { attrs: { href: "#", target: "_blank" } },
                              [_vm._v("Hays")]
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-subheader", [_vm._v("CATEGORIES")]),
              _vm._v(" "),
              _c(
                "v-list-item-group",
                [
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-icon",
                        [
                          _c("v-icon", { attrs: { color: "green darken-3" } }, [
                            _vm._v("mdi-label")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item-content",
                        [
                          _c(
                            "v-list-item-title",
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    exact: "",
                                    "exact-active-class": "teal--yellow",
                                    to: "/cpd/all"
                                  }
                                },
                                [_vm._v("All CPD")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.categories.category_courses, function(category) {
                    return _c(
                      "v-list-item",
                      _vm._b(
                        { key: category.id },
                        "v-list-item",
                        _vm.categories,
                        false
                      ),
                      [
                        _c(
                          "v-list-item-icon",
                          [
                            _c(
                              "v-icon",
                              { attrs: { color: _vm.tagcolor(category.name) } },
                              [_vm._v("mdi-label")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-list-item-content",
                          [
                            _c(
                              "v-list-item-title",
                              [
                                _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      exact: "",
                                      "exact-active-class": "teal--yellow",
                                      to: {
                                        path: "/cpd/" + category.name,
                                        params: { name: category.name }
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(category.name))]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  })
                ],
                2
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-app-bar",
        {
          attrs: {
            "clipped-left": _vm.$vuetify.breakpoint.lgAndUp,
            app: "",
            dark: "",
            flat: "",
            "hide-on-scroll": _vm.$vuetify.breakpoint.smAndDown
          }
        },
        [
          _c("v-app-bar-nav-icon", {
            on: {
              click: function($event) {
                $event.stopPropagation()
                _vm.primaryDrawer.model = !_vm.primaryDrawer.model
              }
            }
          }),
          _vm._v(" "),
          _c(
            "v-toolbar-title",
            [
              !_vm.$vuetify.breakpoint.xsOnly
                ? _c("v-avatar", { staticClass: "mr-5", attrs: { tile: "" } }, [
                    _c("img", { attrs: { src: "/images/layers-icon.png" } })
                  ])
                : _vm._e(),
              _vm._v("FCAT CPD Portal\n\t\t\t")
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-tooltip",
            {
              attrs: { bottom: "" },
              scopedSlots: _vm._u([
                {
                  key: "activator",
                  fn: function(ref) {
                    var on = ref.on
                    return [
                      _c(
                        "v-btn",
                        _vm._g(
                          {
                            staticClass: "px-0 mx-0 d-none d-sm-block",
                            attrs: { tile: "", text: "" }
                          },
                          on
                        ),
                        [
                          _c("v-icon", { on: { click: _vm.gotoMyCPDRecord } }, [
                            _vm._v("mdi-folder-account-outline")
                          ])
                        ],
                        1
                      )
                    ]
                  }
                }
              ])
            },
            [_vm._v(" "), _c("span", [_vm._v("My CPD Record")])]
          ),
          _vm._v(" "),
          _c(
            "v-tooltip",
            {
              attrs: { bottom: "" },
              scopedSlots: _vm._u([
                {
                  key: "activator",
                  fn: function(ref) {
                    var on = ref.on
                    return [
                      _c(
                        "v-btn",
                        _vm._g(
                          {
                            staticClass: "px-0 mx-0 d-none d-sm-block",
                            attrs: { tile: "", text: "" }
                          },
                          on
                        ),
                        [
                          _c("v-icon", { on: { click: _vm.gotoAllCPD } }, [
                            _vm._v("mdi-book-search-outline")
                          ])
                        ],
                        1
                      )
                    ]
                  }
                }
              ])
            },
            [_vm._v(" "), _c("span", [_vm._v("Find CPD")])]
          ),
          _vm._v(" "),
          this.roleid == 1
            ? _c(
                "v-menu",
                {
                  attrs: {
                    bottom: "",
                    left: "",
                    "close-on-content-click": "",
                    "offset-y": ""
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "activator",
                        fn: function(ref) {
                          var onMenu = ref.on
                          return [
                            _c(
                              "v-tooltip",
                              {
                                attrs: { bottom: "" },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var onTooltip = ref.on
                                        return [
                                          _c(
                                            "v-btn",
                                            _vm._g(
                                              {
                                                staticClass: "px-0 mx-0",
                                                attrs: { tile: "", text: "" }
                                              },
                                              Object.assign(
                                                {},
                                                onMenu,
                                                onTooltip
                                              )
                                            ),
                                            [
                                              _c("v-icon", [
                                                _vm._v("fas fa-cog fa-sm")
                                              ])
                                            ],
                                            1
                                          )
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  true
                                )
                              },
                              [_vm._v(" "), _c("span", [_vm._v("Admin Menu")])]
                            )
                          ]
                        }
                      }
                    ],
                    null,
                    false,
                    4135632109
                  )
                },
                [
                  _vm._v(" "),
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-list",
                            [
                              _c(
                                "v-list-item",
                                {
                                  staticClass: "ml-0 pl-0",
                                  on: { click: _vm.gotoManageUsers }
                                },
                                [
                                  _c(
                                    "v-list-item-title",
                                    [
                                      _c(
                                        "v-avatar",
                                        [
                                          _c("v-icon", [
                                            _vm._v("fas fa-users-cog")
                                          ])
                                        ],
                                        1
                                      ),
                                      _vm._v("Manage Users\n\t\t\t\t\t\t\t\t")
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-item",
                                {
                                  staticClass: "ml-0 pl-0",
                                  on: { click: _vm.gotoManageCPD }
                                },
                                [
                                  _c(
                                    "v-list-item-title",
                                    [
                                      _c(
                                        "v-avatar",
                                        [
                                          _c("v-icon", [
                                            _vm._v("far fa-folder-open")
                                          ])
                                        ],
                                        1
                                      ),
                                      _vm._v("Manage CPD\n\t\t\t\t\t\t\t\t")
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-item",
                                {
                                  staticClass: "ml-0 pl-0",
                                  on: { click: _vm.gotoManageReviews }
                                },
                                [
                                  _c(
                                    "v-list-item-title",
                                    [
                                      _c(
                                        "v-avatar",
                                        [
                                          _c("v-icon", [
                                            _vm._v("far fa-comment-dots")
                                          ])
                                        ],
                                        1
                                      ),
                                      _vm._v("Manage Reviews\n\t\t\t\t\t\t\t\t")
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-item",
                                {
                                  staticClass: "ml-0 pl-0",
                                  on: { click: _vm.gotoManageCategories }
                                },
                                [
                                  _c(
                                    "v-list-item-title",
                                    [
                                      _c(
                                        "v-avatar",
                                        [_c("v-icon", [_vm._v("fas fa-tags")])],
                                        1
                                      ),
                                      _vm._v(
                                        "Manage Categories\n\t\t\t\t\t\t\t\t"
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          this.roleid == 1
            ? _c("v-divider", {
                staticClass: "mx-1 d-none d-md-block",
                attrs: { vertical: "", inset: "" }
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-menu",
            {
              attrs: {
                bottom: "",
                left: "",
                "close-on-content-click": "",
                "offset-y": ""
              },
              scopedSlots: _vm._u([
                {
                  key: "activator",
                  fn: function(ref) {
                    var on = ref.on
                    return [
                      _c(
                        "v-btn",
                        _vm._g({ attrs: { tile: "", text: "" } }, on),
                        [
                          _c(
                            "v-avatar",
                            { staticClass: "mr-3", attrs: { size: "36" } },
                            [_c("img", { attrs: { src: _vm.avatar } })]
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "d-none d-md-block" }, [
                            _vm._v(_vm._s(_vm.name))
                          ])
                        ],
                        1
                      )
                    ]
                  }
                }
              ])
            },
            [
              _vm._v(" "),
              _c(
                "v-card",
                [
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-list",
                        [
                          _c(
                            "v-list-item",
                            {
                              staticClass: "ml-0 pl-0",
                              attrs: { disabled: "" },
                              on: { click: _vm.gotoMyProfile }
                            },
                            [
                              _c(
                                "v-list-item-title",
                                [
                                  _c(
                                    "v-avatar",
                                    [_c("v-icon", [_vm._v("mdi-account")])],
                                    1
                                  ),
                                  _vm._v("My Profile\n\t\t\t\t\t\t\t\t")
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item",
                            {
                              staticClass: "ml-0 pl-0",
                              on: { click: _vm.gotoMyCPDRecord }
                            },
                            [
                              _c(
                                "v-list-item-title",
                                [
                                  _c(
                                    "v-avatar",
                                    [
                                      _c("v-icon", [
                                        _vm._v("mdi-folder-account-outline")
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v("My CPD Record\n\t\t\t\t\t\t\t\t")
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-list-item",
                            {
                              staticClass: "ml-0 pl-0",
                              on: { click: _vm.logout }
                            },
                            [
                              _c(
                                "v-list-item-title",
                                [
                                  _c(
                                    "v-avatar",
                                    [
                                      _c("v-icon", [
                                        _vm._v("mdi-logout-variant")
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v("Log Out\n\t\t\t\t\t\t\t\t")
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-main",
        [
          _c(
            "v-container",
            { attrs: { fluid: "" } },
            [
              _c(
                "transition",
                { attrs: { name: "fade", mode: "out-in" } },
                [
                  _c("router-view", {
                    on: { closeappdrawer: _vm.closeappdrawer }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.$vuetify.breakpoint.smAndDown
        ? _c(
            "v-bottom-navigation",
            { attrs: { grow: "", fixed: "" } },
            [
              _c(
                "v-btn",
                {
                  attrs: { tile: "", text: "" },
                  on: { click: _vm.gotoMyCPDRecord }
                },
                [
                  _c("span", [_vm._v("My CPD Record")]),
                  _vm._v(" "),
                  _c("v-icon", [_vm._v("mdi-folder-account-outline")])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { tile: "", text: "" },
                  on: {
                    click: function($event) {
                      return _vm.gotoAllCPD()
                    }
                  }
                },
                [
                  _c("span", [_vm._v("All CPD")]),
                  _vm._v(" "),
                  _c("v-icon", [_vm._v("mdi-book-search-outline")])
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      [
        _c("suggest-course-form", {
          attrs: { dialog: _vm.dialog },
          on: {
            suggestedsnackbarupdate: _vm.suggestedsnackbarupdate,
            close: _vm.closeSuggestForm
          }
        })
      ],
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: {
            color: _vm.suggestedsnackbar.color,
            timeout: _vm.suggestedsnackbar.timeout,
            "multi-line": "",
            bottom: ""
          },
          model: {
            value: _vm.suggestedsnackbar.show,
            callback: function($$v) {
              _vm.$set(_vm.suggestedsnackbar, "show", $$v)
            },
            expression: "suggestedsnackbar.show"
          }
        },
        [
          _vm._v("\n\t\t\t" + _vm._s(_vm.suggestedsnackbar.text) + "\n\t\t\t"),
          _c(
            "v-btn",
            {
              attrs: { text: "" },
              on: {
                click: function($event) {
                  _vm.suggestedsnackbar.show = false
                }
              }
            },
            [_vm._v("Close")]
          )
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=template&id=63cd6604& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-carousel",
        {
          attrs: {
            cycle: "",
            height: "400",
            "hide-delimiter-background": "",
            "show-arrows-on-hover": ""
          }
        },
        _vm._l(_vm.slides, function(slide, i) {
          return _c(
            "v-carousel-item",
            { key: i },
            [
              _c(
                "v-sheet",
                { attrs: { color: _vm.colors[i], height: "100%" } },
                [
                  _c(
                    "v-row",
                    {
                      staticClass: "fill-height",
                      attrs: { align: "center", justify: "center" }
                    },
                    [
                      _c("div", { staticClass: "display-3" }, [
                        _vm._v(_vm._s(slide) + " CPD")
                      ])
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/a/ManageCategories.vue?vue&type=template&id=239e75a4&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/a/ManageCategories.vue?vue&type=template&id=239e75a4& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "h1",
        [
          _c("v-icon", [_vm._v("fas fa-tags")]),
          _vm._v("  Manage Category Tags\n\t\t")
        ],
        1
      ),
      _vm._v(" "),
      _vm.loading
        ? _c("v-progress-linear", { attrs: { indeterminate: "" } })
        : _vm._e(),
      _vm._v(" "),
      _c("v-data-table", {
        attrs: {
          headers: _vm.datatableheaders,
          items: _vm.categories,
          search: _vm.search,
          "fixed-header": "",
          "items-per-page": 20
        },
        scopedSlots: _vm._u([
          {
            key: "top",
            fn: function() {
              return [
                _c(
                  "v-row",
                  { staticClass: "px-3" },
                  [
                    _c(
                      "v-col",
                      {
                        staticClass: "order-md-1 order-last",
                        attrs: { cols: "12", md: "6" }
                      },
                      [
                        _c("v-text-field", {
                          attrs: {
                            "prepend-icon": "fas fa-search fa-sm",
                            "single-line": "",
                            hint: "Search by course name or category",
                            "persistent-hint": "",
                            clearable: ""
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "label",
                              fn: function() {
                                return [_vm._v("Search")]
                              },
                              proxy: true
                            }
                          ]),
                          model: {
                            value: _vm.search,
                            callback: function($$v) {
                              _vm.search = $$v
                            },
                            expression: "search"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      {
                        staticClass: "order-md-last order-first",
                        attrs: { cols: "12", md: "6" }
                      },
                      [
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "v-dialog",
                          {
                            attrs: {
                              "max-width": "800px",
                              fullscreen: _vm.$vuetify.breakpoint.smAndDown
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "activator",
                                fn: function(ref) {
                                  var on = ref.on
                                  return [
                                    _c(
                                      "v-btn",
                                      _vm._g(
                                        {
                                          staticClass:
                                            "d-none d-md-block mb-2 float-right",
                                          attrs: { color: "primary", dark: "" }
                                        },
                                        on
                                      ),
                                      [_vm._v("Add Category")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      _vm._g(
                                        {
                                          staticClass:
                                            "d-md-none btn-block mb-2 float-left",
                                          attrs: { color: "primary", dark: "" }
                                        },
                                        on
                                      ),
                                      [_vm._v("Add Category")]
                                    )
                                  ]
                                }
                              }
                            ]),
                            model: {
                              value: _vm.dialog,
                              callback: function($$v) {
                                _vm.dialog = $$v
                              },
                              expression: "dialog"
                            }
                          },
                          [
                            _vm._v(" "),
                            _c(
                              "v-card",
                              [
                                _c(
                                  "v-toolbar",
                                  { attrs: { color: "primary" } },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: { icon: "" },
                                        on: { click: _vm.close }
                                      },
                                      [_c("v-icon", [_vm._v("mdi-close")])],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("v-toolbar-title", [
                                      _vm._v("Add New Category Tag")
                                    ]),
                                    _vm._v(" "),
                                    _c("v-spacer"),
                                    _vm._v(" "),
                                    _c(
                                      "v-toolbar-items",
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: { text: "" },
                                            on: { click: _vm.submit }
                                          },
                                          [_vm._v("Save")]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("v-container", [
                                  _c(
                                    "form",
                                    {
                                      on: {
                                        submit: function($event) {
                                          $event.preventDefault()
                                          return _vm.submit($event)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "v-card-text",
                                        [
                                          _c(
                                            "v-container",
                                            [
                                              _c(
                                                "v-row",
                                                [
                                                  _c(
                                                    "v-col",
                                                    { attrs: { cols: "12" } },
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          id: "name",
                                                          label:
                                                            "Category name",
                                                          rules: [
                                                            _vm.max55chars
                                                          ],
                                                          "hide-details": "auto"
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.category.name,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.category,
                                                              "name",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "category.name"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-card-actions",
                                        [
                                          _c("v-spacer"),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: { text: "" },
                                              on: { click: _vm.close }
                                            },
                                            [_vm._v("Cancel")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                type: "submit",
                                                text: ""
                                              }
                                            },
                                            [_vm._v("Save")]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            },
            proxy: true
          },
          {
            key: "item.name",
            fn: function(props) {
              return [
                _c(
                  "v-edit-dialog",
                  {
                    attrs: { "return-value": props.item.name },
                    on: {
                      "update:returnValue": function($event) {
                        return _vm.$set(props.item, "name", $event)
                      },
                      "update:return-value": function($event) {
                        return _vm.$set(props.item, "name", $event)
                      },
                      save: function($event) {
                        return _vm.save(props.item)
                      },
                      cancel: _vm.cancel,
                      open: _vm.open,
                      close: _vm.close
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "input",
                          fn: function() {
                            return [
                              _c("v-text-field", {
                                attrs: {
                                  rules: [_vm.max55chars],
                                  label: "Edit",
                                  "single-line": "",
                                  counter: ""
                                },
                                model: {
                                  value: props.item.name,
                                  callback: function($$v) {
                                    _vm.$set(props.item, "name", $$v)
                                  },
                                  expression: "props.item.name"
                                }
                              })
                            ]
                          },
                          proxy: true
                        }
                      ],
                      null,
                      true
                    )
                  },
                  [
                    _c(
                      "v-avatar",
                      [
                        _c(
                          "v-icon",
                          {
                            staticClass: "px-0",
                            attrs: { color: "orange accent-3" }
                          },
                          [_vm._v("fa-tag fa-sm")]
                        )
                      ],
                      1
                    ),
                    _vm._v(
                      "\n\t\t\t\t\t" + _vm._s(props.item.name) + "\n\t\t\t\t\t"
                    )
                  ],
                  1
                )
              ]
            }
          },
          {
            key: "item.actions",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-avatar",
                  [
                    _c(
                      "v-icon",
                      {
                        staticClass: "mr-2",
                        attrs: { color: "red" },
                        on: {
                          click: function($event) {
                            return _vm.deleteCategory(item)
                          }
                        }
                      },
                      [_vm._v("fa-trash fa-sm")]
                    )
                  ],
                  1
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: {
            color: _vm.snackbar.color,
            timeout: _vm.snackbar.timeout,
            "multi-line": "",
            bottom: ""
          },
          model: {
            value: _vm.snackbar.show,
            callback: function($$v) {
              _vm.$set(_vm.snackbar, "show", $$v)
            },
            expression: "snackbar.show"
          }
        },
        [
          _vm._v("\n\t\t\t" + _vm._s(_vm.snackbar.text) + "\n\t\t\t"),
          _c(
            "v-btn",
            {
              attrs: { dark: "", text: "" },
              on: {
                click: function($event) {
                  _vm.snackbar.show = false
                }
              }
            },
            [_vm._v("Close")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/a/ManageCourses.vue?vue&type=template&id=dd8ebbd4&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/a/ManageCourses.vue?vue&type=template&id=dd8ebbd4&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "h1",
        [
          _c("v-icon", [_vm._v("fas fa-folder-open")]),
          _vm._v("  Manage CPD\n\t\t")
        ],
        1
      ),
      _vm._v(" "),
      _vm.adminuser && _vm.cpdCompletionDataLoaded
        ? _c(
            "download-excel",
            {
              attrs: {
                data: this.cpdCompletionData,
                type: "csv",
                name: "cpd_users.csv",
                worksheet: "'FCAT CPD'"
              }
            },
            [_c("v-btn", { attrs: { text: "" } }, [_vm._v("Download Data")])],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.loading
        ? _c("v-progress-linear", { attrs: { indeterminate: "" } })
        : _vm._e(),
      _vm._v(" "),
      _c("v-data-table", {
        attrs: {
          id: "testid",
          "click:row": "editItem",
          headers: _vm.datatableheaders,
          items: _vm.courses,
          search: _vm.search,
          "fixed-header": "",
          "multi-sort": _vm.multisort,
          "items-per-page": 100
        },
        scopedSlots: _vm._u([
          {
            key: "top",
            fn: function() {
              return [
                _c(
                  "v-row",
                  { staticClass: "px-3" },
                  [
                    _c(
                      "v-col",
                      {
                        staticClass: "order-md-1 order-last",
                        attrs: { cols: "12", md: "6" }
                      },
                      [
                        _c("v-text-field", {
                          attrs: {
                            "prepend-icon": "fas fa-search fa-sm",
                            "single-line": "",
                            hint: "Search by course name or category",
                            "persistent-hint": "",
                            clearable: ""
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "label",
                              fn: function() {
                                return [_vm._v("Search")]
                              },
                              proxy: true
                            }
                          ]),
                          model: {
                            value: _vm.search,
                            callback: function($$v) {
                              _vm.search = $$v
                            },
                            expression: "search"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      {
                        staticClass: "order-md-3 order-9",
                        attrs: { cols: "12", md: "4" }
                      },
                      [
                        _c("v-select", {
                          attrs: {
                            "prepend-icon": "fa-power-off fa-sm",
                            hint: "Type Filter",
                            "persistent-hint": "",
                            items: _vm.types
                          },
                          model: {
                            value: _vm.type,
                            callback: function($$v) {
                              _vm.type = $$v
                            },
                            expression: "type"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      {
                        staticClass: "order-md-last order-first",
                        attrs: { cols: "12", md: "2" }
                      },
                      [
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "v-dialog",
                          {
                            attrs: { fullscreen: "" },
                            scopedSlots: _vm._u([
                              {
                                key: "activator",
                                fn: function(ref) {
                                  var on = ref.on
                                  return [
                                    _c(
                                      "v-btn",
                                      _vm._g(
                                        {
                                          staticClass:
                                            "d-none d-md-block mb-2 float-right",
                                          attrs: { color: "primary", dark: "" }
                                        },
                                        on
                                      ),
                                      [_vm._v("Add CPD")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      _vm._g(
                                        {
                                          staticClass:
                                            "d-md-none btn-block mb-2 float-left",
                                          attrs: { color: "primary", dark: "" }
                                        },
                                        on
                                      ),
                                      [_vm._v("Add CPD")]
                                    )
                                  ]
                                }
                              }
                            ]),
                            model: {
                              value: _vm.dialog,
                              callback: function($$v) {
                                _vm.dialog = $$v
                              },
                              expression: "dialog"
                            }
                          },
                          [
                            _vm._v(" "),
                            _c(
                              "v-card",
                              [
                                _c(
                                  "v-toolbar",
                                  { attrs: { color: "primary" } },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: { icon: "" },
                                        on: { click: _vm.close }
                                      },
                                      [_c("v-icon", [_vm._v("mdi-close")])],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("v-toolbar-title", [
                                      _vm._v(_vm._s(_vm.formTitle))
                                    ]),
                                    _vm._v(" "),
                                    _c("v-spacer"),
                                    _vm._v(" "),
                                    _c(
                                      "v-toolbar-items",
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: { text: "" },
                                            on: { click: _vm.submit }
                                          },
                                          [_vm._v("Save")]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("v-container", [
                                  _c(
                                    "form",
                                    {
                                      on: {
                                        submit: function($event) {
                                          $event.preventDefault()
                                          return _vm.submit($event)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "v-card-text",
                                        [
                                          _c(
                                            "v-container",
                                            [
                                              _c(
                                                "v-row",
                                                [
                                                  _c(
                                                    "v-col",
                                                    { attrs: { cols: "12" } },
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          id: "name",
                                                          label: "CPD name",
                                                          rules: _vm.rules,
                                                          "hide-details": "auto"
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.editedItem.name,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.editedItem,
                                                              "name",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "editedItem.name"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    { attrs: { cols: "12" } },
                                                    [
                                                      _c("v-select", {
                                                        attrs: {
                                                          id: "category",
                                                          items:
                                                            _vm.categorynames,
                                                          "item-text": "name",
                                                          "item-value": "id",
                                                          label: "Category",
                                                          multiple: ""
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.editedItem
                                                              .category,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.editedItem,
                                                              "category",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "editedItem.category"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    { attrs: { cols: "12" } },
                                                    [
                                                      _c("v-textarea", {
                                                        attrs: {
                                                          id: "description",
                                                          label: "Description"
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.editedItem
                                                              .description,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.editedItem,
                                                              "description",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "editedItem.description"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    { attrs: { cols: "12" } },
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          id: "access_details",
                                                          label:
                                                            "Access Details"
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.editedItem
                                                              .access_details,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.editedItem,
                                                              "access_details",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "editedItem.access_details"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    { attrs: { cols: "6" } },
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          id: "cost",
                                                          label: "Cost"
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.editedItem.cost,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.editedItem,
                                                              "cost",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "editedItem.cost"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _vm.editedIndex > -1
                                                    ? _c(
                                                        "v-col",
                                                        {
                                                          attrs: { cols: "6" }
                                                        },
                                                        [
                                                          _c("v-text-field", {
                                                            attrs: {
                                                              type: "number",
                                                              id: "viewcounter",
                                                              label:
                                                                "View Counter"
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.editedItem
                                                                  .viewcounter,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.editedItem,
                                                                  "viewcounter",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "editedItem.viewcounter"
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    { attrs: { cols: "12" } },
                                                    [
                                                      _c(
                                                        "v-radio-group",
                                                        {
                                                          attrs: {
                                                            column: "",
                                                            label: "CPD Status"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedItem
                                                                .type,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedItem,
                                                                "type",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "editedItem.type"
                                                          }
                                                        },
                                                        [
                                                          _c("v-radio", {
                                                            attrs: {
                                                              label: "Active",
                                                              color:
                                                                "green darken-3",
                                                              value: "active"
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c("v-radio", {
                                                            attrs: {
                                                              label: "Inactive",
                                                              color: "grey",
                                                              value: "inactive"
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c("v-radio", {
                                                            attrs: {
                                                              label:
                                                                "Suggested",
                                                              color:
                                                                "orange accent-3",
                                                              value: "suggested"
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-card-actions",
                                        [
                                          _vm.formDelete
                                            ? _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    outlined: "",
                                                    color: "red darken-1",
                                                    text: ""
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.deleteCPD()
                                                    }
                                                  }
                                                },
                                                [_vm._v("Delete")]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c("v-spacer"),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: { text: "" },
                                              on: { click: _vm.close }
                                            },
                                            [_vm._v("Cancel")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                type: "submit",
                                                text: ""
                                              }
                                            },
                                            [_vm._v("Save")]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            },
            proxy: true
          },
          {
            key: "item.type",
            fn: function(ref) {
              var item = ref.item
              return [
                item.type == "suggested"
                  ? _c(
                      "v-avatar",
                      [
                        _c(
                          "v-icon",
                          {
                            staticClass: "px-0",
                            attrs: { color: "orange accent-3" },
                            on: {
                              click: function($event) {
                                return _vm.filterType(item)
                              }
                            }
                          },
                          [_vm._v("fa-power-off")]
                        )
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                item.type == "active"
                  ? _c(
                      "v-avatar",
                      [
                        _c(
                          "v-icon",
                          {
                            staticClass: "px-0",
                            attrs: { color: "green darken-3" },
                            on: {
                              click: function($event) {
                                return _vm.filterType(item)
                              }
                            }
                          },
                          [_vm._v("fa-power-off")]
                        )
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                item.type == "inactive"
                  ? _c(
                      "v-avatar",
                      [
                        _c(
                          "v-icon",
                          {
                            staticClass: "px-0",
                            attrs: { color: "grey" },
                            on: {
                              click: function($event) {
                                return _vm.filterType(item)
                              }
                            }
                          },
                          [_vm._v("fa-power-off")]
                        )
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                item.type == "MyCPD"
                  ? _c(
                      "v-avatar",
                      [
                        _c(
                          "v-icon",
                          {
                            staticClass: "px-0",
                            attrs: { color: "cyan accent-2" },
                            on: {
                              click: function($event) {
                                return _vm.filterType(item)
                              }
                            }
                          },
                          [_vm._v("fas fa-user-graduate")]
                        )
                      ],
                      1
                    )
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.name",
            fn: function(ref) {
              var item = ref.item
              return [_vm._v(_vm._s(item.name))]
            }
          },
          {
            key: "item.category",
            fn: function(ref) {
              var item = ref.item
              return _vm._l(item.categorylabel, function(category) {
                return _c(
                  "v-chip",
                  _vm._b(
                    {
                      key: category.id,
                      staticClass: "mr-2 mb-2",
                      attrs: { small: "", outlined: "" },
                      on: {
                        click: function($event) {
                          return _vm.filterCategory(category.name)
                        }
                      }
                    },
                    "v-chip",
                    _vm.categorylabel,
                    false
                  ),
                  [
                    _c("v-icon", { attrs: { left: "", color: "amber" } }, [
                      _vm._v("mdi-label")
                    ]),
                    _vm._v(
                      "\n\t\t\t\t\t" + _vm._s(category.name) + "\n\t\t\t\t"
                    )
                  ],
                  1
                )
              })
            }
          },
          {
            key: "item.categorylabel",
            fn: function(ref) {
              var item = ref.item
              return [
                item.categorylabel
                  ? _c("span", [_vm._v(_vm._s(_vm.gotest(item.categorylabel)))])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.avgrating",
            fn: function(ref) {
              var item = ref.item
              return [
                item.avgrating
                  ? _c(
                      "v-icon",
                      {
                        staticClass: "mr-1",
                        attrs: { color: _vm.getStarColor(item.avgrating) }
                      },
                      [_vm._v("mdi-star")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                item.avgrating
                  ? _c("span", [
                      _vm._v(_vm._s(_vm.roundOff(item.avgrating, 1)))
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.approved_date",
            fn: function(ref) {
              var item = ref.item
              return [
                item.approved_date
                  ? _c("div", [
                      _vm._v(
                        _vm._s(
                          _vm._f("dateFormat")(
                            _vm._f("dateParse")(
                              item.approved_date,
                              "YYYY.MM.DD"
                            ),
                            "DD-MM-YYYY"
                          )
                        )
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.actions",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-avatar",
                  [
                    _c(
                      "v-icon",
                      {
                        staticClass: "mr-2",
                        on: {
                          click: function($event) {
                            return _vm.editItem(item)
                          }
                        }
                      },
                      [_vm._v("mdi-pencil")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    attrs: { outlined: "", text: "" },
                    on: {
                      click: function($event) {
                        return _vm.courseDetails(item)
                      }
                    }
                  },
                  [_vm._v("Details")]
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: {
            color: _vm.snackbar.color,
            timeout: _vm.snackbar.timeout,
            "multi-line": "",
            bottom: ""
          },
          model: {
            value: _vm.snackbar.show,
            callback: function($$v) {
              _vm.$set(_vm.snackbar, "show", $$v)
            },
            expression: "snackbar.show"
          }
        },
        [
          _vm._v("\n\t\t\t" + _vm._s(_vm.snackbar.text) + "\n\t\t\t"),
          _c(
            "v-btn",
            {
              attrs: { dark: "", text: "" },
              on: {
                click: function($event) {
                  _vm.snackbar.show = false
                }
              }
            },
            [_vm._v("Close")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/a/ManageReviews.vue?vue&type=template&id=318aee0e&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/a/ManageReviews.vue?vue&type=template&id=318aee0e&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "h1",
        [
          _c("v-icon", [_vm._v("fas fa-folder-open")]),
          _vm._v("  Manage Reviews\n\t\t")
        ],
        1
      ),
      _vm._v(" "),
      _vm.loading
        ? _c("v-progress-linear", { attrs: { indeterminate: "" } })
        : _vm._e(),
      _vm._v(" "),
      _c("v-data-table", {
        attrs: {
          "click:row": "editItem",
          headers: _vm.datatableheaders,
          items: _vm.reviews,
          search: _vm.search,
          "fixed-header": "",
          "multi-sort": _vm.multisort,
          "items-per-page": 100
        },
        scopedSlots: _vm._u([
          {
            key: "top",
            fn: function() {
              return [
                _c(
                  "v-row",
                  { staticClass: "px-3" },
                  [
                    _c(
                      "v-col",
                      { attrs: { cols: "12", md: "4" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            "append-icon": "fas fa-search fa-sm",
                            label: "Search",
                            "single-line": "",
                            "hide-details": ""
                          },
                          model: {
                            value: _vm.search,
                            callback: function($$v) {
                              _vm.search = $$v
                            },
                            expression: "search"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      { attrs: { cols: "12", md: "4" } },
                      [
                        _c("v-select", {
                          attrs: {
                            hint: "CPD Filter",
                            "persistent-hint": "",
                            items: _vm.courses
                          },
                          model: {
                            value: _vm.course,
                            callback: function($$v) {
                              _vm.course = $$v
                            },
                            expression: "course"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      { attrs: { cols: "12", md: "4" } },
                      [
                        _c("v-select", {
                          attrs: {
                            hint: "Reviewer Filter",
                            "persistent-hint": "",
                            items: _vm.reviewers
                          },
                          model: {
                            value: _vm.reviewer,
                            callback: function($$v) {
                              _vm.reviewer = $$v
                            },
                            expression: "reviewer"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            },
            proxy: true
          },
          {
            key: "item.review",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("span", { staticClass: "review" }, [
                  _vm._v(_vm._s(item.review))
                ])
              ]
            }
          },
          {
            key: "item.course",
            fn: function(ref) {
              var item = ref.item
              return [
                !_vm.$vuetify.breakpoint.xsOnly
                  ? _c(
                      "v-chip",
                      {
                        attrs: { outlined: "", small: "" },
                        on: {
                          click: function($event) {
                            return _vm.filterCPD(item)
                          }
                        }
                      },
                      [_vm._v(_vm._s(item.course))]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.$vuetify.breakpoint.xsOnly
                  ? _c(
                      "span",
                      {
                        on: {
                          click: function($event) {
                            return _vm.filterCPD(item)
                          }
                        }
                      },
                      [_vm._v(_vm._s(item.course))]
                    )
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.reviewer",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-chip",
                  {
                    attrs: { outlined: "", small: "" },
                    on: {
                      click: function($event) {
                        return _vm.filterReviewer(item)
                      }
                    }
                  },
                  [_vm._v(_vm._s(item.reviewer))]
                )
              ]
            }
          },
          {
            key: "item.actions",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-menu",
                  {
                    attrs: { "offset-y": "", bottom: "", left: "" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on
                            return [
                              !_vm.$vuetify.breakpoint.xsOnly
                                ? _c(
                                    "v-btn",
                                    _vm._g({ attrs: { icon: "" } }, on),
                                    [
                                      !_vm.$vuetify.breakpoint.xsOnly
                                        ? _c("v-icon", [
                                            _vm._v("mdi-dots-vertical")
                                          ])
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.$vuetify.breakpoint.xsOnly
                                ? _c(
                                    "v-btn",
                                    _vm._g(
                                      { attrs: { text: "", outlined: "" } },
                                      on
                                    ),
                                    [_vm._v("Actions")]
                                  )
                                : _vm._e()
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
                  },
                  [
                    _vm._v(" "),
                    _c(
                      "v-list",
                      [
                        _c(
                          "v-list-item",
                          {
                            on: {
                              click: function($event) {
                                return _vm.editItem(item)
                              }
                            }
                          },
                          [
                            _c(
                              "v-avatar",
                              [
                                _c("v-icon", { staticClass: "mr-2" }, [
                                  _vm._v("mdi-pencil")
                                ])
                              ],
                              1
                            ),
                            _vm._v("Edit Review\n\t\t\t\t\t\t")
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-list-item",
                          {
                            on: {
                              click: function($event) {
                                return _vm.gotoCPD(item)
                              }
                            }
                          },
                          [
                            _c(
                              "v-avatar",
                              [
                                _c("v-icon", { staticClass: "mr-2" }, [
                                  _vm._v("mdi-folder-search-outline")
                                ])
                              ],
                              1
                            ),
                            _vm._v("View CPD\n\t\t\t\t\t\t")
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-list-item",
                          { attrs: { disabled: "" } },
                          [
                            _c(
                              "v-avatar",
                              [
                                _c(
                                  "v-icon",
                                  {
                                    staticClass: "mr-2",
                                    on: {
                                      click: function($event) {
                                        return _vm.editItem(item)
                                      }
                                    }
                                  },
                                  [_vm._v("mdi-account-search-outline")]
                                )
                              ],
                              1
                            ),
                            _vm._v("View User\n\t\t\t\t\t\t")
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            }
          },
          {
            key: "item.date",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm._v(
                  _vm._s(
                    _vm._f("dateFormat")(
                      _vm._f("dateParse")(item.date, "YYYY.MM.DD"),
                      "DD-MM-YYYY"
                    )
                  )
                )
              ]
            }
          },
          {
            key: "item.public",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm.publicchip(item)
                  ? _c(
                      "v-chip",
                      {
                        staticClass: "mr-2",
                        attrs: { "x-small": "", color: "green darken-3" }
                      },
                      [_vm._v("Public")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                !_vm.publicchip(item)
                  ? _c(
                      "v-chip",
                      {
                        staticClass: "mr-2",
                        attrs: { "x-small": "", color: "red" }
                      },
                      [_vm._v("Private")]
                    )
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.avgrating",
            fn: function(ref) {
              var item = ref.item
              return [
                item.avgrating
                  ? _c(
                      "v-icon",
                      {
                        staticClass: "mr-1",
                        attrs: { color: _vm.getStarColor(item.avgrating) }
                      },
                      [_vm._v("mdi-star")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                item.avgrating
                  ? _c("span", [
                      _vm._v(_vm._s(_vm.roundOff(item.avgrating, 1)))
                    ])
                  : _vm._e()
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: {
            fullscreen: _vm.$vuetify.breakpoint.xsOnly,
            "max-width": "50%"
          },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "pb-1" }, [
                _c("span", { staticClass: "headline" }, [
                  _vm._v(_vm._s(_vm.formTitle))
                ])
              ]),
              _vm._v(" "),
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.submit($event)
                    }
                  }
                },
                [
                  _c(
                    "v-card-text",
                    { staticClass: "pb-1" },
                    [
                      _c(
                        "v-container",
                        { staticClass: "pb-1" },
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      readonly: "",
                                      disabled: "",
                                      id: "course",
                                      items: _vm.courses,
                                      label: "CPD",
                                      hint: "Non-editable",
                                      "persistent-hint": ""
                                    },
                                    model: {
                                      value: _vm.editedItem.course,
                                      callback: function($$v) {
                                        _vm.$set(_vm.editedItem, "course", $$v)
                                      },
                                      expression: "editedItem.course"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-textarea", {
                                    attrs: { id: "review", label: "Review" },
                                    model: {
                                      value: _vm.editedItem.review,
                                      callback: function($$v) {
                                        _vm.$set(_vm.editedItem, "review", $$v)
                                      },
                                      expression: "editedItem.review"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      readonly: "",
                                      disabled: "",
                                      id: "reviewer",
                                      label: "Reviewer",
                                      rules: _vm.rules,
                                      "hide-details": "auto",
                                      hint: "Non-editable",
                                      "persistent-hint": ""
                                    },
                                    model: {
                                      value: _vm.editedItem.reviewer,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.editedItem,
                                          "reviewer",
                                          $$v
                                        )
                                      },
                                      expression: "editedItem.reviewer"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-switch", {
                                    attrs: {
                                      id: "public",
                                      label: _vm.publicPrivateLabel(
                                        _vm.editedItem.public
                                      )
                                    },
                                    model: {
                                      value: _vm.editedItem.public,
                                      callback: function($$v) {
                                        _vm.$set(_vm.editedItem, "public", $$v)
                                      },
                                      expression: "editedItem.public"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: { click: _vm.close }
                        },
                        [_vm._v("Cancel")]
                      ),
                      _vm._v(" "),
                      _c("v-btn", { attrs: { type: "submit", text: "" } }, [
                        _vm._v("Save")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: {
            color: _vm.snackbar.color,
            timeout: _vm.snackbar.timeout,
            "multi-line": "",
            bottom: ""
          },
          model: {
            value: _vm.snackbar.show,
            callback: function($$v) {
              _vm.$set(_vm.snackbar, "show", $$v)
            },
            expression: "snackbar.show"
          }
        },
        [
          _vm._v("\n\t\t\t" + _vm._s(_vm.snackbar.text) + "\n\t\t\t"),
          _c(
            "v-btn",
            {
              attrs: { dark: "", text: "" },
              on: {
                click: function($event) {
                  _vm.snackbar.show = false
                }
              }
            },
            [_vm._v("Close")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/a/ManageUsers.vue?vue&type=template&id=4d0b9de6&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/a/ManageUsers.vue?vue&type=template&id=4d0b9de6& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h1", [_vm._v("Manage Users")]),
      _vm._v(" "),
      _vm.loading
        ? _c("v-progress-linear", { attrs: { indeterminate: "" } })
        : _vm._e(),
      _vm._v(" "),
      _c("v-data-table", {
        attrs: {
          headers: _vm.datatableheaders,
          items: _vm.users,
          search: _vm.search,
          "fixed-header": "",
          "multi-sort": _vm.multisort,
          "items-per-page": 100
        },
        on: { "click:row": _vm.checkrow },
        scopedSlots: _vm._u([
          {
            key: "top",
            fn: function() {
              return [
                _c(
                  "v-row",
                  [
                    _c(
                      "v-col",
                      { attrs: { cols: "12", md: "4" } },
                      [
                        _c("v-text-field", {
                          staticClass: "ml-5",
                          attrs: {
                            "append-icon": "fas fa-search fa-sm",
                            label: "Staff Search",
                            hint: "Search for staff member",
                            "persistent-hint": ""
                          },
                          model: {
                            value: _vm.search,
                            callback: function($$v) {
                              _vm.search = $$v
                            },
                            expression: "search"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      {
                        staticClass: "order-md-3 order-9",
                        attrs: { cols: "12", md: "4" }
                      },
                      [
                        _c("v-select", {
                          staticClass: "ml-5",
                          attrs: {
                            "append-icon": "fa-filter fa-sm",
                            hint: "School Filter",
                            "persistent-hint": "",
                            items: _vm.schools
                          },
                          model: {
                            value: _vm.school,
                            callback: function($$v) {
                              _vm.school = $$v
                            },
                            expression: "school"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            },
            proxy: true
          },
          {
            key: "item.avgrating",
            fn: function(ref) {
              var item = ref.item
              return [
                item.avgrating
                  ? _c(
                      "v-icon",
                      {
                        staticClass: "mr-1",
                        attrs: { color: _vm.getStarColor(item.avgrating) }
                      },
                      [_vm._v("mdi-star")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                item.avgrating
                  ? _c("span", [
                      _vm._v(_vm._s(_vm.roundOff(item.avgrating, 1)))
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.last_login_at",
            fn: function(ref) {
              var item = ref.item
              return [
                item.last_login_at
                  ? _c("div", [
                      _vm._v(
                        _vm._s(
                          _vm._f("dateFormat")(
                            _vm._f("dateParse")(
                              item.last_login_at,
                              "YYYY.MM.DD"
                            ),
                            "DD-MM-YYYY"
                          )
                        )
                      )
                    ])
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.actions",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-btn",
                  {
                    attrs: { small: "", outlined: "", color: "" },
                    on: {
                      click: function($event) {
                        return _vm.viewUserCPD(item)
                      }
                    }
                  },
                  [_vm._v("View CPD Record")]
                )
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/cpd/CourseDetails.vue?vue&type=template&id=21cac0a0&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/cpd/CourseDetails.vue?vue&type=template&id=21cac0a0&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.loading
        ? _c("v-progress-linear", { attrs: { indeterminate: "" } })
        : _vm._e(),
      _vm._v(" "),
      !_vm.loading
        ? _c(
            "section",
            [
              _c(
                "v-row",
                { staticClass: "mt--3" },
                [
                  _c(
                    "v-toolbar",
                    { attrs: { dense: "", flat: "" } },
                    [
                      _c(
                        "v-avatar",
                        [
                          _c(
                            "v-icon",
                            {
                              staticClass: "mr-5",
                              attrs: { small: "" },
                              on: {
                                click: function($event) {
                                  return _vm.back(-1)
                                }
                              }
                            },
                            [_vm._v("fas fa-arrow-left")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider", {
                        staticClass: "mr-4",
                        attrs: { vertical: "", inset: "" }
                      }),
                      _vm._v(" "),
                      _c(
                        "v-chip",
                        {
                          staticClass: "mr-4",
                          attrs: { label: "", outlined: "" }
                        },
                        [
                          _vm._v("\n\t\t\t\t\t\tViews\n\t\t\t\t\t\t"),
                          _c(
                            "v-avatar",
                            {
                              attrs: { right: "" },
                              model: {
                                value: this.course.viewcounter,
                                callback: function($$v) {
                                  _vm.$set(this.course, "viewcounter", $$v)
                                },
                                expression: "this.course.viewcounter"
                              }
                            },
                            [_vm._v(_vm._s(this.course.viewcounter))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider", {
                        staticClass: "mr-4",
                        attrs: { vertical: "", inset: "" }
                      }),
                      _vm._v(" "),
                      !_vm.$vuetify.breakpoint.smAndDown
                        ? _c(
                            "section",
                            [
                              _c(
                                "v-chip",
                                {
                                  staticClass: "mr-4",
                                  attrs: {
                                    label: "",
                                    outlined: _vm.checkmystate(this.mystate, 2),
                                    color: _vm.statechipcolour(2),
                                    "text-color": "white"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.changestate(2)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\tCompleted\n\t\t\t\t\t\t\t"
                                  ),
                                  _c(
                                    "v-avatar",
                                    {
                                      staticClass: "green--text",
                                      attrs: { right: "", color: "white" }
                                    },
                                    [_vm._v(_vm._s(this.course.completedcount))]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-chip",
                                {
                                  staticClass: "mr-4",
                                  attrs: {
                                    label: "",
                                    outlined: _vm.checkmystate(this.mystate, 1),
                                    color: _vm.statechipcolour(1),
                                    "text-color": "white"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.changestate(1)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\tInProgress\n\t\t\t\t\t\t\t"
                                  ),
                                  _c(
                                    "v-avatar",
                                    {
                                      staticClass: "indigo--text",
                                      attrs: { right: "", color: "white" }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(this.course.inprogresscount)
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-chip",
                                {
                                  staticClass: "mr-4",
                                  attrs: {
                                    label: "",
                                    outlined: _vm.checkmystate(this.mystate, 3),
                                    color: _vm.statechipcolour(3),
                                    "text-color": "white"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.changestate(3)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\tShortlisted\n\t\t\t\t\t\t\t"
                                  ),
                                  _c(
                                    "v-avatar",
                                    {
                                      staticClass: "pink--text",
                                      attrs: { right: "", color: "white" }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(this.course.shortlistedcount)
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.$vuetify.breakpoint.smAndDown &&
                      _vm.$vuetify.breakpoint.smAndDown
                        ? _c(
                            "section",
                            [
                              _c("v-divider", {
                                staticClass: "mr-4",
                                attrs: { vertical: "", inset: "" }
                              }),
                              _vm._v(" "),
                              _c(
                                "v-tooltip",
                                {
                                  attrs: { bottom: "" },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "activator",
                                        fn: function(ref) {
                                          var on = ref.on
                                          return [
                                            _c(
                                              "v-chip",
                                              _vm._g(
                                                {
                                                  staticClass: "mr-4",
                                                  attrs: {
                                                    label: "",
                                                    outlined: "",
                                                    "text-color": "amber"
                                                  }
                                                },
                                                on
                                              ),
                                              [
                                                _c("v-icon", [
                                                  _vm._v("mdi-star")
                                                ])
                                              ],
                                              1
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    false,
                                    4011166210
                                  )
                                },
                                [
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm._v("You have rated this course")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-tooltip",
                                {
                                  attrs: { bottom: "" },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "activator",
                                        fn: function(ref) {
                                          var on = ref.on
                                          return [
                                            _c(
                                              "v-chip",
                                              _vm._g(
                                                {
                                                  staticClass: "mr-4",
                                                  attrs: {
                                                    label: "",
                                                    outlined: "",
                                                    "text-color":
                                                      "green darken-3"
                                                  }
                                                },
                                                on
                                              ),
                                              [
                                                _c("v-icon", [
                                                  _vm._v("mdi-check")
                                                ])
                                              ],
                                              1
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    false,
                                    3667665467
                                  )
                                },
                                [
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm._v("You have reviewed this course")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-tooltip",
                                {
                                  attrs: { bottom: "" },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "activator",
                                        fn: function(ref) {
                                          var on = ref.on
                                          return [
                                            _c(
                                              "v-chip",
                                              _vm._g(
                                                {
                                                  staticClass: "mr-4",
                                                  attrs: {
                                                    label: "",
                                                    outlined: "",
                                                    "text-color": "white"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.changestate(2)
                                                    }
                                                  }
                                                },
                                                on
                                              ),
                                              [
                                                _c("v-icon", [
                                                  _vm._v("mdi-pencil")
                                                ])
                                              ],
                                              1
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    false,
                                    31246645
                                  )
                                },
                                [
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Edit your review")])
                                ]
                              ),
                              _vm._v(" "),
                              _c("v-divider", {
                                staticClass: "mr-4",
                                attrs: { vertical: "", inset: "" }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "h1",
                {},
                [
                  this.course.type == "suggested"
                    ? _c(
                        "v-avatar",
                        [
                          _c(
                            "v-icon",
                            {
                              staticClass: "px-0",
                              attrs: { color: "orange accent-3" }
                            },
                            [_vm._v("fa-power-off")]
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  this.course.type == "active"
                    ? _c(
                        "v-avatar",
                        [
                          _c(
                            "v-icon",
                            {
                              staticClass: "px-0",
                              attrs: { color: "green darken-3" }
                            },
                            [_vm._v("fa-power-off")]
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  this.course.type == "inactive"
                    ? _c(
                        "v-avatar",
                        [
                          _c(
                            "v-icon",
                            { staticClass: "px-0", attrs: { color: "grey" } },
                            [_vm._v("fa-power-off")]
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v("\n\t\t\t\t" + _vm._s(this.course.name) + "\n\t\t\t")
                ],
                1
              ),
              _vm._v(" "),
              _vm._l(this.course.categories, function(category) {
                return _c(
                  "v-chip",
                  _vm._b(
                    {
                      key: category.id,
                      staticClass: "mr-2 mb-5",
                      attrs: { small: "", outlined: "" }
                    },
                    "v-chip",
                    category,
                    false
                  ),
                  [
                    _c("v-icon", { attrs: { left: "", color: "amber" } }, [
                      _vm._v("mdi-label")
                    ]),
                    _vm._v("\n\t\t\t\t" + _vm._s(category.name) + "\n\t\t\t")
                  ],
                  1
                )
              }),
              _vm._v(" "),
              this.course.description
                ? _c("v-subheader", [_vm._v(_vm._s(this.course.description))])
                : _vm._e(),
              _vm._v(" "),
              !this.course.description
                ? _c("v-subheader", [_vm._v("No description avaiable")])
                : _vm._e(),
              _vm._v(" "),
              this.course.type != "MyCPD"
                ? _c("v-subheader", [
                    _c(
                      "a",
                      {
                        attrs: {
                          href: this.course.access_details,
                          target: "_blank"
                        }
                      },
                      [_vm._v(_vm._s(this.course.access_details))]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              this.course.type == "MyCPD"
                ? _c("v-subheader", [
                    _vm._v(
                      "\n\t\t\t\tCPD Completed by " +
                        _vm._s(this.course.approved_by) +
                        "\n\t\t\t"
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "v-row",
                {},
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "4" } },
                    [
                      _c("h1", [_vm._v("CPD Ratings")]),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pb-1",
                                      attrs: { cols: "6" }
                                    },
                                    [
                                      this.course.ratingscount > 0
                                        ? _c("div", [_vm._v("Average Rating")])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("v-rating", {
                                        attrs: {
                                          value: this.course.avgrating,
                                          dense: "",
                                          readonly: "",
                                          "half-increments": "",
                                          color: _vm.getStarColor(
                                            this.course.avgrating
                                          ),
                                          "full-icon": "fas fa-star",
                                          "half-icon": "fa-star-half-alt",
                                          "empty-icon": "far fa-star",
                                          "background-color": "grey"
                                        }
                                      }),
                                      _vm._v(" "),
                                      this.course.ratingscount > 0
                                        ? _c("div", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.roundOff(
                                                  this.course.avgrating,
                                                  1
                                                )
                                              ) + " out of 5"
                                            )
                                          ])
                                        : _vm._e()
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pb-1",
                                      attrs: { cols: "6" }
                                    },
                                    [
                                      this.course.ratingscount > 0
                                        ? _c("div", [_vm._v("Your Rating")])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("v-rating", {
                                        attrs: {
                                          value: this.myrating,
                                          dense: "",
                                          color: _vm.getStarColor(
                                            this.myrating
                                          ),
                                          "full-icon": "fas fa-star",
                                          "half-icon": "fa-star-half-alt",
                                          "empty-icon": "far fa-star",
                                          "background-color": "grey"
                                        },
                                        on: {
                                          input: function($event) {
                                            return _vm.addRating($event)
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      this.myrating > 0
                                        ? _c("div", [
                                            _vm._v(
                                              _vm._s(this.myrating) +
                                                " out of 5"
                                            )
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      !this.myrating
                                        ? _c(
                                            "div",
                                            {
                                              staticClass:
                                                "my-1 caption red--text text-left"
                                            },
                                            [_vm._v("Please rate this course")]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "headline",
                                      attrs: { cols: "12" }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(this.course.ratingscount) +
                                          " staff reviews"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("v-col", { attrs: { cols: "12" } }, [
                                    _c(
                                      "table",
                                      {
                                        staticClass: "table",
                                        attrs: { width: "100%" }
                                      },
                                      [
                                        _c("tr", [
                                          _c("td", [_vm._v("5 star")]),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            { attrs: { width: "80%" } },
                                            [
                                              _c(
                                                "v-progress-linear",
                                                {
                                                  staticClass: "mb-3",
                                                  attrs: {
                                                    value: this.fives,
                                                    color: "amber",
                                                    height: "25"
                                                  }
                                                },
                                                [
                                                  this.course.ratingscount > 0
                                                    ? _c("span", [
                                                        _vm._v(
                                                          _vm._s(
                                                            Math.ceil(
                                                              this.fives
                                                            )
                                                          ) + " %"
                                                        )
                                                      ])
                                                    : _vm._e()
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("td", [_vm._v("4 star")]),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            { attrs: { width: "80%" } },
                                            [
                                              _c(
                                                "v-progress-linear",
                                                {
                                                  staticClass: "mb-3",
                                                  attrs: {
                                                    value: this.fours,
                                                    color: "amber",
                                                    height: "25"
                                                  }
                                                },
                                                [
                                                  this.course.ratingscount > 0
                                                    ? _c("span", [
                                                        _vm._v(
                                                          _vm._s(
                                                            Math.ceil(
                                                              this.fours
                                                            )
                                                          ) + " %"
                                                        )
                                                      ])
                                                    : _vm._e()
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("td", [_vm._v("3 star")]),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            { attrs: { width: "80%" } },
                                            [
                                              _c(
                                                "v-progress-linear",
                                                {
                                                  staticClass: "mb-3",
                                                  attrs: {
                                                    value: this.threes,
                                                    color: "amber",
                                                    height: "25"
                                                  }
                                                },
                                                [
                                                  this.course.ratingscount > 0
                                                    ? _c("span", [
                                                        _vm._v(
                                                          _vm._s(
                                                            Math.ceil(
                                                              this.threes
                                                            )
                                                          ) + " %"
                                                        )
                                                      ])
                                                    : _vm._e()
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("td", [_vm._v("2 star")]),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            { attrs: { width: "80%" } },
                                            [
                                              _c(
                                                "v-progress-linear",
                                                {
                                                  staticClass: "mb-3",
                                                  attrs: {
                                                    value: this.twos,
                                                    color: "amber",
                                                    height: "25"
                                                  }
                                                },
                                                [
                                                  this.course.ratingscount > 0
                                                    ? _c("span", [
                                                        _vm._v(
                                                          _vm._s(
                                                            Math.ceil(this.twos)
                                                          ) + " %"
                                                        )
                                                      ])
                                                    : _vm._e()
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("td", [_vm._v("1 star")]),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            { attrs: { width: "80%" } },
                                            [
                                              _c(
                                                "v-progress-linear",
                                                {
                                                  staticClass: "mb-3",
                                                  attrs: {
                                                    value: this.ones,
                                                    color: "amber",
                                                    height: "25"
                                                  }
                                                },
                                                [
                                                  this.course.ratingscount > 0
                                                    ? _c("span", [
                                                        _vm._v(
                                                          _vm._s(
                                                            Math.ceil(this.ones)
                                                          ) + " %"
                                                        )
                                                      ])
                                                    : _vm._e()
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ])
                                      ]
                                    )
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "8" } },
                    [
                      _c("h1", [_vm._v("Reviews")]),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        _vm._l(this.publicreviews, function(review) {
                          return _c(
                            "v-card",
                            _vm._b(
                              {
                                key: review.id,
                                staticClass: "col-12 col-md-5 mb-3 mr-3"
                              },
                              "v-card",
                              review,
                              false
                            ),
                            [
                              _c(
                                "v-card-text",
                                { staticClass: "prewrap" },
                                [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t" +
                                      _vm._s(review.review) +
                                      "\n\t\t\t\t\t\t\t\t"
                                  ),
                                  _c("v-subheader", [
                                    _vm._v(
                                      _vm._s(review.user.name) +
                                        " - " +
                                        _vm._s(review.user.school)
                                    )
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        }),
                        1
                      ),
                      _vm._v(" "),
                      _vm.adminuser && this.privatereviews.length > 0
                        ? _c(
                            "v-row",
                            { attrs: { id: "private_reviews" } },
                            [
                              _c("v-col", { attrs: { cols: "12" } }, [
                                _c("h1", [_vm._v("Private Reviews")])
                              ]),
                              _vm._v(" "),
                              _vm._l(this.privatereviews, function(review) {
                                return _c(
                                  "v-card",
                                  _vm._b(
                                    {
                                      key: review.id,
                                      staticClass: "col-12 col-md-5 mb-3 mr-3",
                                      attrs: { color: "grey darken-3" }
                                    },
                                    "v-card",
                                    review,
                                    false
                                  ),
                                  [
                                    _c(
                                      "v-card-text",
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t" +
                                            _vm._s(review.review) +
                                            "\n\t\t\t\t\t\t\t\t"
                                        ),
                                        _c("v-subheader", [
                                          _vm._v(
                                            _vm._s(review.user.name) +
                                              " - " +
                                              _vm._s(review.user.school)
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              })
                            ],
                            2
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              this.adminuser ? _c("v-row") : _vm._e()
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.snackbar
        ? _c(
            "v-snackbar",
            {
              attrs: {
                color: this.snackbar.color,
                timeout: this.snackbar.timeout,
                "multi-line": "",
                bottom: ""
              },
              model: {
                value: _vm.snackbar.show,
                callback: function($$v) {
                  _vm.$set(_vm.snackbar, "show", $$v)
                },
                expression: "snackbar.show"
              }
            },
            [
              _vm._v("\n\t\t\t" + _vm._s(_vm.snackbar.text) + "\n\t\t\t"),
              _c(
                "v-btn",
                {
                  attrs: { dark: "", text: "" },
                  on: {
                    click: function($event) {
                      _vm.snackbar.show = false
                    }
                  }
                },
                [_vm._v("Close")]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.snackbar1
        ? _c(
            "v-snackbar",
            {
              attrs: {
                color: this.snackbar1.color,
                timeout: this.snackbar1.timeout,
                "multi-line": "",
                bottom: ""
              },
              model: {
                value: _vm.snackbar1.show,
                callback: function($$v) {
                  _vm.$set(_vm.snackbar1, "show", $$v)
                },
                expression: "snackbar1.show"
              }
            },
            [
              _vm._v("\n\t\t\t" + _vm._s(_vm.snackbar1.text) + "\n\t\t\t"),
              _c(
                "v-btn",
                {
                  attrs: { dark: "", text: "" },
                  on: {
                    click: function($event) {
                      _vm.snackbar1.show = false
                    }
                  }
                },
                [_vm._v("Close")]
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/cpd/CourseList.vue?vue&type=template&id=a4a705a0&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/cpd/CourseList.vue?vue&type=template&id=a4a705a0& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.loading
        ? _c(
            "h1",
            [
              _vm._v("\n\t\t\tLOADING CPD LISTINGS...\n\t\t\t"),
              _c("v-progress-linear", {
                attrs: { indeterminate: "", color: "teal" }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.loading
        ? _c(
            "div",
            [
              _c(
                "v-expand-transition",
                [
                  _c(
                    "v-carousel",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            _vm.showbanner &&
                            _vm.$vuetify.breakpoint.xlOnly &&
                            _vm.$vuetify.breakpoint.xsOnly,
                          expression:
                            "showbanner && $vuetify.breakpoint.xlOnly && $vuetify.breakpoint.xsOnly"
                        }
                      ],
                      attrs: {
                        cycle: "",
                        height: "400",
                        "hide-delimiter-background": "",
                        "show-arrows-on-hover": ""
                      }
                    },
                    _vm._l(_vm.slides, function(slide, i) {
                      return _c(
                        "v-carousel-item",
                        { key: i },
                        [
                          _c(
                            "v-sheet",
                            { attrs: { color: _vm.colors[i], height: "100%" } },
                            [
                              _c(
                                "v-row",
                                {
                                  staticClass: "fill-height",
                                  attrs: { align: "center", justify: "center" }
                                },
                                [
                                  _c("div", { staticClass: "display-3" }, [
                                    _vm._v(_vm._s(slide) + " CPD")
                                  ])
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm._l(_vm.courses, function(category) {
                return _c(
                  "v-row",
                  _vm._b({ key: category.id }, "v-row", category, false),
                  [
                    category.courses.length == 0 && _vm.endpoint != "/get/c"
                      ? _c("h1", { staticClass: "col-12 font-weight-light" }, [
                          _vm._v(
                            "No " +
                              _vm._s(category.name) +
                              " courses available at the moment"
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    category.courses.length > 0
                      ? _c("h1", { staticClass: "col-12 font-weight-light" }, [
                          _vm._v(_vm._s(category.name))
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(category.courses, function(course) {
                      return _c(
                        "course-tile",
                        _vm._b(
                          {
                            key: course.id,
                            staticClass: "col-sm-6 col-md-4 col-xl-3 col-12",
                            on: {
                              addcoursedata: _vm.addcoursedata,
                              addRating: _vm.addRating
                            }
                          },
                          "course-tile",
                          course,
                          false
                        )
                      )
                    })
                  ],
                  2
                )
              }),
              _vm._v(" "),
              _c(
                "v-bottom-sheet",
                {
                  model: {
                    value: _vm.addtosheet,
                    callback: function($$v) {
                      _vm.addtosheet = $$v
                    },
                    expression: "addtosheet"
                  }
                },
                [
                  _c(
                    "v-list",
                    [
                      _c("v-subheader", [
                        _vm._v(
                          "\n\t\t\t\t\t\tChoose an action for \n\t\t\t\t\t\t"
                        ),
                        _c("span", { staticClass: "blue--text" }, [
                          _vm._v(_vm._s(this.addtocoursename))
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.addtooptions, function(tile) {
                        return _c(
                          "v-list-item",
                          {
                            key: tile.title,
                            on: {
                              click: function($event) {
                                _vm.addtosheet = false
                                _vm.addToMyCPD(tile.action, tile.stateid)
                              }
                            }
                          },
                          [
                            _c(
                              "v-btn",
                              {
                                staticClass: "mx-2",
                                attrs: {
                                  fab: "",
                                  dark: "",
                                  small: "",
                                  color: tile.buttoncolor
                                }
                              },
                              [_c("v-icon", [_vm._v(_vm._s(tile.icon))])],
                              1
                            ),
                            _vm._v(" "),
                            _c("v-list-item-title", [
                              _vm._v(_vm._s(tile.title))
                            ])
                          ],
                          1
                        )
                      }),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        {
                          on: {
                            click: function($event) {
                              _vm.addtosheet = false
                              _vm.deleteFromMyCPD()
                            }
                          }
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "mx-2",
                              attrs: {
                                fab: "",
                                dark: "",
                                small: "",
                                color: _vm.deleteFromShortlist.buttoncolor
                              }
                            },
                            [
                              _c("v-icon", [
                                _vm._v(_vm._s(_vm.deleteFromShortlist.icon))
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-list-item-title", [
                            _vm._v(_vm._s(_vm.deleteFromShortlist.title))
                          ])
                        ],
                        1
                      )
                    ],
                    2
                  )
                ],
                1
              )
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: {
            color: _vm.snackbar.color,
            timeout: _vm.snackbar.timeout,
            "multi-line": "",
            bottom: ""
          },
          model: {
            value: _vm.snackbar.show,
            callback: function($$v) {
              _vm.$set(_vm.snackbar, "show", $$v)
            },
            expression: "snackbar.show"
          }
        },
        [
          _vm._v("\n\t\t\t" + _vm._s(_vm.snackbar.text) + "\n\t\t\t"),
          _c(
            "v-btn",
            {
              attrs: { dark: "", text: "" },
              on: {
                click: function($event) {
                  _vm.snackbar.show = false
                }
              }
            },
            [_vm._v("Close")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/r/AddReview.vue?vue&type=template&id=13dc37ad&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/r/AddReview.vue?vue&type=template&id=13dc37ad& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.loading ? _c("h1", [_vm._v("LOADING....")]) : _vm._e(),
      _vm._v(" "),
      _vm.loading
        ? _c("v-progress-linear", { attrs: { indeterminate: "" } })
        : _vm._e(),
      _vm._v(" "),
      !_vm.loading
        ? _c(
            "div",
            [
              _c("course-details", {
                attrs: { id: _vm.courseid, review: _vm.fromreview }
              }),
              _vm._v(" "),
              _c(
                "v-dialog",
                {
                  attrs: {
                    persistent: "",
                    "max-width": "600px",
                    fullscreen: _vm.$vuetify.breakpoint.xsOnly
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "activator",
                        fn: function(ref) {
                          var on = ref.on
                          return [
                            _c(
                              "v-btn",
                              _vm._g(
                                { attrs: { color: "primary", dark: "" } },
                                on
                              ),
                              [_vm._v("Open Dialog")]
                            )
                          ]
                        }
                      }
                    ],
                    null,
                    false,
                    3923633116
                  ),
                  model: {
                    value: _vm.review,
                    callback: function($$v) {
                      _vm.review = $$v
                    },
                    expression: "review"
                  }
                },
                [
                  _vm._v(" "),
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-card-title",
                        { staticClass: "subtitle-2 pb-0 grey--text" },
                        [_vm._v("Add CPD Review")]
                      ),
                      _vm._v(" "),
                      _c("v-card-title", { staticClass: "pt-1" }, [
                        _vm._v(_vm._s(this.coursename))
                      ]),
                      _vm._v(" "),
                      _c(
                        "form",
                        {
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.submit($event)
                            }
                          }
                        },
                        [
                          _c(
                            "v-card-text",
                            [
                              _c("v-textarea", {
                                attrs: {
                                  label: "CPD Review/Feedback",
                                  outlined: "",
                                  "auto-grow": "",
                                  counter: "500"
                                },
                                model: {
                                  value: _vm.review.review,
                                  callback: function($$v) {
                                    _vm.$set(_vm.review, "review", $$v)
                                  },
                                  expression: "review.review"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-switch", {
                                attrs: {
                                  id: "public",
                                  label: _vm.publicPrivateLabel(
                                    _vm.review.public
                                  )
                                },
                                model: {
                                  value: _vm.review.public,
                                  callback: function($$v) {
                                    _vm.$set(_vm.review, "public", $$v)
                                  },
                                  expression: "review.public"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { text: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.close()
                                    }
                                  }
                                },
                                [_vm._v("Close")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { type: "submit", text: "" } },
                                [_vm._v("Save")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/MyCPDRecord.vue?vue&type=template&id=e415f35a&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/u/MyCPDRecord.vue?vue&type=template&id=e415f35a&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "myCPDRecord" } },
    [
      _c(
        "h1",
        { staticClass: "display-1 font-weight-light mb-5 ml-5" },
        [
          _c("v-icon", { attrs: { large: "" } }, [
            _vm._v("mdi-folder-account-outline")
          ]),
          _vm._v(" "),
          _vm.loading
            ? _c("span", [_vm._v("  My CPD Record - Loading...")])
            : _vm._e(),
          _vm._v(" "),
          !_vm.loading
            ? _c("span", [
                _vm._v("  My CPD Record - " + _vm._s(this.mycpd.user.name))
              ])
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _vm.loading
        ? _c("v-progress-linear", { attrs: { indeterminate: "" } })
        : _vm._e(),
      _vm._v(" "),
      !_vm.loading
        ? _c(
            "div",
            { staticClass: "v-container px-5" },
            [
              _c(
                "div",
                { attrs: { id: "mycpdheadlines" } },
                [
                  _c(
                    "v-row",
                    { staticClass: "m-0--now" },
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "mt-5",
                          attrs: { cols: "12", sm: "6", lg: "3" }
                        },
                        [
                          _c(
                            "v-card",
                            [
                              _c(
                                "v-card-text",
                                { staticClass: "py-0" },
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "4" } },
                                        [
                                          _c(
                                            "v-avatar",
                                            {
                                              staticClass: "mr-5",
                                              staticStyle: {
                                                "margin-top":
                                                  "-2rem !important",
                                                "border-radius": "4px"
                                              },
                                              attrs: {
                                                tile: "",
                                                size: "80",
                                                color: "green darken-3"
                                              }
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { large: "" } },
                                                [_vm._v("mdi-check")]
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "text-right",
                                          attrs: { cols: "8" }
                                        },
                                        [
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "caption font-weight-light mb-0"
                                            },
                                            [_vm._v("Completed CPD")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "h1",
                                            {
                                              staticClass:
                                                "display-1 font-weight-light"
                                            },
                                            [
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t\t\t\t" +
                                                  _vm._s(
                                                    this.mycpd.completedcount
                                                  ) +
                                                  "\n\t\t\t\t\t\t\t\t\t\t"
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "mt-5",
                          attrs: { cols: "12", sm: "6", lg: "3" }
                        },
                        [
                          _c(
                            "v-card",
                            [
                              _c(
                                "v-card-text",
                                { staticClass: "py-0" },
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "4" } },
                                        [
                                          _c(
                                            "v-avatar",
                                            {
                                              staticClass: "mr-5",
                                              staticStyle: {
                                                "margin-top":
                                                  "-2rem !important",
                                                "border-radius": "4px"
                                              },
                                              attrs: {
                                                tile: "",
                                                size: "80",
                                                color: "amber darken-2"
                                              }
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { large: "" } },
                                                [_vm._v("fa-star")]
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "text-right",
                                          attrs: { cols: "8" }
                                        },
                                        [
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "caption font-weight-light mb-0"
                                            },
                                            [
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t\t\t\tMy Average Rating\n\t\t\t\t\t\t\t\t\t\t"
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "h1",
                                            {
                                              staticClass:
                                                "display-1 font-weight-light"
                                            },
                                            [
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t\t\t\t" +
                                                  _vm._s(
                                                    _vm.roundOff(
                                                      this.mycpd
                                                        .myratingaverage,
                                                      1
                                                    )
                                                  ) +
                                                  "\n\t\t\t\t\t\t\t\t\t\t"
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "mt-5",
                          attrs: { cols: "12", sm: "6", lg: "3" }
                        },
                        [
                          _c(
                            "v-card",
                            [
                              _c(
                                "v-card-text",
                                { staticClass: "py-0" },
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "4" } },
                                        [
                                          _c(
                                            "v-avatar",
                                            {
                                              staticClass: "mr-5",
                                              staticStyle: {
                                                "margin-top":
                                                  "-2rem !important",
                                                "border-radius": "4px"
                                              },
                                              attrs: {
                                                tile: "",
                                                size: "80",
                                                color: "blue darken-3"
                                              }
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { large: "" } },
                                                [_vm._v("mdi-alarm")]
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "text-right",
                                          attrs: { cols: "8" }
                                        },
                                        [
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "caption font-weight-light mb-0"
                                            },
                                            [_vm._v("Started CPD")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "h1",
                                            {
                                              staticClass:
                                                "display-1 font-weight-light"
                                            },
                                            [
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t\t\t\t" +
                                                  _vm._s(
                                                    this.mycpd.startedcount
                                                  ) +
                                                  "\n\t\t\t\t\t\t\t\t\t\t"
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "mt-5",
                          attrs: { cols: "12", sm: "6", lg: "3" }
                        },
                        [
                          _c(
                            "v-card",
                            [
                              _c(
                                "v-card-text",
                                { staticClass: "py-0" },
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "4" } },
                                        [
                                          _c(
                                            "v-avatar",
                                            {
                                              staticClass: "mr-5",
                                              staticStyle: {
                                                "margin-top":
                                                  "-2rem !important",
                                                "border-radius": "4px"
                                              },
                                              attrs: {
                                                tile: "",
                                                size: "80",
                                                color: "pink"
                                              }
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { large: "" } },
                                                [_vm._v("fa-heart")]
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "text-right",
                                          attrs: { cols: "8" }
                                        },
                                        [
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "caption font-weight-light mb-0"
                                            },
                                            [
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t\t\t\tShortlisted CPD\n\t\t\t\t\t\t\t\t\t\t"
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "h1",
                                            {
                                              staticClass:
                                                "display-1 font-weight-light"
                                            },
                                            [
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t\t\t\t" +
                                                  _vm._s(
                                                    this.mycpd.shortlistedcount
                                                  ) +
                                                  "\n\t\t\t\t\t\t\t\t\t\t"
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-row", { staticClass: "m-0--now" }, [
                _c(
                  "div",
                  {
                    staticClass: "mb-10 mt-5 col-xl-6 col-12 px-3",
                    attrs: { id: "mycpdcourses" }
                  },
                  [
                    _vm.loading
                      ? _c("v-progress-linear", {
                          attrs: { indeterminate: "" }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _c("v-data-table", {
                      attrs: {
                        headers: _vm.completeddatatableheaders,
                        items: _vm.mycpd.completedcourses,
                        "items-per-page": 10,
                        search: _vm.searchcompleted,
                        "sort-by": "completed_date",
                        "sort-desc": true
                      },
                      on: { "click:row": _vm.editRecord },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "top",
                            fn: function() {
                              return [
                                _c(
                                  "v-row",
                                  [
                                    _c(
                                      "v-col",
                                      { staticClass: "mx-5" },
                                      [
                                        _c(
                                          "v-card",
                                          [
                                            _c(
                                              "v-card-title",
                                              {
                                                staticClass:
                                                  "green darken-3 py-5",
                                                staticStyle: {
                                                  "margin-top":
                                                    "-2rem !important"
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-icon",
                                                  { attrs: { large: "" } },
                                                  [_vm._v("mdi-check")]
                                                ),
                                                _vm._v(
                                                  "  Completed CPD\n\t\t\t\t\t\t\t\t\t\t"
                                                )
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-row",
                                  { staticClass: "px-3" },
                                  [
                                    _c(
                                      "v-col",
                                      {
                                        staticClass: "order-md-1 order-last",
                                        attrs: { cols: "12", md: "10" }
                                      },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            "prepend-icon":
                                              "fas fa-search fa-sm",
                                            "single-line": "",
                                            hint:
                                              "Search your completed courses",
                                            "persistent-hint": "",
                                            clearable: ""
                                          },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "label",
                                                fn: function() {
                                                  return [
                                                    _vm._v("Search by keyword")
                                                  ]
                                                },
                                                proxy: true
                                              }
                                            ],
                                            null,
                                            false,
                                            1907567447
                                          ),
                                          model: {
                                            value: _vm.searchcompleted,
                                            callback: function($$v) {
                                              _vm.searchcompleted = $$v
                                            },
                                            expression: "searchcompleted"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      {
                                        staticClass:
                                          "order-md-3 order-9 d-none",
                                        attrs: { cols: "12", md: "4" }
                                      },
                                      [
                                        _c("v-select", {
                                          attrs: {
                                            "prepend-icon": "fa-filter fa-sm",
                                            hint: "Type Filter",
                                            "persistent-hint": "",
                                            items: _vm.types
                                          },
                                          model: {
                                            value: _vm.type,
                                            callback: function($$v) {
                                              _vm.type = $$v
                                            },
                                            expression: "type"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      {
                                        staticClass:
                                          "order-md-last order-first",
                                        attrs: { cols: "12", md: "2" }
                                      },
                                      [
                                        _c("v-spacer"),
                                        _vm._v(" "),
                                        _c(
                                          "v-dialog",
                                          {
                                            attrs: {
                                              persistent: "",
                                              fullscreen:
                                                _vm.$vuetify.breakpoint
                                                  .smAndDown,
                                              width: "80%"
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "activator",
                                                  fn: function(ref) {
                                                    var on = ref.on
                                                    return [
                                                      _vm.mycpdcheck
                                                        ? _c(
                                                            "v-btn",
                                                            _vm._g(
                                                              {
                                                                staticClass:
                                                                  "d-none d-md-block mb-2 float-right",
                                                                attrs: {
                                                                  color:
                                                                    "primary",
                                                                  dark: ""
                                                                }
                                                              },
                                                              on
                                                            ),
                                                            [_vm._v("Add CPD")]
                                                          )
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                      _vm.mycpdcheck
                                                        ? _c(
                                                            "v-btn",
                                                            _vm._g(
                                                              {
                                                                staticClass:
                                                                  "d-md-none btn-block mb-2 float-left",
                                                                attrs: {
                                                                  color:
                                                                    "primary",
                                                                  dark: ""
                                                                }
                                                              },
                                                              on
                                                            ),
                                                            [_vm._v("Add CPD")]
                                                          )
                                                        : _vm._e()
                                                    ]
                                                  }
                                                }
                                              ],
                                              null,
                                              false,
                                              3726860592
                                            ),
                                            model: {
                                              value: _vm.dialog,
                                              callback: function($$v) {
                                                _vm.dialog = $$v
                                              },
                                              expression: "dialog"
                                            }
                                          },
                                          [
                                            _vm._v(" "),
                                            _c(
                                              "v-card",
                                              [
                                                _c(
                                                  "v-toolbar",
                                                  {
                                                    attrs: {
                                                      color: _vm.formTitleColor
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "v-btn",
                                                      {
                                                        attrs: { icon: "" },
                                                        on: { click: _vm.close }
                                                      },
                                                      [
                                                        _c("v-icon", [
                                                          _vm._v("mdi-close")
                                                        ])
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c("v-toolbar-title", [
                                                      _vm._v(
                                                        _vm._s(_vm.formTitle)
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("v-spacer"),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-toolbar-items",
                                                      [
                                                        _vm.mycpdcheck
                                                          ? _c(
                                                              "v-btn",
                                                              {
                                                                attrs: {
                                                                  text: ""
                                                                },
                                                                on: {
                                                                  click:
                                                                    _vm.submit
                                                                }
                                                              },
                                                              [_vm._v("Save")]
                                                            )
                                                          : _vm._e()
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-container",
                                                  [
                                                    _c(
                                                      "v-form",
                                                      {
                                                        attrs: {
                                                          enctype:
                                                            "multipart/form-data"
                                                        },
                                                        on: {
                                                          submit: function(
                                                            $event
                                                          ) {
                                                            $event.preventDefault()
                                                            return _vm.submit(
                                                              $event
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-card-text",
                                                          [
                                                            _c(
                                                              "v-container",
                                                              [
                                                                _c(
                                                                  "v-row",
                                                                  [
                                                                    _c(
                                                                      "v-col",
                                                                      {
                                                                        attrs: {
                                                                          cols:
                                                                            "12"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "v-text-field",
                                                                          {
                                                                            attrs: {
                                                                              id:
                                                                                "name",
                                                                              label:
                                                                                "CPD Name",
                                                                              "hide-details":
                                                                                "auto",
                                                                              "prepend-icon":
                                                                                "fas fa-book-reader",
                                                                              outlined:
                                                                                "",
                                                                              disabled: !_vm.canEditCPD,
                                                                              rules:
                                                                                _vm.rulesCPDName
                                                                            },
                                                                            model: {
                                                                              value:
                                                                                _vm
                                                                                  .editedCPD
                                                                                  .name,
                                                                              callback: function(
                                                                                $$v
                                                                              ) {
                                                                                _vm.$set(
                                                                                  _vm.editedCPD,
                                                                                  "name",
                                                                                  $$v
                                                                                )
                                                                              },
                                                                              expression:
                                                                                "editedCPD.name"
                                                                            }
                                                                          }
                                                                        )
                                                                      ],
                                                                      1
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-col",
                                                                      {
                                                                        attrs: {
                                                                          cols:
                                                                            "12"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "v-textarea",
                                                                          {
                                                                            attrs: {
                                                                              id:
                                                                                "description",
                                                                              label:
                                                                                "CPD description",
                                                                              "hide-details":
                                                                                "auto",
                                                                              "prepend-icon":
                                                                                "fa-info",
                                                                              disabled: !_vm.canEditCPD,
                                                                              "auto-grow":
                                                                                "",
                                                                              rows:
                                                                                "1",
                                                                              outlined:
                                                                                "",
                                                                              counter:
                                                                                "",
                                                                              rules:
                                                                                _vm.rulesCPDDescription
                                                                            },
                                                                            model: {
                                                                              value:
                                                                                _vm
                                                                                  .editedCPD
                                                                                  .description,
                                                                              callback: function(
                                                                                $$v
                                                                              ) {
                                                                                _vm.$set(
                                                                                  _vm.editedCPD,
                                                                                  "description",
                                                                                  $$v
                                                                                )
                                                                              },
                                                                              expression:
                                                                                "editedCPD.description"
                                                                            }
                                                                          }
                                                                        )
                                                                      ],
                                                                      1
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-col",
                                                                      {
                                                                        attrs: {
                                                                          cols:
                                                                            "12",
                                                                          md:
                                                                            "6"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "v-menu",
                                                                          {
                                                                            attrs: {
                                                                              "close-on-content-click": false,
                                                                              transition:
                                                                                "scale-transition",
                                                                              "nudge-right": 50,
                                                                              "min-width":
                                                                                "290px",
                                                                              disabled: !_vm.mycpdcheck,
                                                                              readonly: !_vm.mycpdcheck
                                                                            },
                                                                            scopedSlots: _vm._u(
                                                                              [
                                                                                {
                                                                                  key:
                                                                                    "activator",
                                                                                  fn: function(
                                                                                    ref
                                                                                  ) {
                                                                                    var on =
                                                                                      ref.on
                                                                                    return [
                                                                                      _c(
                                                                                        "v-text-field",
                                                                                        _vm._g(
                                                                                          {
                                                                                            attrs: {
                                                                                              value:
                                                                                                _vm.formatedStartDate,
                                                                                              label:
                                                                                                "CPD Start Date",
                                                                                              "prepend-icon":
                                                                                                "far fa-calendar-alt",
                                                                                              disabled: !_vm.mycpdcheck,
                                                                                              readonly:
                                                                                                "",
                                                                                              hint:
                                                                                                "Leave blank if couse not yet started",
                                                                                              "persistent-hint":
                                                                                                "",
                                                                                              clearable:
                                                                                                "",
                                                                                              outlined:
                                                                                                ""
                                                                                            },
                                                                                            on: {
                                                                                              "click:clear":
                                                                                                _vm.clearStartDate
                                                                                            }
                                                                                          },
                                                                                          on
                                                                                        )
                                                                                      )
                                                                                    ]
                                                                                  }
                                                                                }
                                                                              ],
                                                                              null,
                                                                              false,
                                                                              521785159
                                                                            ),
                                                                            model: {
                                                                              value:
                                                                                _vm.start_datepicker,
                                                                              callback: function(
                                                                                $$v
                                                                              ) {
                                                                                _vm.start_datepicker = $$v
                                                                              },
                                                                              expression:
                                                                                "start_datepicker"
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "v-date-picker",
                                                                              {
                                                                                attrs: {
                                                                                  scrollable:
                                                                                    ""
                                                                                },
                                                                                on: {
                                                                                  input: function(
                                                                                    $event
                                                                                  ) {
                                                                                    _vm.start_datepicker = false
                                                                                  }
                                                                                },
                                                                                model: {
                                                                                  value:
                                                                                    _vm
                                                                                      .editedCPD
                                                                                      .start_date,
                                                                                  callback: function(
                                                                                    $$v
                                                                                  ) {
                                                                                    _vm.$set(
                                                                                      _vm.editedCPD,
                                                                                      "start_date",
                                                                                      $$v
                                                                                    )
                                                                                  },
                                                                                  expression:
                                                                                    "editedCPD.start_date"
                                                                                }
                                                                              }
                                                                            )
                                                                          ],
                                                                          1
                                                                        )
                                                                      ],
                                                                      1
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-col",
                                                                      {
                                                                        attrs: {
                                                                          cols:
                                                                            "12",
                                                                          md:
                                                                            "6"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "v-menu",
                                                                          {
                                                                            attrs: {
                                                                              "close-on-content-click": false,
                                                                              transition:
                                                                                "scale-transition",
                                                                              "nudge-right": 50,
                                                                              "min-width":
                                                                                "290px",
                                                                              disabled: !_vm.mycpdcheck,
                                                                              readonly: !_vm.mycpdcheck
                                                                            },
                                                                            scopedSlots: _vm._u(
                                                                              [
                                                                                {
                                                                                  key:
                                                                                    "activator",
                                                                                  fn: function(
                                                                                    ref
                                                                                  ) {
                                                                                    var on =
                                                                                      ref.on
                                                                                    return [
                                                                                      _c(
                                                                                        "v-text-field",
                                                                                        _vm._g(
                                                                                          {
                                                                                            attrs: {
                                                                                              value:
                                                                                                _vm.formatedCompletedDate,
                                                                                              label:
                                                                                                "CPD Completed Date",
                                                                                              "prepend-icon":
                                                                                                "far fa-calendar-alt",
                                                                                              readonly:
                                                                                                "",
                                                                                              disabled: !_vm.mycpdcheck,
                                                                                              hint:
                                                                                                "Leave blank if couse not yet completed",
                                                                                              "persistent-hint":
                                                                                                "",
                                                                                              clearable:
                                                                                                "",
                                                                                              outlined:
                                                                                                ""
                                                                                            },
                                                                                            on: {
                                                                                              "click:clear":
                                                                                                _vm.clearCompletedDate
                                                                                            }
                                                                                          },
                                                                                          on
                                                                                        )
                                                                                      )
                                                                                    ]
                                                                                  }
                                                                                }
                                                                              ],
                                                                              null,
                                                                              false,
                                                                              282521190
                                                                            ),
                                                                            model: {
                                                                              value:
                                                                                _vm.completed_datepicker,
                                                                              callback: function(
                                                                                $$v
                                                                              ) {
                                                                                _vm.completed_datepicker = $$v
                                                                              },
                                                                              expression:
                                                                                "completed_datepicker"
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "v-date-picker",
                                                                              {
                                                                                attrs: {
                                                                                  scrollable:
                                                                                    ""
                                                                                },
                                                                                on: {
                                                                                  input: function(
                                                                                    $event
                                                                                  ) {
                                                                                    _vm.completed_datepicker = false
                                                                                  }
                                                                                },
                                                                                model: {
                                                                                  value:
                                                                                    _vm
                                                                                      .editedCPD
                                                                                      .completed_date,
                                                                                  callback: function(
                                                                                    $$v
                                                                                  ) {
                                                                                    _vm.$set(
                                                                                      _vm.editedCPD,
                                                                                      "completed_date",
                                                                                      $$v
                                                                                    )
                                                                                  },
                                                                                  expression:
                                                                                    "editedCPD.completed_date"
                                                                                }
                                                                              }
                                                                            )
                                                                          ],
                                                                          1
                                                                        )
                                                                      ],
                                                                      1
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-col",
                                                                      {
                                                                        attrs: {
                                                                          cols:
                                                                            "12"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "v-textarea",
                                                                          {
                                                                            attrs: {
                                                                              id:
                                                                                "myreview",
                                                                              label:
                                                                                "CPD Review",
                                                                              "prepend-icon":
                                                                                "fa-pen-alt fa-sm",
                                                                              hint:
                                                                                "Delete your review by clearing this textbox",
                                                                              "persistent-hint":
                                                                                "",
                                                                              "auto-grow":
                                                                                "",
                                                                              rows:
                                                                                "1",
                                                                              outlined:
                                                                                "",
                                                                              counter:
                                                                                "",
                                                                              disabled: !_vm.mycpdcheck,
                                                                              readonly: !_vm.mycpdcheck
                                                                            },
                                                                            model: {
                                                                              value:
                                                                                _vm
                                                                                  .editedCPD
                                                                                  .myreview,
                                                                              callback: function(
                                                                                $$v
                                                                              ) {
                                                                                _vm.$set(
                                                                                  _vm.editedCPD,
                                                                                  "myreview",
                                                                                  $$v
                                                                                )
                                                                              },
                                                                              expression:
                                                                                "editedCPD.myreview"
                                                                            }
                                                                          }
                                                                        )
                                                                      ],
                                                                      1
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-col",
                                                                      {
                                                                        attrs: {
                                                                          cols:
                                                                            "12"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "v-switch",
                                                                          {
                                                                            attrs: {
                                                                              id:
                                                                                "myreviewpublic",
                                                                              label: _vm.publicPrivateLabel(
                                                                                _vm
                                                                                  .editedCPD
                                                                                  .myreviewpublic
                                                                              ),
                                                                              disabled: !_vm.mycpdcheck,
                                                                              readonly: !_vm.mycpdcheck
                                                                            },
                                                                            model: {
                                                                              value:
                                                                                _vm
                                                                                  .editedCPD
                                                                                  .myreviewpublic,
                                                                              callback: function(
                                                                                $$v
                                                                              ) {
                                                                                _vm.$set(
                                                                                  _vm.editedCPD,
                                                                                  "myreviewpublic",
                                                                                  $$v
                                                                                )
                                                                              },
                                                                              expression:
                                                                                "editedCPD.myreviewpublic"
                                                                            }
                                                                          }
                                                                        )
                                                                      ],
                                                                      1
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-col",
                                                                      {
                                                                        attrs: {
                                                                          cols:
                                                                            "12"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            attrs: {
                                                                              id:
                                                                                "myrating"
                                                                            }
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "v-icon",
                                                                              {
                                                                                staticClass:
                                                                                  "mr-3"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "fa-thumbs-up"
                                                                                )
                                                                              ]
                                                                            ),
                                                                            _vm._v(
                                                                              "CPD Rating\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                                                            ),
                                                                            _c(
                                                                              "v-rating",
                                                                              {
                                                                                staticClass:
                                                                                  "ml-7",
                                                                                attrs: {
                                                                                  id:
                                                                                    "myrating",
                                                                                  color: _vm.getStarColor(
                                                                                    _vm
                                                                                      .editedCPD
                                                                                      .myrating
                                                                                  ),
                                                                                  "full-icon":
                                                                                    "fas fa-star",
                                                                                  "half-icon":
                                                                                    "fa-star-half-alt",
                                                                                  "empty-icon":
                                                                                    "far fa-star",
                                                                                  "background-color":
                                                                                    "grey",
                                                                                  clearable:
                                                                                    "",
                                                                                  disabled: !_vm.mycpdcheck,
                                                                                  readonly: !_vm.mycpdcheck
                                                                                },
                                                                                model: {
                                                                                  value:
                                                                                    _vm
                                                                                      .editedCPD
                                                                                      .myrating,
                                                                                  callback: function(
                                                                                    $$v
                                                                                  ) {
                                                                                    _vm.$set(
                                                                                      _vm.editedCPD,
                                                                                      "myrating",
                                                                                      $$v
                                                                                    )
                                                                                  },
                                                                                  expression:
                                                                                    "editedCPD.myrating"
                                                                                }
                                                                              }
                                                                            )
                                                                          ],
                                                                          1
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _vm
                                                                      .editedCPD
                                                                      .mycertificates
                                                                      .length
                                                                      ? _c(
                                                                          "v-col",
                                                                          [
                                                                            _c(
                                                                              "div",
                                                                              {
                                                                                attrs: {
                                                                                  id:
                                                                                    "certificates"
                                                                                }
                                                                              },
                                                                              [
                                                                                _c(
                                                                                  "v-icon",
                                                                                  {
                                                                                    staticClass:
                                                                                      "mr-3"
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      "fa-certificate fa-fw"
                                                                                    )
                                                                                  ]
                                                                                ),
                                                                                _vm._v(
                                                                                  "Attached Certificate(s)\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                                                                ),
                                                                                _vm._l(
                                                                                  _vm
                                                                                    .editedCPD
                                                                                    .mycertificates,
                                                                                  function(
                                                                                    certificate
                                                                                  ) {
                                                                                    return _c(
                                                                                      "v-col",
                                                                                      {
                                                                                        key:
                                                                                          certificate.id,
                                                                                        staticClass:
                                                                                          "py-0 pl-5"
                                                                                      },
                                                                                      [
                                                                                        _c(
                                                                                          "v-icon",
                                                                                          {
                                                                                            staticClass:
                                                                                              "d-none d-lg-block"
                                                                                          },
                                                                                          [
                                                                                            _vm._v(
                                                                                              "fas fa-blank fa-fw"
                                                                                            )
                                                                                          ]
                                                                                        ),
                                                                                        _vm._v(
                                                                                          " "
                                                                                        ),
                                                                                        _c(
                                                                                          "a",
                                                                                          {
                                                                                            staticStyle: {
                                                                                              "text-decoration":
                                                                                                "none"
                                                                                            },
                                                                                            attrs: {
                                                                                              href:
                                                                                                "../" +
                                                                                                certificate.path,
                                                                                              target:
                                                                                                "_blank"
                                                                                            }
                                                                                          },
                                                                                          [
                                                                                            _c(
                                                                                              "v-btn",
                                                                                              {
                                                                                                staticClass:
                                                                                                  "ma-2",
                                                                                                attrs: {
                                                                                                  text:
                                                                                                    ""
                                                                                                }
                                                                                              },
                                                                                              [
                                                                                                _c(
                                                                                                  "v-icon",
                                                                                                  {
                                                                                                    staticClass:
                                                                                                      "mr-3"
                                                                                                  },
                                                                                                  [
                                                                                                    _vm._v(
                                                                                                      "mdi-certificate"
                                                                                                    )
                                                                                                  ]
                                                                                                ),
                                                                                                _vm._v(
                                                                                                  "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                                                                    _vm._s(
                                                                                                      certificate.name
                                                                                                    ) +
                                                                                                    "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                                                                                ),
                                                                                                _c(
                                                                                                  "v-icon",
                                                                                                  {
                                                                                                    staticClass:
                                                                                                      "ml-3",
                                                                                                    attrs: {
                                                                                                      color:
                                                                                                        "white"
                                                                                                    }
                                                                                                  },
                                                                                                  [
                                                                                                    _vm._v(
                                                                                                      "mdi-download"
                                                                                                    )
                                                                                                  ]
                                                                                                )
                                                                                              ],
                                                                                              1
                                                                                            )
                                                                                          ],
                                                                                          1
                                                                                        ),
                                                                                        _vm._v(
                                                                                          " "
                                                                                        ),
                                                                                        _vm.mycpdcheck
                                                                                          ? _c(
                                                                                              "v-btn",
                                                                                              {
                                                                                                staticClass:
                                                                                                  "ma-2 outlined",
                                                                                                attrs: {
                                                                                                  color:
                                                                                                    "red darken-3"
                                                                                                },
                                                                                                on: {
                                                                                                  click: function(
                                                                                                    $event
                                                                                                  ) {
                                                                                                    return _vm.confirmDeleteUpload(
                                                                                                      certificate
                                                                                                    )
                                                                                                  }
                                                                                                }
                                                                                              },
                                                                                              [
                                                                                                _c(
                                                                                                  "v-icon",
                                                                                                  {
                                                                                                    attrs: {
                                                                                                      color:
                                                                                                        "white"
                                                                                                    }
                                                                                                  },
                                                                                                  [
                                                                                                    _vm._v(
                                                                                                      "far fa-trash-alt fa-sm"
                                                                                                    )
                                                                                                  ]
                                                                                                )
                                                                                              ],
                                                                                              1
                                                                                            )
                                                                                          : _vm._e()
                                                                                      ],
                                                                                      1
                                                                                    )
                                                                                  }
                                                                                )
                                                                              ],
                                                                              2
                                                                            )
                                                                          ]
                                                                        )
                                                                      : _vm._e(),
                                                                    _vm._v(" "),
                                                                    _vm.uploadingFile
                                                                      ? _c(
                                                                          "v-col",
                                                                          {
                                                                            attrs: {
                                                                              cols:
                                                                                "12"
                                                                            }
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "v-progress-linear",
                                                                              {
                                                                                attrs: {
                                                                                  indeterminate:
                                                                                    ""
                                                                                }
                                                                              }
                                                                            )
                                                                          ],
                                                                          1
                                                                        )
                                                                      : _vm._e(),
                                                                    _vm._v(" "),
                                                                    !_vm.uploadingFile &&
                                                                    _vm.mycpdcheck
                                                                      ? _c(
                                                                          "v-col",
                                                                          {
                                                                            attrs: {
                                                                              cols:
                                                                                "12"
                                                                            }
                                                                          },
                                                                          [
                                                                            !_vm.uploadingFile
                                                                              ? _c(
                                                                                  "div",
                                                                                  {
                                                                                    attrs: {
                                                                                      id:
                                                                                        "addcertificates"
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "p",
                                                                                      [
                                                                                        _c(
                                                                                          "v-icon",
                                                                                          {
                                                                                            staticClass:
                                                                                              "mr-3"
                                                                                          },
                                                                                          [
                                                                                            _vm._v(
                                                                                              "mdi-upload"
                                                                                            )
                                                                                          ]
                                                                                        ),
                                                                                        _vm._v(
                                                                                          "Upload Certificate(s)\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                                                                        )
                                                                                      ],
                                                                                      1
                                                                                    ),
                                                                                    _vm._v(
                                                                                      " "
                                                                                    ),
                                                                                    _c(
                                                                                      "v-file-input",
                                                                                      {
                                                                                        attrs: {
                                                                                          color:
                                                                                            "blue accent-4",
                                                                                          counter:
                                                                                            "",
                                                                                          label:
                                                                                            "Upload your certificate",
                                                                                          "prepend-icon":
                                                                                            "mdi-none",
                                                                                          outlined:
                                                                                            "",
                                                                                          multiple:
                                                                                            "",
                                                                                          "show-size": 1000
                                                                                        },
                                                                                        scopedSlots: _vm._u(
                                                                                          [
                                                                                            {
                                                                                              key:
                                                                                                "selection",
                                                                                              fn: function(
                                                                                                ref
                                                                                              ) {
                                                                                                var index =
                                                                                                  ref.index
                                                                                                var text =
                                                                                                  ref.text
                                                                                                return [
                                                                                                  index <
                                                                                                  2
                                                                                                    ? _c(
                                                                                                        "v-chip",
                                                                                                        {
                                                                                                          attrs: {
                                                                                                            color:
                                                                                                              "teal darken-3",
                                                                                                            dark:
                                                                                                              "",
                                                                                                            label:
                                                                                                              "",
                                                                                                            small:
                                                                                                              ""
                                                                                                          }
                                                                                                        },
                                                                                                        [
                                                                                                          _vm._v(
                                                                                                            _vm._s(
                                                                                                              text
                                                                                                            )
                                                                                                          )
                                                                                                        ]
                                                                                                      )
                                                                                                    : index ===
                                                                                                      2
                                                                                                    ? _c(
                                                                                                        "span",
                                                                                                        {
                                                                                                          staticClass:
                                                                                                            "overline grey--text text--darken-3 mx-2"
                                                                                                        },
                                                                                                        [
                                                                                                          _vm._v(
                                                                                                            "+" +
                                                                                                              _vm._s(
                                                                                                                _vm
                                                                                                                  .editedCPD
                                                                                                                  .files
                                                                                                                  .length -
                                                                                                                  2
                                                                                                              ) +
                                                                                                              "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFile(s)"
                                                                                                          )
                                                                                                        ]
                                                                                                      )
                                                                                                    : _vm._e()
                                                                                                ]
                                                                                              }
                                                                                            }
                                                                                          ],
                                                                                          null,
                                                                                          false,
                                                                                          3845897616
                                                                                        ),
                                                                                        model: {
                                                                                          value:
                                                                                            _vm
                                                                                              .editedCPD
                                                                                              .files,
                                                                                          callback: function(
                                                                                            $$v
                                                                                          ) {
                                                                                            _vm.$set(
                                                                                              _vm.editedCPD,
                                                                                              "files",
                                                                                              $$v
                                                                                            )
                                                                                          },
                                                                                          expression:
                                                                                            "editedCPD.files"
                                                                                        }
                                                                                      }
                                                                                    ),
                                                                                    _vm._v(
                                                                                      " "
                                                                                    ),
                                                                                    _c(
                                                                                      "div",
                                                                                      {
                                                                                        staticClass:
                                                                                          "ml-8"
                                                                                      },
                                                                                      [
                                                                                        _vm
                                                                                          .editedCPD
                                                                                          .files &&
                                                                                        _vm
                                                                                          .editedCPD
                                                                                          .id &&
                                                                                        !_vm.uploadingFile
                                                                                          ? _c(
                                                                                              "v-btn",
                                                                                              {
                                                                                                staticClass:
                                                                                                  "btn-block",
                                                                                                attrs: {
                                                                                                  color:
                                                                                                    "teal darken-3"
                                                                                                },
                                                                                                on: {
                                                                                                  click:
                                                                                                    _vm.uploadFiles
                                                                                                }
                                                                                              },
                                                                                              [
                                                                                                _vm._v(
                                                                                                  "Upload Files"
                                                                                                )
                                                                                              ]
                                                                                            )
                                                                                          : _vm._e()
                                                                                      ],
                                                                                      1
                                                                                    )
                                                                                  ],
                                                                                  1
                                                                                )
                                                                              : _vm._e()
                                                                          ]
                                                                        )
                                                                      : _vm._e()
                                                                  ],
                                                                  1
                                                                )
                                                              ],
                                                              1
                                                            )
                                                          ],
                                                          1
                                                        ),
                                                        _vm._v(" "),
                                                        _vm.mycpdcheck
                                                          ? _c(
                                                              "v-card-actions",
                                                              [
                                                                _vm.canEditCPD
                                                                  ? _c(
                                                                      "v-btn",
                                                                      {
                                                                        attrs: {
                                                                          outlined:
                                                                            "",
                                                                          color:
                                                                            "red darken-1",
                                                                          text:
                                                                            ""
                                                                        },
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            return _vm.confirmDeleteCPD()
                                                                          }
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "Delete"
                                                                        )
                                                                      ]
                                                                    )
                                                                  : _vm._e(),
                                                                _vm._v(" "),
                                                                _c("v-spacer"),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-btn",
                                                                  {
                                                                    attrs: {
                                                                      text: ""
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        _vm.close
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Close"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-btn",
                                                                  {
                                                                    attrs: {
                                                                      type:
                                                                        "submit",
                                                                      color:
                                                                        "green"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Save"
                                                                    )
                                                                  ]
                                                                )
                                                              ],
                                                              1
                                                            )
                                                          : _vm._e()
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            },
                            proxy: true
                          },
                          {
                            key: "item.myreview",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm.publicchip(item)
                                  ? _c(
                                      "v-chip",
                                      {
                                        staticClass: "mr-2",
                                        attrs: {
                                          "x-small": "",
                                          color: "green darken-3"
                                        }
                                      },
                                      [_vm._v("Public")]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                !_vm.publicchip(item) && item.myreview
                                  ? _c(
                                      "v-chip",
                                      {
                                        staticClass: "mr-2",
                                        attrs: { "x-small": "", color: "red" }
                                      },
                                      [_vm._v("Private")]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("div", { staticClass: "review" }, [
                                  _vm._v(_vm._s(item.myreview))
                                ])
                              ]
                            }
                          },
                          {
                            key: "item.myprogress",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                item.myprogress == 1
                                  ? _c(
                                      "v-avatar",
                                      {
                                        attrs: {
                                          color: "blue darken-3",
                                          size: "36"
                                        }
                                      },
                                      [_c("v-icon", [_vm._v("mdi-alarm")])],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                item.myprogress == 2
                                  ? _c(
                                      "v-avatar",
                                      {
                                        attrs: {
                                          color: "green darken-3",
                                          size: "36"
                                        }
                                      },
                                      [_c("v-icon", [_vm._v("mdi-check")])],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                item.myprogress == 3
                                  ? _c(
                                      "v-avatar",
                                      { attrs: { color: "pink", size: "36" } },
                                      [_c("v-icon", [_vm._v("mdi-heart")])],
                                      1
                                    )
                                  : _vm._e()
                              ]
                            }
                          },
                          {
                            key: "item.start_date",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                item.start_date
                                  ? _c("div", [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t" +
                                          _vm._s(
                                            _vm._f("dateFormat")(
                                              _vm._f("dateParse")(
                                                item.start_date,
                                                "YYYY.MM.DD"
                                              ),
                                              "DD-MM-YYYY"
                                            )
                                          ) +
                                          "\n\t\t\t\t\t\t\t"
                                      )
                                    ])
                                  : _vm._e()
                              ]
                            }
                          },
                          {
                            key: "item.completed_date",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                item.completed_date
                                  ? _c("div", [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t" +
                                          _vm._s(
                                            _vm._f("dateFormat")(
                                              _vm._f("dateParse")(
                                                item.completed_date,
                                                "YYYY.MM.DD"
                                              ),
                                              "DD-MM-YYYY"
                                            )
                                          ) +
                                          "\n\t\t\t\t\t\t\t"
                                      )
                                    ])
                                  : _vm._e()
                              ]
                            }
                          },
                          {
                            key: "item.myrating",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                item.myrating
                                  ? _c(
                                      "v-icon",
                                      {
                                        staticClass: "mr-2",
                                        attrs: {
                                          color: _vm.getStarColor(item.myrating)
                                        }
                                      },
                                      [_vm._v("fa-star fa-sm")]
                                    )
                                  : _vm._e(),
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t" +
                                    _vm._s(
                                      _vm.roundOff(item.myrating, 1) || ""
                                    ) +
                                    "\n\t\t\t\t\t\t"
                                )
                              ]
                            }
                          },
                          {
                            key: "item.avgrating",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                item.avgrating
                                  ? _c(
                                      "v-icon",
                                      {
                                        staticClass: "mr-2",
                                        attrs: {
                                          color: _vm.getStarColor(
                                            item.avgrating
                                          )
                                        }
                                      },
                                      [_vm._v("fa-star fa-sm")]
                                    )
                                  : _vm._e(),
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t" +
                                    _vm._s(
                                      _vm.roundOff(item.avgrating, 1) || ""
                                    ) +
                                    "\n\t\t\t\t\t\t"
                                )
                              ]
                            }
                          },
                          {
                            key: "item.actions",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "v-menu",
                                  {
                                    attrs: {
                                      "offset-y": "",
                                      bottom: "",
                                      left: ""
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "activator",
                                          fn: function(ref) {
                                            var on = ref.on
                                            return [
                                              !_vm.$vuetify.breakpoint.xsOnly
                                                ? _c(
                                                    "v-btn",
                                                    _vm._g(
                                                      { attrs: { icon: "" } },
                                                      on
                                                    ),
                                                    [
                                                      !_vm.$vuetify.breakpoint
                                                        .xsOnly
                                                        ? _c("v-icon", [
                                                            _vm._v(
                                                              "mdi-dots-vertical"
                                                            )
                                                          ])
                                                        : _vm._e()
                                                    ],
                                                    1
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.$vuetify.breakpoint.xsOnly
                                                ? _c(
                                                    "v-btn",
                                                    _vm._g(
                                                      {
                                                        attrs: {
                                                          text: "",
                                                          outlined: ""
                                                        }
                                                      },
                                                      on
                                                    ),
                                                    [_vm._v("Actions")]
                                                  )
                                                : _vm._e()
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      true
                                    )
                                  },
                                  [
                                    _vm._v(" "),
                                    _c(
                                      "v-list",
                                      [
                                        _c(
                                          "v-list-item",
                                          {
                                            on: {
                                              click: function($event) {
                                                return _vm.gotoCPD(item)
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-avatar",
                                              [
                                                _c(
                                                  "v-icon",
                                                  { staticClass: "mr-2" },
                                                  [
                                                    _vm._v(
                                                      "mdi-folder-search-outline"
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(
                                              "View CPD\n\t\t\t\t\t\t\t\t\t"
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-item",
                                          {
                                            on: {
                                              click: function($event) {
                                                return _vm.editRecord(item)
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-avatar",
                                              [
                                                _c(
                                                  "v-icon",
                                                  {
                                                    staticClass: "mr-2",
                                                    attrs: { color: "amber" }
                                                  },
                                                  [_vm._v("fa-edit fa-sm")]
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(
                                              "View Record\n\t\t\t\t\t\t\t\t\t"
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _vm.mycpdcheck
                                          ? _c(
                                              "v-list-item",
                                              {
                                                on: {
                                                  click: function($event) {
                                                    return _vm.changestate(
                                                      item,
                                                      2
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-avatar",
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      {
                                                        staticClass: "mr-2",
                                                        attrs: {
                                                          color:
                                                            "green darken-3"
                                                        }
                                                      },
                                                      [_vm._v("mdi-check")]
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(
                                                  "Set Completed\n\t\t\t\t\t\t\t\t\t"
                                                )
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.mycpdcheck
                                          ? _c(
                                              "v-list-item",
                                              {
                                                on: {
                                                  click: function($event) {
                                                    return _vm.changestate(
                                                      item,
                                                      1
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-avatar",
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      {
                                                        staticClass: "mr-2",
                                                        attrs: {
                                                          color:
                                                            "blue lighten-3"
                                                        }
                                                      },
                                                      [_vm._v("mdi-alarm")]
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(
                                                  "Set Started\n\t\t\t\t\t\t\t\t\t"
                                                )
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.mycpdcheck
                                          ? _c(
                                              "v-list-item",
                                              {
                                                on: {
                                                  click: function($event) {
                                                    return _vm.changestate(
                                                      item,
                                                      3
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-avatar",
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      {
                                                        staticClass: "mr-2",
                                                        attrs: { color: "pink" }
                                                      },
                                                      [_vm._v("mdi-heart")]
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(
                                                  "Set Shortlisted\n\t\t\t\t\t\t\t\t\t"
                                                )
                                              ],
                                              1
                                            )
                                          : _vm._e()
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        3298873162
                      )
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "mb-10 mt-5 col-xl-6 col-12 px-3",
                    attrs: { id: "mycpdcourses" }
                  },
                  [
                    _vm.loading
                      ? _c("v-progress-linear", {
                          attrs: { indeterminate: "" }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _c("v-data-table", {
                      attrs: {
                        headers: _vm.otherdatatableheaders,
                        items: _vm.mycpd.othercourses,
                        "items-per-page": 10,
                        search: _vm.searchothers,
                        "sort-by": "name",
                        "sort-desc": false
                      },
                      on: { "click:row": _vm.editRecord },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "top",
                            fn: function() {
                              return [
                                _c(
                                  "v-row",
                                  [
                                    _c(
                                      "v-col",
                                      { staticClass: "mx-5" },
                                      [
                                        _c(
                                          "v-card",
                                          [
                                            _c(
                                              "v-card-title",
                                              {
                                                staticClass:
                                                  "blue darken-3 py-5",
                                                staticStyle: {
                                                  "margin-top":
                                                    "-2rem !important"
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-icon",
                                                  { attrs: { large: "" } },
                                                  [_vm._v("mdi-alarm")]
                                                ),
                                                _vm._v(
                                                  "  To Be\n\t\t\t\t\t\t\t\t\t\t\tCompleted CPD\n\t\t\t\t\t\t\t\t\t\t"
                                                )
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-row",
                                  { staticClass: "px-3" },
                                  [
                                    _c(
                                      "v-col",
                                      {
                                        staticClass: "order-md-1 order-last",
                                        attrs: { cols: "12", md: "6" }
                                      },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            "prepend-icon":
                                              "fas fa-search fa-sm",
                                            "single-line": "",
                                            hint:
                                              "Search your started and shortlisted courses",
                                            "persistent-hint": "",
                                            clearable: ""
                                          },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "label",
                                                fn: function() {
                                                  return [
                                                    _vm._v("Search by keyword")
                                                  ]
                                                },
                                                proxy: true
                                              }
                                            ],
                                            null,
                                            false,
                                            1907567447
                                          ),
                                          model: {
                                            value: _vm.searchothers,
                                            callback: function($$v) {
                                              _vm.searchothers = $$v
                                            },
                                            expression: "searchothers"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      {
                                        staticClass: "order-md-3 order-9",
                                        attrs: { cols: "12", md: "6" }
                                      },
                                      [
                                        _c("v-select", {
                                          attrs: {
                                            "prepend-icon": "fa-filter fa-sm",
                                            hint: "Type Filter",
                                            "persistent-hint": "",
                                            items: _vm.types
                                          },
                                          model: {
                                            value: _vm.type,
                                            callback: function($$v) {
                                              _vm.type = $$v
                                            },
                                            expression: "type"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            },
                            proxy: true
                          },
                          {
                            key: "item.myreview",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm.publicchip(item)
                                  ? _c(
                                      "v-chip",
                                      {
                                        staticClass: "mr-2",
                                        attrs: {
                                          "x-small": "",
                                          color: "green darken-3"
                                        }
                                      },
                                      [_vm._v("Public")]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                !_vm.publicchip(item) && item.myreview
                                  ? _c(
                                      "v-chip",
                                      {
                                        staticClass: "mr-2",
                                        attrs: { "x-small": "", color: "red" }
                                      },
                                      [_vm._v("Private")]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("div", { staticClass: "review" }, [
                                  _vm._v(_vm._s(item.myreview))
                                ])
                              ]
                            }
                          },
                          {
                            key: "item.myprogress",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                item.myprogress == 1
                                  ? _c(
                                      "v-avatar",
                                      {
                                        attrs: {
                                          color: "blue darken-3",
                                          size: "36"
                                        }
                                      },
                                      [_c("v-icon", [_vm._v("mdi-alarm")])],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                item.myprogress == 2
                                  ? _c(
                                      "v-avatar",
                                      {
                                        attrs: {
                                          color: "green darken-3",
                                          size: "36"
                                        }
                                      },
                                      [_c("v-icon", [_vm._v("mdi-check")])],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                item.myprogress == 3
                                  ? _c(
                                      "v-avatar",
                                      { attrs: { color: "pink", size: "36" } },
                                      [_c("v-icon", [_vm._v("mdi-heart")])],
                                      1
                                    )
                                  : _vm._e()
                              ]
                            }
                          },
                          {
                            key: "item.start_date",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                item.start_date
                                  ? _c("div", [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t" +
                                          _vm._s(
                                            _vm._f("dateFormat")(
                                              _vm._f("dateParse")(
                                                item.start_date,
                                                "YYYY.MM.DD"
                                              ),
                                              "DD-MM-YYYY"
                                            )
                                          ) +
                                          "\n\t\t\t\t\t\t\t"
                                      )
                                    ])
                                  : _vm._e()
                              ]
                            }
                          },
                          {
                            key: "item.completed_date",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                item.completed_date
                                  ? _c("div", [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t" +
                                          _vm._s(
                                            _vm._f("dateFormat")(
                                              _vm._f("dateParse")(
                                                item.completed_date,
                                                "YYYY.MM.DD"
                                              ),
                                              "DD-MM-YYYY"
                                            )
                                          ) +
                                          "\n\t\t\t\t\t\t\t"
                                      )
                                    ])
                                  : _vm._e()
                              ]
                            }
                          },
                          {
                            key: "item.myrating",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                item.myrating
                                  ? _c(
                                      "v-icon",
                                      {
                                        staticClass: "mr-2",
                                        attrs: {
                                          color: _vm.getStarColor(item.myrating)
                                        }
                                      },
                                      [_vm._v("fa-star fa-sm")]
                                    )
                                  : _vm._e(),
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t" +
                                    _vm._s(
                                      _vm.roundOff(item.myrating, 1) || ""
                                    ) +
                                    "\n\t\t\t\t\t\t"
                                )
                              ]
                            }
                          },
                          {
                            key: "item.avgrating",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                item.avgrating
                                  ? _c(
                                      "v-icon",
                                      {
                                        staticClass: "mr-2",
                                        attrs: {
                                          color: _vm.getStarColor(
                                            item.avgrating
                                          )
                                        }
                                      },
                                      [_vm._v("fa-star fa-sm")]
                                    )
                                  : _vm._e(),
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t" +
                                    _vm._s(
                                      _vm.roundOff(item.avgrating, 1) || ""
                                    ) +
                                    "\n\t\t\t\t\t\t"
                                )
                              ]
                            }
                          },
                          {
                            key: "item.actions",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm.mycpdcheck
                                  ? _c(
                                      "v-menu",
                                      {
                                        attrs: {
                                          "offset-y": "",
                                          bottom: "",
                                          left: ""
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "activator",
                                              fn: function(ref) {
                                                var on = ref.on
                                                return [
                                                  !_vm.$vuetify.breakpoint
                                                    .xsOnly
                                                    ? _c(
                                                        "v-btn",
                                                        _vm._g(
                                                          {
                                                            attrs: { icon: "" }
                                                          },
                                                          on
                                                        ),
                                                        [
                                                          !_vm.$vuetify
                                                            .breakpoint.xsOnly
                                                            ? _c("v-icon", [
                                                                _vm._v(
                                                                  "mdi-dots-vertical"
                                                                )
                                                              ])
                                                            : _vm._e()
                                                        ],
                                                        1
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.$vuetify.breakpoint.xsOnly
                                                    ? _c(
                                                        "v-btn",
                                                        _vm._g(
                                                          {
                                                            attrs: {
                                                              text: "",
                                                              outlined: ""
                                                            }
                                                          },
                                                          on
                                                        ),
                                                        [_vm._v("Actions")]
                                                      )
                                                    : _vm._e()
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          true
                                        )
                                      },
                                      [
                                        _vm._v(" "),
                                        _c(
                                          "v-list",
                                          [
                                            _c(
                                              "v-list-item",
                                              {
                                                on: {
                                                  click: function($event) {
                                                    return _vm.gotoCPD(item)
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-avatar",
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      { staticClass: "mr-2" },
                                                      [
                                                        _vm._v(
                                                          "mdi-folder-search-outline"
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(
                                                  "View CPD\n\t\t\t\t\t\t\t\t\t"
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-list-item",
                                              {
                                                on: {
                                                  click: function($event) {
                                                    return _vm.editRecord(item)
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-avatar",
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      {
                                                        staticClass: "mr-2",
                                                        attrs: {
                                                          color: "amber"
                                                        }
                                                      },
                                                      [_vm._v("fa-edit fa-sm")]
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(
                                                  "View Record\n\t\t\t\t\t\t\t\t\t"
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-list-item",
                                              {
                                                on: {
                                                  click: function($event) {
                                                    return _vm.changestate(
                                                      item,
                                                      2
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-avatar",
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      {
                                                        staticClass: "mr-2",
                                                        attrs: {
                                                          color:
                                                            "green darken-3"
                                                        }
                                                      },
                                                      [_vm._v("mdi-check")]
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(
                                                  "Set Completed\n\t\t\t\t\t\t\t\t\t"
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-list-item",
                                              {
                                                on: {
                                                  click: function($event) {
                                                    return _vm.changestate(
                                                      item,
                                                      1
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-avatar",
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      {
                                                        staticClass: "mr-2",
                                                        attrs: {
                                                          color:
                                                            "blue lighten-3"
                                                        }
                                                      },
                                                      [_vm._v("mdi-alarm")]
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(
                                                  "Set Started\n\t\t\t\t\t\t\t\t\t"
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-list-item",
                                              {
                                                on: {
                                                  click: function($event) {
                                                    return _vm.changestate(
                                                      item,
                                                      3
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-avatar",
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      {
                                                        staticClass: "mr-2",
                                                        attrs: { color: "pink" }
                                                      },
                                                      [_vm._v("mdi-heart")]
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(
                                                  "Set Shortlisted\n\t\t\t\t\t\t\t\t\t"
                                                )
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        253926442
                      )
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _vm.confirmDeleteUploadDialog
                ? _c(
                    "v-dialog",
                    {
                      attrs: { persistent: "", "max-width": "500px" },
                      model: {
                        value: _vm.confirmDeleteUpload,
                        callback: function($$v) {
                          _vm.confirmDeleteUpload = $$v
                        },
                        expression: "confirmDeleteUpload"
                      }
                    },
                    [
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-card-title",
                            { staticClass: "red darken-4" },
                            [
                              _c("v-icon", { staticClass: "mr-3" }, [
                                _vm._v("fa-exclamation-triangle")
                              ]),
                              _vm._v("Confirm Delete\n\t\t\t\t\t")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-card-text", { staticClass: "pt-3" }, [
                            _c("h3", { staticClass: "title" }, [
                              _vm._v(_vm._s(_vm.deleteCertificate.name))
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "grey--text" }, [
                              _vm._v(
                                "\n\t\t\t\t\t\t\tUpload date:\n\t\t\t\t\t\t\t" +
                                  _vm._s(
                                    _vm._f("dateFormat")(
                                      _vm._f("dateParse")(
                                        _vm.deleteCertificate.created_at,
                                        "YYYY.MM.DD"
                                      ),
                                      "DD-MM-YYYY"
                                    )
                                  ) +
                                  "\n\t\t\t\t\t\t"
                              )
                            ]),
                            _vm._v(" "),
                            _c("h3", { staticClass: "mb-3" }, [
                              _vm._v(
                                "Are you sure you want to delete this file?"
                              )
                            ]),
                            _vm._v(" "),
                            _c("h3", { staticClass: "red--text darken-4" }, [
                              _vm._v(
                                "\n\t\t\t\t\t\t\tThis file will be permanently deleted!\n\t\t\t\t\t\t"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { text: "" },
                                  on: { click: _vm.cancelDeleteUpload }
                                },
                                [_vm._v("Cancel")]
                              ),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "red darken-4" },
                                  on: {
                                    click: function($event) {
                                      return _vm.doDeleteCertificate(
                                        _vm.deleteCertificate.id
                                      )
                                    }
                                  }
                                },
                                [_vm._v("Delete")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.confirmDeleteCPDDialog
                ? _c(
                    "v-dialog",
                    {
                      attrs: { persistent: "", "max-width": "500px" },
                      model: {
                        value: _vm.confirmDeleteCPD,
                        callback: function($$v) {
                          _vm.confirmDeleteCPD = $$v
                        },
                        expression: "confirmDeleteCPD"
                      }
                    },
                    [
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-card-title",
                            { staticClass: "red darken-4" },
                            [
                              _c("v-icon", { staticClass: "mr-3" }, [
                                _vm._v("fa-exclamation-triangle")
                              ]),
                              _vm._v(
                                "Confirm Delete\n\t\t\t\t\t\tCPD\n\t\t\t\t\t"
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-card-text", { staticClass: "pt-3" }, [
                            _c("h3", { staticClass: "title" }, [
                              _vm._v(_vm._s(_vm.editedCPD.name))
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "mb-3 grey--text" }, [
                              _vm._v(
                                "\n\t\t\t\t\t\t\tAll ratings, reviews and dates linked to this course will also be\n\t\t\t\t\t\t\tdeleted.\n\t\t\t\t\t\t"
                              )
                            ]),
                            _vm._v(" "),
                            _c("h3", { staticClass: "red--text darken-4" }, [
                              _vm._v(
                                "\n\t\t\t\t\t\t\tAre you sure you want to delete this course from your CPD record?\n\t\t\t\t\t\t"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { text: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.confirmDeleteCPDDialog = false
                                    }
                                  }
                                },
                                [_vm._v("Cancel")]
                              ),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "red darken-4" },
                                  on: {
                                    click: function($event) {
                                      return _vm.doDeleteCPD(_vm.editedCPD.id)
                                    }
                                  }
                                },
                                [_vm._v("Delete")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "v-snackbar",
                {
                  attrs: {
                    color: _vm.snackbar.color,
                    timeout: _vm.snackbar.timeout,
                    "multi-line": "",
                    bottom: ""
                  },
                  model: {
                    value: _vm.snackbar.show,
                    callback: function($$v) {
                      _vm.$set(_vm.snackbar, "show", $$v)
                    },
                    expression: "snackbar.show"
                  }
                },
                [
                  _vm._v(
                    "\n\t\t\t\t" + _vm._s(_vm.snackbar.text) + "\n\t\t\t\t"
                  ),
                  _c(
                    "v-btn",
                    {
                      attrs: { dark: "", text: "" },
                      on: {
                        click: function($event) {
                          _vm.snackbar.show = false
                        }
                      }
                    },
                    [_vm._v("Close")]
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/MyCourses.vue?vue&type=template&id=21844a03&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/u/MyCourses.vue?vue&type=template&id=21844a03& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.loading
        ? _c(
            "h1",
            [
              _vm._v("\n\t\tLOADING...\n\t\t"),
              _c("v-progress-linear", {
                attrs: { indeterminate: "", color: "teal" }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.loading
        ? _c(
            "v-row",
            [
              _c(
                "h1",
                { staticClass: "col-12 font-weight-light" },
                [
                  _vm._v("\n\t\t\tCompleted\n\t\t\t"),
                  !_vm.mycompletedcourses
                    ? _c(
                        "v-chip",
                        {
                          staticClass: "ma-2",
                          attrs: {
                            color: "red darken-4",
                            "text-color": "white"
                          }
                        },
                        [_vm._v("0")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.mycompletedcourses
                    ? _c(
                        "h3",
                        { staticClass: "font-weight-light orange--text" },
                        [_vm._v("You have not completed any courses.")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.mycompletedcourses
                    ? _c(
                        "v-chip",
                        {
                          staticClass: "ma-2",
                          attrs: { color: "teal", "text-color": "white" }
                        },
                        [_vm._v(_vm._s(_vm.mycompletedcourses.courses.length))]
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _vm._l(_vm.mycompletedcourses.courses, function(course) {
                return _c(
                  "course-tile",
                  _vm._b(
                    {
                      key: course.id,
                      staticClass: "col-sm-6 col-md-4 col-lg-3 col-xl-2 col-12",
                      on: {
                        addcoursedata: _vm.addcoursedata,
                        addRating: _vm.addRating
                      }
                    },
                    "course-tile",
                    course,
                    false
                  )
                )
              })
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.loading
        ? _c(
            "v-row",
            [
              _c(
                "h1",
                { staticClass: "col-12 font-weight-light" },
                [
                  _vm._v("\n\t\t\tIn-Progress\n\t\t\t"),
                  !_vm.myinprogresscourses
                    ? _c(
                        "v-chip",
                        {
                          staticClass: "ma-2",
                          attrs: {
                            color: "red darken-4",
                            "text-color": "white"
                          }
                        },
                        [_vm._v("0")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.myinprogresscourses
                    ? _c(
                        "h3",
                        { staticClass: "font-weight-light orange--text" },
                        [_vm._v("You have no in-progress courses.")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.myinprogresscourses
                    ? _c(
                        "v-chip",
                        {
                          staticClass: "ma-2",
                          attrs: { color: "teal", "text-color": "white" }
                        },
                        [_vm._v(_vm._s(_vm.myinprogresscourses.courses.length))]
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _vm._l(_vm.myinprogresscourses.courses, function(course) {
                return _c(
                  "course-tile",
                  _vm._b(
                    {
                      key: course.id,
                      staticClass: "col-sm-6 col-md-4 col-lg-3 col-xl-2 col-12",
                      on: {
                        addcoursedata: _vm.addcoursedata,
                        addRating: _vm.addRating
                      }
                    },
                    "course-tile",
                    course,
                    false
                  )
                )
              })
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.loading
        ? _c(
            "v-row",
            [
              _c(
                "h1",
                { staticClass: "col-12 font-weight-light" },
                [
                  _vm._v("\n\t\t\tShortlisted\n\t\t\t"),
                  !_vm.myshortlistedcourses
                    ? _c(
                        "v-chip",
                        {
                          staticClass: "ma-2",
                          attrs: {
                            color: "red darken-4",
                            "text-color": "white"
                          }
                        },
                        [_vm._v("0")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.myshortlistedcourses
                    ? _c(
                        "h3",
                        { staticClass: "font-weight-light orange--text" },
                        [_vm._v("You have no shortlisted courses.")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.myshortlistedcourses
                    ? _c(
                        "v-chip",
                        {
                          staticClass: "ma-2",
                          attrs: { color: "teal", "text-color": "white" }
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.myshortlistedcourses.courses.length)
                          )
                        ]
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _vm._l(_vm.myshortlistedcourses.courses, function(course) {
                return _c(
                  "course-tile",
                  _vm._b(
                    {
                      key: course.id,
                      staticClass: "col-sm-6 col-md-4 col-lg-3 col-xl-2 col-12",
                      on: {
                        addcoursedata: _vm.addcoursedata,
                        addRating: _vm.addRating
                      }
                    },
                    "course-tile",
                    course,
                    false
                  )
                )
              })
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-bottom-sheet",
        {
          model: {
            value: _vm.addtosheet,
            callback: function($$v) {
              _vm.addtosheet = $$v
            },
            expression: "addtosheet"
          }
        },
        [
          _c(
            "v-list",
            [
              _c("v-subheader", [
                _vm._v("\n\t\t\t\tChoose an action for \n\t\t\t\t"),
                _c("span", { staticClass: "blue--text" }, [
                  _vm._v(_vm._s(this.addtocoursename))
                ])
              ]),
              _vm._v(" "),
              _vm._l(_vm.addtooptions, function(tile) {
                return _c(
                  "v-list-item",
                  {
                    key: tile.title,
                    on: {
                      click: function($event) {
                        _vm.addtosheet = false
                        _vm.addToMyCPD(tile.action, tile.stateid)
                      }
                    }
                  },
                  [
                    _c(
                      "v-btn",
                      {
                        staticClass: "mx-2",
                        attrs: {
                          fab: "",
                          dark: "",
                          small: "",
                          color: tile.buttoncolor
                        }
                      },
                      [_c("v-icon", [_vm._v(_vm._s(tile.icon))])],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-list-item-title", [_vm._v(_vm._s(tile.title))])
                  ],
                  1
                )
              }),
              _vm._v(" "),
              _c(
                "v-list-item",
                {
                  on: {
                    click: function($event) {
                      _vm.addtosheet = false
                      _vm.deleteFromMyCPD()
                    }
                  }
                },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "mx-2",
                      attrs: {
                        fab: "",
                        dark: "",
                        small: "",
                        color: _vm.deleteFromShortlist.buttoncolor
                      }
                    },
                    [
                      _c("v-icon", [
                        _vm._v(_vm._s(_vm.deleteFromShortlist.icon))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-list-item-title", [
                    _vm._v(_vm._s(_vm.deleteFromShortlist.title))
                  ])
                ],
                1
              )
            ],
            2
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/MyProfile.vue?vue&type=template&id=30034f74&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/u/MyProfile.vue?vue&type=template&id=30034f74& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_vm._v("\nMY PROFILE\n")])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/MyReviews.vue?vue&type=template&id=778630e6&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/u/MyReviews.vue?vue&type=template&id=778630e6&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "h1",
        [
          _c("v-icon", [_vm._v("fas fa-folder-open")]),
          _vm._v("  My Reviews\n\t\t")
        ],
        1
      ),
      _vm._v(" "),
      _vm.loading
        ? _c("v-progress-linear", { attrs: { indeterminate: "" } })
        : _vm._e(),
      _vm._v(" "),
      _c("v-data-table", {
        attrs: {
          "click:row": "editItem",
          headers: _vm.datatableheaders,
          items: _vm.reviews,
          search: _vm.search,
          "fixed-header": "",
          "multi-sort": _vm.multisort,
          "items-per-page": 100
        },
        scopedSlots: _vm._u([
          {
            key: "top",
            fn: function() {
              return [
                _c(
                  "v-row",
                  { staticClass: "px-3" },
                  [
                    _c(
                      "v-col",
                      {
                        staticClass: "order-md-1 order-last",
                        attrs: { cols: "12", md: "9" }
                      },
                      [
                        _c("v-text-field", {
                          attrs: {
                            "append-icon": "fas fa-search fa-sm",
                            label: "Search",
                            "single-line": "",
                            "hide-details": ""
                          },
                          model: {
                            value: _vm.search,
                            callback: function($$v) {
                              _vm.search = $$v
                            },
                            expression: "search"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      {
                        staticClass: "text-right order-first order-md-2",
                        attrs: { right: "", cols: "12", md: "3" }
                      },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { color: "blue darken-3" },
                            on: {
                              click: function($event) {
                                return _vm.addReview()
                              }
                            }
                          },
                          [_vm._v("Add Review")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            },
            proxy: true
          },
          {
            key: "item.review",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("span", { staticClass: "review" }, [
                  _vm._v(_vm._s(item.review))
                ])
              ]
            }
          },
          {
            key: "item.public",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm.publicchip(item)
                  ? _c(
                      "v-chip",
                      {
                        staticClass: "mr-2",
                        attrs: { "x-small": "", color: "green darken-3" }
                      },
                      [_vm._v("Public")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                !_vm.publicchip(item)
                  ? _c(
                      "v-chip",
                      {
                        staticClass: "mr-2",
                        attrs: { "x-small": "", color: "red" }
                      },
                      [_vm._v("Private")]
                    )
                  : _vm._e()
              ]
            }
          },
          {
            key: "item.course",
            fn: function(ref) {
              var item = ref.item
              return [_vm._v(_vm._s(item.course))]
            }
          },
          {
            key: "item.date",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm._v(
                  _vm._s(
                    _vm._f("dateFormat")(
                      _vm._f("dateParse")(item.date, "YYYY.MM.DD"),
                      "DD-MM-YYYY"
                    )
                  )
                )
              ]
            }
          },
          {
            key: "item.updated",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm._v(
                  _vm._s(
                    _vm._f("dateFormat")(
                      _vm._f("dateParse")(item.updated, "YYYY.MM.DD"),
                      "DD-MM-YYYY"
                    )
                  )
                )
              ]
            }
          },
          {
            key: "item.actions",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-avatar",
                  [
                    _c(
                      "v-icon",
                      {
                        staticClass: "mr-2",
                        on: {
                          click: function($event) {
                            return _vm.editItem(item)
                          }
                        }
                      },
                      [_vm._v("mdi-pencil")]
                    )
                  ],
                  1
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: {
            "max-width": "600px",
            fullscreen: _vm.$vuetify.breakpoint.xsOnly
          },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "pb-1" }, [
                _c("span", { staticClass: "headline" }, [
                  _vm._v(_vm._s(_vm.formTitle))
                ])
              ]),
              _vm._v(" "),
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.submit($event)
                    }
                  }
                },
                [
                  _c(
                    "v-card-text",
                    { staticClass: "pb-1" },
                    [
                      _c(
                        "v-container",
                        { staticClass: "pb-1" },
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      id: "course",
                                      items: _vm.courses,
                                      label: "CPD",
                                      hint: "Select CPD",
                                      "persistent-hint": ""
                                    },
                                    model: {
                                      value: _vm.editedItem.course,
                                      callback: function($$v) {
                                        _vm.$set(_vm.editedItem, "course", $$v)
                                      },
                                      expression: "editedItem.course"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-textarea", {
                                    attrs: { id: "review", label: "Review" },
                                    model: {
                                      value: _vm.editedItem.review,
                                      callback: function($$v) {
                                        _vm.$set(_vm.editedItem, "review", $$v)
                                      },
                                      expression: "editedItem.review"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      readonly: "",
                                      disabled: "",
                                      id: "reviewer",
                                      label: "Reviewer",
                                      rules: _vm.rules,
                                      "hide-details": "auto"
                                    },
                                    model: {
                                      value: _vm.editedItem.reviewer,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.editedItem,
                                          "reviewer",
                                          $$v
                                        )
                                      },
                                      expression: "editedItem.reviewer"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-switch", {
                                    attrs: {
                                      id: "public",
                                      label: _vm.publicPrivateLabel(
                                        _vm.editedItem.public
                                      )
                                    },
                                    model: {
                                      value: _vm.editedItem.public,
                                      callback: function($$v) {
                                        _vm.$set(_vm.editedItem, "public", $$v)
                                      },
                                      expression: "editedItem.public"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _vm.formDelete
                        ? _c(
                            "v-btn",
                            {
                              attrs: { color: "red darken-1", text: "" },
                              on: {
                                click: function($event) {
                                  return _vm.deleteReview()
                                }
                              }
                            },
                            [_vm._v("Delete")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { attrs: { text: "" }, on: { click: _vm.close } },
                        [_vm._v("Cancel")]
                      ),
                      _vm._v(" "),
                      _c("v-btn", { attrs: { type: "submit", text: "" } }, [
                        _vm._v("Save")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: {
            color: _vm.snackbar.color,
            timeout: _vm.snackbar.timeout,
            "multi-line": "",
            bottom: ""
          },
          model: {
            value: _vm.snackbar.show,
            callback: function($$v) {
              _vm.$set(_vm.snackbar, "show", $$v)
            },
            expression: "snackbar.show"
          }
        },
        [
          _vm._v("\n\t\t\t" + _vm._s(_vm.snackbar.text) + "\n\t\t\t"),
          _c(
            "v-btn",
            {
              attrs: { dark: "", text: "" },
              on: {
                click: function($event) {
                  _vm.snackbar.show = false
                }
              }
            },
            [_vm._v("Close")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/UserCompleted.vue?vue&type=template&id=92ab1a52&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/u/UserCompleted.vue?vue&type=template&id=92ab1a52& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h1", { staticClass: "font-weight-light" }, [_vm._v("Completed CPD")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/UserDashboard.vue?vue&type=template&id=fc81cac0&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/u/UserDashboard.vue?vue&type=template&id=fc81cac0& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h1", { staticClass: "font-weight-light" }, [_vm._v("Completed CPD")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/UserInProgress.vue?vue&type=template&id=18e46f16&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/u/UserInProgress.vue?vue&type=template&id=18e46f16& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h1", { staticClass: "font-weight-light" }, [
        _vm._v("In Progress CPD")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/UserShortlist.vue?vue&type=template&id=70efd7b4&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/u/UserShortlist.vue?vue&type=template&id=70efd7b4& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h1", { staticClass: "font-weight-light" }, [
        _vm._v("Shortlisted CPD")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify */ "./node_modules/vuetify/dist/vuetify.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuetify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_filter_date_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-filter-date-format */ "./node_modules/vue-filter-date-format/dist/vue-filter-date-format.esm.js");
/* harmony import */ var vue_filter_date_parse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-filter-date-parse */ "./node_modules/vue-filter-date-parse/dist/vue-filter-date-parse.esm.js");
/* harmony import */ var vue_json_excel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-json-excel */ "./node_modules/vue-json-excel/dist/vue-json-excel.esm.js");
/* harmony import */ var _views_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/App */ "./resources/js/views/App.vue");
/* harmony import */ var _views_Home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/Home */ "./resources/js/views/Home.vue");
/* harmony import */ var _components_cpd_SuggestCourseForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cpd/SuggestCourseForm */ "./resources/js/components/cpd/SuggestCourseForm.vue");
/* harmony import */ var _views_cpd_CourseDetails__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/cpd/CourseDetails */ "./resources/js/views/cpd/CourseDetails.vue");
/* harmony import */ var _views_cpd_CourseList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/cpd/CourseList */ "./resources/js/views/cpd/CourseList.vue");
/* harmony import */ var _views_r_AddReview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/r/AddReview */ "./resources/js/views/r/AddReview.vue");
/* harmony import */ var _views_u_UserCompleted__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/u/UserCompleted */ "./resources/js/views/u/UserCompleted.vue");
/* harmony import */ var _views_u_UserDashboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/u/UserDashboard */ "./resources/js/views/u/UserDashboard.vue");
/* harmony import */ var _views_u_MyCPDRecord__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/u/MyCPDRecord */ "./resources/js/views/u/MyCPDRecord.vue");
/* harmony import */ var _views_u_MyCourses__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/u/MyCourses */ "./resources/js/views/u/MyCourses.vue");
/* harmony import */ var _views_u_MyProfile__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/u/MyProfile */ "./resources/js/views/u/MyProfile.vue");
/* harmony import */ var _views_u_MyReviews__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/u/MyReviews */ "./resources/js/views/u/MyReviews.vue");
/* harmony import */ var _views_u_UserInProgress__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/u/UserInProgress */ "./resources/js/views/u/UserInProgress.vue");
/* harmony import */ var _views_u_UserShortlist__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/u/UserShortlist */ "./resources/js/views/u/UserShortlist.vue");
/* harmony import */ var _views_a_ManageUsers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/a/ManageUsers */ "./resources/js/views/a/ManageUsers.vue");
/* harmony import */ var _views_a_ManageCategories__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/a/ManageCategories */ "./resources/js/views/a/ManageCategories.vue");
/* harmony import */ var _views_a_ManageCourses__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/a/ManageCourses */ "./resources/js/views/a/ManageCourses.vue");
/* harmony import */ var _views_a_ManageReviews__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./views/a/ManageReviews */ "./resources/js/views/a/ManageReviews.vue");







vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_2__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuetify__WEBPACK_IMPORTED_MODULE_3___default.a);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_filter_date_format__WEBPACK_IMPORTED_MODULE_4__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_filter_date_parse__WEBPACK_IMPORTED_MODULE_5__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('downloadExcel', vue_json_excel__WEBPACK_IMPORTED_MODULE_6__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuetify__WEBPACK_IMPORTED_MODULE_3___default.a({
  theme: {
    dark: true
  },
  icons: {
    iconfont: 'fa'
  }
}));

__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('course-tile', __webpack_require__(/*! ./components/cpd/CourseTile.vue */ "./resources/js/components/cpd/CourseTile.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('course-details', __webpack_require__(/*! ./views/cpd/CourseDetails.vue */ "./resources/js/views/cpd/CourseDetails.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('suggest-course-form', __webpack_require__(/*! ./components/cpd/SuggestCourseForm.vue */ "./resources/js/components/cpd/SuggestCourseForm.vue")["default"]);

















 // Vue.prototype.$userId = document.querySelector("meta[name='user-id']").getAttribute('content');

var store = new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  state: {
    userid: null,
    roleid: null,
    avatar: null,
    name: null
  },
  mutations: {
    setUserId: function setUserId(state, id) {
      state.userid = id;
    },
    setName: function setName(state, id) {
      state.name = id;
    },
    setRoleId: function setRoleId(state, id) {
      state.roleid = id;
    },
    setAvatar: function setAvatar(state, id) {
      state.avatar = id;
    }
  },
  actions: {},
  getters: {
    getName: function getName(state) {
      return state.name;
    },
    getUserId: function getUserId(state) {
      return state.userid;
    },
    getRoleId: function getRoleId(state) {
      return state.roleid;
    },
    getAvatar: function getAvatar(state) {
      return state.avatar;
    }
  }
});
var router = new vue_router__WEBPACK_IMPORTED_MODULE_2__["default"]({
  mode: 'history',
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    };
  },
  routes: [{
    path: '/home',
    name: 'home',
    component: _views_cpd_CourseList__WEBPACK_IMPORTED_MODULE_11__["default"]
  }, {
    path: '/',
    name: 'landing',
    component: _views_cpd_CourseList__WEBPACK_IMPORTED_MODULE_11__["default"]
  }, {
    path: '/a/manageusers',
    name: 'manageusers',
    component: _views_a_ManageUsers__WEBPACK_IMPORTED_MODULE_21__["default"]
  }, {
    path: '/a/managecategories',
    name: 'managecategories',
    component: _views_a_ManageCategories__WEBPACK_IMPORTED_MODULE_22__["default"]
  }, {
    path: '/a/managecourses',
    name: 'managecourses',
    component: _views_a_ManageCourses__WEBPACK_IMPORTED_MODULE_23__["default"]
  }, {
    path: '/a/managereviews',
    name: 'managereviews',
    component: _views_a_ManageReviews__WEBPACK_IMPORTED_MODULE_24__["default"]
  }, {
    path: '/cpd/details/:id',
    name: 'coursedetails',
    component: _views_cpd_CourseDetails__WEBPACK_IMPORTED_MODULE_10__["default"],
    props: true
  }, {
    path: '/cpd/all',
    name: 'courselist',
    component: _views_cpd_CourseList__WEBPACK_IMPORTED_MODULE_11__["default"]
  }, {
    path: '/cpd/:name',
    name: 'courselist',
    component: _views_cpd_CourseList__WEBPACK_IMPORTED_MODULE_11__["default"],
    props: true
  }, {
    path: '/r/add',
    name: 'addreview',
    component: _views_r_AddReview__WEBPACK_IMPORTED_MODULE_12__["default"],
    props: true
  }, {
    path: '/r/add/:courseid',
    name: 'addreview',
    component: _views_r_AddReview__WEBPACK_IMPORTED_MODULE_12__["default"],
    props: true
  }, {
    path: '/u/dashboard',
    name: 'userdashboard',
    component: _views_u_UserDashboard__WEBPACK_IMPORTED_MODULE_14__["default"]
  }, {
    path: '/u/mycpdrecord',
    name: 'mycpdrecord',
    component: _views_u_MyCPDRecord__WEBPACK_IMPORTED_MODULE_15__["default"]
  }, {
    path: '/u/:userid/mycpdrecord',
    name: 'usermycpdrecord',
    component: _views_u_MyCPDRecord__WEBPACK_IMPORTED_MODULE_15__["default"],
    props: true
  }, {
    path: '/u/mycourses',
    name: 'usermycourses',
    component: _views_u_MyCourses__WEBPACK_IMPORTED_MODULE_16__["default"]
  }, {
    path: '/u/myprofile',
    name: 'usermyprofile',
    component: _views_u_MyProfile__WEBPACK_IMPORTED_MODULE_17__["default"]
  }, {
    path: '/u/myreviews',
    name: 'usermyreviews',
    component: _views_u_MyReviews__WEBPACK_IMPORTED_MODULE_18__["default"]
  }, {
    path: '/u/suggestcourseform',
    name: 'suggestcourseform',
    component: _components_cpd_SuggestCourseForm__WEBPACK_IMPORTED_MODULE_9__["default"]
  }, {
    path: '/u/completed',
    name: 'usercompleted',
    component: _views_u_UserCompleted__WEBPACK_IMPORTED_MODULE_13__["default"]
  }, {
    path: '/u/inprogress',
    name: 'userinprogress',
    component: _views_u_UserInProgress__WEBPACK_IMPORTED_MODULE_19__["default"]
  }, {
    path: '/u/shortlist',
    name: 'usershortlist',
    component: _views_u_UserShortlist__WEBPACK_IMPORTED_MODULE_20__["default"]
  }]
});
var app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  components: {
    App: _views_App__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  el: '#app',
  router: router,
  store: store,
  vuetify: new vuetify__WEBPACK_IMPORTED_MODULE_3___default.a()
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"];
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),

/***/ "./resources/js/components/cpd/CourseTile.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/cpd/CourseTile.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CourseTile_vue_vue_type_template_id_7fdf00e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CourseTile.vue?vue&type=template&id=7fdf00e8& */ "./resources/js/components/cpd/CourseTile.vue?vue&type=template&id=7fdf00e8&");
/* harmony import */ var _CourseTile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CourseTile.vue?vue&type=script&lang=js& */ "./resources/js/components/cpd/CourseTile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CourseTile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CourseTile.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/cpd/CourseTile.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CourseTile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CourseTile_vue_vue_type_template_id_7fdf00e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CourseTile_vue_vue_type_template_id_7fdf00e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cpd/CourseTile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cpd/CourseTile.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/cpd/CourseTile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseTile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseTile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cpd/CourseTile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseTile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cpd/CourseTile.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/cpd/CourseTile.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseTile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseTile.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cpd/CourseTile.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseTile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseTile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseTile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseTile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/cpd/CourseTile.vue?vue&type=template&id=7fdf00e8&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/cpd/CourseTile.vue?vue&type=template&id=7fdf00e8& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseTile_vue_vue_type_template_id_7fdf00e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseTile.vue?vue&type=template&id=7fdf00e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cpd/CourseTile.vue?vue&type=template&id=7fdf00e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseTile_vue_vue_type_template_id_7fdf00e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseTile_vue_vue_type_template_id_7fdf00e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/cpd/SuggestCourseForm.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/cpd/SuggestCourseForm.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SuggestCourseForm_vue_vue_type_template_id_e08a3e60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SuggestCourseForm.vue?vue&type=template&id=e08a3e60& */ "./resources/js/components/cpd/SuggestCourseForm.vue?vue&type=template&id=e08a3e60&");
/* harmony import */ var _SuggestCourseForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SuggestCourseForm.vue?vue&type=script&lang=js& */ "./resources/js/components/cpd/SuggestCourseForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SuggestCourseForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SuggestCourseForm_vue_vue_type_template_id_e08a3e60___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SuggestCourseForm_vue_vue_type_template_id_e08a3e60___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cpd/SuggestCourseForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cpd/SuggestCourseForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/cpd/SuggestCourseForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SuggestCourseForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SuggestCourseForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cpd/SuggestCourseForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SuggestCourseForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cpd/SuggestCourseForm.vue?vue&type=template&id=e08a3e60&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/cpd/SuggestCourseForm.vue?vue&type=template&id=e08a3e60& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SuggestCourseForm_vue_vue_type_template_id_e08a3e60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SuggestCourseForm.vue?vue&type=template&id=e08a3e60& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cpd/SuggestCourseForm.vue?vue&type=template&id=e08a3e60&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SuggestCourseForm_vue_vue_type_template_id_e08a3e60___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SuggestCourseForm_vue_vue_type_template_id_e08a3e60___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/App.vue":
/*!************************************!*\
  !*** ./resources/js/views/App.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_91ac6b5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=91ac6b5c& */ "./resources/js/views/App.vue?vue&type=template&id=91ac6b5c&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./resources/js/views/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/App.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_91ac6b5c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_91ac6b5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/App.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./resources/js/views/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/App.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/App.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/App.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/App.vue?vue&type=template&id=91ac6b5c&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/App.vue?vue&type=template&id=91ac6b5c& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_91ac6b5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=91ac6b5c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/App.vue?vue&type=template&id=91ac6b5c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_91ac6b5c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_91ac6b5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=63cd6604& */ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=template&id=63cd6604& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=63cd6604& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/a/ManageCategories.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/a/ManageCategories.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ManageCategories_vue_vue_type_template_id_239e75a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ManageCategories.vue?vue&type=template&id=239e75a4& */ "./resources/js/views/a/ManageCategories.vue?vue&type=template&id=239e75a4&");
/* harmony import */ var _ManageCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ManageCategories.vue?vue&type=script&lang=js& */ "./resources/js/views/a/ManageCategories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ManageCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ManageCategories_vue_vue_type_template_id_239e75a4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ManageCategories_vue_vue_type_template_id_239e75a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/a/ManageCategories.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/a/ManageCategories.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/a/ManageCategories.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ManageCategories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/a/ManageCategories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/a/ManageCategories.vue?vue&type=template&id=239e75a4&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/a/ManageCategories.vue?vue&type=template&id=239e75a4& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCategories_vue_vue_type_template_id_239e75a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ManageCategories.vue?vue&type=template&id=239e75a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/a/ManageCategories.vue?vue&type=template&id=239e75a4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCategories_vue_vue_type_template_id_239e75a4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCategories_vue_vue_type_template_id_239e75a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/a/ManageCourses.vue":
/*!************************************************!*\
  !*** ./resources/js/views/a/ManageCourses.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ManageCourses_vue_vue_type_template_id_dd8ebbd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ManageCourses.vue?vue&type=template&id=dd8ebbd4&scoped=true& */ "./resources/js/views/a/ManageCourses.vue?vue&type=template&id=dd8ebbd4&scoped=true&");
/* harmony import */ var _ManageCourses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ManageCourses.vue?vue&type=script&lang=js& */ "./resources/js/views/a/ManageCourses.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ManageCourses_vue_vue_type_style_index_0_id_dd8ebbd4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ManageCourses.vue?vue&type=style&index=0&id=dd8ebbd4&scoped=true&lang=css& */ "./resources/js/views/a/ManageCourses.vue?vue&type=style&index=0&id=dd8ebbd4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ManageCourses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ManageCourses_vue_vue_type_template_id_dd8ebbd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ManageCourses_vue_vue_type_template_id_dd8ebbd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "dd8ebbd4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/a/ManageCourses.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/a/ManageCourses.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/a/ManageCourses.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCourses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ManageCourses.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/a/ManageCourses.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCourses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/a/ManageCourses.vue?vue&type=style&index=0&id=dd8ebbd4&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/a/ManageCourses.vue?vue&type=style&index=0&id=dd8ebbd4&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCourses_vue_vue_type_style_index_0_id_dd8ebbd4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ManageCourses.vue?vue&type=style&index=0&id=dd8ebbd4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/a/ManageCourses.vue?vue&type=style&index=0&id=dd8ebbd4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCourses_vue_vue_type_style_index_0_id_dd8ebbd4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCourses_vue_vue_type_style_index_0_id_dd8ebbd4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCourses_vue_vue_type_style_index_0_id_dd8ebbd4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCourses_vue_vue_type_style_index_0_id_dd8ebbd4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/a/ManageCourses.vue?vue&type=template&id=dd8ebbd4&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/a/ManageCourses.vue?vue&type=template&id=dd8ebbd4&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCourses_vue_vue_type_template_id_dd8ebbd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ManageCourses.vue?vue&type=template&id=dd8ebbd4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/a/ManageCourses.vue?vue&type=template&id=dd8ebbd4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCourses_vue_vue_type_template_id_dd8ebbd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageCourses_vue_vue_type_template_id_dd8ebbd4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/a/ManageReviews.vue":
/*!************************************************!*\
  !*** ./resources/js/views/a/ManageReviews.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ManageReviews_vue_vue_type_template_id_318aee0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ManageReviews.vue?vue&type=template&id=318aee0e&scoped=true& */ "./resources/js/views/a/ManageReviews.vue?vue&type=template&id=318aee0e&scoped=true&");
/* harmony import */ var _ManageReviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ManageReviews.vue?vue&type=script&lang=js& */ "./resources/js/views/a/ManageReviews.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ManageReviews_vue_vue_type_style_index_0_id_318aee0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ManageReviews.vue?vue&type=style&index=0&id=318aee0e&scoped=true&lang=css& */ "./resources/js/views/a/ManageReviews.vue?vue&type=style&index=0&id=318aee0e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ManageReviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ManageReviews_vue_vue_type_template_id_318aee0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ManageReviews_vue_vue_type_template_id_318aee0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "318aee0e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/a/ManageReviews.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/a/ManageReviews.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/a/ManageReviews.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageReviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ManageReviews.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/a/ManageReviews.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageReviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/a/ManageReviews.vue?vue&type=style&index=0&id=318aee0e&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/a/ManageReviews.vue?vue&type=style&index=0&id=318aee0e&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageReviews_vue_vue_type_style_index_0_id_318aee0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ManageReviews.vue?vue&type=style&index=0&id=318aee0e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/a/ManageReviews.vue?vue&type=style&index=0&id=318aee0e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageReviews_vue_vue_type_style_index_0_id_318aee0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageReviews_vue_vue_type_style_index_0_id_318aee0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageReviews_vue_vue_type_style_index_0_id_318aee0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageReviews_vue_vue_type_style_index_0_id_318aee0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/a/ManageReviews.vue?vue&type=template&id=318aee0e&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/a/ManageReviews.vue?vue&type=template&id=318aee0e&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageReviews_vue_vue_type_template_id_318aee0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ManageReviews.vue?vue&type=template&id=318aee0e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/a/ManageReviews.vue?vue&type=template&id=318aee0e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageReviews_vue_vue_type_template_id_318aee0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageReviews_vue_vue_type_template_id_318aee0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/a/ManageUsers.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/a/ManageUsers.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ManageUsers_vue_vue_type_template_id_4d0b9de6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ManageUsers.vue?vue&type=template&id=4d0b9de6& */ "./resources/js/views/a/ManageUsers.vue?vue&type=template&id=4d0b9de6&");
/* harmony import */ var _ManageUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ManageUsers.vue?vue&type=script&lang=js& */ "./resources/js/views/a/ManageUsers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ManageUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ManageUsers_vue_vue_type_template_id_4d0b9de6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ManageUsers_vue_vue_type_template_id_4d0b9de6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/a/ManageUsers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/a/ManageUsers.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/a/ManageUsers.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ManageUsers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/a/ManageUsers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/a/ManageUsers.vue?vue&type=template&id=4d0b9de6&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/a/ManageUsers.vue?vue&type=template&id=4d0b9de6& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageUsers_vue_vue_type_template_id_4d0b9de6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ManageUsers.vue?vue&type=template&id=4d0b9de6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/a/ManageUsers.vue?vue&type=template&id=4d0b9de6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageUsers_vue_vue_type_template_id_4d0b9de6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageUsers_vue_vue_type_template_id_4d0b9de6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/cpd/CourseDetails.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/cpd/CourseDetails.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CourseDetails_vue_vue_type_template_id_21cac0a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CourseDetails.vue?vue&type=template&id=21cac0a0&scoped=true& */ "./resources/js/views/cpd/CourseDetails.vue?vue&type=template&id=21cac0a0&scoped=true&");
/* harmony import */ var _CourseDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CourseDetails.vue?vue&type=script&lang=js& */ "./resources/js/views/cpd/CourseDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CourseDetails_vue_vue_type_style_index_0_id_21cac0a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CourseDetails.vue?vue&type=style&index=0&id=21cac0a0&scoped=true&lang=css& */ "./resources/js/views/cpd/CourseDetails.vue?vue&type=style&index=0&id=21cac0a0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CourseDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CourseDetails_vue_vue_type_template_id_21cac0a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CourseDetails_vue_vue_type_template_id_21cac0a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "21cac0a0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/cpd/CourseDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/cpd/CourseDetails.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/cpd/CourseDetails.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/cpd/CourseDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/cpd/CourseDetails.vue?vue&type=style&index=0&id=21cac0a0&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/cpd/CourseDetails.vue?vue&type=style&index=0&id=21cac0a0&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDetails_vue_vue_type_style_index_0_id_21cac0a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseDetails.vue?vue&type=style&index=0&id=21cac0a0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/cpd/CourseDetails.vue?vue&type=style&index=0&id=21cac0a0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDetails_vue_vue_type_style_index_0_id_21cac0a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDetails_vue_vue_type_style_index_0_id_21cac0a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDetails_vue_vue_type_style_index_0_id_21cac0a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDetails_vue_vue_type_style_index_0_id_21cac0a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/cpd/CourseDetails.vue?vue&type=template&id=21cac0a0&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/cpd/CourseDetails.vue?vue&type=template&id=21cac0a0&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDetails_vue_vue_type_template_id_21cac0a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseDetails.vue?vue&type=template&id=21cac0a0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/cpd/CourseDetails.vue?vue&type=template&id=21cac0a0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDetails_vue_vue_type_template_id_21cac0a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDetails_vue_vue_type_template_id_21cac0a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/cpd/CourseList.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/cpd/CourseList.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CourseList_vue_vue_type_template_id_a4a705a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CourseList.vue?vue&type=template&id=a4a705a0& */ "./resources/js/views/cpd/CourseList.vue?vue&type=template&id=a4a705a0&");
/* harmony import */ var _CourseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CourseList.vue?vue&type=script&lang=js& */ "./resources/js/views/cpd/CourseList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CourseList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CourseList.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/cpd/CourseList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CourseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CourseList_vue_vue_type_template_id_a4a705a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CourseList_vue_vue_type_template_id_a4a705a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/cpd/CourseList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/cpd/CourseList.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/cpd/CourseList.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/cpd/CourseList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/cpd/CourseList.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/cpd/CourseList.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/cpd/CourseList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/cpd/CourseList.vue?vue&type=template&id=a4a705a0&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/cpd/CourseList.vue?vue&type=template&id=a4a705a0& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseList_vue_vue_type_template_id_a4a705a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseList.vue?vue&type=template&id=a4a705a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/cpd/CourseList.vue?vue&type=template&id=a4a705a0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseList_vue_vue_type_template_id_a4a705a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseList_vue_vue_type_template_id_a4a705a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/r/AddReview.vue":
/*!********************************************!*\
  !*** ./resources/js/views/r/AddReview.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddReview_vue_vue_type_template_id_13dc37ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddReview.vue?vue&type=template&id=13dc37ad& */ "./resources/js/views/r/AddReview.vue?vue&type=template&id=13dc37ad&");
/* harmony import */ var _AddReview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddReview.vue?vue&type=script&lang=js& */ "./resources/js/views/r/AddReview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddReview_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddReview.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/r/AddReview.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddReview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddReview_vue_vue_type_template_id_13dc37ad___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddReview_vue_vue_type_template_id_13dc37ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/r/AddReview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/r/AddReview.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/r/AddReview.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddReview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddReview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/r/AddReview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddReview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/r/AddReview.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/r/AddReview.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddReview_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddReview.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/r/AddReview.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddReview_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddReview_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddReview_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddReview_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/r/AddReview.vue?vue&type=template&id=13dc37ad&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/r/AddReview.vue?vue&type=template&id=13dc37ad& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddReview_vue_vue_type_template_id_13dc37ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddReview.vue?vue&type=template&id=13dc37ad& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/r/AddReview.vue?vue&type=template&id=13dc37ad&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddReview_vue_vue_type_template_id_13dc37ad___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddReview_vue_vue_type_template_id_13dc37ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/u/MyCPDRecord.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/u/MyCPDRecord.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyCPDRecord_vue_vue_type_template_id_e415f35a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyCPDRecord.vue?vue&type=template&id=e415f35a&scoped=true& */ "./resources/js/views/u/MyCPDRecord.vue?vue&type=template&id=e415f35a&scoped=true&");
/* harmony import */ var _MyCPDRecord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyCPDRecord.vue?vue&type=script&lang=js& */ "./resources/js/views/u/MyCPDRecord.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MyCPDRecord_vue_vue_type_style_index_0_id_e415f35a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyCPDRecord.vue?vue&type=style&index=0&id=e415f35a&scoped=true&lang=css& */ "./resources/js/views/u/MyCPDRecord.vue?vue&type=style&index=0&id=e415f35a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MyCPDRecord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyCPDRecord_vue_vue_type_template_id_e415f35a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MyCPDRecord_vue_vue_type_template_id_e415f35a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e415f35a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/u/MyCPDRecord.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/u/MyCPDRecord.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/u/MyCPDRecord.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyCPDRecord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyCPDRecord.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/MyCPDRecord.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyCPDRecord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/u/MyCPDRecord.vue?vue&type=style&index=0&id=e415f35a&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/u/MyCPDRecord.vue?vue&type=style&index=0&id=e415f35a&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyCPDRecord_vue_vue_type_style_index_0_id_e415f35a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyCPDRecord.vue?vue&type=style&index=0&id=e415f35a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/MyCPDRecord.vue?vue&type=style&index=0&id=e415f35a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyCPDRecord_vue_vue_type_style_index_0_id_e415f35a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyCPDRecord_vue_vue_type_style_index_0_id_e415f35a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyCPDRecord_vue_vue_type_style_index_0_id_e415f35a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyCPDRecord_vue_vue_type_style_index_0_id_e415f35a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/u/MyCPDRecord.vue?vue&type=template&id=e415f35a&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/u/MyCPDRecord.vue?vue&type=template&id=e415f35a&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyCPDRecord_vue_vue_type_template_id_e415f35a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyCPDRecord.vue?vue&type=template&id=e415f35a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/MyCPDRecord.vue?vue&type=template&id=e415f35a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyCPDRecord_vue_vue_type_template_id_e415f35a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyCPDRecord_vue_vue_type_template_id_e415f35a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/u/MyCourses.vue":
/*!********************************************!*\
  !*** ./resources/js/views/u/MyCourses.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyCourses_vue_vue_type_template_id_21844a03___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyCourses.vue?vue&type=template&id=21844a03& */ "./resources/js/views/u/MyCourses.vue?vue&type=template&id=21844a03&");
/* harmony import */ var _MyCourses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyCourses.vue?vue&type=script&lang=js& */ "./resources/js/views/u/MyCourses.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MyCourses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyCourses_vue_vue_type_template_id_21844a03___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MyCourses_vue_vue_type_template_id_21844a03___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/u/MyCourses.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/u/MyCourses.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/u/MyCourses.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyCourses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyCourses.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/MyCourses.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyCourses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/u/MyCourses.vue?vue&type=template&id=21844a03&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/u/MyCourses.vue?vue&type=template&id=21844a03& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyCourses_vue_vue_type_template_id_21844a03___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyCourses.vue?vue&type=template&id=21844a03& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/MyCourses.vue?vue&type=template&id=21844a03&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyCourses_vue_vue_type_template_id_21844a03___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyCourses_vue_vue_type_template_id_21844a03___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/u/MyProfile.vue":
/*!********************************************!*\
  !*** ./resources/js/views/u/MyProfile.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyProfile_vue_vue_type_template_id_30034f74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyProfile.vue?vue&type=template&id=30034f74& */ "./resources/js/views/u/MyProfile.vue?vue&type=template&id=30034f74&");
/* harmony import */ var _MyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyProfile.vue?vue&type=script&lang=js& */ "./resources/js/views/u/MyProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyProfile_vue_vue_type_template_id_30034f74___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MyProfile_vue_vue_type_template_id_30034f74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/u/MyProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/u/MyProfile.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/u/MyProfile.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/MyProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/u/MyProfile.vue?vue&type=template&id=30034f74&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/u/MyProfile.vue?vue&type=template&id=30034f74& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfile_vue_vue_type_template_id_30034f74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyProfile.vue?vue&type=template&id=30034f74& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/MyProfile.vue?vue&type=template&id=30034f74&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfile_vue_vue_type_template_id_30034f74___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyProfile_vue_vue_type_template_id_30034f74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/u/MyReviews.vue":
/*!********************************************!*\
  !*** ./resources/js/views/u/MyReviews.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyReviews_vue_vue_type_template_id_778630e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyReviews.vue?vue&type=template&id=778630e6&scoped=true& */ "./resources/js/views/u/MyReviews.vue?vue&type=template&id=778630e6&scoped=true&");
/* harmony import */ var _MyReviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyReviews.vue?vue&type=script&lang=js& */ "./resources/js/views/u/MyReviews.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MyReviews_vue_vue_type_style_index_0_id_778630e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyReviews.vue?vue&type=style&index=0&id=778630e6&scoped=true&lang=css& */ "./resources/js/views/u/MyReviews.vue?vue&type=style&index=0&id=778630e6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MyReviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyReviews_vue_vue_type_template_id_778630e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MyReviews_vue_vue_type_template_id_778630e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "778630e6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/u/MyReviews.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/u/MyReviews.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/u/MyReviews.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyReviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyReviews.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/MyReviews.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyReviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/u/MyReviews.vue?vue&type=style&index=0&id=778630e6&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/u/MyReviews.vue?vue&type=style&index=0&id=778630e6&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyReviews_vue_vue_type_style_index_0_id_778630e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyReviews.vue?vue&type=style&index=0&id=778630e6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/MyReviews.vue?vue&type=style&index=0&id=778630e6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyReviews_vue_vue_type_style_index_0_id_778630e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyReviews_vue_vue_type_style_index_0_id_778630e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyReviews_vue_vue_type_style_index_0_id_778630e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyReviews_vue_vue_type_style_index_0_id_778630e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/u/MyReviews.vue?vue&type=template&id=778630e6&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/u/MyReviews.vue?vue&type=template&id=778630e6&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyReviews_vue_vue_type_template_id_778630e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MyReviews.vue?vue&type=template&id=778630e6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/MyReviews.vue?vue&type=template&id=778630e6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyReviews_vue_vue_type_template_id_778630e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyReviews_vue_vue_type_template_id_778630e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/u/UserCompleted.vue":
/*!************************************************!*\
  !*** ./resources/js/views/u/UserCompleted.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserCompleted_vue_vue_type_template_id_92ab1a52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserCompleted.vue?vue&type=template&id=92ab1a52& */ "./resources/js/views/u/UserCompleted.vue?vue&type=template&id=92ab1a52&");
/* harmony import */ var _UserCompleted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserCompleted.vue?vue&type=script&lang=js& */ "./resources/js/views/u/UserCompleted.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserCompleted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserCompleted_vue_vue_type_template_id_92ab1a52___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserCompleted_vue_vue_type_template_id_92ab1a52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/u/UserCompleted.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/u/UserCompleted.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/u/UserCompleted.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCompleted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserCompleted.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/UserCompleted.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCompleted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/u/UserCompleted.vue?vue&type=template&id=92ab1a52&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/u/UserCompleted.vue?vue&type=template&id=92ab1a52& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCompleted_vue_vue_type_template_id_92ab1a52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserCompleted.vue?vue&type=template&id=92ab1a52& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/UserCompleted.vue?vue&type=template&id=92ab1a52&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCompleted_vue_vue_type_template_id_92ab1a52___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCompleted_vue_vue_type_template_id_92ab1a52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/u/UserDashboard.vue":
/*!************************************************!*\
  !*** ./resources/js/views/u/UserDashboard.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserDashboard_vue_vue_type_template_id_fc81cac0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserDashboard.vue?vue&type=template&id=fc81cac0& */ "./resources/js/views/u/UserDashboard.vue?vue&type=template&id=fc81cac0&");
/* harmony import */ var _UserDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserDashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/u/UserDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserDashboard_vue_vue_type_template_id_fc81cac0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserDashboard_vue_vue_type_template_id_fc81cac0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/u/UserDashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/u/UserDashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/u/UserDashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserDashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/UserDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/u/UserDashboard.vue?vue&type=template&id=fc81cac0&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/u/UserDashboard.vue?vue&type=template&id=fc81cac0& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDashboard_vue_vue_type_template_id_fc81cac0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserDashboard.vue?vue&type=template&id=fc81cac0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/UserDashboard.vue?vue&type=template&id=fc81cac0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDashboard_vue_vue_type_template_id_fc81cac0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDashboard_vue_vue_type_template_id_fc81cac0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/u/UserInProgress.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/u/UserInProgress.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserInProgress_vue_vue_type_template_id_18e46f16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserInProgress.vue?vue&type=template&id=18e46f16& */ "./resources/js/views/u/UserInProgress.vue?vue&type=template&id=18e46f16&");
/* harmony import */ var _UserInProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserInProgress.vue?vue&type=script&lang=js& */ "./resources/js/views/u/UserInProgress.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserInProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserInProgress_vue_vue_type_template_id_18e46f16___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserInProgress_vue_vue_type_template_id_18e46f16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/u/UserInProgress.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/u/UserInProgress.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/u/UserInProgress.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserInProgress.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/UserInProgress.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/u/UserInProgress.vue?vue&type=template&id=18e46f16&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/u/UserInProgress.vue?vue&type=template&id=18e46f16& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInProgress_vue_vue_type_template_id_18e46f16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserInProgress.vue?vue&type=template&id=18e46f16& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/UserInProgress.vue?vue&type=template&id=18e46f16&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInProgress_vue_vue_type_template_id_18e46f16___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInProgress_vue_vue_type_template_id_18e46f16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/u/UserShortlist.vue":
/*!************************************************!*\
  !*** ./resources/js/views/u/UserShortlist.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserShortlist_vue_vue_type_template_id_70efd7b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserShortlist.vue?vue&type=template&id=70efd7b4& */ "./resources/js/views/u/UserShortlist.vue?vue&type=template&id=70efd7b4&");
/* harmony import */ var _UserShortlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserShortlist.vue?vue&type=script&lang=js& */ "./resources/js/views/u/UserShortlist.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserShortlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserShortlist_vue_vue_type_template_id_70efd7b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserShortlist_vue_vue_type_template_id_70efd7b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/u/UserShortlist.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/u/UserShortlist.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/u/UserShortlist.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserShortlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserShortlist.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/UserShortlist.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserShortlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/u/UserShortlist.vue?vue&type=template&id=70efd7b4&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/u/UserShortlist.vue?vue&type=template&id=70efd7b4& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserShortlist_vue_vue_type_template_id_70efd7b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserShortlist.vue?vue&type=template&id=70efd7b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/u/UserShortlist.vue?vue&type=template&id=70efd7b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserShortlist_vue_vue_type_template_id_70efd7b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserShortlist_vue_vue_type_template_id_70efd7b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\code\fcat-cpd-tracker\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! D:\code\fcat-cpd-tracker\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);