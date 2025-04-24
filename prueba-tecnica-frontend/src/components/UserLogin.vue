<template >
  <div class="h2 mb-0">
    <b-icon-arrow-up></b-icon-arrow-up>
    <b-icon-exclamation-triangle-fill></b-icon-exclamation-triangle-fill>
  </div>
  
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Login</h3><img v-bind:src=" '../assets/user.png'" alt="">
        </div>
        <div class="card-body">
          <form @submit.prevent="login">
            <div class="mb-3">
              <i class="bi bi-envelope"></i> <label for="email" class="form-label">Email</label>
              <input
                v-model="email"
                type="email"
                class="form-control"
                id="email"
                placeholder="Ingrese email"
                required
              />
            </div>
            <div class="mb-3">
              <i class="bi bi-key-fill"></i> <label for="password" class="form-label">Password</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="password"
                placeholder="Ingrese password"
                required
              />
            </div>
            <div class="alert alert-danger" role="alert" v-if="erroralert1">
              {{ errorMensaje }}
            </div>
            <button type="submit" class="btn btn-primary"><i class="bi bi-box-arrow-in-right"></i> Login</button>
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
      email: '',
      password: '',
      erroralert1: '',
      errorMensaje: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await api.login({
          email: this.email,
          password: this.password,
        });

        localStorage.setItem('token', response.data.token);
        this.$router.push('/users');
      } catch (error) {
        this.errorMensaje=error.response.data.error;
        this.erroralert1=true;
      }
    },
  },
};
</script>

<style scoped>
.card {
  margin-top: 50px;
}


</style>