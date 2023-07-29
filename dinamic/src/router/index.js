import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import SinglePage from '../pages/singlepage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home/:category',
      name: 'home',
      component: Home
    },
    {
      path: '/watch/:itemId',
      name: 'watch',
      component: SinglePage
    }
  ]
})
export default router
