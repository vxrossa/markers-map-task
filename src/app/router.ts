import { createRouter, createWebHistory } from 'vue-router'
import TaskPage from '@/pages/TaskPage.vue'
import MapPage from '@/pages/MapPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'task',
      component: TaskPage,
    },
    {
      path: '/map',
      name: 'map',
      component: MapPage,
    },
  ],
})

export default router
