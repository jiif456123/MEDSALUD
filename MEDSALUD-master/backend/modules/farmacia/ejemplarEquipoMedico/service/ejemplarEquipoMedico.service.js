var ejemplarEquipoMedicoModel = require('../model/ejemplarEquipoMedico.model');

//Objeto
const ejemplarEquipoMedicoService = {};

ejemplarEquipoMedicoService.getEjemplarEquipoMedico = async(req, res) => {
    let id = req.params.id;
    ejemplarEquipoMedicoModel
        .find({ idEquipoMedico: id })
        //.populate("idEquipoMedico")
        .then(equipoMedico => {
            res.json(equipoMedico)
        })
};
ejemplarEquipoMedicoService.createEjemplarEquipoMedico = async(req, res) => {
    const ejemplarEquipoMedico = new ejemplarEquipoMedicoModel({
        equipoMedico: req.body.idEquipoMedico,
        ubicacion: req.body.ubicacion,
        estado: req.body.estado,
        solicitante: req.body.solicitante,
        fechaEntrega: req.body.fechaEntrega,
        fechaDevolucion: req.body.fechaDevolucion
    });

    await ejemplarEquipoMedico.save();
    res.json({ status: "Ejemplar Agregado." });
};
ejemplarEquipoMedicoService.updateEjemplarEquipoMedico = (id, ejemplar) => {

    console.log(ejemplar, '[ejemplar]');

    return new Promise((resolve, reject) => {
        ejemplarEquipoMedicoModel.findByIdAndUpdate(id, ejemplar, (err, ejemplares) => {
            if (err) {
                reject(err);
            }
            resolve(ejemplares);
        });
    });

};
module.exports = ejemplarEquipoMedicoService;