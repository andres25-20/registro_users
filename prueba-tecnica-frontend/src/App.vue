<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link to="/" class="navbar-brand">Prueba Técnica - Sistema de Información</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link"> <i class="bi bi-box-arrow-in-right"></i> Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/users" class="nav-link"><i class="bi bi-person-lines-fill"></i> Users</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container mt-4 bg-imagen">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html,body{
  background-image: url('../public/fond.jpg');
  background-size: cover;
height: 100vh;
}
</style>