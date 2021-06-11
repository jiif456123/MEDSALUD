const router = require('express').Router();
const pacienteController = require('../paciente/paciente.controller')
const historiaController = require('../historia/historia.controller')
const motivoController = require('../motivo/motivo.controller')
const cajaController = require('../caja/caja.controller')
const movimientoController = require('../movimientoCaja/movimientoCaja.controller')
const citaController = require('../cita/cita.controller');
const userController = require('../user/user.controller')

router.use('/paciente', pacienteController);
router.use('/motivo', motivoController);
router.use('/caja', cajaController);
router.use('/movimientoCaja', movimientoController);
router.use('/movimientoCaja', movimientoController);
router.use('/cita', citaController);
router.use('/historia', historiaController);
router.use('/user', userController);

module.exports = router;