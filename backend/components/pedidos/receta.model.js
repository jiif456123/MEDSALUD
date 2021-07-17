const { Schema, model } = require('mongoose');

const RecetaSchema = Schema({
    paciente: {
        nombre: {
            type: String
        },
        dni: {
            type: Number
        }
    },
    productos: {
        type: Array,
        codigo: { type: Number },
        producto: { type: Number },
        concentracion: { type: String },
        presentacion: { type: String },
        cantidad: { type: Number }
    }
}, {
    versionKey: false
});

module.exports = model('Receta', RecetaSchema)









// {
//     "datos":{
//         "nombre":"Adolfo Ruiz",
//         "dni": 18569457
//     },
//     "receta":[
//     {
//         "codigo": 12391,
//         "producto": "Amoxicilina",
//         "concentracion": "250 mg",
//         "presentacion": "tableta",
//         "cantidad":5
//     }
//         ]
// }



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// codigo: {
//     type: Object,
//     //required: true,
//     //unique: true,
// },
// producto: {
//     type: Object,
//     //required: [true, 'El nombre del producto es requerido'],
//     //unique: true,
// },
// concentracion: {
//     type: Object,
//     //required: [true, 'La concentracion del producto es requerida'],
// },
// presentacion: {
//     type: Object,
//     // required: [true, 'La presentacion del producto es requerida'],

// },
// cantidad: {
//     type: Object,
//     default: 1,
//     max: 1000,
//     //required: [true, 'La cantidad es necesaria'],
// },
// paciente: {
//     type: String,
//     //required: true,
// },
// dni: {
//     type: Number,
//     // required: true,
// }