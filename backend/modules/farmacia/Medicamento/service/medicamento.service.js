<<<<<<< HEAD
const gestionarMedicamento = require("../model/medicamento.model");
var Medicamento = require('../model/medicamento.model');

const gestionarMedicamentoService = {};


//requerimos el esquema qu model de la BD mongo
=======
//requerimos el esquema qu model de la BD mongo
var Medicamento = require('../model/medicamento.model');

>>>>>>> 4121220a906438f6c9387faee3613f77afc6e3e6

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
<<<<<<< HEAD
=======

>>>>>>> 4121220a906438f6c9387faee3613f77afc6e3e6
var createMedicamento = (medicamento) => {

    let objMedicamento = new Medicamento({
        codigo: "M-0" + n++,
        nombre: medicamento.nombre,
        disponibilidad: medicamento.disponibilidad,
        dosis: medicamento.dosis,
        presentacion: medicamento.presentacion,
<<<<<<< HEAD
        precioUnitario: medicamento.precioUnitario,
=======
        precioUnitario:medicamento.precioUnitario,
>>>>>>> 4121220a906438f6c9387faee3613f77afc6e3e6
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

<<<<<<< HEAD
    console.log(medicamento, ' [medicamento]');

    return new Promise((resolve, reject) => {
        Medicamento.findByIdAndUpdate(id, medicamento, (err, medicamentos) => {
=======
    console.log( medicamento, ' [medicamento]');

    return new Promise((resolve, reject) => {
        Medicamento.findByIdAndUpdate(id,  medicamento, (err,  medicamentos) => {
>>>>>>> 4121220a906438f6c9387faee3613f77afc6e3e6

            if (err) {
                reject(err);
            }
<<<<<<< HEAD
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
=======
            resolve( medicamentos);
        });
    });
};
module.exports = {
    getMedicamento,
    createMedicamento,
    updateMedicamento
};


>>>>>>> 4121220a906438f6c9387faee3613f77afc6e3e6
