var gestionarCategoriaModel = require('../model/gestionarCategorias.model');
const gestionarCategoriaController = {};

gestionarCategoriaController.getCategorias = async(req, res) => {
    //req=request
    //res= response
    const gestionarCategoria = await gestionarCategoriaModel.find();
    res.json(gestionarCategoria);
};

gestionarCategoriaController.createCategoria = async(req, res) => {
    const categoria = new gestionarCategoriaModel({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        estado: 0
    });
    await categoria.save();
    res.json({ status: "Categoria agregada" });
};


module.exports = gestionarCategoriaController;