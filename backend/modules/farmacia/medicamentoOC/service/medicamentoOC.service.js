//requerimos el esquema qu model de la BD mongo
var medicamentoOCModel = require('../model/medicamentoOC.model');

const gestionarMedicamentoOCService = {};

gestionarMedicamentoOCService.getMedicamentoOC = async(req, res) => {
    const gestionarMedicamentoOC = await medicamentoOCModel.find();
    res.json(gestionarMedicamentoOC);
};
/*
 codigo: { type: Number },
     proveedor: { type: String },
     fecha: { type: String},
     formaPago: { type: String},
     estado: { type: String},
     laboratorio: { type: String},
     categoria: { type: String},
     medicamento:{ type: String},
     cantidad: { type: Number},
     unidad: {type:Number}
*/
gestionarMedicamentoOCService.createMedicamentoOC = async(req, res) => {

    /*
     codigo: { type: Number },
    laboratorio: { type: String },
    categoria: { type: String },
    medicamento: { type: String },
    cantidad: { type: Number },
    precio: { type: Number },
    total: { type: Number },
    unidad: { type: String }
    */
    const gestionarMedicamentoOC = new medicamentoOCModel({
        codigo: req.body.codigo,
        laboratorio: req.body.laboratorio,
        categoria: req.body.categoria,
        medicamento: req.body.medicamento,
        cantidad: req.body.cantidad,
        precio: req.body.precio,
        total: req.body.total,
        unidad: req.body.unidad

    });
    await gestionarMedicamentoOC.save();
    res.json({ status: "MedicamentoOC Agregada" });
};
/*
gestionarOrdenCompraService.getCategoria = async(req, res) => {
    const categoria = await gestionarOrdenCompraModel.findById(req.params.id);
    res.send(categoria);
};

gestionarOrdenCompraService.editCategoria = async(req, res) => {
    await gestionarOrdenCompraModel.findByIdAndUpdate(req.params.id, req.body)
    res.json({ status: 'Categoira Actualizada' })
};
*/



gestionarMedicamentoOCService.deleteOneMedicamentoOC = async(req, res) => {
    await medicamentoOCModel.findByIdAndDelete(req.params.id);
    res.json({ status: 'MedicamentoOC Eliminado' });
};



gestionarMedicamentoOCService.deleteMedicamentoOC = async(req, res) => {
    await medicamentoOCModel.deleteMany(req.params.codigo);
    res.json({ status: 'MedicamentoOC Eliminada' });
};


gestionarMedicamentoOCService.getMedicamentoOCByCodigo = async(req, res) => {
    /* if ({ nombre: req.params.nombre } == null) {
         const gestionarCategoria = await gestionarOrdenCompraModel.find();
         res.send(gestionarCategoria);
     } else {*/
    const gestionarMedicamentoOC = await medicamentoOCModel.find({ codigo: req.params.codigo });

    res.json(gestionarMedicamentoOC);
    /*  }*/


};
/*
gestionarOrdenCompraService.getCategoriaByNombreA = async(req, res) => {

    const categoria = await gestionarOrdenCompraModel.find({ nombre: req.params.nombreA });

    res.json(categoria);

};*/
//Eliminar los documentos de la BD
gestionarMedicamentoOCService.dropDocuments = async(req, res) => {

    const gestionarMedicamentoOC = await medicamentoOCModel.deleteMany();

    res.json(gestionarMedicamentoOC);

};


module.exports = gestionarMedicamentoOCService;