<template>
    <div>
        <h1>Crear Auto</h1>
        <form @submit.prevent="crearAuto">
            <div>
                <label for="title">Nombre: </label>
                <input v-model="nombre" id="title" type="text" required/>
            </div>
            <div>
                <label for="description">Anio: </label>
                <textarea v-model="ano" id="description" type="text" required></textarea>
            </div>
            <div>
                <label for="category">Marca: </label>
                <input v-model="marco" id="category" type="text" required/>
            </div>
            <div>
                <label for="price">Precio: </label>
                <input v-model="price" id="price" type="number" step="0.01" required/>
            </div>
            <div>
                <label for="image">Link de Imagen</label>
                <input v-model="image" id="image" type="text" required/>
            </div>
            <button type="submit">Crear Auto</button>
        </form>
    </div>
</template>
<script>
import { useCarStore } from '../stores/carStore';

export default {
    data(){
        return{
            nombre: "",
            ano: "",
            marco: "",
            price: "",
            image: ""
        }
    },
    methods:{
        crearAuto(){
            const carStore = useCarStore()

            const nuevoAuto = {
                id: carStore.cars.length + 1,
                nombre: this.nombre,
                ano: this.ano,
                marco: this.marco,
                price: this.price,
                image: this.image
            };

            carStore.agregarAuto(nuevoAuto);
            alert('Auto creado con exito')
            this.$router.push({ name: 'Home' })
        }
    }
}
</script>

<style>
    form {
        display: flex;
        flex-direction: column
    }
    
    div {
        margin-bottom: 1rem
    }

    label{
        font-weight: 'bold'
    }

    input, textarea {
        width: 100%;
        padding: 0.5rem;
        margin-top: 0.5rem;
    }
    
</style>