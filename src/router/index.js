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
    path: '/characters/:id',
    name: 'CharacterDetails',
    component: () => import('../components/CharacterDetails')
  },
  {
    path: '/episodes',
    name: 'Episodes',
    component: () => import('../components/Episodes')
  },
  {
    path: '/episodes/:id',
    name: 'EpisodeDetails',
    component: () => import('../components/EpisodeDetails')
  },
  {
    path: '/locations',
    name: 'Locations',
    component: () => import('../components/Locations')
  },
  {
    path: '/locations/:id',
    name: 'LocationDetails',
    component: () => import('../components/LocationDetails')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;