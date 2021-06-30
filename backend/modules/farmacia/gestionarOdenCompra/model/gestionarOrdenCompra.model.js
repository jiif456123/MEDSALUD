/**
 * Mongoose
 Mongoose le permite definir objetos con un esquema fuertemente tipado que se asigna a un documento MongoDB.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ordenCompraSchema = new Schema({ //Creamos el esquema estructura de datos de la BD

    codigo: { type: Number },
    proveedor: { type: String },
    fecha: { type: String },
    formaPago: { type: String },
    estado: { type: String },
    totalD: { type: Number }


}, {
    versionKey: false //Cuando creamos un objeto no agregue un gion campo sub guion sub guion
});

var model = mongoose.model('OrdenCompraN', ordenCompraSchema);

module.exports = model;