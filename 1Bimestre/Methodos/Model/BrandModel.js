const mongoose = require('mongoose');

const BrandSchema =  new mongoose.Schema({
    nome : String,
    thumb : String
});

module.exports = mongoose.model('brand', BrandSchema)