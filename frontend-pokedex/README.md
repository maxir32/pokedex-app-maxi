# Pokédex Web con Autenticación y Gestión de Usuarios

Este es un proyecto web que combina autenticación de usuarios con una Pokédex interactiva y gestión de usuarios (solo para administradores).

## 🧩 Tecnologías Utilizadas

- HTML5
- JavaScript (vanilla)
- CSS3
- API pública de Pokémon: [https://pokeapi.co](https://pokeapi.co)

## 🔐 Funcionalidades

### 1. Autenticación de Usuarios
- Inicio de sesión con email y contraseña (validados contra un backend con JWT).
- Redirección automática si no estás logueado.
- Permite cerrar sesión.

### 2. Gestión de Usuarios (solo para admin)
- Listado de usuarios desde el backend.
- Visible solo si el usuario autenticado tiene rol `admin`.

### 3. Pokédex
- Muestra los primeros 20 Pokémon usando la PokéAPI.
- Incluye nombre, imagen, tipo(s) y habilidades.

## 📁 Estructura del Proyecto

```
frontend-pokedex/
│
├── inicio.html
├── login.html
├── css/
│   └── estilos.css
├── js/
│   ├── login.js
│   ├── autenticador.js
│   ├── pokedex.js
│   └── crudUsuarios.js
```

## 🚀 Cómo Ejecutarlo

1. Asegurate de tener corriendo el backend en `http://localhost:3000` (ver instrucciones del backend).
2. Descomprimí este ZIP en una carpeta.
3. Abrí el archivo `login.html` directamente desde tu navegador.
4. Iniciá sesión con un usuario válido.
5. Si sos admin, verás la sección de gestión de usuarios.
6. Explorá la Pokédex.

## 📦 Requisitos del Backend

- Node.js + Express
- Base de datos MySQL con tabla `usuarios`
- JWT para autenticación
- CORS habilitado para permitir conexión desde el frontend

---

**Desarrollado por Maxi 🧑‍💻 para un desafío técnico.**
