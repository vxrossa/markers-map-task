import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'task',
      component: () => import('@/pages/TaskPage.vue'),
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('@/pages/MapPage.vue'),
    },
  ],
})

export default router
