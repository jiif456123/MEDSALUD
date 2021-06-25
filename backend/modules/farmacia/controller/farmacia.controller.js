const router = require('express').Router();
const gestionarCategoriasController = require('../gCategorias/controller/gestionarCategorias.controller')
const gestionarOrdenCompraController = require('../gOdenCompra/controller/gestionarOrdenCompra.controller')
const gestionarMedicamentoOCController = require('../medicamentoOC/controller/medicamentoOC.controller')

const proveedorController = require('../proveedor/proveedor.controller')
const medicamentoController = require('../medicamento/controller/medicamento.controller')


router.use('/medicamento', medicamentoController);
router.use('/proveedor', proveedorController);
router.use('/gestionarCategorias', gestionarCategoriasController);
router.use('/gestionarOrdenCompra', gestionarOrdenCompraController);
router.use('/proveedor', proveedorController);
router.use('/medicamento', medicamentoController);
router.use('/gestionaroMedicamentoOC', gestionarMedicamentoOCController);


module.exports = router;