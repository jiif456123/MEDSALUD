var ejemplarEquipoMedicoModel = require('../model/ejemplarEquipoMedico.model');

//Objeto
const ejemplarEquipoMedicoService = {};

ejemplarEquipoMedicoService.getEjemplarEquipoMedico = async(req, res) => {
    let id = req.params.id;
    ejemplarEquipoMedicoModel
        .find({ idEquipoMedico: id })
        .populate("idEquipoMedico")
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
ejemplarEquipoMedicoService.getMovimientoE = async(req, res) => {
    ejemplarEquipoMedicoModel.find().populate("idEquipoMedico")
    .then(equipoMedico => {
            res.json(equipoMedico)
        })
};
ejemplarEquipoMedicoService.Filtro = async(req, res, next) => {
    
    const Modo = req.params.Modo;
    const Tipo = req.params.Tipo;
    //const Fecha = req.params.Fecha;
    const fechaInicial = req.params.fechaInicial;
    const fechaFinal = req.params.fechaFinal;
    
    if(Modo=='tipo' && fechaInicial=='null' && fechaFinal=='null'){
        const equipos = await ejemplarEquipoMedicoModel.find({tipo:Tipo}).populate("idEquipoMedico");

    res.json(equipos);
    }
    else if(Modo=='fecha')
    {
            try {
               const reg = await ejemplarEquipoMedicoModel.find({
                  fecha: {
                     $gte: fechaInicial,
                     $lt: fechaFinal
                  }
               }).populate('idEquipoMedico');
         
               if (!reg) {
                  res.status(404).send({
                     message: 'El registro no existe'
                  });
               } else {
                  res.status(200).json(reg);
               }
            } catch (e) {
               res.status(500).send({
                  message: 'Ocurrio un error'
               });
               next(e);
            }
         
    }

};
module.exports = ejemplarEquipoMedicoService;