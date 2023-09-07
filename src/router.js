import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from './components/Welcome.vue'
import Role from './components/Role.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/role', 
    name: 'Role',
    component: Role
  }
]

const router = new VueRouter({
  routes
})

export default router