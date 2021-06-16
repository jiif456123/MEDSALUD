//requerimos el esquema qu model de la BD mongo
var movimientoMedicamento = require('../model/movimientoM.model');

var getMovimientoM = () => {

    return new Promise((resolve, reject) => {
        movimientoMedicamento.find().exec((err, listaMovimientoMedicamento) => {
            if (err) reject(err);
            resolve(listaMovimientoMedicamento);
        });
    });
};
module.exports = {
    getMovimientoM
};