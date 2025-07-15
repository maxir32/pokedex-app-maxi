const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
    nombre: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    rol: { type: DataTypes.ENUM('admin', 'editor', 'viewer'), defaultValue: 'viewer' }
}, {
    timestamps: true,
    createdAt: 'creado_en',
    updatedAt: false
});

module.exports = Usuario;
