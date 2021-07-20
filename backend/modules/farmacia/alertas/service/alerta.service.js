//requerimos el esquema qu model de la BD mongo
var alertaModel = require('../model/alerta.model');

var getAlerta = () => {

    return new Promise((resolve, reject) => {
        alertaModel.find().exec((err, listarAlerta) => {
            if (err) reject(err);
            resolve(listarAlerta);
        });
    });
};
var n = 0;
var createAlerta = (alerta) => {

    let objAlerta = new alertaModel({
        titulo: alerta.titulo,
        mensaje: alerta.mensaje
    });

    return new Promise((resolve, reject) => {
        objAlerta.save((err, alertas) => {
            if (err) reject(err);
            resolve(alertas);
        });
    });
};


module.exports = {
    getAlerta,
    createAlerta,
    
};