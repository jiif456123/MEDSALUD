const router = require('express').Router();
const equiposMedicosController = require('../equiposMedicos/controller/equiposMedicos.controller');
const ejemplarEquiposMedicosController = require('../ejemplarEquipoMedico/controller/ejemplarEquipoMedico.controller');

router.use('/EquiposMedicos', equiposMedicosController);
router.use('/EjemplarEquiposMedicos', ejemplarEquiposMedicosController);

module.exports = router;