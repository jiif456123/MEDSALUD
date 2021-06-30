//requerimos el esquema qu model de la BD mongo
var gestionarOrdenCompraModel = require('../model/gestionarOrdenCompra.model');

const gestionarOrdenCompraService = {};

gestionarOrdenCompraService.getOrdenCompra = async(req, res) => {
    //req=request
    //res= response
    /*gestionarOrdenCompraModel.find() devuelve un arreglo de todo las categorias que estan en la base de datos 
    la cual guardamos en gestionarcategoria
    */
    const gestionarOrdenCompra = await gestionarOrdenCompraModel.find();
    res.json(gestionarOrdenCompra); //devolvemos los datos en formato json
    //probamos con el POSTMAN
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
gestionarOrdenCompraService.createOrdenCompra = async(req, res) => {

    const ordenCompra = new gestionarOrdenCompraModel({
        codigo: req.body.codigo,
        proveedor: req.body.proveedor,
        fecha: req.body.fecha,
        formaPago: req.body.formaPago,
        estado: 'En Espera',
        totalD: req.body.totalD

    });
    await ordenCompra.save();
    res.json({ status: "Orden de Compra Agregada" });
};

gestionarOrdenCompraService.editOdenCompra = async(req, res) => {
    await gestionarOrdenCompraModel.findByIdAndUpdate(req.params.id, req.body)
    res.json({ status: 'Orden Compra Actualizada' })
};

gestionarOrdenCompraService.getCategoria = async(req, res) => {
    const categoria = await gestionarOrdenCompraModel.findById(req.params.id);
    res.send(categoria);
};

gestionarOrdenCompraService.editCategoria = async(req, res) => {
    await gestionarOrdenCompraModel.findByIdAndUpdate(req.params.id, req.body)
    res.json({ status: 'Categoira Actualizada' })
};

gestionarOrdenCompraService.deleteCategoria = async(req, res) => {
    await gestionarOrdenCompraModel.findByIdAndDelete(req.params.id);
    res.json({ status: 'Categoria Eliminada' });
};

gestionarOrdenCompraService.getProveedorByNombre = async(req, res) => {
    /* if ({ nombre: req.params.nombre } == null) {
         const gestionarCategoria = await gestionarOrdenCompraModel.find();
         res.send(gestionarCategoria);
     } else {*/
    const ordenCompra = await gestionarOrdenCompraModel.find({ proveedor: { $regex: req.params.proveedor } });

    res.json(ordenCompra);
    /*  }*/


};

gestionarOrdenCompraService.getCategoriaByNombreA = async(req, res) => {

    const categoria = await gestionarOrdenCompraModel.find({ nombre: req.params.nombreA });

    res.json(categoria);

};

gestionarOrdenCompraService.getUltimoID = async(req, res) => {

    const categoria = await gestionarOrdenCompraModel.find().sort({ codigo: -1 }).limit(1);

    res.json(categoria);
}

gestionarOrdenCompraService.dropDocuments = async(req, res) => {

    const categoria = await gestionarOrdenCompraModel.deleteMany();

    res.json(categoria);

};
gestionarOrdenCompraService.getDate = async(req, res) => {
    const ordencompra = await gestionarOrdenCompraModel.Date.now();
}

module.exports = gestionarOrdenCompraService;