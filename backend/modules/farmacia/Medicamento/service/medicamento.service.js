const gestionarMedicamento = require("../model/medicamento.model");
var Medicamento = require('../model/medicamento.model');

const gestionarMedicamentoService = {};


//requerimos el esquema qu model de la BD mongo

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
        precioUnitario: medicamento.precioUnitario,
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

    console.log(medicamento, ' [medicamento]');

    return new Promise((resolve, reject) => {
        Medicamento.findByIdAndUpdate(id, medicamento, (err, medicamentos) => {

            if (err) {
                reject(err);
            }
            resolve(medicamentos);
        });
    });
};

var listarMedicamento = async(req, res) => {
    const medicamento = await gestionarMedicamento.find();
    res.json(medicamento);
};

var listarMedicamentoCategorias = async(req, res) => {
    const medicamento = await gestionarMedicamento.distinct('categoria');
    res.json(medicamento);
};


//Todos los medicamentos que pertenezcan a esa categoria
var getMedicamentosByCategorias = async(req, res) => {

    const medicamento = await gestionarMedicamento.find({ categoria: req.params.categoria }).select({ 'nombre': 1, "_id": 0 });

    res.json(medicamento);
    /*  }*/


};

var getPrecioAndStockByNombre = async(req, res) => {
    const medicamento = await gestionarMedicamento.find({ nombre: req.params.nombre }).select({ 'precioUnitario': 1, "stockActual": 1, "_id": 0 });

    res.json(medicamento);
    /*  }*/


};

module.exports = {
    getMedicamento,
    createMedicamento,
    updateMedicamento,
    listarMedicamento,
    listarMedicamentoCategorias,
    getMedicamentosByCategorias,
    getPrecioAndStockByNombre
};