<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-brand">
        <a href="#">RentalCar ORT</a>
      </div>
      <div class="navbar-menu">

        <!--<router-link to="/CarDetail">Detalle Auto</router-link>-->
        <!--<router-link to="/CrearAuto">Agregar Auto</router-link>-->
        <!-- acá también poner o sacar según sea admin o no -->
        <router-link to="/Home"class="navbar-button" >Home</router-link>
        <router-link to="/CrearAuto"class="navbar-button"  v-if=" esAdmin ">Agregar Auto</router-link>
        <router-link to="/CarPanel" class="navbar-button" v-if=" esAdmin ">Gestionar Autos</router-link>
        <router-link to="/Login" class="navbar-button" v-if="!estaLogeado">Login</router-link>
        <router-link to="/Perfil" class="navbar-button" v-if="estaLogeado">Perfil</router-link>
        <button @click="logout" v-if="estaLogeado" class="navbar-button">Logout</button>

      </div>
      
    </div>
  
  </nav>
</template>
  
  <script>
  import { useAuthStore } from '@/stores/userStore';

  export default {
    data() {
      return {
        isActive: false,
        isAdmin: true,
        store: useAuthStore()
      };
    },
    methods: {
      toggleMenu() {
        this.isActive = !this.isActive;
      },
      logout() {
        this.store.logout()
        this.$router.push("Login")
      }, 
    },
    computed: {
      esAdmin() {
        return this.store.isAdmin
      },
      estaLogeado(){
        return this.store.isAuthenticated
      }
    },
    mounted(){
      this.store.checkAuth()
    }
  };
  </script>
  
  <style scoped>
  .navbar-button {
  background-color: #880e0e; /* Color de fondo del botón */
  color: #ffffff; /* Color del texto */
  border: none; /* Sin borde */
  padding: 8px 16px; /* Padding interno */
  border-radius: 5px; /* Bordes redondeados */
  cursor: pointer; /* Cursor de tipo puntero */
  transition: background-color 0.3s ease, color 0.3s ease; /* Transición suave de color */
}

.navbar-button:hover {
  background-color: #880e0e; /* Color de fondo al pasar el mouse */
}
.navbar {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #963e3e;
  color: rgb(59, 59, 59);
  
  padding: 10px 0;
  font-family: Arial, sans-serif;
  z-index: 1000;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  width: 100%;
}

.navbar-brand {
  flex-shrink: 0;
}

.navbar-brand a {
  color: rgb(0, 0, 0);
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
}

.navbar-menu {
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  gap: 20px;
}

.navbar-menu a {
  color: rgb(0, 0, 0);
  text-decoration: none;
  font-size: 16px;
  white-space: nowrap;
}

.navbar-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.navbar-toggle span {
  width: 25px;
  height: 3px;
  background-color: white;
}

.navbar-dropdown {
  display: none;
  flex-direction: column;
  gap: 10px;
  background-color: #333;
  padding: 10px 20px;
}

.navbar-dropdown a {
  color: white;
  text-decoration: none;
  font-size: 16px;
}

.navbar-dropdown.is-active {
  display: flex;
}

@media (max-width: 768px) {
  .navbar-menu {
    display: none;
  }

  .navbar-toggle {
    display: flex;
  }
}
</style>