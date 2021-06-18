//requerimos el esquema qu model de la BD mongo
var Medicamento = require('../model/medicamento.model');


var getMedicamento = () => {

    return new Promise((resolve, reject) => {
        Medicamento.find().exec((err, listaMedicamentos) => {
            if (err) reject(err);
            resolve(listaMedicamentos);
        });
    });
};
//const es un objeto que ayuda a exporta todo las funciones creadas
var n = 10;

var createMedicamento = (medicamento) => {

    let objMedicamento = new Medicamento({
        codigo: "M-0" + n++,
        nombre: medicamento.nombre,
        disponibilidad: medicamento.disponibilidad,
        dosis: medicamento.dosis,
        presentacion: medicamento.presentacion,
        precioUnitario:medicamento.precioUnitario,
        marca: medicamento.marca,
        categoria: medicamento.categoria,
        ubicacion: medicamento.ubicacion,
        stockMin: medicamento.stockMin,
        stockMax: medicamento.stockMax,
        stockActual: 0,
        detalles: medicamento.detalles
    });

    return new Promise((resolve, reject) => {
        objMedicamento.save((err, medicamentos) => {
            if (err) reject(err);
            resolve(medicamentos);
        });
    });
};
var updateMedicamento = (id, medicamento) => {

    console.log( medicamento, ' [medicamento]');

    return new Promise((resolve, reject) => {
        Medicamento.findByIdAndUpdate(id,  medicamento, (err,  medicamentos) => {

            if (err) {
                reject(err);
            }
            resolve( medicamentos);
        });
    });
};

var getByNombre = async(req, res) => {
    
    const medicamentos = await Medicamento.find({ nombre: { $regex: req.params.nombre } });

    res.json(medicamentos);

};

module.exports = {
    getMedicamento,
    createMedicamento,
    updateMedicamento,
    getByNombre
};


