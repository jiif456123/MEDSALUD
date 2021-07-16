var Pedido = require('../model/pedido.model');
const { response } = require('express');
//const modelpedido = pedidomodel.pedido;

var getPedidos = () => {
    return new Promise((resolve, reject) => {
        Pedido.find().exec((err, listaPedidos) => {
            if (err) reject(err);
            resolve(listaPedidos);
        });
    });
};
// var crearPedido = async(req, res = response) => {
//     const data = {...body } = req.body;
//     const pedido = new Pedido(data);
//     await pedido.save();
//     res.json({ pedido })
// }

n = 100;
var createPedido = (pedido) => {
    console.log(pedido);
    var objPedido = new Pedido({
        codigoPedido: "P-0" + n++,
        nombre: pedido.nombre,
        dni: pedido.dni,
        medicamentos: pedido.medicamentos,
    });

    return new Promise((resolve, reject) => {
        objPedido.save(objPedido, (err, data) => {
            if (err) reject(err);
            console.log(data);
            resolve(data);
        });
    });
};


var getPedidoByDni = async(req, res = response) => {
    const { dni } = req.params;
    const pedidoDni = await Pedido.find({ dni });
    res.json(pedidoDni);
    console.log(pedidoDni);

}
var deletePedido = async(req, res = response) => {
    const { id } = req.params;
    const deletePedido = await Pedido.findByIdAndDelete(id);
    if (deletePedido != false) {
        res.json("Pedido Eliminado");
    } else {
        res.json(`El id del pedido ${id} no existe en la BD`);
    }
}

var updatePedido = (id, pedido) => {

    console.log(pedido, ' [pedido]');

    return new Promise((resolve, reject) => {
        Pedido.findByIdAndUpdate(id, pedido, (err, pedidos) => {

            if (err) {
                reject(err);
            }
            resolve(pedidos);
        });
    });
};


var obtenerTotalPedidos = () => {
    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };
    const [total, pedidos] = new Promise((resolve, reject) => {
        modelpedido.countDocuments(query),
            modelpedido.find(query).skip(Number(desde)).limit(Number(limite).exc((err) => {
                if (err) { reject(err) }
                console.log(pedidos);
                resolve(total, pedidos);
            }), )
    })
}



module.exports = {
    createPedido,
    getPedidoByDni,
    obtenerTotalPedidos,
    deletePedido,
    getPedidos,
    updatePedido
}

// var getPedidoByDni = (dni) => {
//     return new Promise((resolve, reject) => {
//         Pedido.findOne(dni).exec((err, pedido) => {
//             console.log(dni);
//             if (err) {
//                 reject(err);
//             }
//             console.log(pedido);
//             resolve(pedido);
//         })
//     });
// }