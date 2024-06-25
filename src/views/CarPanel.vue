<template>
    <div class="bar" v-for="auto in autos" :key="auto.id">
      <CarPanelItem :auto="auto" @editar="editar" @eliminarAuto="eliminarAuto" @cancelRent="cancelRent"></CarPanelItem>
    </div>
  </template>
<script>
import CarPanelItem from '@/components/CarPanelItem.vue';
import { useCarStore } from '@/stores/carStore';
import { useAuthStore } from '@/stores/userStore';

export default {
  components:{
    CarPanelItem
  },
    methods:{
      fetchAutos(){
      const store = useCarStore()
      store.fetchAutos()
    },
    formatedDate(rentedUntil){
      const date = new Date(rentedUntil);
      return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    },
    editar(auto){
      this.$router.push({name: 'EditCar', params: {id: auto.id}})
    },
    async eliminarAuto(car){
      const store = useCarStore()
      if(!this.estaAlquilado(car)){
        try{
          await store.deleteCar(car)
          alert("Auto eliminado con éxito")
        }catch(e){
          console.log(e);
        }
      }else{
        alert("El auto no se puede eliminar, esta alquilado")
      }
    },
    async cancelRent(car){
      const carStore = useCarStore()
      const userStore = useAuthStore()
      try{
      await carStore.cancelRent(car)
      await userStore.cancelRent()
      }catch(e){
        alert(e)
      }
      
      alert('Auto desalquilado')


    },
    estaAlquilado(auto){
      const store = useCarStore()
      return store.estaAlquilado(auto)
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
  display: column;

  
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