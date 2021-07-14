const router = require('express').Router();
const pacienteController = require('../paciente/paciente.controller')
const historiaController = require('../historia/historia.controller')
const motivoController = require('../motivo/motivo.controller')
const cajaController = require('../caja/caja.controller')
const movimientoController = require('../movimientoCaja/movimientoCaja.controller')
const citaController = require('../cita/cita.controller');
const eventoController = require('../evento/evento.controller')
const servicioController = require('../servicio/servicio.controller')
const userController = require('../user/user.controller')
const especialidadController = require('../../citas/Especialidad/gestespecialidad.controller');

router.use('/paciente', pacienteController);
router.use('/motivo', motivoController);
router.use('/caja', cajaController);
router.use('/movimientoCaja', movimientoController);
router.use('/cita', citaController);
router.use('/historia', historiaController);
router.use('/evento', eventoController);
router.use('/servicio', servicioController);
router.use('/user', userController);
router.use('/gestionar-especialidad', especialidadController);

module.exports = router;