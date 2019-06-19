<template>
  <div>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex :class=" $router.history.current.name === 'studentDetails' ? ' xs6' : ' xs12'">
          <h1  class="text-xs-center">Student List</h1>
          <v-data-table :headers="headers" :items="desserts" class="elevation-1">
            <template v-slot:items="props">
              <tr @click="showDetails(props.item)">
                <td>{{ props.item.id }}</td>
                <td>{{ props.item.fullname }}</td>
                <td>{{ props.item.age }}</td>
                <td>{{ props.item.class }}</td>
              </tr>
            </template>
          </v-data-table>
        </v-flex>
        <v-flex xs6 v-if="show === true">
          <h1 class="text-xs-center">Student Details</h1>
          <router-view></router-view>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      headers: [
        {
          text: "ID",
          align: "left",
          sortable: false,
          value: "id"
        },
        { text: "Fullname", value: "fullname" },
        { text: "Age", value: "age" },
        { text: "Class", value: "class" }
      ],
      desserts: [
        {
          id: 1,
          fullname: "Nguyen Van Tan",
          age: 21,
          class: 12
        },
        {
          id: 2,
          fullname: "Nguyen Van Tan1",
          age: 21,
          class: 12
        },
        {
          id: 3,
          fullname: "Nguyen Van Tan2",
          age: 21,
          class: 12
        }
      ]
    };
  },
  methods: {
    showDetails(dataDetails) {
      this.show = true;
      this.$router.push({
        name: "studentDetails",
        params: { id: dataDetails.id, data: dataDetails }
      });
    }
  }
};
</script>