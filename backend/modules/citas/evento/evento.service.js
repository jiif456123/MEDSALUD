const citasModel = require('../../../models/citas.model')
const eventoModel = citasModel.modelEvento;

let crear = (evento) => {
    let nuevoEvento = new eventoModel({
        titulo: evento.titulo,
        descripcion: evento.descripcion,
        fechaInicio: evento.fechaInicio,
        fechaFin: evento.fechaFin,
        horaInicio: evento.horaInicio,
        horaFin: evento.horaFin,
    })
    return new Promise((resolve, reject) => {
        nuevoEvento.save(nuevoEvento, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

let listar = () => {
    return new Promise((resolve, reject) => {
        eventoModel.find({}).exec((err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

var eliminar = (id) => {
    return new Promise((resolve, reject) => {
        eventomodel.remove({ _id: id }, (err, data) => {
            if (err) { reject(err); }
            resolve(data);
        })
    })
}

module.exports = {
    crear: crear,
    listar: listar,
    eliminar:eliminar,
}