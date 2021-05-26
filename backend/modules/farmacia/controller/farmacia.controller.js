const router = require('express').Router();
const medicamentoController = require('../Medicamento/controller/medicamento.controller')

router.use('/medicamento', medicamentoController);

module.exports = router;
