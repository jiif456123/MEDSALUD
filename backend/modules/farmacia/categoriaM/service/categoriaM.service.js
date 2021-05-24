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
    /*
    const newCategoria = new CategoriaM(req.body);
    await newCategoria.save();
    res.send({ message: 'Categoria Creada' });*/
};

/*
var listarCategorias = () => {

    let query = {
        estado: { $ne: 3 } // 0 , 1 ,2 ,3 get post put delete
    };

    return new Promise((resolve, reject) => { //get
        CategoriaM.find(query).exec((err, listaCategorias) => {
            if (err) reject(err);
            resolve(listaCategorias);
        });
    });
};
*/
var registrarCategorias = (categoria) => { //post

    let objCategoria = new CategoriaM({
        nombre: categoria.nombre,
        descripcion: categoria.descripcion,
        estado: categoria.estado,
    });

    return new Promise((resolve, reject) => {
        objCategoria.save((err, categorias) => {
            if (err) reject(err);
            resolve(categorias);
        });
    });
};


var modificarCategorias = (id, categoria) => {

    console.log(categoria, ' [categoriaM]');

    return new Promise((resolve, reject) => {
        User.findByIdAndUpdate(id, categoria, (err, categorias) => {

            if (err) {
                reject(err);
            }
            resolve(categorias);
        });
    });
};

/*
categoriaMSer.deleteCategoriaM = async(req, res) => {
    await CategoriaM.findByIdAndRemove(req.params.id);
    res.json({ status: "Categoria Eliminada" });
};
*/

module.exports = categoriaMSer;

/*
module.exports = {
    listar: listarCategorias,
    registrar: registrarCategorias,
    modificar: modificarCategorias
};*/