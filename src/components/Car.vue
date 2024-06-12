<template lang="">
     <img :src="car.imageLink" :alt="car.id"/>
    <br></br>
    <div>
    <p>Nombre: {{car.name }}</p>
    <p>Año: {{ this.car.year }}</p>
    <p>Marca: {{ this.car.brand }}</p>
    <p>Precio: {{ this.car.price }}</p>
    <p>Alquilado hasta: {{ this.car.rentedUntil }}</p>
    </div>
</template>

<script>
import axios from 'axios';
import { useCarStore } from '@/stores/carStore';
export default {
  
    data() {
        return {
            parametro: this.$route.params.id, // falta poner que si el auto no existe no te deje o una pantalla de que no existe
            car: {}
        }
    },
    mounted(){
       this.fetchAuto()
    },
    methods:{
        async fetchAuto() {
          const store = useCarStore()
          const response = await store.fetchUnAuto(this.parametro)
          this.car = response.data
        }
    }
}

</script>

<style lang="">
    
</style>