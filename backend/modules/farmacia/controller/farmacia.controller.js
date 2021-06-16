const router = require('express').Router();
const medicamentoController = require('../Medicamento/controller/medicamento.controller');
const movimientoMController = require('../Movimiento medicamento/controller/movimientoM.controller');

router.use('/medicamento', medicamentoController);
router.use('/movimientoM', movimientoMController);

module.exports = router;
