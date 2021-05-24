var CategoriaM = require('../model/categoriaM.model');
const categoriaMSer = {};

categoriaMSer.getCategoriaM = async(req, res) => {

    const categoriaM = await CategoriaM.find();
    res.json(categoriaM);
};

categoriaMSer.createCategoriaM = async(req, res) => {
    const categoria = new CategoriaM({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        estado: 0
    });
    await categoria.save();
    res.json({ status: "Categoria agregada" });

};

module.exports = categoriaMSer;