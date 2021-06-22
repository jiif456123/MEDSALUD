//requerimos el esquema qu model de la BD mongo
var movimientoMedicamento = require('../model/movimientoM.model');

var getMovimientoM = () => {

    return new Promise((resolve, reject) => {
        movimientoMedicamento.find().populate("Medicamento").exec((err, listaMovimientoMedicamento) => {
            if (err) reject(err); 
            resolve(listaMovimientoMedicamento);
        });
    });
};

var createMovimientoM = (movimientoM) => {

    let objMedicamento = new movimientoMedicamento({
        cantidad: movimientoM.cantidad,
        tipo: movimientoM.tipo,
        fecha: movimientoM.fecha,
        motivo: movimientoM.motivo,
        Medicamento: movimientoM.Medicamento
    });

    return new Promise((resolve, reject) => {
        objMedicamento.save((err, medicamentos) => {
            if (err) reject(err);
            resolve(medicamentos);
        });
    });
};

module.exports = {
    getMovimientoM,
    createMovimientoM
};