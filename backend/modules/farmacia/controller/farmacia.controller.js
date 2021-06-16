
const router = require('express').Router();
<<<<<<< HEAD
const medicamentoController = require('../Medicamento/controller/medicamento.controller');
const movimientoMController = require('../Movimiento medicamento/controller/movimientoM.controller');

router.use('/medicamento', medicamentoController);
router.use('/movimientoM', movimientoMController);
=======
const medicamentoController = require('../Medicamento/controller/medicamento.controller')
const proveedorController = require('../proveedor/proveedor.controller')
const gestionarCategoriasController = require('../gestionarCategorias/controller/gestionarCategorias.controller')

router.use('/medicamento', medicamentoController);
router.use('/proveedor', proveedorController); 
router.use('/gestionarCategorias', gestionarCategoriasController);
>>>>>>> 6639117f549a24249cf9d84a1db5a66f839d7d14

module.exports = router;