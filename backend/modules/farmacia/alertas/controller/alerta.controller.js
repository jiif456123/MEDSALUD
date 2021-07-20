const alertaSevice = require('../service/alerta.service');
const http = require('../../../../utils/http');
const code = require('../../../../utils/status');
const router = require('express').Router();

router.get('/', (req, res) => {
    alertaSevice.getAlerta().then((data) => {
        http.ok(req, res, code.status.Ok.code, data);
    }).catch((error) => {
        http.err(req, res, code.status.Internal_Server_Error.code, error, error);
    })
});

router.post('/', (req, res) => {
    let alerta = req.body;
    alertaSevice.createAlerta(alerta).then((data) => {
        http.ok(req, res, code.status.Ok.code, data);
    }).catch((error) => {
        http.err(req, res, code.status.Internal_Server_Error.code, error, error);
    })
});
module.exports = router;