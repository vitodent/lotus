import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Movie from '../pages/Movie.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home/category',
      name: 'home',
      component: Home
    },
    {
      path: '/view/movieId',
      name: 'about',
      component: Movie
    }
  ]
})

export default router
