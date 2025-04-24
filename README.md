# registro_users
Se implementa un  sistema de información para registro de usuarios y validacion de ingreso de sesion


- **Backend**: PHP / Laravel
- **Frontend**: Vue.js
- **Base de datos**: MySQL

---

## Características del Sistema

- Registro de usuarios con:
  - Nombre completo
  - Correo electrónico
  - Fecha de creación
  - Contraseña cifrada
  - Estado activo/inactivo
- Inicio de sesión con validación de credenciales y estado activo
- Tabla con lista de usuarios y botón para activar/desactivar cada uno
- Estilizado con Bootstrap

---

## Instalar dependencias

- composer install
-Copia el archivo de configuración .env:
cp .env.example .env
Configura las variables de entorno editando el archivo .env con los valores de tu base de datos:
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=prueba_tecnica
DB_USERNAME=root
DB_PASSWORD=


## Genera la clave de la aplicación:

php artisan key:generate
- Ejecuta las migraciones y los seeders para crear las tablas en la base de datos:

php artisan migrate --seed
- Genera la clave JWT:

php artisan jwt:secret
- Inicia el servidor de desarrollo:

php artisan serve
- La API estará disponible en http://127.0.0.1:8000.