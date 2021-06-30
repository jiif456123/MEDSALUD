<<<<<<< HEAD
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
=======
const mongoose = require('mongoose');
var Schema = new mongoose.Schema({
    nombre:  String ,
    contacto: String,
    email:String,
    estado: String,
    telefono:Number,
    laboratorio:String,
}, {
    versionKey: false
});

const proveedor = mongoose.model('Proveedor',Schema);
module.exports = proveedor;
>>>>>>> 4121220a906438f6c9387faee3613f77afc6e3e6
