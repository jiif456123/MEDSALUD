const gestionarCategoriaService = require('../service/gestionarCategorias.service');

const router = require('express').Router();

router.get('/', gestionarCategoriaService.getCategorias);

router.post('/', gestionarCategoriaService.createCategoria);

router.get('/:id', gestionarCategoriaService.getCategoria);

router.get('/getNombre/:nombre', gestionarCategoriaService.getCategoriaByNombre);

router.get('/getNombreA/:nombreA', gestionarCategoriaService.getCategoriaByNombreA);

router.put('/:id', gestionarCategoriaService.editCategoria);

router.delete('/:id', gestionarCategoriaService.deleteCategoria);

router.delete('/:id', gestionarCategoriaService.deleteCategoria);


module.exports = router;
//gestionarCategoriass