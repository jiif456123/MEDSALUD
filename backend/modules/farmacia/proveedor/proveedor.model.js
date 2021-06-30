  const mongoose = require('mongoose');
  var Schema = new mongoose.Schema({
      nombre: String,
      contacto: String,
      email: String,
      estado: String,
      telefono: Number,
      laboratorio: String,
  }, {
      versionKey: false
  });

  const proveedor = mongoose.model('Proveedor', Schema);
  module.exports = proveedor;