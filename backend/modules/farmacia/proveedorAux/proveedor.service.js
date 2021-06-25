const proveedor = require("../proveedor/proveedor.model");
var Proveedor = require("../proveedor/proveedor.model");
const proveedorService = {};

proveedorService.listarProveedores = async(req, res) => {
    const proveedor = await Proveedor.find();
    res.json(proveedor);
};

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
};

proveedorService.getLabByProveedor = async(req, res) => {
    /* if ({ nombre: req.params.nombre } == null) {
         const gestionarCategoria = await gestionarCategoriaModel.find();
         res.send(gestionarCategoria);
     } else {*/
    const laboratorio = await proveedor.find({ nombre: req.params.nombre }).select({ 'laboratorio': 1, "_id": 0 });

    res.json(laboratorio);
    /*  }*/


};
/*
proveedorService.getLabByProveedor = async(req, res) => {
   
    const proveedor = await proveedor.find({ nombre: { $regex: req.params.categoria } }).select({ 'nombre': 1, "_id": 0 });

    res.json(proveedor);
   


};*/

module.exports = proveedorService;