const ejemplarEquipoMedicoService = require('../service/ejemplarEquipoMedico.service');
const router = require('express').Router();
const http = require('../../../../utils/http');
const code = require('../../../../utils/status');
const ejemplarservicio = require('../service/ejemplarmio.service');

router.get('/:id', ejemplarEquipoMedicoService.getEjemplarEquipoMedico);
router.get('/', ejemplarEquipoMedicoService.getMovimientoE);
router.post('/', ejemplarEquipoMedicoService.createEjemplarEquipoMedico);
router.get('/Filtro/:Modo/:Tipo/:fechaInicial/:fechaFinal', ejemplarEquipoMedicoService.Filtro);
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