const { Schema, model } = require('mongoose');


var pedido = Schema({
    codigoPedido: { type: String },
    nombre: { type: String },
    dni: { type: Number },
    medicamentos: { type: Array, },
    fecha: { type: Date, default: Date.now, },
    estado: { type: String, default: 'Solicitado' },
    //Subtotal: { type: Number },
    Total: { type: Number }
}, {
    versionKey: false
});

module.exports = model('pedido', pedido);