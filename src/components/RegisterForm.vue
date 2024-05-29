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
import { useUserStore } from '@/stores/userStore'
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
            const userStore = useUserStore()
            const usuario = {
                name: this.name,
                surname:this.surname,
                email: this.email,
                password: this.password,
                isAdmin: false,
                idAuto: 0


            }
            await userStore.register(usuario)
            console.log(this.name);
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