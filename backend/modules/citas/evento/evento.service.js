const citasmodel = require("../../../models/citas.model");
const eventomodel = citasmodel.modelEvento

let crear = (evento) => {
    let fechaInicio = new Date(evento.fechaInicio)
    let fechaFin = new Date(evento.fechaFin)
    let newevento = new eventomodel({
        titulo: evento.titulo,
        fechaInicio: fechaInicio,
        fechaFin: fechaFin,
        celular: evento.celular,
        descripcion: evento.descripcion

    })
    console.log(newevento);
    return new Promise((resolve, reject) => {
        newevento.save(newevento, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

var listar = () => {
    return new Promise((resolve, reject) => {
        eventomodel.find({}).exec((err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

var listarevento = (id) => {

    return new Promise((resolve, reject) => {

        eventomodel.findById(id)
            .exec((err, newevento) => {
                if (err) reject(err);

                console.log(newevento)
                resolve(newevento);
            })

    });
};
var modificarEvento = (id, newevento) => {

    if (newevento.fechaInicio) {
        newevento.fechaInicio = new Date(newevento.fechaInicio);
    }

    return new Promise((resolve, reject) => {
        eventomodel.findByIdAndUpdate(id, newevento, (err, eventos) => {

            if (err) {
                console.log
                reject(err);
            }
            resolve(eventos);
        });
    });
};
var eliminarEvento = (id) => {
    return new Promise((resolve, reject) => {
        eventomodel.remove({ _id: id }, (err, eventos) => {
            if (err) { reject(err); }
            resolve(eventos);
        })
    })
}
module.exports = {
    crear: crear,
    listar: listar,
    listarevento: listarevento,
    modificarEvento: modificarEvento,
    eliminarEvento: eliminarEvento
}