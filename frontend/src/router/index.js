import { createRouter, createWebHistory } from 'vue-router'
import createStore from '../store/index.js' // CONSULTAR COMO LLAMAR AL STORE DESDE UN ARCHIVO JS CUALQUIERA

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "About" */ '@/views/About')
  },
  {
    path: '/post',
    name: 'Post',
    component: () => import(/* webpackChunkName: "Programs" */ '@/views/Post'),
    beforeEnter: (to, from) => {
      if (createStore.state.remember_me) return true
      return false
    },
  },
  {
    path: '/how',
    name: 'How',
    component: () => import(/* webpackChunkName: "How" */ '@/views/How')
  }, {
    path: '/',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import(/* webpackChunkName: "NotFoundPage" */ '@/views/NotFoundPage')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
