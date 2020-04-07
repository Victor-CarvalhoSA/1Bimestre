const mongoose = require('mongoose');

const ModelSchema =  new mongoose.Schema({
    nome : String,
});

module.exports = mongoose.model('model', ModelSchema)