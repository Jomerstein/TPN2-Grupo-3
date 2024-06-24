<template>
  <div>
    <div v-if="car">
      <h2>Editar Auto</h2>
      <form @submit.prevent="updateCar">
        <div class="form-group">
          <label for="name">Nombre:</label>
          <input v-model="car.name" id="name" type="text" required />
        </div>
        <div class="form-group">
          <label for="imageLink">Enlace de Imagen:</label>
          <input v-model="car.imageLink" id="imageLink" type="text" required />
        </div>
        <div class="form-group">
          <label for="brand">Marca:</label>
          <input v-model="car.brand" id="brand" type="text" required />
        </div>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
    <div v-else>
      Cargando...
    </div>
  </div>
</template>
<script>
import { useCarStore } from '@/stores/carStore';

export default {
    props: ['id'],
    data(){
        return{
            car : null
        }
    },
    methods:{
        async fetchUnAuto(){
            console.log(this.id);
            const store = useCarStore()
            try{
                const emptycar = await store.fetchUnAuto(this.id)
                this.car = emptycar.data
                console.log(this.car);
            }catch(e){
                console.log(e);
            }
           
        },
        async updateCar() {
      const store = useCarStore();
      try {
        await store.updateCar(this.car);
        alert('Auto actualizado correctamente');
        this.$router.push('/carPanel'); // Redirigir a otra ruta después de la actualización
      } catch (e) {
        console.log('Error al actualizar el auto:', e);
        alert('Error al actualizar el auto');
      }
    }
    },
    mounted(){
        console.log(this.id);
        this.fetchUnAuto()
    }
}
</script>
<style lang="">
    
</style>