import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

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

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;