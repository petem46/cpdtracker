
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import VueFilterDateFormat from 'vue-filter-date-format'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(VueFilterDateFormat)

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

Vue.component('course-tile', require('./components/c/CourseTile.vue').default);

import App from './views/App'
import Home from './views/Home'

import CourseDetails from './views/c/CourseDetails'
import CourseList from './views/c/CourseList'

import UserCompleted from './views/u/UserCompleted'
import UserDashboard from './views/u/UserDashboard'

import MyCourses from './views/u/MyCourses'
import MyProfile from './views/u/MyProfile'
import MyReviews from './views/u/MyReviews'

import UserInProgress from './views/u/UserInProgress'
import UserShortlist from './views/u/UserShortlist'

import ManageUsers from './views/a/ManageUsers'
import ManageCourses from './views/a/ManageCourses'

// Vue.prototype.$userId = document.querySelector("meta[name='user-id']").getAttribute('content');

const store = new Vuex.Store({

  state: {
    userid: null,
  },
  mutations: {
    setUserId(state, id) {
      state.userid = id;
    },
  },
  actions: {},
  getters: {
    getUserId(state) {
      return state.userid;
    },
  },
});

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'landing',
      component: MyCourses
    },
    {
      path: '/',
      name: 'home',
      component: MyCourses
    },
    {
      path: '/a/manageusers',
      name: 'manageusers',
      component: ManageUsers
    },
    {
      path: '/a/managecourses',
      name: 'managecourses',
      component: ManageCourses
    },
    {
      path: '/c/details',
      name: 'coursedetails',
      component: CourseDetails
    },
    {
      path: '/c/all',
      name: 'courselist',
      component: CourseList
    },
    {
      path: '/c/:name',
      name: 'courselist',
      component: CourseList,
      props: true
    },
    {
      path: '/u/dashboard',
      name: 'userdashboard',
      component: UserDashboard
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
