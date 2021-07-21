var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*
    Paciente Model
*/
var paciente = new Schema({

    nombre: { type: String },
    apellidoPaterno: { type: String },
    apellidoMaterno: { type: String },
    dni: { type: String },
    celular: { type: String },
    email: { type: String },
    fechaNaciemineto: { type: Date },
    direccion: { type: String },
    estado: { type: Number },
    nombreFamiliar: { type: String },
    dniFamiliar: { type: String },
    parentesco: { type: String },
    celularFamiliar: { type: String },
}, {
    versionKey: false
});

var modelPaciente = mongoose.model('Paciente', paciente);

/*
    Evento Model
*/
// var evento = new Schema({

//     titulo: { type: String },
//     descripcion: { type: String },
//     fechaInicio: { type: Date },
//     fechaFin: { type: Date },
//     celular: { type: String },

// }, {
//     versionKey: false
// });

// var modelEvento = mongoose.model('Evento', evento);

/*
    Espcialidad Model
   
*/
var especial = new Schema({
    descripcion: { type: String },
    doctor: { type: String },
    estado: { type: String },
    fechaHora: { type: Date },
    fechaFin: { type: Date },
}, {
    versionKey: false
});
var modelEspecialidad = mongoose.model('Especial', especial);


/*
    Motivo Model
*/
var motivo = new Schema({
    descripcion: { type: String },
    precio: { type: Number }
}, {
    versionKey: false
});

var modelMotivo = mongoose.model('Motivo', motivo);

/*
    Servicio Model
*/
var servicio = new Schema({
    titulo: { type: String },
    descripcion: { type: String },
    imagen: { type: String },
}, {
    versionKey: false
});

var modelServicio = mongoose.model('Servicio', servicio);
/*
    Caja Model
*/
var caja = new Schema({
    abierto: { type: Number } //1 abierto 0 cerrado
}, {
    versionKey: false
});

var modelCaja = mongoose.model('Caja', caja);

/*
    Movimiento Model
*/
var movimientoCaja = new Schema({
    paciente: { type: Schema.Types.ObjectId, ref: 'Paciente' },
    motivo: { type: Schema.Types.ObjectId, ref: 'Motivo' },
    precio: { type: Number },
    montoRecibido: { type: Number },
    fechaHora: { type: Date },
}, {
    versionKey: false
});
var modelMovimiento = mongoose.model('MovimientoCaja', movimientoCaja);
/*
    Historia Clinica
*/
var historia = new Schema({

    medico: { type: String },
    paciente: { type: Schema.Types.ObjectId, ref: 'Paciente' },
    especialidad: { type: String },
    fecha: { type: Date },
    peso: { type: Number },
    altura: { type: Number },
    tension: { type: Number },
    alergias: { type: String },
    antecedentes: { type: String },
    historia: { type: String },
    diagnostico: { type: String },
}, {
    versionKey: false
});

var modelHistoria = mongoose.model('Historia', historia);

/*
    Cita Model
*/
var cita = new Schema({
    paciente: { type: Schema.Types.ObjectId, ref: 'Paciente' },
    motivo: { type: Schema.Types.ObjectId, ref: 'Motivo' },
    doctor: { type: String },
    especialidad: { type: String },
    fechaHora: { type: Date },
    estado: { type: Number }
}, {
    versionKey: false
});
var modelCita = mongoose.model('Cita', cita);

/*
    Evento Model
 */
var evento = new Schema({
    titulo: { type: String },
    descripcion: { type: String },
    fechaInicio: { type: String },
    fechaFin: { type: String },
    horaInicio: { type: String },
    horaFin: { type: String },
}, {
    versionKey: false
});
var modelEvento = mongoose.model('Evento', evento);

/*
    Servicio Model
*/
// var servicio = new Schema({
//     titulo: { type: String },
//     descripcion: { type: String },
//     imagen: { type: String },
//     horaInicio: { type: String },
//     horaFin: { type: String },
// }, {
//     versionKey: false
// });
// var modelServicio = mongoose.model('Servicio', servicio);

//User

var user = new Schema({

    nombre: { type: String },
    rol: { type: String },
    fechaActual: { type: Date },
    apellidoPaterno: { type: String },
    apellidoMaterno: { type: String },
    dni: { type: String },
    celular: { type: Number },
    email: { type: String },
    fechaNacimiento: { type: Date },
    direccion: { type: String },
    especialidad: { type: String },
    contra: { type: String },
    user: { type: String }
}, {
    versionKey: false
});

var modelUser = mongoose.model('User', user);

var recetaMedica = new Schema({
    paciente: { type: Schema.Types.ObjectId, ref: 'Paciente' },
    indicacion: { type: String },
    medicina: [{
        nombre: { type: String },
        forma: { type: String },
        duracion: { type: String },
        cantidad: { type: Number },
        dosis: { type: String },
        indicacion: { type: String },
    }],
    fecha: { type: Date },
}, {
    versionKey: false
});
var modelRecetaMedica = mongoose.model('RecetaMedica', recetaMedica);

var detalleRecetaMedica = new Schema({
    recetaMedica: { type: Schema.Types.ObjectId, ref: 'RecetaMedica' },
    forma: { type: String },
    duracion: { type: String },
    cantidad: { type: Number },
    dosis: { type: String },
    indicacion: { type: String },
}, {
    versionKey: false
});
var modelDetalleRecetaMedica = mongoose.model('DetalleRecetaMedica', detalleRecetaMedica);

module.exports = {
    modelPaciente: modelPaciente,
    modelEspecialidad: modelEspecialidad,
    modelMotivo: modelMotivo,
    modelCaja: modelCaja,
    modelMovimiento: modelMovimiento,
    modelHistoria: modelHistoria,
    modelCita: modelCita,
    modelEvento: modelEvento,
    modelServicio:modelServicio,
    modelUser: modelUser,
    modelRecetaMedica: modelRecetaMedica,
    modelDetalleRecetaMedica: modelDetalleRecetaMedica,
    //modelEvento: modelEvento,
   // modelServicio: modelServicio
}