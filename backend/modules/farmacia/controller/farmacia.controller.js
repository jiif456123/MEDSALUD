const router = require('express').Router();
const pedidosController = require('../pedidos/controller/pedido.controller')
    //const recetaController = require('../receta/controller/receta1.controller')

router.use('/pedidos', pedidosController);
//router.use('/receta', recetaController);

module.exports = router;