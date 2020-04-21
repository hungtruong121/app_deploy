const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    type: String,
    img: String,
    id_nutrition: String,
});

module.exports = mongoose.model('Products', ProductsSchema);