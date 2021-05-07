var User = require('../model/user.model');


var listarUsuarios = () => {

    let query = {
        estado: { $ne: 3 }
    };

    return new Promise((resolve, reject) => {
        User.find(query).exec((err, listaUsuarios) => {
            if (err) reject(err);
            resolve(listaUsuarios);
        });
    });
};

var registarUsuario = (usuario) => {

    let objUsuario = new User({
        role: usuario.role,
        nombre: usuario.nombre,
        apellidoPaterno: usuario.apellidoPaterno,
        apellidoMaterno: usuario.apellidoMaterno,
        username: usuario.username,
        password: usuario.password,
        nombre: usuario.nombre,
        celular: usuario.celular,
        foto: usuario.foto,
        dni: usuario.dni,
    });

    return new Promise((resolve, reject) => {
        objUsuario.save((err, usuario) => {
            if (err) reject(err);
            resolve(usuario);
        });
    });
};


var modificarUsuarios = (id, usuario) => {

    console.log(usuario, ' [usuario]');

    return new Promise((resolve, reject) => {
        User.findByIdAndUpdate(id, usuario, (err, usuarios) => {

            if (err) {
                reject(err);
            }
            resolve(usuarios);
        });
    });
};

module.exports = {
    listar: listarUsuarios,
    registrar: registarUsuario,
    modificar: modificarUsuarios
};