<template>
  <div>
    <v-layout row wrap>
      <v-flex :class=" $router.history.current.name === 'details' ? ' xs8' : ' xs12'">
        <v-toolbar flat color="white">
          <v-toolbar-title>Admin</v-toolbar-title>
          <v-divider class="mx-2" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn @click="onDialog" color="green darken-1 white--text" class="mb-2">Add User</v-btn>
          <DialogAdd :dialog="dialog" @closeDialog="closeDialog" :editedItem="editedItem" :editedIndex="editedIndex"/>
        </v-toolbar>
        <v-container>
          <v-data-table
            :headers="headers"
            :items="getDesserts"
            class="elevation-1"
            :rows-per-page-items="rowsPerPageItems"
            :pagination.sync="pagination"
          >
            <template v-slot:items="props">
              <td>{{ props.item.name }}</td>
              <td class>{{ props.item.createdAt}}</td>
              <td class>{{ props.item.email }}</td>
              <td class>{{ props.item.phone }}</td>
              <td class>{{ props.item.role }}</td>
              <td class>{{ props.item.status }}</td>
              <td class="layout px-0">
                <v-btn flat icon color="green" @click="onEdit(props.item)">
                  <v-icon small>edit</v-icon>
                </v-btn>
                <v-btn flat icon color="green" @click="onDialogDelete(props.item)">
                  <v-icon small>delete</v-icon>
                </v-btn>
                <v-btn
                  flat
                  icon
                  color="green"
                  :to="{ name: 'details', params: {id: getDesserts.indexOf(props.item)}}"
                >
                  <v-icon small>remove_red_eye</v-icon>
                </v-btn>
              </td>
            </template>
            <template v-slot:no-data>
              <v-btn color="green darken-1 white--text" @click="getUsers">Reset</v-btn>
            </template>
          </v-data-table>
        </v-container>
      </v-flex>
      <v-flex class="xs4 pl-2">
        <router-view></router-view>
      </v-flex>
    </v-layout>

    <DialogDelete :dialogDelete="dialogDelete" @closeDialogDelete="closeDelete"/>
  </div>
</template>
<script>
import DialogAdd from "./DialogAdd";
import DialogDelete from "./DialogDelete";
import { mapActions, mapGetters, mapMutations } from "vuex";
import { parse } from 'querystring';
export default {
  components: {
    DialogAdd,
    DialogDelete
  },
  data: () => ({
    headers: [
      {
        text: "Name",
        align: "left",
        sortable: false,
        value: "name"
      },
      { text: "CreatedAt", value: "createdAt" },
      { text: "Email", value: "email" },
      { text: "Phone", value: "phone" },
      { text: "Role", value: "role" },
      { text: "Status", value: "status" },
      { text: "Actions", value: "name", sortable: false }
    ],
    rowsPerPageItems: [5, 10, 20, 30, 40],
    pagination: {
      rowsPerPage: 10
    },
    dialog: false,
    dialogDelete: false,
    editedItem: {
      name: "",
      createdAt: new Date().toISOString().substr(0, 10),
      email: "",
      phone: "",
      role: "",
      status: false
    },
    defaultItem: {
      name: "",
      createdAt: new Date().toISOString().substr(0, 10),
      email: "",
      phone: "",
      role: "",
      status: false
    },
    editedIndex: -1,
  }),
  created() {
    this.getUsers();
  },
  computed: {
    ...mapGetters("Admin", ["getDesserts"])
  },

  methods: {
    onDialog() {
      this.dialog = true;
      
    },
    closeDialog() {
      this.default();
      this.editedItem = Object.assign({}, this.defaultItem);
      this.dialog = false;
    },
    onEdit(item) {
      this.editedIndex = this.getDesserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.onDialog();
    },
    onDialogDelete(item) {
      this.dialogDelete = true;
      this.deleteItem(item);
    },
    closeDelete() {
      this.dialogDelete = false;
    },
    ...mapMutations("Admin", ["default"]),
    ...mapActions("Admin", ["getUsers", "editItem", "deleteItem"])
  }
};
</script>