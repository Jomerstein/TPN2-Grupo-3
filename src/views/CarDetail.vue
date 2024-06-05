<template lang="">
    <h1>Información del Auto</h1>
    <br></br>
    <button v-if=isAdmin >Eliminar auto</button> 
    <!-- esto no va a funcionar hasta que hagamos el sistema de autenticación -->
    <button v-if=isAdmin >Modificar</button>
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
    methods:{
        isAdmin(){
            const authStore = useAuthStore()
            return authStore.isAdmin()
        }
    }
}
</script>

<style lang="">
    
</style>