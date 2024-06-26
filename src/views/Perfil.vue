<template>
  <div class="user-info">
    <p><span class="label">Nombre:</span> {{ usuario.name }}</p>
    <p><span class="label">Apellido:</span> {{ usuario.surname }}</p>
    <div class="auto-info" v-if="usuario.idAuto != '0'">
      <div class="auto-details">
        <p><span class="label">Auto:</span> {{ auto.name }}</p>
        <p><span class="label">Marca:</span> {{ auto.brand }}</p>
        <p><span class="label">Alquilado hasta:</span> {{ auto.rentedUntil }}</p>
      </div>
      <div class="auto-image">
        <img :src="auto.imageLink" alt="Imagen del auto">
      </div>
    </div>
  </div>
</template>

<script>
import { useCarStore } from '@/stores/carStore';
import { useAuthStore } from '@/stores/userStore';

export default {
    data() {
        return {
            usuario: {},
            auto: {}
        };
    },
    methods: {
       async recuperarUsuario() {
            const usuarioJson = localStorage.getItem('user');
            if (usuarioJson) {
                this.usuario = JSON.parse(usuarioJson);
                console.log(this.usuario);
                console.log(this.usuario.JSON);
                await this.fetchearAuto()
            } else {
                console.error('No user found in localStorage');
            }
        },
        async fetchearAuto(){
          const carStore = useCarStore()
          const auto = await carStore.fetchUnAuto(this.usuario.idAuto)
          console.log(this.usuario);
          this.auto = auto.data
          console.log(this.auto);
        }
    },
    computed(){
      this.recuperarUsuario()
    },
    mounted() {
      const store = useAuthStore()
        store.checkAuth()
        if (!store.isAuthenticated) {
            this.$router.push({ name: 'Login' });
        } else {
           
            
            this.recuperarUsuario();
            
        }
    }
};
</script>

<style scoped>
.user-info {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 500px;
  margin: auto;
}

.user-info p {
  margin: 10px 0;
  font-size: 1.1em;
}

.label {
  font-weight: bold;
  color: #333;
}

.auto-info {
  display: flex;
  align-items: center;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.auto-details {
  flex: 1;
}

.auto-details p {
  margin: 5px 0;
}

.auto-image img {
  width: 150px;
  height: auto;
  border-radius: 10px;
  margin-left: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>