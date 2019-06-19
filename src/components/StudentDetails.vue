<template>
  <div>
    <v-layout row wrap>
      <v-container>
        <v-container white>
          <p>Id: {{$route.params.data.id}}</p>
          <p>Fullname: {{$route.params.data.fullname}}</p>
          <p>Age: {{$route.params.data.age}}</p>
          <p class="mb-0">Class: {{$route.params.data.class}}</p>
        </v-container>
      </v-container>
    </v-layout>
  </div>
</template>