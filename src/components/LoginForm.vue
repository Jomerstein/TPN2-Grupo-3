<template >
    <div>
        <form @submit.prevent="login" class="formulario" action="">
            <label for="">Correo</label>

            <input v-model="email" required type="email" name="nombre" id="nombre">

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
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            const useUserStore = useAuthStore();
            useUserStore.login(this.email, this.password);
            if (useUserStore.isAuthenticated) {
                
                this.$router.push({ name: 'Home' })
            }
            alert("Login OK, click en Home para ver los autos disponibles en alquiler")

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