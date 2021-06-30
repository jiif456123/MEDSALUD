var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ejemplarEquipoMedicoSchema = new Schema({
    idEquipoMedico: { type: Schema.ObjectId, ref: 'EquiposMedicos' },
    ubicacion: { type: String },
    estado: { type: String },
    solicitante: { type: String },
    fechaEntrega: { type: String },
    fechaDevolucion: { type: String }

}, {
    versionKey: false
});

var model = mongoose.model('EjemplarEquipoMedico', ejemplarEquipoMedicoSchema);
module.exports = model;