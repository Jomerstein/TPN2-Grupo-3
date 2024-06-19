<template lang="">
    <h1>Información del Auto</h1>
    <br></br>
    <button v-if = "checkAdminStatus" >Eliminar auto</button> 
   
    <button v-if = "checkAdminStatus" >Modificar</button>
    <button>Alquilar</button>
    <Car />
</template>

<script>
import Car from '../components/Car.vue'
import { useAuthStore } from '@/stores/userStore';
export default {
    components: {
        Car
    },
    data() {
        return {
            
            store: useAuthStore()
        };
    },
    computed: {
        checkAdminStatus() {
            return this.store.isAuthenticated
        }
    },
    methods:{
        isAdmin() {
           return this.store.isAdmin
        }
    }
}
</script>

<style lang="">
    
</style>