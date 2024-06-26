<template>
    <div class="car-gallery">
        <h1>Car Rental Gallery</h1>
            <div class="car-list">
                <div class="car-card" v-for="car in autos" :key="car.id" v-show="car.rentedBy === `rentedBy ${car.id}`">
                 
                    <img :src="car.imageLink" :alt="car.nombre" class="car-image"/>
                    <h2>{{ car.name }}</h2>
                    <p>Año: {{ car.year }}</p>
                    <p>Marca: {{ car.brand }}</p>
                    <p class="price">Precio: {{ car.price }}</p>
                    <button :disabled="car.idUser" @click="verDetalle(car)">
                      Ver detalle
                    </button>
               
                </div>
            </div>
    </div>
</template>

<script>
import { useCarStore } from '@/stores/carStore';
import { useAuthStore } from '@/stores/userStore';
export default {
  name: 'CarGallery',
  data() {
     return {
      carStore: useCarStore()
     }
    
  },
  methods: {
    verDetalle(car){
      this.$router.push({path: `/carDetail/${car.id}`})
    },
    fetchAutos(){
      this.carStore.fetchAutos()
    },
   
  },
  computed:{
    autos(){
      return this.carStore.cars
    },
   
    
  },
   mounted(){
        this.fetchAutos();
        console.log(this.carStore.cars);
       
        
        
    }
}
</script>

<style scoped>
.car-gallery {
  width: 1200px;
  margin: 70px 0 auto;
  text-align: center;
  padding: 20px;
}

.car-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-content: center;
}

.car-card {
  background-color: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;
  text-align: left;
}

.car-card:hover {
  transform: translateY(-10px);
}

.car-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.car-details {
  padding: 15px;
}

.car-details h2 {
  font-size: 1.5em;
  margin: 10px 0;
}

.car-details p {
  margin: 5px 0;
  color: #666;
}

.price {
  font-size: 1.2em;
  color: #333;
}

button {
  display: block;
  width: 100%;
  background-color: #880e0e;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1em;
  margin-top: 10px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #000000;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>