
const router = require('express').Router();
const proveedorController = require('../proveedor/proveedor.controller')

router.use('/proveedor', proveedorController); 

module.exports = router;