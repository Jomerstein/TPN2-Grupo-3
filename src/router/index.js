import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'
import CarDetail from '@/views/CarDetail.vue'
import CrearAuto from '@/views/CrearAuto.vue'
import ModificarAuto from '@/views/ModificarAuto.vue'
import EliminarAuto from '@/views/EliminarAuto.vue'
import Admin from '@/views/Admin.vue'


const routes = [
  {
    path: "/home",
    name:"Home",
    component: Home,
    

  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/carDetail/:id',
    name: 'CarDetail',
    component: CarDetail,
     meta: {
            requiereAuth: true
        }
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
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
            requiereAuth: true
        }
  }

]


const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if(to.meta.requiereAuth && !isAuthenticated){
        next({name:'Home'})
    }
    else{
        next();
    }
})
 


export default router
