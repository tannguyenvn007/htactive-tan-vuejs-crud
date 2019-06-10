<template>
  <div>
    <v-layout row>
      <v-flex>
        <v-toolbar flat color="white">
          <v-toolbar-title>User Management</v-toolbar-title>
          <v-divider class="mx-2" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn @click="dialog = true" color="green darken-1 white--text" class="mb-2">Add User</v-btn>
          <DialogAdd
            :dialog="dialog"
            :formTitle="formTitle"
            :editedItem="editedItem"
            :roles="roles"
            :editedIndex="editedIndex"
            @editData="editData"
            @saveData="saveData"
            @closeModel="close"
          />
        </v-toolbar>
      </v-flex>
    </v-layout>
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class>{{ props.item.created }}</td>
        <td class>{{ props.item.email }}</td>
        <td class>{{ props.item.phone }}</td>
        <td class>{{ props.item.role }}</td>
        <td class>{{ props.item.status }}</td>
        <td class="layout px-0">
          <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
          <v-icon small @click="deleteItem(props.item)">delete</v-icon>
        </td>
      </template>
      <template v-slot:no-data>
        <v-btn color="green darken-1 white--text" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
    <DialogDelete :dialogDelete="dialogDelete" @yes="deleteItems " @no=" dialogDelete = false "/>
  </div>
</template>
<script>
import DialogAdd from "./DialogAdd";
import DialogDelete from "./DialogDelete";

export default {
  components: {
    DialogAdd,
    DialogDelete
  },
  data: () => ({
    rowsPerPageItems: [5, 10, 20, 30, 40],
    pagination: {
      rowsPerPage: 10
    },
    itemDelete: null,
    dialogDelete: false,
    dialog: false,
    headers: [
      {
        text: "Name",
        align: "left",
        sortable: false,
        value: "name"
      },
      { text: "Created", value: "created" },
      { text: "Email", value: "email" },
      { text: "Phone", value: "phone" },
      { text: "Role", value: "role" },
      { text: "Status", value: "status" },
      { text: "Actions", value: "name", sortable: false }
    ],
    desserts: [],
    roles: ["Admin", "Supper Amin", "Customer"],
    editedIndex: -1,
    editedItem: {
      name: "",
      created: new Date().toISOString().substr(0, 10),
      email: "",
      phone: "",
      role: "",
      status: false
    },
    defaultItem: {
      name: "",
      created: new Date().toISOString().substr(0, 10),
      email: "",
      phone: "",
      role: "",
      status: false
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New User" : "Edit User";
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          name: "Nguyen Van Tan",
          created: new Date().toISOString().substr(0, 10),
          email: "tannguyenvn007@gmail.com",
          phone: "0969756525",
          role: "Admin",
          status: true
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.dialogDelete = true;
      this.itemDelete = item;
    },
    deleteItems() {
      const index = this.desserts.indexOf(this.itemDelete);
      // c1  this.desserts.splice(index, 1);
      this.desserts = this.desserts.filter((v,k) => k !== index);
      this.dialogDelete = false;
    },
    close() {
      this.dialog = false;
      this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
    },
    saveData() {
      this.desserts.push(this.editedItem);
      this.close();
    },
    editData() {
      Object.assign(this.desserts[this.editedIndex], this.editedItem);
      this.close();
    }
  }
};
</script>