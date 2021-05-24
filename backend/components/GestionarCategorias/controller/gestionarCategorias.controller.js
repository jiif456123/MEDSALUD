const categoriaMService = require('../service/categoriaM.service');
const http = require('../../../utils/http');
const code = require('../../../utils/status');
const router = require('express').Router();

router.get('/', categoriaMService.getCategoriaM);

router.post('/', categoriaMService.createCategoriaM);

module.exports = router;