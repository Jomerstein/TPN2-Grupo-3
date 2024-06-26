<template>
    <div class="no-access">
      <h2>No puedes acceder a esta página</h2>
      <p>Esta página requiere permisos de administrador.</p>
      <router-link :to="{ name: 'Home' }">Volver al inicio</router-link>
    </div>
  </template>
<script>
export default {
  name: 'NoAccess'
};
</script>
<style scoped>
.no-access {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
}

.no-access h2 {
  font-size: 2em;
  color: #ff5733;
}

.no-access p {
  font-size: 1.2em;
  color: #666;
  margin-bottom: 20px;
}

.no-access router-link {
  font-size: 1.1em;
  color: #61081b;
  text-decoration: underline;
}
</style>