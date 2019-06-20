<template>
  <v-dialog :value="dialog" @input="closeModal" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ getFormTitle }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-layout wrap>
            <v-form ref="form">
              <v-flex xs12 sm12 md12>
                <v-text-field
                  v-model="editedItem.name"
                  placeholder="Name"
                  :rules="nameRules"
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
                  :return-value.sync="editedItem.createdAt"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      color="green darken-1 white--text"
                      v-model="editedItem.createdAt"
                      prepend-icon="event"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="editedItem.createdAt"
                    no-title
                    scrollable
                    color="green darken-1 white--text"
                  >
                    <v-spacer></v-spacer>
                    <v-btn flat color="green darken-1 white--text" @click="menu = false">Cancel</v-btn>
                    <v-btn
                      flat
                      color="green darken-1 white--text"
                      @click="$refs.menu.save(editedItem.createdAt)"
                    >OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-flex>
              <v-flex xs12 sm12 md12>
                <v-text-field
                  v-model="editedItem.email"
                  prepend-icon="email"
                  placeholder="Email"
                  :rules="emailRules"
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
                  :items="getRole"
                  label="Role"
                  :rules="roleRules"
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
        <v-btn color="green darken-1 white--text" flat @click="closeModal">Cancel</v-btn>
        <v-btn color="green darken-1 white--text" flat @click="validate">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    dialog: Boolean,
    editedItem: Object,
    editedIndex: Number
  },
  data() {
    return {
      
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
  computed: {
    ...mapGetters("Admin", [
      "getFormTitle",
      "getDialog",
      "getRole",
      "getEditedIndex"
    ])
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        if (this.editedIndex > -1) {
          console.log(this.editedItem)
          this.editData({item: this.editedItem, index: this.editedIndex});
          this.closeModal();
        } else {
          this.saveData(this.editedItem);
          this.closeModal();
        }
       }
    },
    closeModal() {
      this.$refs.form.resetValidation();
      this.$emit("closeDialog");
    },
    ...mapActions("Admin", ["saveData", "editData"])
  }
};
</script>
<style>
form {
  width: 100%;
}
</style>
