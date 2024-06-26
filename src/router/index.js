import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'
import CarDetail from '@/views/CarDetail.vue'
import CrearAuto from '@/views/CrearAuto.vue'
import NoAccess from '@/views/NoAccess.vue'
import Perfil from '@/views/Perfil.vue'
import CarPanel from '@/views/CarPanel.vue'
import EditCar from '@/views/EditCar.vue'

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
   
  },
  {
    path: '/crearAuto',
    name: 'CrearAuto',
    component: CrearAuto,
    meta :{
      requiereAuth: true,
      requiereAdmin: true
    }
  },

  {
    path: '/perfil',
    name: 'Perfil',
    component: Perfil,
    meta: {
      requiereAuth: true
    }
  },

  {
    path: '/carPanel',
    name: 'CarPanel',
    component: CarPanel,
    meta: {
            requiereAuth: true,
            requiereAdmin: true
        }
  },
  {
    path: '/editCar/:id',
    name: 'EditCar',
    component: EditCar,
    meta: {
      requireAuth:true,
      requiereAdmin: true
    },
    props: true
  },
  {
    path: '/noAccess',
    name: 'noAccess',
    component: NoAccess
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const isAdmin = localStorage.getItem('isAdmin') === 'true'
    if(to.meta.requiereAuth && !isAuthenticated){
        next({name:'Login'})
    }else if(to.meta.requiereAdmin && !isAdmin){
        next({name:'noAccess'})
        
    }
    else{
        next();
    }
})

export default router
