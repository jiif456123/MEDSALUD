var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movimientos = new Schema({
    id:{type: String},
    
}, {
    versionKey: false
});

var model = mongoose.model('movimientos', movimientos);
module.exports = model;