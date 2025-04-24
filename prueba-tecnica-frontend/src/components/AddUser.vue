<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Crear Usuario</h3>
        </div>
        <div class="card-body">
          <div v-if="alertMessage" :class="`alert alert-${alertType} alert-dismissible fade show`" role="alert">
            {{ alertMessage }}
            <button type="button" class="btn-close" @click="alertMessage = ''" aria-label="Close"></button>
          </div>

          <form @submit.prevent="addUser">
            <div class="mb-3">
              <label for="nombre_completo" class="form-label"><i class="bi bi-person-badge-fill"></i> Nombre</label>
              <input
                v-model="user.nombre_completo"
                type="text"
                class="form-control"
                id="nombre_completo"
                placeholder="Digite Nombre Completo"
                required
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label"><i class="bi bi-envelope-at-fill"> </i> Email</label>
              <input
                v-model="user.email"
                type="email"
                class="form-control"
                id="email"
                placeholder="Digite email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label"><i class="bi bi-key-fill"></i> Password</label>
              <input
                v-model="user.password"
                type="password"
                class="form-control"
                id="password"
                placeholder="Digite password"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary"> <i class="bi bi-plus-circle-fill"></i> Crear Usuario</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../api';

export default {
  data() {
    return {
      user: {
        nombre_completo: '',
        email: '',
        password: '',
      },
      alertMessage: '', 
      alertType: '',   
    };
  },
  methods: {
    async addUser() {
      try {
        await api.addUser(this.user);
        this.showAlert('Usuario creado correctamente', 'success');

        setTimeout(() => {
          this.$router.push('/users');
        }, 2000); 
      } catch (error) {
        this.showAlert('Error al crear el usuario', 'danger');
      }
    },
    showAlert(message, type) {
      this.alertMessage = message;
      this.alertType = type;
     
      setTimeout(() => {
        this.alertMessage = '';
      }, 5000);
    }
  },
};
</script>

<style scoped>
.card {
  margin-top: 50px;
}
</style>
