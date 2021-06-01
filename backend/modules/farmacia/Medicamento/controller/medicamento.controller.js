const medicamentoService = require('../service/medicamento.service');
const http = require('../../../../utils/http');
const code = require('../../../../utils/status');
const router = require('express').Router();

router.get('/', (req,res)=>{
    medicamentoService.getMedicamento().then((data)=>{
        http.ok(req, res, code.status.Ok.code, data);
    }).catch((error)=>{
        http.err(req, res, code.status.Internal_Server_Error.code, error, error);
    })
});
router.post('/', (req,res)=>{
    let medicamento = req.body;
    medicamentoService.createMedicamento(medicamento).then((data)=>{
        http.ok(req, res, code.status.Ok.code, data);
    }).catch((error)=>{
        http.err(req, res, code.status.Internal_Server_Error.code, error, error);
    })
});

router.put('/:id', (req, res) => {

    let id = req.params.id;
    let medicamento = req.body;

    console.log(id);

    medicamentoService.updateMedicamento(id, medicamento).then((data) => {
        http.ok(req, res, code.status.Ok.code, data);
    }).catch((error) => {
        http.err(req, res, code.status.Internal_Server_Error.code, error, error)
    });
});

/*router.put('/actualizar/:id', (req, res)=>{
    let id = req.params['id'];
    let data={
        nombre: req.body.nombre,
        disponibilidad: req.body.disponibilidad,    
        presentacion: req.body.presentacion,
        precioUnitario:req.body.precioUnitario,
        marca: req.body.marca,
        categoria: req.body.categoria,
        ubicacion: req.body.ubicacion,
        stockMin: req.body.stockMin,
        stockMax: req.body.stockMax,
        detalles: req.body.detalles 
    }
    medicamentoService.updateMedicamento(id,data).then((data)=>{
        http.ok(req, res, code.status.Ok.code, data);
    }).catch((error)=>{
        http.err(req, res, code.status.Internal_Server_Error.code, error, error);
    });
} );*/

module.exports = router;