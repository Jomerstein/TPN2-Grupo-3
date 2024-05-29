<template >
    <div>
        <form class="formulario" action="">
            <label for="">Correo</label>
           
            <input required type="email" name="nombre" id="nombre">
           
            <label>Contraseña</label>
            
            <input required type="password" name="constasenia" id="constrasenia">
           
            <button>Ingresar</button>
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
     .formulario{
        display: flex;
        flex-direction: column;
    }
</style>