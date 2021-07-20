const mongoose = require('mongoose');
var Schema = new mongoose.Schema({
    user: String,
    contra: String,
}, {
    versionKey: false
});

const usuario = mongoose.model('user', Schema);
module.exports = usuario;