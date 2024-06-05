import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'
import CarDetail from '@/views/CarDetail.vue'
import CrearAuto from '@/views/CrearAuto.vue'
import ModificarAuto from '@/views/ModificarAuto.vue'
import EliminarAuto from '@/views/EliminarAuto.vue'


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
  },
  {
    path: '/carDetail',
    name: 'CarDetail',
    component: CarDetail
  },
  {
    path: '/crearAuto',
    name: 'CrearAuto',
    component: CrearAuto
  },
  {
    path: '/modificarAuto',
    name: 'ModificarAuto',
    component: ModificarAuto
  },
  {
    path: '/eliminarAuto',
    name: 'EliminarAuto',
    component: EliminarAuto
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
