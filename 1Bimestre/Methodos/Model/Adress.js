const mongoose = require('mongoose');

const AdressSchema =  new mongoose.Schema({
    cep : String,
    logradouro : String,
    bairro : String, 
    localidade : String,
    uf  : String,
    ibge  : String,
    gia  : String,
    user_id  : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
});

module.exports = mongoose.model('Adress', AdressSchema)