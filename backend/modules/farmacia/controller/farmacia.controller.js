const router = require('express').Router();
const gestionarCategoriasController = require('../gestionarCategorias/controller/gestionarCategorias.controller')

router.use('/gestionarCategorias', gestionarCategoriasController);

module.exports = router;