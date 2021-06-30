var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var medicamento = new Schema({
<<<<<<< HEAD
    id: { type: String },
    codigo: { type: String },
=======
    id:{type: String},
    codigo:{type: String},
>>>>>>> 4121220a906438f6c9387faee3613f77afc6e3e6
    nombre: { type: String },
    disponibilidad: { type: Boolean },
    dosis: { type: String },
    presentacion: { type: String },
    precioUnitario: { type: String },
    marca: { type: String },
    categoria: { type: String }, //Schema.ObjectId, ref: 'categoria'
    ubicacion: { type: String },
    stockMin: { type: Number },
    stockMax: { type: Number },
    stockActual: { type: Number },
    detalles: { type: String }
}, {
    versionKey: false
});

var model = mongoose.model('medicamento', medicamento);
module.exports = model;