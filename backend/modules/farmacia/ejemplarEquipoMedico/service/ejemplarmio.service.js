var ejemplarEquipoMedicoModel = require('../model/ejemplarEquipoMedico.model');

var asignarjemplar = (id, equipoMedico) => {

    return new Promise((resolve, reject) => {

        ejemplarEquipoMedicoModel.findByIdAndUpdate(id, equipoMedico, (err, equiposmedicos) => {
            if (err) { reject(err); }
            resolve(equiposmedicos);
        });
    });
}
module.exports = {
    asignar: asignarjemplar,
};