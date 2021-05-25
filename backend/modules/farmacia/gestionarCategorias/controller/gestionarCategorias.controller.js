const gestionarCategoriaService = require('../service/gestionarCategorias.service');
const http = require('../../../../utils/http');
const code = require('../../../../utils/status');
const router = require('express').Router();

router.get('/', gestionarCategoriaService.getCategorias);

router.post('/', gestionarCategoriaService.createCategoria);

module.exports = router;
//gestionarCategorias