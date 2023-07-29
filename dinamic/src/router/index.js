import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Movie from '../pages/Movie.vue'
import Anime from '../pages/Anime.vue'
import Manga from '../pages/Manga.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home/:category',
      name: 'home',
      component: Home
    },
  ]
})
export default router
