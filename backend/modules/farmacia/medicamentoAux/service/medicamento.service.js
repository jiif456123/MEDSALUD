const gestionarMedicamento = require("../model/medicamento.model");

const gestionarMedicamentoService = {};


gestionarMedicamentoService.listarMedicamento = async(req, res) => {
    const medicamento = await gestionarMedicamento.find();
    res.json(medicamento);
};

gestionarMedicamentoService.listarMedicamentoCategorias = async(req, res) => {
    const medicamento = await gestionarMedicamento.distinct('categoria');
    res.json(medicamento);
};
/*
proveedorService.registrarProveedores = async(req, res) => {
    const proveedor = new Proveedor({
        nombre: req.body.nombre,
        contacto: req.body.contacto,
        email: req.body.email,
        estado: req.body.estado,
        telefono: req.body.telefono,
        laboratorio: req.body.laboratorio,
    });
    await proveedor.save();
    res.json({ status: "Proveedor agregado" });
};*/
//Todos los medicamentos que pertenezcan a esa categoria
gestionarMedicamentoService.getMedicamentosByCategorias = async(req, res) => {
    /* if ({ nombre: req.params.nombre } == null) {
         const gestionarCategoria = await gestionarCategoriaModel.find();
         res.send(gestionarCategoria);
     } else {*/
    const medicamento = await gestionarMedicamento.find({ categoria: req.params.categoria }).select({ 'nombre': 1, "_id": 0 });

    res.json(medicamento);
    /*  }*/


};

gestionarMedicamentoService.getPrecioAndStockByNombre = async(req, res) => {
    /* if ({ nombre: req.params.nombre } == null) {
         const gestionarCategoria = await gestionarCategoriaModel.find();
         res.send(gestionarCategoria);
     } else {*/
    const medicamento = await gestionarMedicamento.find({ nombre: req.params.nombre }).select({ 'precioUnitario': 1, "stockActual": 1, "_id": 0 });

    res.json(medicamento);
    /*  }*/


};
module.exports = gestionarMedicamentoService;