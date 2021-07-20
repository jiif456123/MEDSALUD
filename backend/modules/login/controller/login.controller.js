const router = require("express").Router();

const ingresarUsuario = require('../ingresarUsuario/ingesarUsuario.controller')


router.use('/', ingresarUsuario);

module.exports = router;

