const router = require('express').Router();
const pacienteController = require('../paciente/paciente.controller')
const historiaController = require('../historia/historia.controller')

router.use('/paciente', pacienteController);
router.use('/historia', historiaController);
module.exports = router;