/**
 * Mongoose
 Mongoose le permite definir objetos con un esquema fuertemente tipado que se asigna a un documento MongoDB.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var medicamentoOCSchema = new Schema({ //Creamos el esquema estructura de datos de la BD
    codigo: { type: String },
    laboratorio: { type: String },
    categoria: { type: String },
    medicamento: { type: String },
    cantidad: { type: Number },
    precio: { type: Number },
    total: { type: Number },
    unidad: { type: String }

}, {
    versionKey: false //Cuando creamos un objeto no agregue un gion campo sub guion sub guion
});

var model = mongoose.model('MedicamentoOCN', medicamentoOCSchema);

module.exports = model;