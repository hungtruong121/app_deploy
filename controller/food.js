const ProductSchema = require('../models/products');
const MenuSchema = require('../models/menu');
const randomFunc = require('../middleware/random');
const dishFunc = require('../middleware/dish');
const DishSchema = require('../models/dishes');
// @desc    API get material food following price [method:GET]
// @route   /api/foods/?type=?&price=?

exports.getFoods = async (req, res, next) => {
    const {
        page,
        type,
        price
    } = req.query;
    try {
        let foods;
        let skipNumber = (page - 1) * 5;
        let count;
        if (!price && type) {
            count = await ProductSchema.find({
                type: type
            }).countDocuments();
            console.log(count);
            if (skipNumber > count) {
                skipNumber = count - 1;
            }
            foods = await ProductSchema.find({
                type: type
            }).skip(skipNumber).limit(5);
        }
        if (price && type) {
            count = await ProductSchema.find({
                type: type,
                price: {
                    $lte: price
                }
            }).countDocuments();
            console.log(count);
            if (skipNumber > count) {
                skipNumber = count - 1;
            }
            foods = await ProductSchema.find({
                type: type,
                price: {
                    $lte: price
                }
            }).skip(skipNumber).limit(5);
        }
        if (!price && !type) {
            res.status(200).json({
                success: false
            });
        }
        res.status(200).json({
            success: true,
            data: foods
        });
    } catch (error) {

    }
};

// @desc    API get menu food
// @route   /api/foods/menu

exports.getFoodsMenu = async (req, res, next) => {
    try {
        const page = req.query;
        let skipNumber = (page - 1) * 5;
        const count = await MenuSchema.countDocuments();
        if (skipNumber > count) skipNumber = count - 1;
        const menu = await MenuSchema.find().skip(skipNumber).limit(5);
        res.status(200).json({
            success: true,
            data: menu
        });
    } catch (error) {

    }
};

// @desc    API get food of a menu
// @route   /api/foods/menu/:key

exports.getDishesinMenu = async (req, res, next) => {
    try {
        const {
            key
        } = req.params;
        const dishes = await DishSchema.find({
            menu: key
        });
        res.status(200).json({
            success: true,
            data: dishes
        });
    } catch (error) {

    }
};

// @desc    API get menu special food
// route    /api/foods/special/menu

exports.getSpecialMenu = async (req, res, next) => {
    try {
        const page = req.query;
        let skipNumber = (page - 1) * 5;
        const count = await MenuSchema.find({
            isSpecial: true
        }).countDocuments();
        if (skipNumber > count) skipNumber = count - 1;
        const specialMenu = await MenuSchema.find({
            isSpecial: true
        }).skip(skipNumber).limit(5);
        res.status(200).json({
            success: true,
            data: specialMenu
        });
    } catch (error) {

    }
};

// @desc    API get food for going to market
// route    /api/foods/market

exports.getFoodsMarket = async (req, res, next) => {
    try {
        const page = req.query;
        let skipNumber = (page - 1) * 10;
        const count = await ProductSchema.countDocuments();
        if(skipNumber > count) skipNumber = count - 1;
        const foods = await ProductSchema.find().skip(skipNumber).limit(20)
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
        const foods = await ProductSchema.find({
            $or: [{
                _id: ids
            }]
        });
        const menus = await DishSchema.find();
        const keyMenu = dishFunc(foods, menus);
        const menusHint = await MenuSchema.find({
            $or: [{
                key: keyMenu
            }]
        });
        res.status(200).json({
            success: true,
            data: menusHint
        });
    } catch (error) {

    }
};
