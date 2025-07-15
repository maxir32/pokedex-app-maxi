const express = require('express');
const router = express.Router();
const { registrarUsuario, login, obtenerUsuarios } = require('../controllers/usuarioControlador');
const { verificarToken, soloAdmin } = require('../middlewares/authMiddleware');

router.post('/registro', registrarUsuario);
router.post('/login', login);
router.get('/', verificarToken, soloAdmin, obtenerUsuarios);

module.exports = router;
