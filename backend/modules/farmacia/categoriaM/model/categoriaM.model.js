var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categoriaM = new Schema({

    nombre: { type: String },
    descripcion: { type: String },
    estado: { type: Number }
}, {
    versionKey: false
});

var model = mongoose.model('CategoriaM', categoriaM);
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