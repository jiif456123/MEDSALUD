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
    estado: { type: Number }
}, {
    versionKey: false
});

var modelPaciente = mongoose.model('Paciente', paciente);

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
}, {
    versionKey: false
});

var modelMotivo = mongoose.model('Motivo', motivo);

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
var modelMovimiento = mongoose.model('MovimientoCaja', caja);


module.exports = {
    modelPaciente: modelPaciente,
    modelEspecialidad: modelEspecialidad,
    modelMotivo: modelMotivo,
    modelCaja: modelCaja,
    modelMovimiento: modelMovimiento
}