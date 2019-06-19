<template>
  <div>
    <v-layout row wrap >
      <v-flex :class=" $router.history.current.name === 'details' ? ' xs8' : ' xs12'">
        <v-toolbar flat color="white">
          <v-toolbar-title>Admin</v-toolbar-title>
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
        <v-container>
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
              <v-btn flat icon color="green" @click="editItem(props.item)">
                <v-icon small >edit</v-icon>
              </v-btn>
              <v-btn flat icon color="green" @click="deleteItem(props.item)">
                <v-icon small >delete</v-icon>
              </v-btn>
              <v-btn flat icon color="green" :to="{ name: 'details', params: {id: desserts.indexOf(props.item)}}">
                <v-icon small >remove_red_eye</v-icon>
              </v-btn>
            </td>
          </template>
          <template v-slot:no-data>
            <v-btn color="green darken-1 white--text" @click="initialize">Reset</v-btn>
          </template>
        </v-data-table>
        </v-container>
      </v-flex>
      <v-flex class="xs4 pl-2">
        <router-view ></router-view>
      </v-flex>
    </v-layout>


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
        },
          {
          name: "Nguyen Van sdfsdfsdfsdf",
          created: new Date().toISOString().substr(0, 10),
          email: "tannguyenvn007@gmail.com",
          phone: "345345345345",
          role: "Admin",
          status: true
        }
      ];
    },
    saveData() {
      this.desserts.push(this.editedItem);
      this.close();
    },
    showDetails(dataDetails) {
      this.$router.push({
        name: "details",
        params: { id: this.desserts.indexOf(dataDetails), data: dataDetails }
      });
    },
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    editData() {
      Object.assign(this.desserts[this.editedIndex], this.editedItem);
      this.close();
    },
    deleteItem(item) {
      this.dialogDelete = true;
      this.itemDelete = item;
    },
    deleteItems() {
      const index = this.desserts.indexOf(this.itemDelete);
      // c1  this.desserts.splice(index, 1);
      this.desserts = this.desserts.filter((v, k) => k !== index);
      this.dialogDelete = false;
    },
    close() {
      this.dialog = false;
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    }
  }
};
</script>