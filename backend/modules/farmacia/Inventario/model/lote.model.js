var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lote = new Schema({
    medicamento: { type: Schema.Types.ObjectId, ref: 'medicamento' },
    cxl: { type: Number },
    Fecha: { type: Date }
}, {
    versionKey: false
});

var model = mongoose.model('lote', lote);
module.exports = model;