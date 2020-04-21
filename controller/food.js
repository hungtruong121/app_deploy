const ProductSchema = require('../models/products');
// @desc    API get material food following price [method:GET]
// @route   /api/foods/?type=?&price=?

exports.getFoods = async (req, res, next) => {
    const {type, price} = req.query;
    if(type && price){
        try {
            const foods = await ProductSchema.find({type: type, price: {$lte: price}}).limit(20);
            res.status(200).json({
                success: true,
                data: foods
            });
        } catch (error) {
            console.log(error);
        }
    } else {
        res.status(200).json({success: false});
    }
};

// @desc    API get menu food
// @route   /api/foods/menu

exports.getFoodsMenu = async (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
};

// @desc    API get menu special food
// route    /api/foods/menu/special

exports.getSpecialMenu = async (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
};

// @desc    API get food for going to market
// route    /api/foods/market

exports.getFoodsMarket = async (req, res, next) => {
    try {
        const foods = await ProductSchema.find({$or: [{type:'protein'},{type:'mineral'}]}).limit(20);
        res.status(200).json({
            success: true,
            data: foods,
        });
    } catch (error) {
        
    }
};

// @desc API return a menu with material food choosen
// /api/foods/ingredient/?select=?,?

exports.getHintMenu = async (req, res, next) => {
    try {
        const ids = req.query.select.split(',');
        const foods = await ProductSchema.find({$or: [{_id: ids}]});
        res.status(200).json({selected: foods});
    } catch (error) {
        
    }  
};

// @desc    Update daily
// @route   /api/foods/update-daily
const lotteData = require('../middleware/lotte');
exports.updateDaily = async (req, res, next) => {
    try {
        const newFood = await lotteData();
        if(newFood){
            await ProductSchema.deleteMany();
            await ProductSchema.insertMany(newFood);
            res.json({success: true, data: newFood});
        }
    } catch (error) {
        
    }
};

// @desc API test
// /api/foods/test
exports.test = async (req, res, next) => {
    try {
        const data = await ProductSchema.find({type: 'glucid'});
        res.json({data: data});
    } catch (error) {
        
    }
};

