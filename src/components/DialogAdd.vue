<template>
  <v-dialog :value="dialog" @input="close" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ formTitle }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-layout wrap>
            <v-form ref="form" lazy-validation>
              <v-flex xs12 sm12 md12>
                <v-text-field
                  v-model="editedItem.name"
                  placeholder="Name"
                  :rules="nameRules"
                  required
                  autofocus
                  clearable
                  prepend-icon="person"
                  color="green darken-1 white--text"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm12 md12>
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="editedItem.created"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field color="green darken-1 white--text" v-model="editedItem.created" prepend-icon="event" readonly v-on="on"></v-text-field>
                  </template>
                  <v-date-picker v-model="editedItem.created" no-title scrollable color="green darken-1 white--text">
                    <v-spacer></v-spacer>
                    <v-btn flat color="green darken-1 white--text" @click="menu = false">Cancel</v-btn>
                    <v-btn flat color="green darken-1 white--text" @click="$refs.menu.save(editedItem.created)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-flex>
              <v-flex xs12 sm12 md12>
                <v-text-field
                  v-model="editedItem.email"
                  prepend-icon="email"
                  placeholder="Email"
                  :rules="emailRules"
                  required
                  clearable
                  color="green darken-1 white--text"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm12 md12>
                <v-text-field
                  v-model="editedItem.phone"
                  type="number"
                  clearable
                  prepend-icon="call"
                  placeholder="Phone"
                  color="green darken-1 white--text"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm12 md12>
                <v-select
                  v-model="editedItem.role"
                  :items="roles"
                  label="Role"
                  :rules="roleRules"
                  required
                  prepend-icon="settings"
                  color="green darken-1 white--text"
                ></v-select>
              </v-flex>
              <v-flex xs12 sm12 md12>
                <v-switch
                  color="green darken-1 white--text"
                  v-model="editedItem.status"
                  :label="`Status: ${editedItem.status}`"
                ></v-switch>
              </v-flex>
            </v-form>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1 white--text" flat @click="close">Cancel</v-btn>
        <v-btn color="green darken-1 white--text" flat @click="validate">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: Boolean,
    formTitle: String,
    editedItem: Object,
    roles: Array
  },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      nameRules: [
        v => !!v || "Name is required"
        // v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      roleRules: [v => !!v || "Role is required"]
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        // this.snackbar = true;
        // console.log(this.snackbar);
        this.$emit("saveData");
      }
    },
    close() {
      this.$emit("closeModel");
    }
  }
};
</script>
<style>
/* div.error--text {
  color: red !important;
} */
form{
  width: 100%;
}
</style>
