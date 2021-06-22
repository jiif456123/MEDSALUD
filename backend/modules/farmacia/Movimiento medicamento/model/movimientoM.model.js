var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movimientoMedicamento = new Schema({
    id:{type: String},
    cantidad:{type: Number},
    tipo:{type: String},
    fecha:{type: Date},
    motivo:{type: String},
    Medicamento: { type: Schema.ObjectId, ref: "medicamento" },

}, {
    versionKey: false
});

var model = mongoose.model('movimientoMedicamento', movimientoMedicamento);
module.exports = model;