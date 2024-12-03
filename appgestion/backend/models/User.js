const mongoose = require('mongoose');

// Asegúrate de que estás usando la base de datos y la colección correcta.
const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  password: { type: String, required: true },
  rolName: { type: String},
}, { collection: 'tUsuario' });  // Asegúrate de que el nombre de la colección sea 'tUsuario'

// No necesitamos middleware para encriptar la contraseña si la almacenamos sin encriptar.

module.exports = mongoose.model('User', userSchema);
