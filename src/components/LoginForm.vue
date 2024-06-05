<template >
    <div>
        <form @submit.prevent="login" class="formulario" action="">
            <label for="">Correo</label>

            <input v-model="username" required type="email" name="nombre" id="nombre">

            <label>Contraseña</label>

            <input v-model="password" required type="password" name="constasenia" id="constrasenia">

            <button type="submit">Ingresar</button>
        </form>
    </div>
</template>


<script>
import { useAuthStore } from "@/stores/userStore";
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login() {
          //  this.$router.push({ name: 'Admin' })//funciona el pusheo
            const useUserStore = useAuthStore();
            useUserStore.login(this.username, this.password);
            if (useUserStore.isAuthenticated) {
                this.$router.push({ name: 'Admin' })
            }
        }
    }
   
}
</script>



<style scoped>
     .formulario{
        display: flex;
        flex-direction: column;
    }
</style>