<template>
    <div>
        
        <h1>Agregar Auto</h1>
        <form @submit.prevent="crearAuto">
            <div>
                <label for="title">Nombre: </label>
                <input v-model="name" id="title" type="text" required/>
            </div>
            <div>
                <label for="description">Anio: </label>
                <input v-model="year" id="description" type="number" required></input>
            </div>
            <div>
                <label for="category">Marca: </label>
                <input v-model="brand" id="category" type="text" required/>
            </div>
            <div>
                <label for="price">Precio: </label>
                <input v-model="price" id="price" type="number" step="0.01" required/>
            </div>
            <div>
                <label for="image">Link de Imagen</label>
                <input v-model="imageLink" id="image" type="text" required/>
            </div>
            <button type="submit">Crear Auto</button>
        </form>
    </div>
</template>
<script>
import { useCarStore } from '../stores/carStore';
// ya funciona la creación de autos, hay que validar
export default {
    data(){
        return{
        
        }
    },
    methods:{
        crearAuto(){
            const carStore = useCarStore()

            const nuevoAuto = {
                name: this.name,
                year: this.year,
                brand: this.brand,
                price: this.price,
                rentedUntil: 0,
                imageLink: this.imageLink
            };

            carStore.agregarAuto(nuevoAuto);
            alert('Auto creado con exito')
            this.$router.push({ name: 'Home' })
        },
        limpiarFormulario() {
            this.name = '';
            this.year = null;
            this.brand = '';
            this.price = null;
            this.imageLink = '';
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