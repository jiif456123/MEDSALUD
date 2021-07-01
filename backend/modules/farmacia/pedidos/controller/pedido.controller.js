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

router.get('/consulta-dni/:dni', pedidoService.getPedidoByDni
    // let dni = req.body;
    // pedidoService.getPedidoByDni(dni).then(
    //     (data) => {
    //         http.ok(req, res, code.status.Ok.code, data)
    //     }).catch(
    //     (errorMessage) => {
    //         http.err(req, res, code.status.Internal_Server_Error.code, errorMessage)
    //     });
);


router.delete('/eliminarPedido/:id', pedidoService.deletePedido
    // let { id } = req.params;
    // pedidoService.deletePedido(id).then(
    //     (data) => {
    //         http.ok(req, res, code.status.Ok.code, data)
    //     }).catch(
    //     (errorMessage) => {
    //         http.err(req, res, code.status.Internal_Server_Error.code, errorMessage)
    //     });
);

module.exports = router;