var Lotes = require('../../../farmacia/Inventario/model/lote.model');

var listarlotes = () => {

    return new Promise((resolve, reject) => {
        Lotes.find()
            .populate('medicamento')
            .exec((err, listarlotes) => {
                if (err) { reject(err); }
                resolve(listarlotes);
            });

    });
}

var listarlotesId = (id) => {

    return new Promise((resolve, reject) => {

        Lotes.findById(id)
            .exec((err, lotes) => {
                if (err) reject(err);

                console.log(lotes)
                resolve(lotes);
            })

    });
};

var registarLote = (lotes) => {

    let objLote = new Lotes({
        medicamento: lotes.medicamento,
        cxl: lotes.cxl,
        Fecha: lotes.Fecha,
    });

    return new Promise((resolve, reject) => {
        objLote.save(objLote, (err, lotes) => {
            if (err) reject(err);
            resolve(lotes);
        });
    });
};

module.exports = {
    listar: listarlotes,
    registrar: registarLote,
    listarID: listarlotesId,

};