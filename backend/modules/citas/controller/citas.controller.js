const router = require('express').Router();
const pacienteController = require('../paciente/paciente.controller')
const especialidadController = require('../../citas/Especialidad/gestespecialidad.controller');

router.use('/paciente', pacienteController);
router.use('/gestionar-especialidad', especialidadController);
module.exports = router;