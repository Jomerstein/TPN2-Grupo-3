import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'
const routes = [
  {
    path: "/Home",
    name:"Home",
    component: Home

  },
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
