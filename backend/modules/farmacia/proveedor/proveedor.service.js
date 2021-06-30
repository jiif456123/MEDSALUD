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


proveedorService.actualizarProveedor = async(req, res) => {
    var _id = req.params.id;
    const proveedor = await Proveedor.findByIdAndUpdate({ _id }, {
        nombre: req.body.nombre,
        contacto: req.body.contacto,
        email: req.body.email,
        estado: req.body.estado,
        telefono: req.body.telefono,
        laboratorio: req.body.laboratorio,

    }, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result)
        }
    })
}
proveedorService.getLabByProveedor = async(req, res) => {

    const laboratorio = await proveedor.find({ nombre: req.params.nombre }).select({ 'laboratorio': 1, "_id": 0 });

    res.json(laboratorio);
};


module.exports = proveedorService;