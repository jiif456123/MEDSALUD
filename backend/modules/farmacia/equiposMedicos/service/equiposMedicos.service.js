var equiposMedicosModel = require('../model/equiposMedicos.model');
var ejemplarEquipoMedico = require('../../ejemplarEquipoMedico/model/ejemplarEquipoMedico.model');

const equiposMedicosService = {};

equiposMedicosService.getEquiposMedicos = async(req, res) => {
    const equiposMedicos = await equiposMedicosModel.find();
    res.json(equiposMedicos);
};
equiposMedicosService.getEquipoMedicoId = async(req, res) => {
    const equiposMedicos = await equiposMedicosModel.findById(req.params.id);
    res.json(equiposMedicos);
};
equiposMedicosService.createEquiposMedicos = async(req, res) => {
    const equipomedico = new equiposMedicosModel({
        nombre: req.body.nombre,
        fabricante: req.body.fabricante,
        especialidad: req.body.especialidad,
        caracteristicas: req.body.caracteristicas,
        cantidad: req.body.cantidad,
        disponible: req.body.disponible,
        noDisponible: req.body.noDisponible
    });
    await equipomedico.save();
    res.json({ status: "Equipo Medico agregado" });
};
equiposMedicosService.updateEquiposMedicos = (id, equipoMedico) => {

    console.log(equipoMedico, ' [equipoMedico]');

    return new Promise((resolve, reject) => {
        equiposMedicosModel.findByIdAndUpdate(id, equipoMedico, (err, equiposMedicos) => {

            if (err) {
                reject(err);
            }
            resolve(equiposMedicos);
        });
    });
};
equiposMedicosService.getLastInsertedEquipoMedico = async(req, res) => {
    const equipoMedico = await equiposMedicosModel.find({}).sort({ _id: -1 }).limit(1);
    res.json(equipoMedico);
};
module.exports = equiposMedicosService;