import Vue from 'vue'
import Router from 'vue-router'
import AdminComponent from '@/components/AdminComponent'
import Details from '@/components/Details'
import PageNotFound from '@/components/PageNotFound'
import MyComponent from '@/components/MyComponent'
import StudentDetails from '@/components/StudentDetails'
import Students from '@/components/Students'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
      {
        path: '/admin',
        name: 'AdminComponent',
        component: AdminComponent,
        children: [
            {
                path: 'detail/:id',
                name: 'details',
                component: Details  
            }
        ]
      },
      {
        path: '/my-component',
        name: 'MyComponent',
        component: MyComponent,
        children: [
            {
                path: 'student/:id',
                name: 'studentDetails',
                component: StudentDetails  
            }
        ]
      },
      {
        path: '/students',
        name: 'students',
        component: Students
      },
      { path: "/*", component: PageNotFound}
    ]
  })
  