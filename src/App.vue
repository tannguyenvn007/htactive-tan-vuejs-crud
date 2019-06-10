<template>
  <v-app>
    <v-toolbar app class="green darken-1 white--text">
      <v-toolbar-title class="headline text-uppercase">
        <span>My CRUD</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <UserManager/>
    </v-content>
  </v-app>
</template>

<script>
import UserManager from './components/UserManager'

export default {
  name: 'App',
  components: {
    UserManager
  },
  data () {
    return {
      //
    }
  }
}
</script>
