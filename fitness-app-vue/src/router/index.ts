import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Session from '../views/Session.vue'
import Progress from '../views/Progress.vue'
import History from '../views/History.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/session',
      name: 'Session',
      component: Session
    },
    {
      path: '/progress',
      name: 'Progress',
      component: Progress
    },
    {
      path: '/history',
      name: 'History',
      component: History
    }
  ]
})

export default router