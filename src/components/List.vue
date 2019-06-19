<template>
    <v-layout row wrap>
        <v-flex md4>
        <v-card>
          <v-list three-line>
            <template v-for="(value) in students" >
              <v-list-tile  :key="value.id" @click="getStudentDetails(value.id)">
                <v-list-tile-avatar>
                  <img :src="value.avatar">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>{{"Full name: "+value.name}}</v-list-tile-title>
                  <v-list-tile-sub-title>{{"Email: "+value.email}}</v-list-tile-sub-title>
                  <v-list-tile-sub-title>{{"Age: "+value.age}}</v-list-tile-sub-title>
                </v-list-tile-content>
               
              </v-list-tile>
               <v-divider :key="value.id + 100" inset></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-flex>
      <v-flex md8>
        <p></p>
      </v-flex>
    </v-layout>
</template>
<script>
export default {
    props: {
        students: Array
    }
}
</script>