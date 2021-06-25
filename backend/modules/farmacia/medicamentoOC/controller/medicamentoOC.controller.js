const gestionarMedicamentoOCService = require('../service/medicamentoOC.service');
var medicamentoOCModel = require('../model/medicamentoOC.model');

const router = require('express').Router();

router.get('/', gestionarMedicamentoOCService.getMedicamentoOC);

router.post('/', gestionarMedicamentoOCService.createMedicamentoOC);

router.get('/getMedicamentoOC/:codigo', gestionarMedicamentoOCService.getMedicamentoOCByCodigo);


router.delete('/dropData/', gestionarMedicamentoOCService.dropDocuments);

//router.delete('/eleminarMOC/:codigo', gestionarMedicamentoOCService.deleteMedicamentoOC);
router.delete('/:id', gestionarMedicamentoOCService.deleteOneMedicamentoOC);

router.route("/eleminarMOC/:codigo").delete(function(req, res) {
    medicamentoOCModel.deleteMany({ codigo: req.params.codigo }, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

module.exports = router;