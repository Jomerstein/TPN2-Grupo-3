
 <template>
  <div class="user-info">
    <p><span class="label">Nombre:</span> {{ usuario.name }}</p>
    <p><span class="label">Apellido:</span> {{ usuario.surname }}</p>
    <div class="auto-image">
      <span class="label">Auto:</span>
      <img v-if="usuario.autoImg" :src="user.autoImg" alt="Imagen del auto">
      <span v-else>No hay imagen disponible</span>
    </div>
  </div>
</template>


<script>
import { useAuthStore } from '@/stores/userStore';

export default {
    data() {
        return {
            usuario: {}
        };
    },
    methods: {
        recuperarUsuario() {
            const usuarioJson = localStorage.getItem('user');
            if (usuarioJson) {
                this.usuario = JSON.parse(usuarioJson);
            } else {
                console.error('No user found in localStorage');
            }
        }
    },
    mounted() {
        if (!localStorage.getItem('isAuthenticated')) {
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