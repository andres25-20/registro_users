<template>
  <div>
    <router-link to="/add-user" class="btn btn-primary mb-3">
      <i class="bi bi-person-plus-fill"></i> Crear Usuario
    </router-link>

    <div v-if="alertMessage" :class="`alert alert-${alertType} alert-dismissible fade show`" role="alert">
      {{ alertMessage }}
      <button type="button" class="btn-close" @click="alertMessage = ''" aria-label="Close"></button>
    </div>

    <div>
      <div class="card bg-light text-black">
        <div class="card-body">
          <h2 class="text-center mb-4"> <i class="bi bi-person-vcard"></i> Registro de Usuarios</h2>
        </div>
      </div>

      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Nombre Completo</th>
            <th scope="col">Email</th>
            <th scope="col">Estado</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <th>{{ user.nombre_completo }}</th>
            <th>{{ user.email }}</th>
            <th>
              <span :class="user.activo ? 'badge bg-success' : 'badge bg-danger'">
                <i class="bi bi-person-gear"></i>
                {{ user.activo ? 'Activo' : 'Inactivo' }}
              </span>
            </th>
            <th>
              <router-link :to="`/edit-user/${user.id}`" class="btn btn-warning btn-sm me-2">
                <i class="bi bi-pencil-square"></i> Editar
              </router-link>
              <button @click="toggleUserStatus(user)" :class="user.activo ? 'btn btn-info btn-sm' : 'btn btn-success btn-sm me-2'">
                <i class="bi bi-arrow-down-up"></i>  
                {{ user.activo ? 'Inactivar' : 'Activar' }}
              </button>
              <button @click="deleteUser(user.id)" class="btn btn-danger btn-sm">
                <i class="bi bi-trash"></i> Eliminar
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import api from '../api';

export default {
  data() {
    return {
      users: [],
      alertMessage: '',  
      alertType: '',     
    };
  },
  async created() {
    this.users = (await api.getUsers()).data;
  },
  methods: {
    async toggleUserStatus(user) {
      try {
        await api.updateUser(user.id, { activo: !user.activo });

        user.activo = !user.activo;

        this.showAlert('Estado del usuario actualizado exitosamente!', 'success');
      } catch (error) {
        this.showAlert('Error al actualizar el estado del usuario', 'danger');
      }
    },
    async deleteUser(id) {
      if (confirm('¿Está seguro de que desea eliminar este usuario?')) {
        try {
          await api.deleteUser(id);
          this.users = this.users.filter((user) => user.id !== id);
          this.showAlert('Usuario eliminado con éxito!', 'success');
        } catch (error) {
          this.showAlert('Error al intentar eliminar el usuario', 'danger');
        }
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
.table {
  margin-top: 20px;
}
</style>
