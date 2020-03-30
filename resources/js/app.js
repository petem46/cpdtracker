
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import VueFilterDateFormat from 'vue-filter-date-format'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(VueFilterDateFormat)

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

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

import App from './views/App'
import Home from './views/Home'

import CourseDetails from './views/CourseDetails'
import CourseList from './views/CourseList'

import UserCompleted from './views/UserCompleted'
import UserDashboard from './views/UserDashboard'
import UserInProgress from './views/UserInProgress'
import UserToStart from './views/UserToStart'


const store = new Vuex.Store({

  state: {},
  mutations: {},
  actions: {},
  getters: {},

});

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/c/details',
      name: 'coursedetails',
      component: CourseDetails
    },
    {
      path: '/c',
      name: 'courselist',
      component: CourseList
    },
    {
      path: '/u/dashboard',
      name: 'userdashboard',
      component: UserDashboard
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
      path: '/u/tostart',
      name: 'usertostart',
      component: UserToStart
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
