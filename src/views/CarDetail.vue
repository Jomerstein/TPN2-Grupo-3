<template>
    <div class="car-info">
      <h1>Información del Auto</h1>
      <Car />
      <form @submit.prevent="selectDate" class="formulario">
        <label for="rentedUntil">Elija hasta qué fecha quiere alquilar:</label>
        <input v-model="rentedUntil" required type="date" name="rentedUntil" id="rentedUntil">
        <button type="submit" @click="alquilar">Alquilar</button>
      </form>
    </div>
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

<style scoped>
.car-info {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: auto;
  padding: 20px;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

.formulario {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  margin-bottom: 10px;
}

input[type="date"] {
  padding: 8px;
  width: calc(100% - 16px); /* Ajusta el ancho del input teniendo en cuenta el padding */
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
  background-color: #880e0e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #000000;
}
</style>