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

var getByNombre = async(req, res) => {

    const medicamentos = await Medicamento.find({ nombre: { $regex: req.params.nombre } });

    res.json(medicamentos);

};

var listarMedicamento = async(req, res) => {
    const medicamento = await gestionarMedicamento.find();
    res.json(medicamento);
};
var listarMedicamentoCategorias = async(req, res) => {
    const medicamento = await gestionarMedicamento.distinct('categoria');
    res.json(medicamento); //categoria
};


//Todos los medicamentos que pertenezcan a esa categoria
var getMedicamentosByCategorias = async(req, res) => {

    const medicamento = await gestionarMedicamento.find({ categoria: req.params.categoria }).select({ 'nombre': 1, "_id": 0 });

    res.json(medicamento);
    /*  }*/

};
var getByNombre = async(req, res) => {

    const medicamentos = await Medicamento.find({ nombre: { $regex: req.params.nombre } });

    res.json(medicamentos);

};

var getPrecioAndStockByNombre = async(req, res) => {
    const medicamento = await gestionarMedicamento.find({ nombre: req.params.nombre }).select({ 'precioUnitario': 1, "stockActual": 1, "_id": 0 });

    res.json(medicamento);
    /*  }*/


};


var getContadorIE = async(req, res) => {
    const medicamentoMov = await gestionarMedicamento.aggregate([

        {
            $project: {
                "nombre": 1,

                contadorMed: {

                    $sum: {
                        $cond: [
                            { $eq: ["$categoria", req.params.categoria] },
                            1, 0
                        ]
                    }
                }

            }

        },

        {
            $group: {
                _id: "$nombre",
                countMed: { $sum: "$contadorMed" }

            }
        }
    ]);

    res.json(medicamentoMov);
    /*  }*/

};

module.exports = {
    getMedicamento,
    createMedicamento,
    updateMedicamento,
    listarMedicamento,
    listarMedicamentoCategorias,
    getMedicamentosByCategorias,
    getPrecioAndStockByNombre,
    getByNombre,
    getContadorIE
};