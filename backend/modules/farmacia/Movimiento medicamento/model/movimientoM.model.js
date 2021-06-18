var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movimientoMedicamento = new Schema({
    id:{type: String},
    tipo:{type: String},
    fecha:{type: Date},
    motivo:{type: String},
    Medicamento: { type: Schema.Types.ObjectId, ref: 'Medicamento' },

}, {
    versionKey: false
});

var model = mongoose.model('movimientoMedicamento', movimientoMedicamento);
module.exports = model;