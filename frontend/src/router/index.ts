// Composables
import { createRouter, createWebHistory } from 'vue-router';


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
        path: '/login',
        name: 'login',
        component: () => import('@/views/UserRegLog/Login.vue'),
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('@/views/UserRegLog/Register.vue'),
      },
      {
        path: '/connections', name: 'connections', component: () => import('@/views/NavBarViews/Connections.vue')
      },
      {
        path: '/jobs', name: 'jobs', component: () => import('@/views/NavBarViews/Jobs.vue')
      },
      {
        path: '/messages', name: 'messages', component: () => import('@/views/NavBarViews/Messages.vue')
      },
      {
        path: '/notifications', name: 'notifications', component: () => import('@/views/NavBarViews/Notifications.vue')
      },
      {
        path: '/profile', /* /:id */ name: 'profile', component: () => import('@/views/NavBarViews/Profile.vue')
      },
      {
        path: '/settings', name: 'settings', component: () => import('@/views/NavBarViews/Settings.vue')
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next({ path: '/login' })
  } else {
    next()
  }
 })
 

export default router