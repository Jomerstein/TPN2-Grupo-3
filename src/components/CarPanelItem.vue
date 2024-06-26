<template lang="">

        <div class="content">
          <img class="image" :src="auto.imageLink" alt="Imagen">
          <div class="details">
            <span class="status" :class="{'rented': estaAlquilado(auto), 'not-rented': !estaAlquilado(auto)}"></span>
            <span class="name">{{ auto.name }}</span>

            <div v-if="(auto.rentedUntil != null)"><span>Alquilado hasta{{ formatedDate(auto.rentedUntil) }}</span></div>


            <div v-else> Disponible para alquilar</div>
          </div>
          <div class="buttons">
            <button @click="editar()" class="btn edit-btn">Editar</button>
            <button @click="eliminarAuto()" class="btn delete-btn">Eliminar</button>

            <!-- Mostrar el botón cancelRent solo si el auto está alquilado -->
            <button v-if="estaAlquilado(auto)" @click="cancelRent()" class="btn delete-btn">Cancelar renta</button>
          </div>
        </div>
      
</template>
<script>
import { useCarStore } from '@/stores/carStore';


export default {
    props:{
        auto:{
            type: Object,
            required: true
        }
    },
    methods:{
      estaAlquilado(auto){
      const store = useCarStore()
      return store.estaAlquilado(auto)
    },
    editar(){
      this.$emit('editar', this.auto)
    },
    eliminarAuto(){
      this.$emit('eliminarAuto', this.auto)
    },
    cancelRent(){
      this.$emit('cancelRent', this.auto)
    },
    formatedDate(rentedUntil){
      const date = new Date(rentedUntil);
      return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    },

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
  background-color: #880e0e;
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
  background-color: #000000;
  color: white;
}

.edit-btn:hover {
  background-color: #5e5e5e;
}

.delete-btn {
  background-color: #880e0e;
  color: rgb(0, 0, 0);
}

.delete-btn:hover {
  background-color: #5e5e5e;
}
</style>