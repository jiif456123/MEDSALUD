var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categoriaSchema = new Schema({

    nombre: { type: String },
    descripcion: { type: String },
    estado: { type: Number }
}, {
    versionKey: false
});

var model = mongoose.model('GestionarCategorias', categoriaSchema);
module.exports = model;

/*
const mongoose = require('mongoose');
var Schema = new mongoose.Schema({
    nombre:  String ,
    email:String,
    estado: String,
    telefono:Number
}, {
    versionKey: false
});*/