/**
 * Mongoose
 Mongoose le permite definir objetos con un esquema fuertemente tipado que se asigna a un documento MongoDB.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categoriaSchema = new Schema({ //Creamos el esquema estructura de datos de la BD

    nombre: { type: String },
    descripcion: { type: String },
    estado: { type: Number }
}, {
    versionKey: false //Cuando creamos un objeto no agregue un gion campo sub guion sub guion
});

var model = mongoose.model('GestionarCategorias', categoriaSchema);
module.exports = model;