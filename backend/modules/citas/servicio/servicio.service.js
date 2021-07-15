const citasModel = require('../../../models/citas.model')
const servicioModel = citasModel.modelServicio;

let listar = () => {
    return new Promise((resolve, reject) => {
        servicioModel.find({}).exec((err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

module.exports = {
    listar: listar,
}