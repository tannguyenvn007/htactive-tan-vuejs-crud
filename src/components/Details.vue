<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>Details</v-toolbar-title>
      <v-divider class="mx-2" inset vertical></v-divider>
      <v-spacer></v-spacer>
      <v-btn flat icon color="green" @click="goBack">
        <v-icon>keyboard_backspace</v-icon>
      </v-btn>
    </v-toolbar>
    <v-layout row wrap>
      <v-container>
        <!-- <v-container white>
          <p>Name: {{$route.params.data.name}}</p>
          <p>Created: {{$route.params.data.created}}</p>
          <p>Email: {{$route.params.data.email}}</p>
          <p>Phone: {{$route.params.data.phone}}</p>
          <p class="mb-0">Role: {{$route.params.data.role}}</p>
        </v-container>-->
        {{ getData(id)}}
      </v-container>
    </v-layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    getData(id) {
      return {
        name: "sdsdsd " + id
      };
    }
  },
  watch: {
    '$route'(to) {
      this.id = to.params.id;
    }
  }
};
</script>