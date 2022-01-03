import { createRouter, createWebHistory } from 'vue-router'

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
    component: () => import(/* webpackChunkName: "Programs" */ '@/views/Post')
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
