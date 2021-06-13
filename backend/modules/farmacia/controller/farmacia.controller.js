
const router = require('express').Router();
const medicamentoController = require('../Medicamento/controller/medicamento.controller')
const proveedorController = require('../proveedor/proveedor.controller')

router.use('/medicamento', medicamentoController);
router.use('/proveedor', proveedorController); 



module.exports = router;