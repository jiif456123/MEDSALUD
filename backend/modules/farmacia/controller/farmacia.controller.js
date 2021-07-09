const router = require('express').Router();
const proveedorController = require('../proveedor/proveedor.controller')
const medicamentoController = require('../Medicamento/controller/medicamento.controller');
const gestionarOrdenCompraController = require('../gestionarOdenCompra/controller/gestionarOrdenCompra.controller');
const movimientoMController = require('../Movimiento medicamento/controller/movimientoM.controller');
const gestionarCategoriasController = require('../gestionarCategorias/controller/gestionarCategorias.controller')
const gestionarMedicamentoOCController = require('../medicamentoOC/controller/medicamentoOC.controller')
const equiposMedicosController = require('../../farmacia/equiposMedicos/controller/equiposMedicos.controller')
const ejemplarEquipoMedicoController = require('../ejemplarEquipoMedico/controller/ejemplarEquipoMedico.controller')

/*
const gestionarCategoriasController = require('../gestionarCategorias/controller/gestionarCategorias.controller')
const gestionarOrdenCompraController = require('../gestionarOdenCompra/controller/gestionarOrdenCompra.controller')
const gestionarMedicamentoOCController = require('../medicamentoOC/controller/medicamentoOC.controller')

const proveedorController = require('../proveedor/proveedor.controller')
const medicamentoController = require('../medicamento/controller/medicamento.controller')
*/
router.use('/medicamento', medicamentoController);
router.use('/movimientoM', movimientoMController);
router.use('/proveedor', proveedorController);
router.use('/gestionarCategorias', gestionarCategoriasController);
router.use('/gestionarOrdenCompra', gestionarOrdenCompraController);
router.use('/gestionaroMedicamentoOC', gestionarMedicamentoOCController);
router.use('/equiposmedicos', equiposMedicosController);
router.use('/EjemplarEquiposMedicos', ejemplarEquipoMedicoController);



module.exports = router;