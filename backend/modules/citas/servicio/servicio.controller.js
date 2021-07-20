const http = require('../../../utils/http');
const code = require('../../../utils/status');
const router = require('express').Router();
const e = require('express');
const servicioService = require("./servicio.service");

router.post('/', (req, res) => {
    let evento = req.body;
    servicioService.crear(evento).then(
            (data) => http.ok(req, res, code.status.Ok.code, data))
        .catch(
            (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
})

router.get('/', (req, res) => {
    servicioService.listar().then(
            (data) => http.ok(req, res, code.status.Ok.code, data))
        .catch(
            (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
})

router.put('/:id', (req, res) => {

    let id = req.params.id;
    let evento = req.body;

    console.log(id);

    servicioService.modificarServicio(id, evento).then((data) => {
        http.ok(req, res, code.status.Ok.code, data);
    }).catch((error) => {
        http.err(req, res, code.status.Internal_Server_Error.code, error, error)
    });
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);

    servicioService.eliminarServicio(id)
        .then((data) => {
            http.ok(req, res, code.status.Ok.code, data);
        })
        .catch((error) => {
            http.err(req, res, code.status.Internal_Server_Error, err);
        })
});

module.exports = router;
