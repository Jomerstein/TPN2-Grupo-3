<template lang="">
    <h1>Información del Auto</h1>
    <br></br>
    
    <Car />
    <form @submit.prevent="selectDate" class="formulario" action="">
            <label for="">Elija hasta que fecha quiere alquilar</label>

            <input v-model="rentedUntil" required type="date" name="rentedUntil" id="rentedUntil">

            <button type="submit" @click="alquilar">Alquilar</button>
        </form>
   
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
            userStore: useAuthStore(),
            rentedUntil: null
        };
    },
    computed: {
        checkAdminStatus() {
            return this.userStore.isAuthenticated
        }
    },
    methods:{
        isAdmin() {
           return this.userStore.isAdmin
        },
       async alquilar(){
        try{

        
        if(this.rentedUntil === null){
            alert("Seleccione una fecha")
            throw new Error("No hay fecha seleccionada")
        }else{
        const carStore = useCarStore()
        const usuario = this.userStore.user
        const idPerfil = usuario.id
        try{
            await this.userStore.alquilar(usuario, this.parametro)
            await carStore.alquilar(idPerfil, this.parametro, this.rentedUntil) 
            alert("Auto alquilado con éxito")
            this.$router.push('/home')
          
        }catch(e){
            alert(e)
        }
        }
        }catch(e){
        alert("No puede alquilar un auto sin haber iniciado sesión")
        console.log(e);
}
        }
    },
    mounted(){
      this.userStore.checkAuth()
    }
}
</script>

<style lang="">
    
</style>