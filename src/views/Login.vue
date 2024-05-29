<template>
    <div class="form-switch-container">
        <div class="form-container" style="background-color: white;">
            <component :is="currentForm" />
        </div>
        <div class="switch-container">
            <span v-if="currentForm === 'LoginForm'">No tenes cuenta? <a @click="cambiarForm">Registrate</a></span>
            <span v-else>Ya tenes cuenta? <a @click="cambiarForm">Inicia Sesion</a></span>
        </div>
    </div>
</template>
<script>
import LoginForm from '@/components/LoginForm.vue'
import RegisterForm from '@/components/RegisterForm.vue'

export default {
    components: {
        LoginForm,
        RegisterForm
    },
    data(){
        return{
            currentForm: 'LoginForm'
        }
    },
    methods:{
        cambiarForm(){
            this.currentForm = this.currentForm === 'LoginForm' ? 'RegisterForm' : 'LoginForm'
        },
}
}
</script>
<style >
    
</style>