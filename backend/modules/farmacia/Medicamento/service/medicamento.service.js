//requerimos el esquema qu model de la BD mongo
var medicamentoModel = require('../model/medicamento.model');

const medicamentoService = {};

medicamentoService.getMedicamento = async(req, res) => {
    
    const medicamento = await medicamentoModel.find();
    res.json(medicamento); //devolvemos los datos en formato json
    //probamos con el POSTMAN
};

//const es un objeto que ayuda a exporta todo las funciones creadas
var n = 1;
medicamentoService.createMedicamento = async(req, res) => {
    const medicamento = new medicamentoModel({
        
        codigo: "M-0" + n++,
        nombre: req.body.nombre,
        disponibilidad: req.body.disponibilidad,
        dosis: req.body.dosis,
        presentacion: req.body.presentacion,
        precioUnitario: req.body.precioUnitario,
        marca: req.body.marca,
        categoria: req.body.categoria,
        ubicacion: req.body.ubicacion,
        stockMin: req.body.stockMin,
        stockMax: req.body.stockMax,
        stockActual: req.body.stockActual,
        detalles: req.body.detalles
    });
    await medicamento.save();
    res.json({ status: "Medicamento agregado" });
};

module.exports = medicamentoService;
