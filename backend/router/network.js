const citasController = require('../modules/citas/controller/citas.controller');
const citasController = require('../modules/citas/controller/citas.controller');

const rutas = function(app) {
    app.use('/citas', citasController)
    app.use('/farmacia', citasController)
}

module.exports = rutas;