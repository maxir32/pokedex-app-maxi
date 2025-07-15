const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registrarUsuario = async (req, res) => {
    const { nombre, email, password, rol } = req.body;
    try {
        const existe = await Usuario.findOne({ where: { email } });
        if (existe) return res.status(400).json({ mensaje: 'El email ya está registrado.' });
        const hash = await bcrypt.hash(password, 10);
        const nuevoUsuario = await Usuario.create({ nombre, email, password: hash, rol });
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const usuario = await Usuario.findOne({ where: { email } });
        if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado.' });
        const esValido = await bcrypt.compare(password, usuario.password);
        if (!esValido) return res.status(401).json({ mensaje: 'Contraseña incorrecta.' });
        const token = jwt.sign({ id: usuario.id, rol: usuario.rol }, process.env.JWT_SECRET, { expiresIn: '4h' });
        res.json({ token, usuario: { id: usuario.id, nombre: usuario.nombre, rol: usuario.rol } });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { registrarUsuario, login, obtenerUsuarios };
