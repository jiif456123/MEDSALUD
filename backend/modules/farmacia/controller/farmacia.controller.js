const router = require('express').Router();
const proveedorController = require('../proveedor/proveedor.controller')
const medicamentoController = require('../Medicamento/controller/medicamento.controller');
const movimientoMController = require('../Movimiento medicamento/controller/movimientoM.controller');
const gestionarCategoriasController = require('../gCategorias/controller/gestionarCategorias.controller')
const gestionarOrdenCompraController = require('../gOdenCompra/controller/gestionarOrdenCompra.controller')
const gestionarMedicamentoOCController = require('../medicamentoOC/controller/medicamentoOC.controller')


router.use('/medicamento', medicamentoController);
router.use('/movimientoM', movimientoMController);
router.use('/proveedor', proveedorController); 
router.use('/gestionarCategorias', gestionarCategoriasController);
router.use('/gestionarOrdenCompra', gestionarOrdenCompraController);
router.use('/gestionaroMedicamentoOC', gestionarMedicamentoOCController);



module.exports = router;