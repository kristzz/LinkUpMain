// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/connections',
        name: 'connections',
        component: () => import('@/views/NavBarViews/Connections.vue')
      },
      {
        path: '/jobs',
        name: 'jobs',
        component: () => import('@/views/NavBarViews/Jobs.vue')
      },
      {
        path: '/messages',
        name: 'messages',
        component: () => import('@/views/NavBarViews/Messages.vue')
      },
      {
        path: '/notifications',
        name: 'notifications',
        component: () => import('@/views/NavBarViews/Notifications.vue')
      },
      {
        path: '/profile/:id',
        name: 'profile',
        component: () => import('@/views/NavBarViews/Profile.vue')
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
