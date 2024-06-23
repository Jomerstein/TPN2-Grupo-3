<template>
    <div class="bar" v-for="auto in autos" :key="auto.id">
      <div class="content">
        <img class="image" :src="auto.imageLink" alt="Imagen">
        <div class="details">
          <span class="status" :class="{'rented': estaAlquilado(auto), 'not-rented': !estaAlquilado(auto)}"></span>
          <span class="name">{{ auto.name }}</span>
        </div>
        <div class="buttons">
          <button @click="editar(auto)" class="btn edit-btn">Editar</button>
          <button @click="cancelarAlquiler(auto)" class="btn delete-btn">Cancelar</button>
        </div>
      </div>
    </div>
  </template>
<script>
import { useCarStore } from '@/stores/carStore';

export default {
    methods:{
      fetchAutos(){
      const store = useCarStore()
      store.fetchAutos()
    },
    editar(auto){
      this.$router.push({name: 'EditCar', params: {id: auto.id}})
    },
    cancelarAlquiler(auto){

    },
    estaAlquilado(idAuto){
      const store = useCarStore()
      return store.estaAlquilado(idAuto)
    }
    },
    computed:{
    autos(){
      const store = useCarStore()
      return store.cars
    }
  },
    mounted(){
        this.fetchAutos();
        
    }
}
</script>
<style scoped>
.bar {
    margin: 70px;
  text-align: center;
  padding: 20px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.content {
  display: flex;
  align-items: center;
  width: 100%;

}

.image {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
}

.details {
  display: flex;
  align-items: center;
  flex-grow: 1;
}

.status {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
}

.not-rented {
  background-color: green;
}

.rented {
  background-color: red;
}

.name {
  font-size: 1.5em;
  font-weight: 600;
}

.buttons {
  display: flex;
  gap: 15px;
}

.btn {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.edit-btn {
  background-color: #17a2b8;
  color: white;
}

.edit-btn:hover {
  background-color: #138496;
}

.delete-btn {
  background-color: #dc3545;
  color: white;
}

.delete-btn:hover {
  background-color: #c82333;
}
</style>