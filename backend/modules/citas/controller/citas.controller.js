const router = require('express').Router();
const pacienteController = require('../paciente/paciente.controller')
const historiaController = require('../historia/historia.controller')
const userController = require('../user/user.controller')
router.use('/paciente', pacienteController);
router.use('/historia', historiaController);
router.use('/user', userController);
module.exports = router;