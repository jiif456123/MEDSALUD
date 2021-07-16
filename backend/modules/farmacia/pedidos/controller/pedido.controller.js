const http = require('../../../../utils/http');
const code = require('../../../../utils/status');
const router = require('express').Router();
const pedidoService = require('../service/pedido.service');

router.post('/', (req, res) => {
    let pedido = req.body;
    pedidoService.createPedido(pedido).then(
        (data) => {
            http.ok(req, res, code.status.Ok.code, data)
        }).catch(
        (errorMessage) => {
            http.err(req, res, code.status.Internal_Server_Error.code, errorMessage)
        });
});
router.get('/', (req, res) => {
    pedidoService.getPedidos().then(
        (data) => {
            http.ok(req, res, code.status.Ok.code, data)
        }).catch(
        (errorMessage) => {
            http.err(req, res, code.status.Internal_Server_Error.code, errorMessage)
        });
});


router.put('/:id', (req, res) => {

    let id = req.params.id;
    let pedido = req.body;

    console.log(id);

    pedidoService.updatePedido(id, pedido).then((data) => {
        http.ok(req, res, code.status.Ok.code, data);
    }).catch((error) => {
        http.err(req, res, code.status.Internal_Server_Error.code, error, error)
    });
});

router.get('/consulta-dni/:dni', pedidoService.getPedidoByDni);


router.delete('/eliminarPedido/:id', pedidoService.deletePedido);

module.exports = router;