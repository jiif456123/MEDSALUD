var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var medicamento = new Schema({
    id: { type: String},
    codigo: { type: String},
    nombre: { type: String, required: true },
    disponibilidad: { type: Boolean },
    dosis: { type: String, required: true },
    presentacion: { type: String, required: true },
    precioUnitario: { type: String, required: true },
    marca: { type: String, required: true },
    categoria: { type: String, required: true }, //Schema.ObjectId, ref: 'categoria'
    ubicacion: { type: String, required: true },
    stockMin: { type: Number, required: true },
    stockMax: { type: Number, required: true },
    detalles: { type: String, required: true }
}, {
    versionKey: false
});

var model = mongoose.model('medicamento', medicamento);
module.exports = model;