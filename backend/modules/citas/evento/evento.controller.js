const eventoService = require('./evento.service');
const router = require('express').Router()
const { err } = require('../../../utils/http');
const http = require('../../../utils/http');
const code = require('../../../utils/status');
const eventoService = require("./evento.service");

router.post('/', (req, res) => {
    let evento = req.body;
    eventoService.crear(evento).then(
            (data) => http.ok(req, res, code.status.Ok.code, data))
        .catch(
            (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
})

router.get('/', (req, res) => {
    eventoService.listar().then(
            (data) => http.ok(req, res, code.status.Ok.code, data))
        .catch(
            (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
})

router.put('/:id', (req, res) => {

    let id = req.params.id;
    let evento = req.body;

    console.log(id);

    eventoService.modificarEvento(id, evento).then((data) => {
        http.ok(req, res, code.status.Ok.code, data);
    }).catch((error) => {
        http.err(req, res, code.status.Internal_Server_Error.code, error, error)
    });
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);

    eventoService.eliminarEvento(id)
        .then((data) => {
            http.ok(req, res, code.status.Ok.code, data);
        })
        .catch((error) => {
            http.err(req, res, code.status.Internal_Server_Error, err);
        })
})

router.put('/:id', (req, res) => {
    let id = req.params.id;
    let eventoAct = req.body;
    eventoService.actualizar(id, eventoAct).then(
        (data) => http.ok(req, res, code.status.Ok.code, data))
        .catch(
            (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
})


module.exports = router;
