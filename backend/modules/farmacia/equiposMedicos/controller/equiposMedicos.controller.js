const equiposMedicoService = require('../service/equiposMedicos.service');
const router = require('express').Router();
const http = require('../../../../utils/http');
const code = require('../../../../utils/status');

router.get('/', equiposMedicoService.getEquiposMedicos);
router.get('/LastDoc', equiposMedicoService.getLastInsertedEquipoMedico);
router.get('/:id', equiposMedicoService.getEquipoMedicoId);
router.post('/', equiposMedicoService.createEquiposMedicos);
router.put('/:id', (req, res) => {
    let id = req.params.id;
    let equipomedico = req.body;
    equiposMedicoService.updateEquiposMedicos(id, equipomedico).then((data) => {
        http.ok(req, res, code.status.Ok.code, data);
    }).catch((error) => {
        http.err(req, res, code.status.Internal_Server_Error.code, error, error)
    });
});
module.exports = router;