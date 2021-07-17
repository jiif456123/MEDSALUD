const movimientoMService = require('../service/movimientoM.service');
const http = require('../../../../utils/http');
const code = require('../../../../utils/status');
const router = require('express').Router();

router.get('/', (req, res) => {
    movimientoMService.getMovimientoM().then((data) => {
        http.ok(req, res, code.status.Ok.code, data);
    }).catch((error) => {
        http.err(req, res, code.status.Internal_Server_Error.code, error, error);
    })
});

router.post('/', (req, res) => {
    let medicamento = req.body;
    movimientoMService.createMovimientoM(medicamento).then((data) => {
        http.ok(req, res, code.status.Ok.code, data);
    }).catch((error) => {
        http.err(req, res, code.status.Internal_Server_Error.code, error, error);
    })
});
router.get('/Filtro/:Modo/:Tipo/:fechaInicial/:fechaFinal', movimientoMService.Filtro);
module.exports = router;