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
        async eliminarAuto(autoParaEliminar) {
            try {
                const response = await axios.post('https://6657b24c5c36170526459cda.mockapi.io/rental/cars', autoParaEliminar)
             } catch (error) { // Cambiar
                console.error('Error agregando auto')
            }
        },
        async modificarAuto(autoParaModificar) {
            try {
                const response = await axios.post('https://6657b24c5c36170526459cda.mockapi.io/rental/cars', autoParaModificar)
             } catch (error) { // Cambiar
                console.error('Error agregando auto')
            }
        },
        async alquilar(idPerfil, idAuto){
            
                const autoDb = await this.fetchUnAuto(idAuto)
                const auto = autoDb.data
                if(auto.rentedBy !== `rentedBy ${idAuto}` ){
                    throw new Error("Auto ya alquilado")
                }
                auto.rentedBy = idPerfil
                console.log(idPerfil);
                await axios.put(`https://6657b24c5c36170526459cda.mockapi.io/rental/cars/${idAuto}`, auto)
            
        }
  
    }
})