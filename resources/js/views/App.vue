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
              to="/c/details"
              >
              <v-text>Find A Course</v-text>
            </router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-folder-account-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              <router-link
              exact
              exact-active-class="teal--yellow"
              to="/c"
              >
                <v-text>My Courses</v-text>
              </router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>


    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="primaryDrawer.clipped"
      app
      dark
    >
      <v-app-bar-nav-icon
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      />
      <v-toolbar-title>FCAT CPD Tracker</v-toolbar-title>
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
    primaryDrawer: {
      model: null,
      clipped: false,
      floating: false,
      mini: false,
    },
  }),
}
</script>
