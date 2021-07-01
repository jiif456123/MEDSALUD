const { Schema, model } = require('mongoose');

const PedidoSchema = Schema({
    stockDisponible: {
        type: Number,
        required: true,
        max: [1000, 'Numero maximo permitido es 1000'],
    },
    precioUnitario: {
        type: Number,
        required: true,
    },
    importe: {
        type: Number,
        required: true,
    },
    estado: {
        type: Boolean,
        default: true,
    },
    fecha: {
        type: Date,
        default: Date.now,
    },
    receta: {
        type: Schema.Types.ObjectId,
        ref: 'Receta',
        //required: true,
    },
}, {
    versionKey: false
});

// PedidoSchema.methods.toJSON = function() {
//     const { estado, ...data } = this.toObject();
//     return data;
// }

module.exports = model('Pedido', PedidoSchema);



/*
 codigo: {
        type: Number,
        required: true,
        unique: true,
    },
    producto: {
        type: String,
        required: [true, 'El nombre del producto es requerido'],
        unique: true,
    },
    concentracion: {
        type: String,
        required: [true, 'La concentracion del producto es requerida'],
    },
    presentacion: {
        type: String,
        required: [true, 'La presentacion del producto es requerida'],
    },
    cantidad: {
        type: Number,
        default: 1,
        max: 1000,
        required: [true, 'La cantidad es necesaria'],
    },
    stockDisponible: {
        type: Number,
        required: true,
        maxlength: [1000, 'Stock muy largo, maximo 999']
    },
    precioUnitario: {
        type: Number,
        required: true,
    },
    importe: {
        type: Number,
        required: true,
    },
    estado: {
        type: Boolean,
        default: true,
    },
    dni: {
        type: Number,
        maxlength: [9, 'Stock muy largo, maximo 999']
    },
    fecha: {
        type: Date,
    }
*/