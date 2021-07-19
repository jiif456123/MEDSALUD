var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var alerta = new Schema({
    titulo: { type: String },
    mensaje: { type: String },
    
}, {
    versionKey: false
});

var model = mongoose.model('alerta', alerta);
module.exports = model;