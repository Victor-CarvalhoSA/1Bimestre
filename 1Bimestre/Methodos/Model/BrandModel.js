const mongoose = require('mongoose');

const BrandSchema =  new mongoose.Schema({
    nome : String,
});

module.exports = mongoose.model('brand', BrandSchema)