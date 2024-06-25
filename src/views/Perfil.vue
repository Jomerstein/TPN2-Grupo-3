
 <template>
  <div class="user-info">
    <p><span class="label">Nombre:</span> {{ usuario.name }}</p>
    <p><span class="label">Apellido:</span> {{ usuario.surname }}</p>
    <div class="auto-image">
      <span class="label">Auto:</span>
      <div v-if="usuario.idAuto !== '0'">
        <img :src="auto.imageLink" alt="">
    </div>
    <span v-else>No hay imagen disponible</span>
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

<style>
.user-info {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 20px auto;
}

.user-info p {
  margin: 10px 0;
}

.label {
  font-weight: bold;
  color: #333;
}

.auto-image {
  margin-top: 10px;
  display: flex;
  align-items: center;
}

.auto-image img {
  max-width: 100px;
  max-height: 100px;
  margin-left: 10px;
}
</style>