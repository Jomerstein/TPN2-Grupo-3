<template>
    <div class="car-details">
      <img :src="car.imageLink" :alt="car.id" class="car-image">
      <div class="car-info">
        <p><span class="label">Nombre:</span> {{ car.name }}</p>
        <p><span class="label">Año:</span> {{ car.year }}</p>
        <p><span class="label">Marca:</span> {{ car.brand }}</p>
        <p><span class="label">Precio:</span> {{ car.price }}</p>
      </div>
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

<style scoped>
.car-details {
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.car-image {
  width: 200px;
  height: auto;
  border-radius: 10px;
  margin-right: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.car-info {
  flex: 1;
}

.car-info p {
  margin: 10px 0;
  font-size: 1.2em;
}

.label {
  font-weight: bold;
  color: #333;
}
</style>