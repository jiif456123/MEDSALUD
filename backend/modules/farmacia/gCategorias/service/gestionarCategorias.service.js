//requerimos el esquema qu model de la BD mongo
var gestionarCategoriaModel = require('../model/gestionarCategorias.model');

const gestionarCategoriaService = {};

gestionarCategoriaService.getCategorias = async(req, res) => {
    //req=request
    //res= response
    /*gestionarCategoriaModel.find() devuelve un arreglo de todo las categorias que estan en la base de datos 
    la cual guardamos en gestionarcategoria
    */

    const gestionarCategoria = await gestionarCategoriaModel.find();
    res.json(gestionarCategoria); //devolvemos los datos en formato json
    //probamos con el POSTMAN
};

gestionarCategoriaService.createCategoria = async(req, res) => {
    const categoria = new gestionarCategoriaModel({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        estado: 0
    });
    await categoria.save();
    res.json({ status: "Categoria agregada" });
};

gestionarCategoriaService.getCategoria = async(req, res) => {
    const categoria = await gestionarCategoriaModel.findById(req.params.id);
    res.send(categoria);
};

gestionarCategoriaService.editCategoria = async(req, res) => {
    await gestionarCategoriaModel.findByIdAndUpdate(req.params.id, req.body)
    res.json({ status: 'Categoira Actualizada' })
};

gestionarCategoriaService.deleteCategoria = async(req, res) => {
    await gestionarCategoriaModel.findByIdAndDelete(req.params.id);
    res.json({ status: 'Categoria Eliminada' });
};

gestionarCategoriaService.getCategoriaByNombre = async(req, res) => {
    /* if ({ nombre: req.params.nombre } == null) {
         const gestionarCategoria = await gestionarCategoriaModel.find();
         res.send(gestionarCategoria);
     } else {*/
    const categoria = await gestionarCategoriaModel.find({ nombre: { $regex: req.params.nombre } });

    res.json(categoria);
    /*  }*/


};

gestionarCategoriaService.getCategoriaByNombreA = async(req, res) => {

    const categoria = await gestionarCategoriaModel.find({ nombre: req.params.nombreA });

    res.json(categoria);

};

module.exports = gestionarCategoriaService;