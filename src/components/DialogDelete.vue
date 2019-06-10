<template>
  <v-layout row justify-center>
    <v-dialog :value="dialogDelete" @input="no"  max-width="290">
      <v-card>
        <v-card-title class="headline">Delete</v-card-title>
        <v-card-text>Are you sure you want to delete this item?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="yes">Yes</v-btn>
          <v-btn color="green darken-1" flat @click="no">No</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
  export default {
    props: {
        dialogDelete: Boolean,
        user: Array
    },
    methods: {
        yes(){
            this.$emit("yes")
        },
        no(){
            this.$emit("no")
        }
    },
  }
</script>