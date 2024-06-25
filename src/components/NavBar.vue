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
        <router-link to="/Home">Home</router-link>
        <router-link to="/CrearAuto" v-if=" esAdmin ">Agregar Auto</router-link>
        <router-link to="/CarPanel" v-if=" esAdmin ">Gestionar Autos</router-link>
        <router-link to="/Login" v-if="!estaLogeado">Login</router-link>
        <router-link to="/Perfil" v-if="estaLogeado">Perfil</router-link>
        <button @click="logout" v-if="estaLogeado"type="button">Logout</button>

      </div>
      <div class="navbar-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-dropdown" :class="{ 'is-active': isActive }">
      <a href="#" @click="toggleMenu">Inicio</a>
      <a href="#" @click="toggleMenu">Sobre Nosotros</a>
      <a href="#" @click="toggleMenu">Servicios</a>
      <a href="#" @click="toggleMenu">Contacto</a>
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