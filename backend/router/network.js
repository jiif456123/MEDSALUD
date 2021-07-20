const citasController = require('../modules/citas/controller/citas.controller');
const farmaciaController = require('../modules/farmacia/controller/farmacia.controller');
const loginController = require('../modules/login/controller/login.controller');


const rutas = function(app) {
    app.use('/citas', citasController)
    app.use('/farmacia', farmaciaController)
    app.use('/login', loginController)
}

module.exports = rutas;