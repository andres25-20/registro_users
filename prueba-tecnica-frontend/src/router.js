import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/UserLogin.vue'; 
import Users from './components/UserList.vue';

// Crea el router
const router = createRouter({
  history: createWebHistory(), 
  routes: [
    { path: '/', component: Login }, 
    { path: '/users', component: Users },
    { path: '/add-user', component: () => import('./components/AddUser.vue'), },
    { path: '/edit-user/:id', component: () => import('./components/EditUser.vue'), },
    
  ],
});

export default router; 