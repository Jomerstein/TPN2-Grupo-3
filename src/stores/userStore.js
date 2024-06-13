import { defineStore } from 'pinia';

export const useAuthStore = defineStore('userStore', {
    state: () => ({
        isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')) || false,
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

        async login(mail, password) {
            const user = await this.traerUsuario(mail, password)

            if (user != null && user.email == "admin@gmail.com" && user.password == "admin") {
                this.isAuthenticated = true;
                 localStorage.setItem('isAuthenticated','true')
            } else if(await this.traerUsuario(mail, password) != null){
                this.isAuthenticated = true;
                localStorage.setItem('isAuthenticated','true')
            } else {
                 this.isAuthenticated == false
                alert('Usuario no válido')

            } 
              
        },


        async traerUsuario(mail, password) {
            const respuesta = await fetch('https://6657b24c5c36170526459cda.mockapi.io/rental/users')
            const data = await respuesta.json()
            let user = null
            let i = 0

            while (i < data.length && user == null) {
                if (data[i].email === mail && data[i].password === password) {
                    user = data[i]
                    console.log(user)
                } else {
                    i++
                    }
                    
            }
            
            return user

        },

        isAdmin(){
            return this.user.isAdmin
        },

        setFalse() {
            this.isAuthenticated = false;
           // localStorage.setItem('isAuthenticated','false')
        }

    }
})
