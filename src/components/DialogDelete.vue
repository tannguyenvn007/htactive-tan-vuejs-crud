<template>
  <v-layout row justify-center>
    <v-dialog :value="dialogDelete" @input="closeDialogDelete "  max-width="300">
      <v-card>
        <v-card-title class="headline">Delete</v-card-title>
        <v-card-text>Are you sure you want to delete this item?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="yes">Yes</v-btn>
          <v-btn color="green darken-1" flat @click="closeDialogDelete ">No</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import {mapActions} from 'vuex'
  export default {
    props: {
      dialogDelete: Boolean
    },
    methods: {
      closeDialogDelete(){
        this.$emit("closeDialogDelete")
      },
      yes(){
        this.deleteItems();
        this.closeDialogDelete()
      },
        ...mapActions("Admin",['deleteItems']),
    },
  }
</script>