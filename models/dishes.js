const mongoose = require('mongoose');

const DishSchema = new mongoose.Schema({
    name: String,
    main_ingredient: String,
    add_ingredient: String,
    menu: Number,
    img: String,
    url: String,
});

module.exports = mongoose.model('Dishes', DishSchema);