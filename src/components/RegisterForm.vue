<template>
    <div>
        <form @submit.prevent="register"class="formulario" action="">
            <label>Nombre</label>
            <input required v-model="name" type="text" name="name" id="nombre">
            <label>Apellido</label>
            <input required v-model="surname" type="text" name="surname" id="apellido">
            <label for="">Correo</label>
            <input required v-model="email" type="email" name="email" id="email">
            <label>Contraseña</label>
            <input required v-model="password" type="password" name="password" id="pasword">
          
            <button>Registrarse</button>
        </form>
    </div>
</template>
<script>
import { useAuthStore } from '@/stores/userStore'
export default {
    data(){
        return{
            name: '',
            surname: '',
            email: '',
            password: ''
        }
    },methods:{
        async register(){
            const userStore = useAuthStore()
            const usuario = {
                name: this.name,
                surname:this.surname,
                email: this.email,
                password: this.password,
                isAdmin: false,
                idAuto: 0


            }
            try{

            
            await userStore.register(usuario)
            await userStore.login(usuario.email, usuario.password)
            if (userStore.isAuthenticated) {
                
                this.$router.push({ name: 'Home' })
            }
            }catch(e){
                alert(e)
            }
        }
    }
}
</script>
<style>
      .formulario{
        display: flex;
        flex-direction: column;
    }
</style>