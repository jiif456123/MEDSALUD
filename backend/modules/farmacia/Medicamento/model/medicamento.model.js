var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var medicamento = new Schema({
    id:{type: String},
    codigo:{type: String},
    nombre: { type: String },
    disponibilidad: { type: Boolean },
    dosis: { type: String },
    presentacion: { type: String },
    precioUnitario: { type: Number },
    marca: { type: String },
    categoria: { type: String },
    ubicacion: { type: String },
    stockMin: { type: Number },
    stockMax: { type: Number },
    stockActual: { type: Number },
    detalles: { type: String }
}, {
    versionKey: false
});

var model = mongoose.model('Medicamento', medicamento);
module.exports = model;