const ejemplarEquipoMedicoService = require('../service/ejemplarEquipoMedico.service');
const router = require('express').Router();
const http = require('../../../../utils/http');
const code = require('../../../../utils/status');

router.get('/:id', ejemplarEquipoMedicoService.getEjemplarEquipoMedico);
router.post('/', ejemplarEquipoMedicoService.createEjemplarEquipoMedico);
router.put('/:id', (req, res) => {
    let id = req.params.id;
    let ejemplar = req.body;
    ejemplarEquipoMedicoService.updateEjemplarEquipoMedico(id, ejemplar).then((data) => {
        http.ok(req, res, code.status.Ok.code, data);
    }).catch((error) => {
        http.err(req, res, code.status.Internal_Server_Error.code, error, error)
    });
});

module.exports = router;