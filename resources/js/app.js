
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import VueFilterDateFormat from 'vue-filter-date-format'
import VueFilterDateParse from 'vue-filter-date-parse'
import JsonExcel from 'vue-json-excel'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(VueFilterDateFormat)
Vue.use(VueFilterDateParse)

Vue.component('downloadExcel', JsonExcel)

export default new Vuetify({
  theme: {
    dark: true,
  },
  icons: {
    iconfont: 'fa',
  },
});

require('./bootstrap');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('course-tile', require('./components/cpd/CourseTile.vue').default);
Vue.component('course-details', require('./views/cpd/CourseDetails.vue').default);
Vue.component('suggest-course-form', require('./components/cpd/SuggestCourseForm.vue').default);

import App from './views/App'
import Home from './views/Home'
import SuggestCourseForm from './components/cpd/SuggestCourseForm'

import CourseDetails from './views/cpd/CourseDetails'
import CourseList from './views/cpd/CourseList'

import AddReview from './views/r/AddReview'

import UserCompleted from './views/u/UserCompleted'
import UserDashboard from './views/u/UserDashboard'

import MyCPDRecord from './views/u/MyCPDRecord'
import MyCourses from './views/u/MyCourses'
import MyProfile from './views/u/MyProfile'
import MyReviews from './views/u/MyReviews'

import UserInProgress from './views/u/UserInProgress'
import UserShortlist from './views/u/UserShortlist'

import ManageUsers from './views/a/ManageUsers'
import ManageCategories from './views/a/ManageCategories'
import ManageCourses from './views/a/ManageCourses'
import ManageReviews from './views/a/ManageReviews'

// Vue.prototype.$userId = document.querySelector("meta[name='user-id']").getAttribute('content');

const store = new Vuex.Store({

  state: {
    userid: null,
    roleid: null,
    avatar: null,
    name: null,
  },
  mutations: {
    setUserId(state, id) {
      state.userid = id;
    },
    setName(state, id) {
      state.name = id;
    },
    setRoleId(state, id) {
      state.roleid = id;
    },
    setAvatar(state, id) {
      state.avatar = id;
    },
  },
  actions: {},
  getters: {
    getName(state) {
      return state.name;
    },
    getUserId(state) {
      return state.userid;
    },
    getRoleId(state) {
      return state.roleid;
    },
    getAvatar(state) {
      return state.avatar;
    },
  },
});

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/home',
      name: 'home',
      component: CourseList
    },
    {
      path: '/',
      name: 'landing',
      component: CourseList
    },
    {
      path: '/a/manageusers',
      name: 'manageusers',
      component: ManageUsers
    },
    {
      path: '/a/managecategories',
      name: 'managecategories',
      component: ManageCategories
    },
    {
      path: '/a/managecourses',
      name: 'managecourses',
      component: ManageCourses
    },
    {
      path: '/a/managereviews',
      name: 'managereviews',
      component: ManageReviews
    },
    {
      path: '/cpd/details/:id',
      name: 'coursedetails',
      component: CourseDetails,
      props: true
    },
    {
      path: '/cpd/all',
      name: 'courselist',
      component: CourseList
    },
    {
      path: '/cpd/:name',
      name: 'courselist',
      component: CourseList,
      props: true
    },
    {
      path: '/r/add',
      name: 'addreview',
      component: AddReview,
      props: true
    },
    {
      path: '/r/add/:courseid',
      name: 'addreview',
      component: AddReview,
      props: true
    },
    {
      path: '/u/dashboard',
      name: 'userdashboard',
      component: UserDashboard
    },
    {
      path: '/u/mycpdrecord',
      name: 'mycpdrecord',
      component: MyCPDRecord
    },
    {
      path: '/u/:userid/mycpdrecord',
      name: 'usermycpdrecord',
      component: MyCPDRecord,
      props: true
    },
    {
      path: '/u/mycourses',
      name: 'usermycourses',
      component: MyCourses
    },
    {
      path: '/u/myprofile',
      name: 'usermyprofile',
      component: MyProfile
    },
    {
      path: '/u/myreviews',
      name: 'usermyreviews',
      component: MyReviews
    },
    {
      path: '/u/suggestcourseform',
      name: 'suggestcourseform',
      component: SuggestCourseForm
    },
    {
      path: '/u/completed',
      name: 'usercompleted',
      component: UserCompleted
    },
    {
      path: '/u/inprogress',
      name: 'userinprogress',
      component: UserInProgress
    },
    {
      path: '/u/shortlist',
      name: 'usershortlist',
      component: UserShortlist
    },
  ],
});

const app = new Vue({
  components: {
    App,
  },
  el: '#app',
  router,
  store,
  vuetify: new Vuetify(),
});
