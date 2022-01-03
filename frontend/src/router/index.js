import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Programs from '../views/Programs'
import How from '../views/How'
import NotFoundPage from '../views/NotFoundPage'

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
    path: '/programas',
    name: 'Programs',
    component: () => import(/* webpackChunkName: "Programs" */ '@/views/Programs')
  },
  {
    path: '/como',
    name: 'How',
    component: () => import(/* webpackChunkName: "How" */ '@/views/How')
  }, {
    path: '/',
    redirect: () => import(/* webpackChunkName: "Home" */ '@/views/Home')
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
