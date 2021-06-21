const citasController = require('../modules/citas/controller/citas.controller');
const farmaciaController = require('../modules/farmacia/controller/farmacia.controller');

const rutas = function(app) {
    app.use('/citas', citasController)
    app.use('/farmacia', farmaciaController)
    
}

module.exports = rutas;