<template>
    <div class="car-gallery">
        <h1>Car Rental Gallery</h1>
            <div class="car-list">
                <div class="car-card" v-for="car in cars" :key="car.id">
                    <img :src="car.image" :alt="car.nombre" class="car-image"/>
                    <h2>{{ car.nombre }}</h2>
                    <p>Año: {{ car.ano }}</p>
                    <p>Marca: {{ car.marca }}</p>
                    <p class="price">Precio: {{ car.precio }}</p>
                    <button :disabled="car.idUser" @click="rentCar(car.id)">
                    {{ car.idUser !== 0 ? `Alquilado hasta ${car.alquiladoHasta}` : 'Rent Now' }}
                    </button>
                </div>
            </div>
    </div>
</template>

<script>
export default {
  name: 'CarGallery',
  data() {
    return {
      cars: [
        {
          id: 1,
          nombre: 'Toyota Camry',
          ano: 2020,
          marco: 'Toyota',
          idUser: 0,
          precio: '$50/day',
          alquiladoHasta: null,
          image: '/civic.jpeg'
        },
        {
          id: 2,
          nombre: 'Honda Accord',
          ano: 2019,
          marco: 'Honda',
          idUser: 1,
          precio: '$55/day',
          alquiladoHasta: '2024-06-15',
          image: '/civic.jpeg'
        },
        {
          id: 3,
          nombre: 'Tesla Model 3',
          ano: 2021,
          marco: 'Tesla',
          idUser: 0,
          precio: '$70/day',
          alquiladoHasta: null,
          image: '/civic.jpeg'
        },

        {
          id: 4,
          nombre: 'Tesla Model 3',
          ano: 2021,
          marco: 'Tesla',
          idUser: 0,
          precio: '$70/day',
          alquiladoHasta: null,
          image: '/civic.jpeg'
        },

        {
          id: 5,
          nombre: 'Tesla Model 3',
          ano: 2021,
          marco: 'Tesla',
          idUser: false,
          precio: '$70/day',
          alquiladoHasta: null,
          image: '/civic.jpeg'
        },

        {
          id: 6,
          nombre: 'Tesla Model 3',
          ano: 2021,
          marco: 'Tesla',
          idUser: false,
          precio: '$70/day',
          alquiladoHasta: null,
          image: '/civic.jpeg'
        },

        {
          id: 7,
          nombre: 'Tesla Model 3',
          ano: 2021,
          marco: 'Tesla',
          idUser: false,
          precio: '$70/day',
          alquiladoHasta: null,
          image: '/civic.jpeg'
        },

        {
          id: 8,
          nombre: 'Tesla Model 3',
          ano: 2021,
          marco: 'Tesla',
          idUser: false,
          precio: '$70/day',
          alquiladoHasta: null,
          image: '/civic.jpeg'
        },

        {
          id: 9,
          nombre: 'Tesla Model 3',
          ano: 2021,
          marco: 'Tesla',
          idUser: false,
          precio: '$70/day',
          alquiladoHasta: null,
          image: '/civic.jpeg'
        },
        // Add more cars here
      ]
    }
  },
  methods: {
    rentCar(carId) {
      const car = this.cars.find(c => c.id === carId);
      if (car) {
        car.idUser = 1; // TODO: set as IdUser
        car.alquiladoHasta = '2024-12-31';  // Example date, replace with actual logic
        alert(`Car ${car.Nombre} has been rented.`);
      }
    }
  }
}
</script>

<style scoped>
.car-gallery {
  width: 1200px;
  margin: 70px 0 auto;
  text-align: center;
  padding: 20px;
}

.car-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-content: center;
}

.car-card {
  background-color: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;
  text-align: left;
}

.car-card:hover {
  transform: translateY(-10px);
}

.car-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.car-details {
  padding: 15px;
}

.car-details h2 {
  font-size: 1.5em;
  margin: 10px 0;
}

.car-details p {
  margin: 5px 0;
  color: #666;
}

.price {
  font-size: 1.2em;
  color: #333;
}

button {
  display: block;
  width: 100%;
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1em;
  margin-top: 10px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #218838;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>