const categoriaMService = require('../service/categoriaM.service');
const http = require('../../../../utils/http');
const code = require('../../../../utils/status');
const router = require('express').Router();

//TODO:Se puso categorias

router.get('/', categoriaMService.getCategoriaM);
//router.delete('/:id', categoriaMService.deleteCategoriaM);
/*

router.get('/', (req, res) => { //get

    categoriaMService.listar()
        .then(
            (data) => http.ok(req, res, code.status.Ok.code, data))
        .catch(
            (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
});
*/

router.post('/', categoriaMService.createCategoriaM);
/*
router.post('/', (req, res) => { //post

    let categoria = req.body;

    categoriaMService.registrar(categoria)
        .then(
            (data) => http.ok(req, res, code.status.Ok.code, data))
        .catch(
            (errorMessage) => http.err(req, res, code.status.Internal_Server_Error.code, errorMessage, errorMessage));
});


*/

module.exports = router;