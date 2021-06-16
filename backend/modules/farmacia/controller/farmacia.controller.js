
const router = require('express').Router();
const proveedorController = require('../proveedor/proveedor.controller')
const gestionarCategoriasController = require('../gestionarCategorias/controller/gestionarCategorias.controller')
const medicamentoController = require('../Medicamento/controller/medicamento.controller');
const movimientoMController = require('../Movimiento medicamento/controller/movimientoM.controller');

router.use('/medicamento', medicamentoController);
router.use('/movimientoM', movimientoMController);
router.use('/proveedor', proveedorController); 
router.use('/gestionarCategorias', gestionarCategoriasController);


module.exports = router;