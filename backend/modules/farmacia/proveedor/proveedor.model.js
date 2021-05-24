const mongoose = require('mongoose');
var Schema = new mongoose.Schema({
    nombre:  String ,
    email:String,
    estado: String,
    telefono:Number
}, {
    versionKey: false
});

const proveedor = mongoose.model('Proveedor',Schema);
module.exports = proveedor;