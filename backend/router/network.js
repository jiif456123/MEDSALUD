const userController = require('../components/User/controller/user.controller');
const caterogiaController = require('../components/Categoria/controller/categoria.controller');
const rutas = function(app) {
    app.use('/user', userController)
    app.use('/categoria', caterogiaController)
}

module.exports = rutas;