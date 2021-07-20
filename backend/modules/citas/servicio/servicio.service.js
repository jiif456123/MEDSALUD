const citasmodel = require("../../../models/citas.model");
const serviciomodel = citasmodel.modelServicio

let crear = (servcio) => {

    let newservicio = new serviciomodel({
        titulo: servcio.titulo,
        imagen: servcio.titulo,
        descripcion: servcio.descripcion

    })
    console.log(newservicio);
    return new Promise((resolve, reject) => {
        newservicio.save(newservicio, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}


var listar = () => {
    return new Promise((resolve, reject) => {
        serviciomodel.find({}).exec((err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

var listarservicio = (id) => {

    return new Promise((resolve, reject) => {

        serviciomodel.findById(id)
            .exec((err, newservicio) => {
                if (err) reject(err);

                console.log(newservicio)
                resolve(newservicio);
            })

    });
};

var modificarServicio = (id, newservicio) => {

    return new Promise((resolve, reject) => {
        newservicio.findByIdAndUpdate(id, newservicio, (err, servicios) => {

            if (err) {
                console.log
                reject(err);
            }
            resolve(servicios);
        });
    });
};

var eliminarServicio = (id) => {
    return new Promise((resolve, reject) => {
        serviciomodel.remove({ _id: id }, (err, servicios) => {
            if (err) { reject(err); }
            resolve(servicios);
        })
    })
}

module.exports = {
    crear: crear,
    listar: listar,
    listarservicio: listarservicio,
    modificarServicio: modificarServicio,
    eliminarServicio: eliminarServicio
}