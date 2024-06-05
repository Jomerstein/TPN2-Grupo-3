import { defineStore } from 'pinia';
import axios from 'axios';

export const useCarStore = defineStore('carStore', {
    state: () => ({
        cars: []
        
    }),
    getters: {
       
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
        async agregarAuto(nuevoAuto) {
            try {
                const response = await axios.post('https://6657b24c5c36170526459cda.mockapi.io/rental/cars', nuevoAuto)
             } catch (error) {
                console.error('Error agregando auto')
            }
        },
        async eliminarAuto(autoParaEliminar) {
            try {
                const response = await axios.post('https://6657b24c5c36170526459cda.mockapi.io/rental/cars', autoParaEliminar)
             } catch (error) {
                console.error('Error agregando auto')
            }
        },
        async modificarAuto(autoParaModificar) {
            try {
                const response = await axios.post('https://6657b24c5c36170526459cda.mockapi.io/rental/cars', autoParaModificar)
             } catch (error) {
                console.error('Error agregando auto')
            }
        }
  
    }
})