const medicamentoService = require('../service/medicamento.service');

const router = require('express').Router();

router.get('/', medicamentoService.getMedicamento);
router.post('/', medicamentoService.createMedicamento);
//er.post('/', medicamentoService.createCategoria);

module.exports = router;