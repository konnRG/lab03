import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import MoreView from '../views/MoreView.vue'
import StudentView from '../views/StudentView.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventListView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/more',
    name: 'MoreStuff',
    component: MoreView
  },
  {
    path: '/student',
    name: 'student',
    component: StudentView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
