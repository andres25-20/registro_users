import { createApp } from 'vue'; 
import App from './App.vue';
import router from './router';
import 'bootstrap'; // Importa los scripts de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css';// Importa los Icons de Bootstrap

createApp(App)
  .use(router) 
  .mount('#app'); 