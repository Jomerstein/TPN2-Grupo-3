import { defineStore } from 'pinia';

export const useAuthStore = defineStore('userStore', {
    state: () => ({
        isAuthenticated: false, 
        user: null,
    }),
    actions: {
        async register(usuario){
            
            try{
                console.log(usuario);
                const respuesta = await fetch('https://6657b24c5c36170526459cda.mockapi.io/rental/users', {
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
        },

        login(mail, password){
            if(mail == "admin@gmail.com" && password == "admin"){
                this.isAuthenticated = true;
                this.user = { username }
                localStorage.setItem('isAuthenticated', 'true');
              }else{
                alert('Usuario no válido')
              } 
        }

    }
})