var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movimientoMedicamento = new Schema({
    id:{type: String},
    tipoMovimiento:{type: String},
    fecha:{type: Date},
    motivo:{type: String},
    idMedicamento: [{
        id: {
            type: mongoose.Schema.ObjectId,
            ref: 'Medicamento'
        }
    }]

}, {
    versionKey: false
});

var model = mongoose.model('movimientoMedicamento', movimientoMedicamento);
module.exports = model;