<template>
  <v-app>
    <v-toolbar app class="green darken-1 white--text">
      <v-toolbar-title class="headline text-uppercase">
        <span>My CRUD</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items >
        <v-btn flat color="white" to="/admin">Admin</v-btn>
        <v-btn flat color="white" to="/my-component">My Component</v-btn>
        <v-btn flat color="white" to="/students">Student</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      //
    };
  },
  mounted() {
    // this.$router.push("/admin")
  }
};
</script>
<style>
.none-style {
  text-decoration: none;
}
</style>
