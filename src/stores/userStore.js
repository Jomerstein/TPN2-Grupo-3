import { defineStore } from 'pinia';

export const useAuthStore = defineStore('userStore', {
    state: () => ({
        isAuthenticated: false,
        user: null,
        isAdmin: false
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
           try{
            const user = await this.traerUsuario(mail, password)
            
            if(user != null){
            this.isAuthenticated = true;
            this.isAdmin = user.isAdmin;
            this.user = user
            localStorage.setItem('isAuthenticated','true')
            localStorage.setItem('isAdmin', user.isAdmin ? 'true' : 'false')
            localStorage.setItem('user', JSON.stringify(user))
        } else {
            
            alert('Usuario no válido')

        } 
           } catch(error){
            console.log(error);
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
        logout(){
            this.isAuthenticated = false;
            this.user = null;
            this.isAdmin = false;
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('isAdmin')
        },
        checkAuth(){
            this.isAuthenticated = localStorage.getItem('isAuthenticated' === true);
            this.isAdmin = localStorage.getItem('isAdmin') === 'true' ? true : false
            if(this.isAuthenticated){
                this.user = JSON.parse(localStorage.getItem('user'))
            }
        }

    }
})
