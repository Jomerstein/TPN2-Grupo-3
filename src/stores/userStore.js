import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
    state: () => ({
        
    }),
    actions: {
        async register(usuario){
            
            try{
                console.log(usuario);
                const respuesta = await fetch('https://6657b24c5c36170526459cda.mockapi.io/rental/users/users', {
                    method: 'POST', // Método HTTP para crear un recurso
                    headers: {
                        'Content-Type': 'application/json' // Tipo de contenido que se envía
                    },
                    body: JSON.stringify(usuario)
                    
                  ,
            })
           
       

         
            }catch(error){
                console.log(error);
            }
        }
    }
})