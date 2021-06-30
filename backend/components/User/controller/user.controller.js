const usuarioService = require('../service/user.service');
const http = require('../../../utils/http');
const code = require('../../../utils/status');
const router = require('express').Router();

router.get('/', (req, res) => { //get

    usuarioService.listar()
        .then(
            (data) => http.ok(req, res, code.status.Ok.code, data))
        .catch(
            (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
});

router.post('/', (req, res) => { //post

    let usuario = req.body;

    usuarioService.registrar(usuario)
        .then(
            (data) => http.ok(req, res, code.status.Ok.code, data))
        .catch(
            (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
});



router.put('/:id', (req, res) => {

    let id = req.params.id;
    let usuario = req.body;

    console.log(id);

    usuarioService.modificar(id, usuario).then((data) => {
        http.ok(req, res, code.status.Ok.code, data);
    }).catch((error) => {
        http.err(req, res, code.status.Internal_Server_Error.code, error, error)
    });
});

module.exports = router;