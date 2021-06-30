const medicamentoService = require('../service/medicamento.service');
const http = require('../../../../utils/http');
const code = require('../../../../utils/status');
const router = require('express').Router();

router.get('/', (req, res) => {
    medicamentoService.getMedicamento().then((data) => {
        http.ok(req, res, code.status.Ok.code, data);
    }).catch((error) => {
        http.err(req, res, code.status.Internal_Server_Error.code, error, error);
    })
});
router.post('/', (req, res) => {
    let medicamento = req.body;
    medicamentoService.createMedicamento(medicamento).then((data) => {
        http.ok(req, res, code.status.Ok.code, data);
    }).catch((error) => {
        http.err(req, res, code.status.Internal_Server_Error.code, error, error);
    })
});

router.put('/:id', (req, res) => {

    let id = req.params.id;
    let medicamento = req.body;

    console.log(id);

    medicamentoService.updateMedicamento(id, medicamento).then((data) => {
        http.ok(req, res, code.status.Ok.code, data);
    }).catch((error) => {
        http.err(req, res, code.status.Internal_Server_Error.code, error, error)
    });
});


router.get("/lista/", medicamentoService.listarMedicamento);

router.get("/Nombre/", medicamentoService.listarMedicamentoCategorias);

router.get('/getNombre/:categoria', medicamentoService.getMedicamentosByCategorias);

router.get('/getPrecioAStock/:nombre', medicamentoService.getPrecioAndStockByNombre);

module.exports = router;