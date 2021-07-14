const servicioService = require('./servicio.service');
const router = require('express').Router()
const { err } = require('../../../utils/http');
const http = require('../../../utils/http');
const code = require('../../../utils/status');

router.get('/', (req, res) => {
    servicioService.listar().then(
        (data) => http.ok(req, res, code.status.Ok.code, data))
        .catch(
            (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
})

module.exports = router