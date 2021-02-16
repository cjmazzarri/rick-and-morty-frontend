import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/characters',
    name: 'Characters',
    component: () => import('../components/Characters')
  },
  {
    path: '/episodes',
    name: 'Episodes',
    component: () => import('../components/Episodes')
  },
  {
    path: '/locations',
    name: 'Locations',
    component: () => import('../components/Locations')
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
