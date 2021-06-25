const { getMedicamentosByCategorias } = require("../service/medicamento.service");
const medicamentos = require("../service/medicamento.service");
const router = require("express").Router();

router.get("/", medicamentos.listarMedicamento);

router.get("/Nombre/", medicamentos.listarMedicamentoCategorias);

router.get('/getNombre/:categoria', medicamentos.getMedicamentosByCategorias);

router.get('/getPrecioAStock/:nombre', medicamentos.getPrecioAndStockByNombre);

module.exports = router;