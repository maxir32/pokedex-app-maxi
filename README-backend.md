# Backend - Pokédex con Gestión de Usuarios

Este backend está desarrollado con **Node.js**, **Express** y **MySQL**, y provee autenticación JWT, gestión de usuarios y soporte para frontend de una Pokédex.

---

## 🔧 Tecnologías Usadas

- Node.js
- Express
- MySQL + Sequelize ORM
- JWT (JSON Web Tokens)
- dotenv (variables de entorno)
- bcryptjs (hashing de contraseñas)
- cors (Cross-Origin Resource Sharing)

---

## 📁 Estructura del Proyecto

```
backend-pokedex/
│
├── inicio.js               # Archivo principal
├── database.js            # Configuración de Sequelize
├── models/
│   └── Usuario.js         # Modelo Sequelize
├── routes/
│   └── usuariosRoutes.js  # Rutas del CRUD y login
├── middleware/
│   └── authMiddleware.js  # Verificación de token
├── .env                   # Variables de entorno
└── package.json           # Dependencias
```

---

## 📌 Endpoints Disponibles

### 🔐 Autenticación

`POST /api/usuariosRoutes/login`  
- **Body JSON:** `{ "email": "...", "password": "..." }`
- **Response:** `{ token, usuario }`

---

### 👥 Gestión de Usuarios (solo admin con token válido)

`GET /api/usuariosRoutes`  
`POST /api/usuariosRoutes`  
`PUT /api/usuariosRoutes/:id`  
`DELETE /api/usuariosRoutes/:id`

> Todas las rutas protegidas requieren header `Authorization: Bearer <token>`

---

## 📦 Instalación y Ejecución

1. Clonar el repositorio o descargar el ZIP.
2. Crear un archivo `.env` con los siguientes datos:

```env
DB_HOST=localhost
DB_NAME=nombre_de_tu_base
DB_USER=root
DB_PASS=tu_contraseña
JWT_SECRET=clave_secreta_para_tokens
```

3. Instalar dependencias:

```bash
npm install
```

4. Iniciar el servidor:

```bash
npm start
```

---

## 🧪 Pruebas con Postman

- Podés crear un usuario directamente desde Postman con `POST /api/usuariosRoutes`
- Luego loguearte con `POST /api/usuariosRoutes/login`
- Usar el token devuelto para acceder al resto de los endpoints

---

## 📚 Base de Datos

```sql
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    rol ENUM('admin', 'editor', 'viewer') DEFAULT 'viewer',
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

**Desarrollado por Maxi 🧑‍💻 como parte de un desafío técnico.**
