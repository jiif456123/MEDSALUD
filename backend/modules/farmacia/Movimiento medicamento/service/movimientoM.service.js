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
var n = 0;
var createMovimientoM = (movimientoM) => {

    let objMedicamento = new movimientoMedicamento({
        codigo: "M-0" + n++,
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

var Filtro = async(req, res, next) => {

    const Modo = req.params.Modo;
    const Tipo = req.params.Tipo;
    //const Fecha = req.params.Fecha;
    const fechaInicial = req.params.fechaInicial;
    const fechaFinal = req.params.fechaFinal;

    if (Modo == 'tipo' && fechaInicial == 'null' && fechaFinal == 'null') {
        const medicamentos = await movimientoMedicamento.find({ tipo: Tipo }).populate('Medicamento');

        res.json(medicamentos);
    } else if (Modo == 'fecha') {
        //const medicamentos = await movimientoMedicamento.find({fecha:Fecha});
        // res.json(medicamentos);
        try {
            const reg = await movimientoMedicamento.find({
                fecha: {
                    $gte: fechaInicial,
                    $lt: fechaFinal
                }
            }).populate('Medicamento');

            if (!reg) {
                res.status(404).send({
                    message: 'El registro no existe'
                });
            } else {
                res.status(200).json(reg);
            }
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }

    }

};

module.exports = {
    getMovimientoM,
    createMovimientoM,
    Filtro
};