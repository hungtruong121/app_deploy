const DishSchema = require('../models/dishes');
const MenuSchema = require('../models/menu');

// @desc    API get dishes
// @route   /api/dishes/

exports.getDishes = async (req, res, next) => {
    try {
        let menu = await MenuSchema.find();
        
        res.status(200).json({success: true, data: menu});
    } catch (error) {
        
    }
};