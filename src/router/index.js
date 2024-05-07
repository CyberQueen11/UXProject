import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JudgeBookView from '../views/JudgeBookView.vue'
import PictureSwipeView from '../views/PictureSwipeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/JudgeBookView',
      name: 'JudgeBook',
      component: JudgeBookView
    },
    {
      path: '/PictureSwipeView',
      name: 'PictureSwipe',
      component: PictureSwipeView
    },
    {
      path: '/OnceUponView',
      name: 'OnceUpon',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/OnceUponView.vue')
    }
  ]
})

export default router
