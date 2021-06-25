const mongoose = require('mongoose');
var Schema = new mongoose.Schema({
    nombre:  String ,
    contacto: String,
    email:String,
    estado: String,
    laboratorio : String,
    telefono:String,
}, {
    versionKey: false
});

const proveedor = mongoose.model('Proveedor',Schema);
module.exports = proveedor;