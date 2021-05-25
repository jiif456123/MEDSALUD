const citasModel = require('../../../models/citas.model')
const motivoModel = citasModel.modelMotivo;

let crear = (movimiento) => {
    let nuevoMovimiento = new motivoModel({
        paciente: movimiento.nIdPaciente,
        motivo: movimiento.nIdMotivo,
        precio: movimiento.precio,
        montoRecibido: movimiento.montoRecibido,
        fechaHora: new Date()
    })
    return new Promise((resolve, reject) => {
        nuevoMovimiento.save(nuevoMovimiento, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

let listar = () => {
    return new Promise((resolve, reject) => {
        motivoModel.find({}).exec((err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

module.exports = {
    crear: crear,
    listar: listar
}