const gestionarCategoriaService = require('../service/gestionarCategorias.service');

const router = require('express').Router();

router.get('/', gestionarCategoriaService.getCategorias);

router.post('/', gestionarCategoriaService.createCategoria);

router.get('/:id', gestionarCategoriaService.getCategoria);

module.exports = router;
//gestionarCategoriass