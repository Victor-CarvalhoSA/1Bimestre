const mongoose = require('mongoose');

const vehicleSchema =  new mongoose.Schema({
    nome : String,
    motor : String,
    portas : Number,
    combustivel : String,
    ano_fab : Number,
    ano_mod : Number,
    placa : String
});

module.exports = mongoose.model('vehicle', vehicleSchema)