var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var equiposMedicosSchema = new Schema({
    nombre: { type: String },
    fabricante: { type: String },
    especialidad: { type: String },
    caracteristicas: { type: String },
    cantidad: { type: Number },
    disponible: { type: Number },
    noDisponible: { type: Number }
}, {
    versionKey: false
});
var model = mongoose.model('EquiposMedicos', equiposMedicosSchema);
module.exports = model;