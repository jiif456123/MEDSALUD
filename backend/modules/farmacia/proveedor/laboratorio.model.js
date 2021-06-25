const mongoose = require('mongoose');

var Schema2 = new mongoose.Schema({
    nombreLab:String
},{
    versionKey:false
})

const laboratorio = mongoose.model('Lab',Schema2);

module.exports = laboratorio;
