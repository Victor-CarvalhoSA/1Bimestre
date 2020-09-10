const mongoose = require('mongoose');

const NotaSchema =  new mongoose.Schema({
    bimestre1 : Number,
    bimestre2 : Number,
    bimestre3 : Number,
    bimestre4 : Number,
    materia_id  : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Materia'
    },
    user_id  : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
});

module.exports = mongoose.model('Nota', NotaSchema)