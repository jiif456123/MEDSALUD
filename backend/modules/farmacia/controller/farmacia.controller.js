const router = require('express').Router();
const proveedorController = require('../categoriaM/controller/categoriaM.controller')

router.use('/categoriaM', proveedorController);

module.exports = router;