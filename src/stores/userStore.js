import { defineStore } from "pinia";
import axios from "axios";
import { useCarStore } from "./carStore";
import zxcvbn from 'zxcvbn'
export const useAuthStore = defineStore("userStore", {
  state: () => ({
    isAuthenticated: false,
    user: null,
    isAdmin: false,
  }),
  getters:{
    alquiloAuto: (state) =>(usuario) => {
      return usuario.idAuto != "0"
    }
  },
  actions: {
    async register(usuario) {
      const unicoemail = await this.isEmailUnique(usuario.email)
      console.log(true);
      try {
        
       
       
        if(unicoemail){
          if(zxcvbn(usuario.password).score <= 1 ){
            console.log(zxcvbn(usuario.password).score);
            throw new Error('Constraseña muy débil')
          }
        
        const respuesta = await fetch(
          "https://6657b24c5c36170526459cda.mockapi.io/rental/users",
          {
            method: "POST", // Método HTTP para crear un recurso
            headers: {
              "Content-Type": "application/json", // Tipo de contenido que se envía
            },
            body: JSON.stringify(usuario),
          }
        )
      }else{
        throw new Error('Email ya en uso')
      }
        
      } catch (error) {
        console.log(error);
      }
    },
    async isEmailUnique(email) {
      try {
        const response = await axios.get("https://6657b24c5c36170526459cda.mockapi.io/rental/users");
        const users = response.data;
    
        // Verificar si el email ya existe en la lista de usuarios
        for (let i = 0; i < users.length; i++) {
          if (users[i].email === email) {
            console.log(`Email ${email} already exists.`);
            return false;
          }
        }
    
        console.log(`Email ${email} is unique.`);
        return true;
      } catch (error) {
        console.error('Error fetching users:', error);
        return false;
      }
    },

    async login(mail, password) {
      try {
        const user = await this.traerUsuario(mail, password);

        if (user != null) {
          this.isAuthenticated = true;
          this.isAdmin = user.isAdmin;
          this.user = user;
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem("isAdmin", user.isAdmin ? "true" : "false");
          localStorage.setItem("user", JSON.stringify(user));
          console.log(user);
        } else {
          alert("Usuario no válido");
        }
      } catch (error) {
        console.log(error);
      }
    },

    async traerUsuario(mail, password) {
      const respuesta = await fetch(
        "https://6657b24c5c36170526459cda.mockapi.io/rental/users"
      );
      const data = await respuesta.json();
      let user = null;
      let i = 0;

      while (i < data.length && user == null) {
        if (data[i].email === mail && data[i].password === password) {
          user = data[i];
          console.log(user);
        } else {
          i++;
        }
      }

      return user;
    },
    logout() {
      this.isAuthenticated = false;
      this.user = null;
      this.isAdmin = false;
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("user")
    },
    checkAuth() {
      this.isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
      this.isAdmin = localStorage.getItem("isAdmin") === "true" ? true : false;
      console.log(localStorage.getItem("user"));
      if (this.isAuthenticated) {
        
        this.user = JSON.parse(localStorage.getItem("user"));
      }
    },
    async alquilar(usuario, idAuto) {
        
      if (this.alquiloAuto(usuario)) {   
        throw new Error("El usuario ya alquilo un auto");
      }
      usuario.idAuto = idAuto;
      await axios.put(
        `https://6657b24c5c36170526459cda.mockapi.io/rental/users/${usuario.id}`,
        usuario
      );
      localStorage.setItem('user', JSON.stringify(usuario))
      console.log(`El id del usuario es ${usuario.id}`);
    },
    async cancelRent(car){
      console.log('Aqui dentro ',car.rentedBy);
      const response = await axios.get( `https://6657b24c5c36170526459cda.mockapi.io/rental/users/${car.rentedBy}`)
      const usuario = response.data
      usuario.idAuto = '0'
      try{
        await axios.put(
          `https://6657b24c5c36170526459cda.mockapi.io/rental/users/${usuario.id}`,
         usuario
        )
        localStorage.setItem('user', JSON.stringify(usuario))
        this.user = usuario
      }catch(e){
        throw new Error('Error cancelando la renta: usuario', e)
      }
    }
  },
  
});
