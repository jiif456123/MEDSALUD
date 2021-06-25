const gestionarOrdenCompraService = require('../service/gestionarOrdenCompra.service');

const router = require('express').Router();

router.get('/', gestionarOrdenCompraService.getOrdenCompra);

router.post('/', gestionarOrdenCompraService.createOrdenCompra);

router.get('/getNombre/:proveedor', gestionarOrdenCompraService.getProveedorByNombre);

router.get('/getCodigoM/', gestionarOrdenCompraService.getUltimoID);

router.delete('/dropDocs/', gestionarOrdenCompraService.dropDocuments);


router.put('/:id', gestionarOrdenCompraService.editOdenCompra);

module.exports = router;