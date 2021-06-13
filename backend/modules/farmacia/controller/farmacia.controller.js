
const router = require('express').Router();
const medicamentoController = require('../Medicamento/controller/medicamento.controller')
const proveedorController = require('../proveedor/proveedor.controller')
const gestionarCategoriasController = require('../gestionarCategorias/controller/gestionarCategorias.controller')

router.use('/medicamento', medicamentoController);
router.use('/proveedor', proveedorController); 
router.use('/gestionarCategorias', gestionarCategoriasController);

module.exports = router;