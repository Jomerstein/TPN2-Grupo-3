<template lang="">
    <h1>Información del Auto</h1>
    <br></br>
    <button v-if = "checkAdminStatus" >Eliminar auto</button> 
   
    <button v-if = "checkAdminStatus" >Modificar</button>
    
    <Car />
    <button @click="alquilar">Alquilar</button>
</template>

<script>
import { useCarStore } from '@/stores/carStore';
import Car from '../components/Car.vue'
import { useAuthStore } from '@/stores/userStore';
export default {
    components: {
        Car
    },
    data() {
        return {
            parametro: this.$route.params.id,
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
        },
       async alquilar(){
        const carStore = useCarStore()
        const usuario = JSON.parse(localStorage.getItem('user'))
        const idPerfil = usuario.id
        try{
            await this.store.alquilar(usuario, this.parametro)
            await carStore.alquilar(idPerfil, this.parametro) 
          
        }catch(e){
            alert(e)
        }
       
        }
    },
    mounted(){
      this.store.checkAuth()
    }
}
</script>

<style lang="">
    
</style>