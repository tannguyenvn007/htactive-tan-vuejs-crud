<template>
  <v-container grid-list-lg>
    <v-btn @click="show = !show" flat icon fixed right large class="text-xs-right btn-position">
      <v-icon color="green" v-if="show == true">apps</v-icon>
      <v-icon color="green" v-else>list</v-icon>
    </v-btn>
    <h1>Student List</h1>
    <v-layout row wrap v-if="show == true">
      <v-flex lg4 md12 sm12 xs12 v-for="(value,key) in students" :key="key">
        <v-card>
          <v-card-title primary-title>
            <v-layout row>
              <v-flex sm2>
                <v-img :src="value.avatar" aspect-ratio="1" class="grey lighten-2"/>
              </v-flex>
              <v-flex sm10>
                <div class="headline">{{value.name}}</div>
                <v-layout row wrap>
                  <v-flex sm6>
                    <div>
                      <v-icon color="green">email</v-icon>
                      <span class="grey--text">{{" " + value.email}}</span>
                    </div>
                    <div>
                      <v-icon color="green">phone</v-icon>
                      <span class="grey--text">{{" " + value.phone}}</span>
                    </div>
                  </v-flex>
                  <v-flex sm6>
                    <div>
                      <v-icon color="green">location_on</v-icon>
                      <span class="grey--text">{{" " + value.address}}</span>
                    </div>
                    <div>
                      <v-icon color="green">date_range</v-icon>
                      <span class="grey--text">{{" " + value.age}}</span>
                    </div>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card-title>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Comment</h3>
              <div>Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat</div>
            </div>
          </v-card-title>

          <v-divider color="lime"></v-divider>
          <v-card-actions>
            <v-list-tile-title>Teachers:</v-list-tile-title>
            <v-spacer></v-spacer>
            <v-flex sm2 v-for="(v,i) in value.lecturers " :key="i">
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-list-tile-avatar>
                    <img :src="v.avatar" v-on="on">
                  </v-list-tile-avatar>
                </template>
                <span>{{v.name}}</span>
              </v-tooltip>
            </v-flex>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout v-else row>
      <v-flex md2>
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
               <v-divider :key="value.id + 100" inset color="lime"></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-flex>
      <v-flex md10 >
        <v-card v-if="studentDetails">
          <v-card-title primary-title>
            <v-layout row>
              <v-flex sm2>
                <v-img :src="studentDetails[0].avatar" aspect-ratio="1" class="grey lighten-2"/>
              </v-flex>
              <v-flex sm10>
                <div class="headline">{{studentDetails[0].name}}</div>
                <v-layout row wrap>
                  <v-flex sm6>
                    <div>
                      <v-icon color="green">email</v-icon>
                      <span class="grey--text">{{" " + studentDetails[0].email}}</span>
                    </div>
                    <div>
                      <v-icon color="green">phone</v-icon>
                      <span class="grey--text">{{" " + studentDetails[0].phone}}</span>
                    </div>
                  </v-flex>
                  <v-flex sm6>
                    <div>
                      <v-icon color="green">location_on</v-icon>
                      <span class="grey--text">{{" " + studentDetails[0].address}}</span>
                    </div>
                    <div>
                      <v-icon color="green">date_range</v-icon>
                      <span class="grey--text">{{" " + studentDetails[0].age}}</span>
                    </div>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card-title>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Comment</h3>
              <div>Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat</div>
            </div>
          </v-card-title>

          <v-divider color="lime"></v-divider>
          <v-card-actions>
            <v-list-tile-title>Teachers:</v-list-tile-title>
            <v-spacer></v-spacer>
            <v-flex sm2 v-for="(v,i) in studentDetails[0].lecturers " :key="i">
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-list-tile-avatar>
                    <img :src="v.avatar" v-on="on">
                  </v-list-tile-avatar>
                </template>
                <span>{{v.name}}</span><br>
                <span>{{v.faculty}}</span>
                
              </v-tooltip>
            </v-flex>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  data() {
    return {
      listStudent: [
        {
          id: 1,
          lecturers: [1, 3],
          name: "Nguyen Van A",
          age: 10,
          address: "Da Nang",
          avatar:
            "http://pbjmubakab.edata.id/themes/smartadmin/img/images/user_icon.png",
          phone: "0969756525",
          email: "a@gmail.com"
        },
        {
          id: 2,
          lecturers: [1, 2, 3],
          name: "Nguyen Van B",
          age: 11,
          address: "Da Nang",
          avatar:
            "http://www.adisanggoro.sch.id/assets/assets/avatar/avatar3.png",
          phone: "0973117536",
          email: "b@gmail.com"
        },
        {
          id: 3,
          lecturers: [1, 3],
          name: "Nguyen Van C",
          age: 10,
          address: "Quang Nam",
          avatar: "https://sitejerk.com/images/png-avatar-13.png",
          phone: "0982542373",
          email: "c@gmail.com"
        },
        {
          id: 4,
          lecturers: [4],
          name: "Nguyen Van D",
          age: 10,
          address: "Quang Nam",
          avatar:
            "https://indonesiascooterfestival.com/wp-content/uploads/2019/04/man.png",
          phone: "0986436394",
          email: "d@gmail.com"
        },
        {
          id: 5,
          lecturers: [2, 3],
          name: "Nguyen Van E",
          age: 10,
          address: "Quang Nam",
          avatar:
            "https://www.graveeka.com/wp-content/uploads/2019/02/man1.png",
          phone: "0546986665",
          email: "e@gmail.com"
        },
        {
          id: 6,
          lecturers: [1, 3],
          name: "Nguyen Van F",
          age: 10,
          address: "Quang Nam",
          avatar:
            "http://icons.iconarchive.com/icons/webalys/kameleon.pics/512/Man-1-icon.png",
          phone: "0898745445",
          email: "f@gmail.com"
        }
      ],
      listLecturers: [
        {
          id: 1,
          name: "Nguyen Van Teo",
          faculty: "Information Technology",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB8LUi-C5Ylh194rtkIKF3f-qnu1mQoCfKoHjmDVVmGnCihqQ3"
        },
        {
          id: 2,
          name: "Le Van Ti",
          faculty: "Food Technology",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKISzs5_89omAqfEicvqjgr-jqWgumSOgCkWF9Tq1fItfT29mF"
        },
        {
          id: 3,
          name: "Huynh",
          faculty: "Mechanical",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrlXnP78DHA4C1yGAwNkEvHOAXwNeHbHin6Vg1Ubw2tbuUJBC_"
        },
        {
          id: 4,
          name: "Khang",
          faculty: "Architecture",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMihDVsW4ZtPNVa-Ru5LHIPwUFLlDqpqPtgVwT4uXuZyTIH-ub"
        }
      ],
      show: true,
      studentDetails: []
    };
  },
  computed: {
    students() {
      return this.listStudent.map(itemStudent => {
        itemStudent.lecturers = this.listLecturers.filter(itemLecturers =>
          itemStudent.lecturers.includes(itemLecturers.id)
        );
        return itemStudent;
      });
    }
  },
  mounted() {
    this.getStudentDetails(1);
  },
  methods: {
    getStudentDetails(id){
      this.studentDetails = this.students.filter(value => value.id == id)
    }
  },
};
</script>
<style>
.btn-position {
  z-index: 1;
}
</style>
