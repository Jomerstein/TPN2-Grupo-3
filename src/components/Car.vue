<template lang="">
     <img :src="car.image" :alt="car.id"/>
    <br></br>
    <div>
    <p>Nombre: {{ car.nombre }}</p>
    <p>Año: {{ car.ano }}</p>
    <p>Marca: {{ car.marco }}</p>
    <p>Precio: {{ car.precio }}</p>
    <p>Usuario: {{ car.idUser }}</p>
    <p>Alquilado hasta: {{ car.alquiladoHasta }}</p>
    </div>
</template>

<script>

export default {
  
    data() {
        return {
            car: 
            {
            id: 1,
            nombre: 'Toyota Camry',
            ano: 2020,
            marco: 'Toyota',
            idUser: 0,
            precio: '$50/day',
            alquiladoHasta: null,
            image: '/civic.jpeg'
            }
        }
    }
}

</script>

<style lang="">
    
</style>