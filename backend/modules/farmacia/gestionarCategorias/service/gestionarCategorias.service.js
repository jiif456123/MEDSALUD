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


module.exports = gestionarCategoriaService;