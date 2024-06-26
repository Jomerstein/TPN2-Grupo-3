import { defineStore } from 'pinia';
import axios from 'axios';

export const useCarStore = defineStore('carStore', {
    state: () => ({
        cars: []
        
    }),
    getters: {
       estaAlquilado: (state) => (auto) =>{
        return auto.rentedBy !== `rentedBy ${auto.id}`
       }
    },
    actions: {
        async fetchAutos(){
            if( this.cars.length === 0) {
                try {
                    const response = await axios.get('https://6657b24c5c36170526459cda.mockapi.io/rental/cars')
                    this.cars = response.data;
                    
                } catch (error) {
                    console.error('El error es: ', error)
                }
            }
         },
         async fetchUnAuto(id){
            try {
                const response = await axios.get(`https://6657b24c5c36170526459cda.mockapi.io/rental/cars/${id}`);
                return response // Asignamos los datos recibidos a `this.car`
            } catch (error) {
                console.error('Error al obtener el auto:', error);
            }
         },
        async agregarAuto(nuevoAuto) {
            try {
                const response = await axios.post('https://6657b24c5c36170526459cda.mockapi.io/rental/cars', nuevoAuto)
             } catch (error) {
                console.error('Error agregando auto')
            }
        },
        async alquilar(idPerfil, idAuto,rentedUntil){
            
                const autoDb = await this.fetchUnAuto(idAuto)
                const auto = autoDb.data
                if(auto.rentedBy !== `rentedBy ${idAuto}` ){
                    throw new Error("Auto ya alquilado")
                }
                auto.rentedBy = idPerfil
                auto.rentedUntil = rentedUntil
                console.log(idPerfil);
                await axios.put(`https://6657b24c5c36170526459cda.mockapi.io/rental/cars/${idAuto}`, auto)
                let index = this.cars.findIndex(car => car.id ==idAuto)
                if(index != -1){
                    this.cars[index] = auto
                }
            
        },
        async updateCar(car) {
            try {
              await axios.put(`https://6657b24c5c36170526459cda.mockapi.io/rental/cars/${car.id}`, car);
            } catch (error) {
              console.error('Error updating car:', error);
              throw error;
            }
        },
        async deleteCar(car) {
            try {
                this.cars = this.cars.filter(c => c.id !== car.id);
              await axios.delete(`https://6657b24c5c36170526459cda.mockapi.io/rental/cars/${car.id}`);
              
            } catch (error) {
              console.error('Error deleting car:', error);
              throw error;
            }
          },
          
          async cancelRent(cars){
            cars.rentedBy = `rentedBy ${cars.id}`
            cars.rentedUntil = null

          
                try {
                    await axios.put(`https://6657b24c5c36170526459cda.mockapi.io/rental/cars/${cars.id}`, cars);
                  } catch (error) {
                    console.error('Error cancelando la renta:', error);
                    throw error;
                  }
            
        

          }
    }
})