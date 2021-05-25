const citasmodel = require("../../../models/citas.model");
const pacientemodel = citasmodel.modelPaciente
let crear = (paciente) => {
    let newpaciente = new pacientemodel({
        nombre: paciente.nombre,
        apellidoPaterno: paciente.apellidoPaterno,
        apellidoMaterno: paciente.apellidoMaterno,
        dni: paciente.dni,
        celular: paciente.celular,
        email: paciente.email,
        fechadeNacimineto: paciente.fechadeNacimineto,
        direccion: paciente.direccion,
        estado: paciente.estado,

    })
    return new Promise((resolve, reject) => {
        newpaciente.save(newpaciente, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

var listar = () => {
    return new Promise((resolve, reject) => {
        pacientemodel.find({}).exec((err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}
var listarpaciente = (id) => {

    return new Promise((resolve, reject) => {

        pacientemodel.findById(id)
            .exec((err, newpaciente) => {
                if (err) reject(err);

                console.log(newpaciente)
                resolve(newpaciente);
            })

    });
};
var modificarpaciente = (id, newpaciente) => {

    console.log(newpaciente, ' [newpaciente]');

    return new Promise((resolve, reject) => {
        Visita.findByIdAndUpdate(id, newpaciente, (err, pacientes) => {

            if (err) {
                reject(err);
            }
            resolve(pacientes);
        });
    });
};
var eliminarpaciente = (id) => {
    return new Promise((resolve, reject) => {
        Visita.remove({ _id: id }, (err, pacientes) => {
            if (err) { reject(err); }
            resolve(pacientes);
        })
    })
}
module.exports = {
    crear: crear,
    listar: listar,
    listarpaciente: listarpaciente,
    modificarpaciente: modificarpaciente,
    eliminarpaciente: eliminarpaciente
}