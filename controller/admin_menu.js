const MenuSchema = require('../models/menu');
const DishSchema = require('../models/dishes');

// test

exports.test = async (req, res, next) => {
    try {
        const menu = await MenuSchema.find();
        res.status(200).json({data: menu});
    } catch (error) {
        
    }
};